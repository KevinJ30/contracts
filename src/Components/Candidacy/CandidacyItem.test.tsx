import {render} from '@testing-library/react';
import CandidacyItem from './CandidacyItem';

import {candidacy as CandidacyType, CandidacyStateEnum} from '../../Pages/Candidacy/Types/CandidacyType';
import dayjs from 'dayjs';
import { DATE_FORMAT } from '../Date';

const item : CandidacyType = {
    candidacy_type: "spontané",
    business_name: "Natural Solution",
    url: "https://joudrier-kevin.fr",
    date_deposit: new Date(),
    date_relaunch: new Date(),
    status: CandidacyStateEnum.refused
}

describe('Components CandidacyItem', () => {
    
    // Doit se cahrgé sans erreur
    it('Should load correctly component', () => {
        

        render(<CandidacyItem item={item} />);
    })

    // Doit afficher un <tr>
    it('should display <tr></tr>', () => {
        render(<CandidacyItem item={item} />)

        let tableRow = document.querySelector('tr');
        expect(tableRow).not.toBeNull();
    })

    // Le <tr> doit contenir les données
    it('should display data on the <tr>', () => {
        render(<CandidacyItem item={item} />)

        let tableRow = document.querySelector('tr');

        expect(tableRow).toHaveTextContent(item.candidacy_type);
        expect(tableRow).toHaveTextContent(item.business_name);
        expect(tableRow).toHaveTextContent(item.status.toString());
        expect(tableRow).toHaveTextContent(dayjs(item.date_deposit).format(DATE_FORMAT))
        expect(tableRow).toHaveTextContent(dayjs(item.date_relaunch).format(DATE_FORMAT))
        expect(tableRow).toHaveTextContent(item.url);
    })
})