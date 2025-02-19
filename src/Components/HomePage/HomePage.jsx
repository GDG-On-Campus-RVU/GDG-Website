import React, { useState, useEffect } from 'react';
import FullPageScroll from './FullPageScroll.jsx';
import TemplatePage from '../TemplatePage/TemplatePage.jsx';

function HomePage(){

    return (
        <>
        <TemplatePage >
                <FullPageScroll/>
        </TemplatePage>
        </>
        
    );
};

export default HomePage;
