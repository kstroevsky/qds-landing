import React, {useEffect, useState} from 'react';

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
            if (window.scrollY > 100) {
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
            <About/>
            <Advantages/>
            <Technologies/>
            <FormBlock/>
            {!isMobile && <ThemesToggle/>}
            {showHeader && <FixHeader/>}
        </div>
    );
}

export default App;
