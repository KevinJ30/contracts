import React from 'react';

import {fireEvent, render, RenderResult, screen} from '@testing-library/react';
// import CandidacyState from '../../../Components/Candidacy/CandidacyState/CandidacyState';

import Candidacy from "../Candidacy";

const renderCandidacyPage = () : RenderResult => 
    render(
        <React.Fragment>
            <Candidacy />
            <div id="root-modal"></div>
        </React.Fragment>
    );

const openFormEdit = () : void => {
    const editButton = document.querySelector('button.js-action-edit') as HTMLButtonElement;
    fireEvent.click(editButton);
}

describe("Edition d'une candidature", () => {

    it('should contains button edit on the page', () => {
        renderCandidacyPage();
        const editButton = document.querySelector('button.js-action-edit');
        expect(editButton).not.toBeNull()
    })

    it('should open the modal with data item in the fields', () => {
        renderCandidacyPage();
        openFormEdit();

        // const inputDateDeposit = document.getElementById('')
    })

})