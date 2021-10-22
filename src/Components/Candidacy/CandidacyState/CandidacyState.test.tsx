import {render, screen} from "@testing-library/react";
import { CandidacyStateEnum } from "../../../Pages/Candidacy/Types/CandidacyType";
import CandidacyState from "./CandidacyState"

describe('Component CandidacyState', () => {

    /**
     * Teste si l'état correspond a l'icone affiché
     * 
     * @param {number} state 
     * @param {string} icon
     **/
    const assertState = (state : number, icon : string) : void => {
        render(<CandidacyState value={state} />);

        const iconElement = document.querySelector('.' + icon);
        expect(iconElement).not.toBeNull()
    }

    // Doit afficher une exception si les limite de value sont atteinte (0 à 3 )
    it('should throw exception if not value on the component', () => {
        expect(() => render(<CandidacyState value={-1} />)).toThrow('Le state ne peut pas être compris dans cette valeur');
    });

    // Doit afficher l'icone hourglass quand l'état et a progress
    it('should display IconHourglass when state is progress', () => {
        assertState(CandidacyStateEnum.progress, 'icon-hourglass');
    })

    // Doit afficher l'icone hourglass quand l'état et a 'relaunch'
    it('should display IconHourglass when state is relaunch', () => {
        assertState(CandidacyStateEnum.relaunch, 'icon-hourglass');
    })

    // Doit afficher l'icone delete quand l'état et a 'refused'
    it('should display IconDelete when state is refused', () => {
        assertState(CandidacyStateEnum.refused, 'icon-delete');
    })

    // Doit afficher l'icon done quand l'état et a 'accepted'
    it('should display IconDone when state is relaunch', () => {
        assertState(CandidacyStateEnum.accepted, 'icon-done');
    })
})