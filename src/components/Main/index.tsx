import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { Library } from '../../store/library/types';
import { setHiragana, setKatakana } from '../../store/library/actions';

interface MainProps {
  library: Library;
  setHiragana: typeof setHiragana;
  setKatakana: typeof setKatakana;
}

const Main: React.FC<MainProps> = props => {
  console.log(props);
  return (
    <div>
      <button onClick={() => setHiragana()}>Hiragana</button>
      <button onClick={() => setKatakana()}>Katakana</button>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  library: state.library,
});

export default connect(mapStateToProps, { setHiragana, setKatakana })(Main);
