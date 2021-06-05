import React from 'react';
import profile from '../Image/profile.jpg';

const Header = () => {
  return (
    <div>
      <header className='profile'>
        <div className='img-container'>
          <img className='prof-img' src={profile} alt='pic' />
        </div>
      </header>
    </div>
  );
};

export default Header;
