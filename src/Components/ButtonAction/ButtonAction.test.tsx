import {render, screen, fireEvent} from '@testing-library/react';
import { ButtonAction } from './ButtonAction';

describe('Delete Action', () : void => {
    it('shold load correctly action delete', () : void => {
        let mockOnAction = jest.fn();
        render(<ButtonAction content="button" onAction={mockOnAction} />);
    })

    it('should displaying a button on the page', () : void => {
        let mockOnAction = jest.fn();
        render(<ButtonAction content="button" onAction={mockOnAction} />);

        const buttonElement : HTMLElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    })

    it('should called onAction when on the click', () : void => {
        let mockOnAction = jest.fn();
        render(<ButtonAction content="button" onAction={mockOnAction} />);
        
        const buttonElement : HTMLElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(buttonElement).toBeInTheDocument()
        expect(mockOnAction).toBeCalledTimes(1)
    })
})
