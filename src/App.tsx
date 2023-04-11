import React from 'react';

import BannerBlock from './sections/bannerBlock/BannerBlock';
import Block2 from "./sections/block2/Block2";
import Block3 from "./sections/block3/Block3";

import './App.css';


function App() {
  return (
    <div className='App'>
        <BannerBlock/>
        <Block2/>
        <Block3/>
    </div>
  );
}

export default App;
