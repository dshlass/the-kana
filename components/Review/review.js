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
      <style global jsx>
        {`
        * {
          box-sizing: border-box
        }
          .flex {
            display: flex;
          }
          .library {
            width: 90%;
            margin: 0 auto 50px;
            display: grid;
            grid-template-columns: repeat(5, minmax(50px, 150px));
            grid-gap: 10px;
          }
          .library__column {
            display: grid;
            grid-template-rows: repeat(12, 50px);
            height: 50px;
            grid-gap: 10px;
            line-height: 2.25;
          }
          .library__column--dakuon {
            display: grid;
            grid-gap: 10px;
            line-height: 2.25;
            height: 50px;
            grid-template-rows: repeat(5, 50px);
          }
          .library__column--handakuon {
            display: grid;
            grid-gap: 10px;
            line-height: 2.25;
            height: 50px;
            grid-template-rows: repeat(2, 50px);
          }
          .library__column--yoon {
            display: grid;
            grid-template-rows: repeat(12, 50px);
            grid-gap: 10px;
            height: 50px;
            line-height: 2.25;
          }

          .library__column-item {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .library__row {
            width: 90%;
            display: grid;
            grid-template-columns: repeat(5, minmax(50px, 150px));
            grid-gap: 10px;
            margin: 0 auto 10px;
            height: 50px;
          }
          .library__row--yoon {
            width: 90%;
            display: grid;
            grid-gap: 10px;
            margin: 0 auto 10px;
            height: 50px;
            grid-template-columns: repeat(3, minmax(50px, 150px));
          }

          .library--yoon {
            width: 90%;
            margin: 0 auto 50px;
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(3, minmax(50px, 150px));
          }
        `}
      </style>
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
