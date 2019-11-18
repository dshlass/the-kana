import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/card';

const Study = ({ set, libraryClass }) => {
  return (
    <div className={libraryClass}>
      {set.map(item => {
        return <Card key={item.id} cardData={item} />;
      })}
    </div>
  );
};

Study.propTypes = {
  set: PropTypes.array,
  libraryClass: PropTypes.string
};

export default Study;
