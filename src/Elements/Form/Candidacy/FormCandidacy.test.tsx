import React from 'react';

import { RenderResult, render, screen, fireEvent } from "@testing-library/react"
import Candidacy from "../../../Pages/Candidacy/Candidacy"

const renderEnvironement = () : RenderResult => {
    const renderEnvironement = render(
        <React.Fragment>
            <Candidacy />
            <div id="root-modal"></div>
        </React.Fragment>)

    const buttonOpenModalButton = document.querySelector('.container > button') as HTMLInputElement;
    fireEvent.click(buttonOpenModalButton);

    return renderEnvironement;
}

let inputDateDeposit : HTMLInputElement|null = null;
let inputDateRelaunch : HTMLInputElement|null = null;
let inputCandidacyType : HTMLInputElement|null = null;
let inputBusinessName : HTMLInputElement|null = null;
let inputLink : HTMLInputElement|null = null;

afterEach(() => {
    renderEnvironement();

    inputDateDeposit = document.getElementById('date_deposit') as HTMLInputElement;
    inputDateRelaunch = document.getElementById('date_relaunch') as HTMLInputElement;
    inputCandidacyType = document.getElementById('candidacy_type') as HTMLInputElement;
    inputBusinessName = document.getElementById('business_name') as HTMLInputElement;
    inputLink = document.getElementById('link') as HTMLInputElement;
})

describe('Test form candidacy', () => {
    it('should load correctly environement', () => {
        renderEnvironement();
    });

    it('should have fields with following id (date_deposit, date_relaunch, candidacy_type, business_name, link)', () => {
        expect(inputDateDeposit).not.toBeNull();
        expect(inputDateRelaunch).not.toBeNull();
        expect(inputCandidacyType).not.toBeNull();
        expect(inputBusinessName).not.toBeNull();
        expect(inputLink).not.toBeNull();
    });

    it('should pre-fill date deposit field, on the form', () => {
        expect(inputDateDeposit?.value).not.toBeNull();
    })

    it('The field date relaunch should be disabled when create new candidacy', () => {
       expect(inputDateRelaunch).toBeDisabled(); 
    })

    it('should add new row in the table html when submit form', () => {
        const form = document.querySelector('#root-modal form') as HTMLFormElement;
        fireEvent.submit(form);

        const rowTable = document.querySelectorAll('tbody tr');
        expect(rowTable.length).toEqual(4);
    })

    it('should close modal when submit form', () => {
        const form = document.querySelector('#root-modal form') as HTMLFormElement;
        fireEvent.submit(form);

        const modal = document.querySelector('#root-modal .modal');
        expect(modal).toBeNull();
    })
})