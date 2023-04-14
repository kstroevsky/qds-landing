import React from 'react';

import BannerBlock from './sections/bannerBlock/BannerBlock';
import Block2 from "./sections/block2/Block2";
import Block3 from "./sections/block3/Block3";
import Block4 from "./sections/block4/Block4";
import FormBlock from "./sections/formBlock/FormBlock";

import './App.css';


function App() {
  return (
    <div className='App'>
        <BannerBlock/>
        <Block2/>
        <Block3/>
        {/*<Block4/>*/}
        <FormBlock/>
    </div>
  );
}

export default App;
