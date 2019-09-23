const express = require('express')
const cors = require('cors')
const  fileSystem = require('fs')
const  path = require('path');

//files
const hiragana = require('./data/hiragana')
const katakana = require('./data/katakana')

const app = express()

//middleware
app.use(cors())
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get("/:characters", (req,res) => {

  if (req.params.characters === 'hg') {
    res.status(200).send(hiragana)
  }

  else if (req.params.characters === 'kk') {
    res.status(200).send(katakana)
  }

  else {
    res.status(404).send({
      message: "There is no Character sets for your request."
    })
  }

})




app.get("/:characters/:sound", (req,res) => {

  const filePath = path.join(__dirname, `./data/basic_sounds/${req.params.sound}.mp3`);

  if (req.params.characters === 'hg') {
    let hgFilter = hiragana.find(character => character.letter === req.params.sound)
    let toSend = {
      ...hgFilter,
      audio: filePath
    }
    res.status(200).send(toSend)
  }

  else if (req.params.characters === 'kk') {
    let kkFilter = katakana.find(character => character.letter === req.params.sound)
    let toSend = {
      ...kkFilter,
      audio: filePath
    }
    res.status(200).send(toSend)
  }

  else {
    res.status(404).send({
      message: "There is no Character sets for your request."
    })
  }

})


app.listen(8080, ()=> {
  console.log('listening on port 8080')
})