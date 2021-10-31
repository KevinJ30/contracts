import {render, RenderResult, fireEvent} from '@testing-library/react';
import CandidacyItem from './CandidacyItem';

import {candidacy as CandidacyType, CandidacyStateEnum} from '../../Pages/Candidacy/Types/CandidacyType';
import dayjs from 'dayjs';
import { DATE_FORMAT } from '../Date';
import Candidacy from '../../Pages/Candidacy/Candidacy';

const item : CandidacyType = {
    candidacy_type: "spontané",
    business_name: "Natural Solution",
    url: "https://joudrier-kevin.fr",
    date_deposit: new Date(),
    date_relaunch: new Date(),
    status: CandidacyStateEnum.refused
}

const renderCandidacyItemTest = (value = item) : RenderResult => {
    return render(
        <table>
            <tbody>
                <CandidacyItem item={value} />
            </tbody>
        </table>
    );
}

const assertRowColor = (status : CandidacyStateEnum , classname : string) => {
    renderCandidacyItemTest({
        ...item,
        status: status
      });

      let rowElement : HTMLTableRowElement|null  = document.querySelector('tr');
      expect(rowElement?.classList.contains(classname)).toEqual(true);
}

describe('Components CandidacyItem', () => {
    
    // Doit se cahrgé sans erreur
    it('Should load correctly component', () => {
        renderCandidacyItemTest();
    })

    // Doit afficher un <tr>
    it('should display <tr></tr>', () => {
        renderCandidacyItemTest();

        let tableRow = document.querySelector('tr');
        expect(tableRow).not.toBeNull();
    })

    // Le <tr> doit contenir les données
    it('should display data on the <tr>', () => {
        renderCandidacyItemTest();

        let tableRow = document.querySelector('tr');
        let iconStatus = document.querySelector('.state');

        expect(tableRow).toHaveTextContent(item.candidacy_type);
        expect(tableRow).toHaveTextContent(item.business_name);
        expect(tableRow).toHaveTextContent(dayjs(item.date_deposit).format(DATE_FORMAT))
        expect(tableRow).toHaveTextContent(dayjs(item.date_relaunch).format(DATE_FORMAT))
        expect(tableRow).toHaveTextContent(item.url);
        expect(iconStatus).not.toBeNull();
    })

    describe('Colors depending on the state', () => {
        it('should display white color with a state edit', () => {
            assertRowColor(CandidacyStateEnum.edit, 'table-default');
        })

        it('should display blue color with a state progress', () => {
            assertRowColor(CandidacyStateEnum.progress, 'table-primary');
        })

        it('should display blue color with a state relaunch', () => {
            assertRowColor(CandidacyStateEnum.relaunch, 'table-primary');
        })

        it('should display red color with a state refused', () => {
            assertRowColor(CandidacyStateEnum.refused, 'table-danger');
        })

        it('should display green color with a state accepted', () => {
            assertRowColor(CandidacyStateEnum.accepted, 'table-success');
        })
    })

    describe('Action on the row', ()  => {
        it('should remove element when click delete action', () => {
            const display = render(<Candidacy />);

            
            const deleteActionElement : HTMLElement = document.querySelector('#js-action-delete') as HTMLElement;
            expect(deleteActionElement).toBeInTheDocument();
            
            fireEvent.click(deleteActionElement);
            expect(2).toEqual(display.getAllByTestId('candidacy-item').length);
        })
    })
})