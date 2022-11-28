/**
 * @jest-environment jsdom
 */

import React from "react";
import '@testing-library/jest-dom';
import { screen, render, queryByAttribute } from '@testing-library/react';

import Profile from "./index.jsx";

// it('Profile', () => {
//     render(<Profile />)

//     const name = screen.getByText(/Name: LiSa/);
//     expect(name).toBeInTheDocument 
// }) 

// ref link: https://stackoverflow.com/questions/59697915/testing-library-react-tdd-react-bootstrap-is-this-kind-of-test-useful-or-jus

describe('Profile.jsx', () => {
    let nameProp, typeProp, countryProp, introProp;

    beforeEach(() => {
        nameProp = 'LiSa';
        typeProp = 'anime';
        countryProp = 'japan';
        introProp = 'text here..';      
    })

    //name, type, country, intro => props
    test('check all props displayed', () => {
        const { getByText, queryByText } = render(
            <Profile
                name={nameProp}
                type={typeProp}
                country={countryProp}
                intro={introProp}
            />
        ); 
        const name = getByText(nameProp);
        // const name = queryByText(nameProp);
        expect(name.textContent).toMatch('LiSa');
        // expect(queryByText('Japan')).toBeTruthy();
    })

    test('check all props displayed 2', () => {
        render(
            <Profile
                name={nameProp}
                type={typeProp}
                country={countryProp}
                intro={introProp}
            />
        ); 
        const name = screen.getByText(nameProp);
        // const name = queryByText(nameProp);
        expect(name.textContent).toMatch('LiSa');
        // expect(queryByText('Japan')).toBeTruthy();
    })
    
})

//step1: render
//2: find elements we want to interact with
//3: intereact with those elements
//4: assert the expected results
