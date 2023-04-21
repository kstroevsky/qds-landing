import React, {useEffect, useState} from 'react';

import { Element } from 'react-scroll';

import {useIsMobile} from "./hooks/UseIsMobile";

import Header from './sections/header/Header';
import About from "./sections/about/About";
import Advantages from "./sections/advantages/Advantages";
import Technologies from "./sections/technologies/Technologies";
import FormBlock from "./sections/formBlock/FormBlock";
import ThemesToggle from "./components/thema/ThemesToggle";
import FixHeader from "./components/fixHeader/FixHeader";

import './App.css';


function App() {
    const [showHeader, setShowHeader] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='App'>
            <Header/>
            <Element name={"about"}>
                <About/>
            </Element>
            <Advantages/>
            <Technologies/>
            <FormBlock/>
            {!isMobile && <ThemesToggle/>}
            <FixHeader showHeader={showHeader}/>
        </div>
    );
}

export default App;
