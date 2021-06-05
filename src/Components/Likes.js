import React from 'react';

const Likes = ({ countHandler }) => {
  return (
    <div>
      <button className='likes' onClick={countHandler}>
        <i class='fas fa-heart'></i>
      </button>
    </div>
  );
};

export default Likes;
