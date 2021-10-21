import {render, screen} from "@testing-library/react";
import Candidacy from "./Candidacy";
import React from "react";

describe('Candidacy pages test', () => {
    it('should display heading on the page', () => {
        render(<Candidacy />);
        expect(screen.getByRole('heading', {level: 1})).toBeInTheDocument();
        expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Toutes vos candidatures');
    })

    it('should display all candidacy int the state component', () => {
        render(<Candidacy />);

        let candidacyTableItem : NodeListOf<HTMLTableRowElement> = document.querySelectorAll('table tbody tr');
        expect(2).toEqual(candidacyTableItem.length);
    });
})
