import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid/grid';

const Review = ({ set, head, column, columnClass, headClass, libraryClass }) => {
  return (
    <div className="flex">
      <div className={columnClass}>
        {column.map((item, index) => (
          <p key={index} className="library__column-item">
            {item}
          </p>
        ))}
      </div>
      <div>
        <div className={headClass}>
          {head.map((item, index) => (
            <p key={index} className="library__column-item">
              {item}
            </p>
          ))}
        </div>
        <div className={libraryClass}>
          {set.map((item, index) => {
            return <Grid key={index} index={index} cardData={item} />;
          })}
        </div>
      </div>
    </div>
  );
};


Review.propTypes = {
  set: PropTypes.array,
  head: PropTypes.array,
  column: PropTypes.array,
  columnClass: PropTypes.string,
  headClass: PropTypes.string,
  libraryClass: PropTypes.string
};

export default Review;
