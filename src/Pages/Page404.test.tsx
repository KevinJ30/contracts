import {render, screen} from '@testing-library/react';
import Page404 from "./Page404"

describe('App component', () => {
    it('Should load correctly', () => {
        render(<Page404 />)
    })

    it('should display error 404 on the document', () => {
        render(<Page404 />)
        
        expect(screen.getByRole('heading', {level: 1})).toBeInTheDocument();
        expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Error 404');
    })

    it('should display "page introuvable"', () => {
        render(<Page404 />)
        
        const textElement = document.querySelector('p');
        
        expect(textElement).not.toBeNull();

        if(textElement) {
            expect(textElement.innerHTML).toContain('Page introuvable !')
        }
    })
})