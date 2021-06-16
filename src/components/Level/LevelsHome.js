import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LevelCard from './LevelCard';

const LevelsHome = () => {
  const levels = useSelector((state) => state.levelReducer.levels);
  return (
    <section
      id='levelhome'
      class='popular_courses'
      style={{ justifyContent: 'space-around', backgroundColor: '#cfd2d78c' }}
    >
      <div class='container-fluid'>
        <div class='row col-12 col-sm-12 col-md-12 col-lg-12'>
          {console.log(levels)}
          {levels &&
            levels.map((level) => <LevelCard level={level} key={level._id} />)}
        </div>
      </div>
    </section>
  );
};

export default LevelsHome;
