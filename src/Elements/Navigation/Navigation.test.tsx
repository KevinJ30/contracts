import {render} from '@testing-library/react';

import {
    BrowserRouter as Router
} from "react-router-dom";

import Navigation from './Navigation';

describe('Element navigation', () => {

    // Should load component without error
    it('Should load correctly', () => {
        render(
            <Router>
                <Navigation />
            </Router>
        )
    })

    it('should display nav in the document', () => {
        render(
            <Router>
                <Navigation />
            </Router>
        )

        const navElement = document.querySelector('nav');
        expect(navElement).not.toBeNull();
    })
})