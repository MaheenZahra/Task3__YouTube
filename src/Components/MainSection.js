import React from 'react';
import LeftPannelQuickAccess from './LeftPannelQuickAccess'
import PicturesContainer from './PicturesContainer';
import '../Styles/MainSection.scss';


const MainSection=()=> {
  
  return (
    <div className="MainSection">
        <LeftPannelQuickAccess/>
        <PicturesContainer/>
      </div>
    
  );
}

export default MainSection;