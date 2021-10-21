import {render, screen} from "@testing-library/react";
import { CandidacyStateEnum } from "../../../Pages/Candidacy/Types/CandidacyType";
import CandidacyState from "./CandidacyState"

describe('Component CandidacyState', () => {
    it('should throw exception if not value on the component', () => {
        expect(() => render(<CandidacyState value={-1} />)).toThrow('Le state ne peut pas être compris dans cette valeur');
    });

    it('should display IconHourglass when state is progress', () => {
        render(<CandidacyState value={CandidacyStateEnum.progress} />);

        const icon = document.querySelector('.icon-hourglass');
        expect(icon).not.toBeNull()
    })
})