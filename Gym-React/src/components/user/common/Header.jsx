import React, { useState } from 'react'
import HeaderTop from './user-headers/HeaderTop';
import HeaderBottom from './user-headers/HeaderBottom';
import HeaderCenter from './user-headers/HeaderCenter';
import PopupMoblie from './user-headers/PopupMoblie';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleIconClick = () => {
      setShowPopup(!showPopup);
  };
  return (
      <>
          <HeaderTop />
          <HeaderCenter handleIconClick={handleIconClick} />
          <HeaderBottom />
          {showPopup && <PopupMoblie showPopup={showPopup} />}
      </>
  );
}

export default Header