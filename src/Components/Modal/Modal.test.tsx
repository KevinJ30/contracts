import React, { useState } from 'react'
import { fireEvent, render, RenderResult, screen } from "@testing-library/react"
import { ModalEntryTest } from './ModalEntryTest';

/**
 * @returns Rend une modal standard 
 **/
const renderModal = () : RenderResult  => {
    return render(
        <React.Fragment>
            <ModalEntryTest />
        </React.Fragment>);
}

/**
 * @returns Rend une modal ouverte 
 **/
const renderOpenModal = () : RenderResult => {
    const renderResult = renderModal();

    const openButtonElement = screen.getByRole('button');
    fireEvent.click(openButtonElement);

    return renderResult;
}

/**
 * Lance l'assertion après l'execution de l'animation
 * qui est lancé lors de la fermeture de la modal
 **/
const assertCloseModal = () => {
    setTimeout(() => {
        expect(document.querySelector('#root-modal .modal')).toBeNull();
    }, 1000)
}

describe('Component modal', () => {

    it('load correcly component', () => {
        renderModal();
    });

    it('should open modal when click the button', () => {
        renderModal();
    
        const button = screen.getByRole('button');
        fireEvent.click(button);
    
        expect(document.querySelector('#root-modal .modal')).not.toBeNull()
    });

    it('should close modal when we click on the cross', () => {
        renderOpenModal();

        const buttonCloseElement : HTMLButtonElement = document.querySelector('.btn-close') as HTMLButtonElement;
        fireEvent.click(buttonCloseElement);
        assertCloseModal()
    });

    it('should close modal when when press escape key', () => {
        renderOpenModal();

        fireEvent.keyUp(document, {key: 'Escape'})
        assertCloseModal();
    })

    it("shouldn't close modal when press other key", () => {
        renderOpenModal();

        fireEvent.keyUp(document, {key: 'q'})
        assertCloseModal();
    })

    it('should called animationend in event listener when closeModal', () => {
        renderOpenModal();

        const modal : HTMLElement = document.querySelector('#root-modal .modal-dialog') as HTMLElement;
        fireEvent.keyUp(document, {key: 'Escape'})
        fireEvent.animationEnd(modal);

        assertCloseModal();
    })
})