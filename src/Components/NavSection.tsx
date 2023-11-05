import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePaths } from '../App';
import '../../src/App.css';
import './NavSection.scss';

import HeaderComponent from './HeaderComponent';

export const NavSection = () => {
    let navigate = useNavigate();

    const handleTabSelect = (key: any) => {
        switch (key) {
            case 'home':
                navigate(RoutePaths.HOME);
                break;
            case 'artwork':
                navigate(RoutePaths.SKETCHESPAGE);
                break;
            case 'contact':
                navigate(RoutePaths.CONTACTPAGE);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <HeaderComponent />
            <Tabs
                id="basic-tabs"
                activeKey="home"
                onSelect={handleTabSelect}
                className="navigation"
                variant="black-tabs" // Add a custom class for styling
            >
                <Tab eventKey="home" title="ABOUT"></Tab>
                <Tab eventKey="artwork" title="GALLERY"></Tab>
                <Tab eventKey="contact" title="CONTACT"></Tab>

            </Tabs>
        </>
    );
};
