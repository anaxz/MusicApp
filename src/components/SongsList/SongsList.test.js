/**
 * @jest-environment jsdom
 */

import React from "react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen, render, queryByAttribute } from '@testing-library/react';

import SongsList from "./SongsList";

// test buttons?

describe.skip('SongsList', () => {
    const getById = queryByAttribute.bind(null, 'id');

    beforeEach( () => {
        render(<SongsList />)
    })

    it('Does not display like icon by default', () => {
        // grab p element and check display is set to none
        // const iconElement = screen.getByText('Like')
        // expect(iconElement).toHaveStyle("display: none")
        const iconElement = screen.getByRole('paragraph')
        // const likeBtn = getById(dom.container, 'like-icon-1');
        expect(iconElement).toBeInTheDocument();
    })

//    it('Display like when like button is pressed', async () => {
//         const likeBtn = screen.getByRole('button', { name: 'Like?' } )
//         await userEvent.click(likeBtn)
//         const iconEle = screen.getByText('paragraph', name = 'Like')
//         expect(iconEle.value).toBe('Like')
//    })

})
