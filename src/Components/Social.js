import React from 'react';

const Social = () => {
  return (
    <div>
      <a
        className='social'
        target='_blank'
        href='https://twitter.com/jpierrebizimana'
        rel='noreferrer'
      >
        <i class='fab fa-twitter'></i>
      </a>
      <a
        className='social'
        target='_blank'
        href='https://github.com/jpbiz'
        rel='noreferrer'
      >
        <i class='fab fa-github'></i>
      </a>
      <a
        className='social'
        target='_blank'
        href='https://www.linkedin.com/in/jpbizz/'
        rel='noreferrer'
      >
        <i class='fab fa-linkedin-in'></i>
      </a>
    </div>
  );
};

export default Social;
