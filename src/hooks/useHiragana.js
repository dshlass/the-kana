import { useStaticQuery, graphql } from "gatsby"

export const useHiragana = () => {
  const { allHiraganaJson } = useStaticQuery(graphql`
    query {
      allHiraganaJson {
        nodes {
          id
          column
          letter
          row
          set
          symbol
          table
        }
      }
    }
  `)
  return allHiraganaJson
}
