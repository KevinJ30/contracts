import { CandidacyFaker } from "../../Data/_CandidacyFaker"
import { deleteCandidacy } from "../../Model/CandidacyModel";
import { ItemContextType } from "../../Pages/Candidacy/Candidacy"
import { candidacy } from "../../Pages/Candidacy/Types/CandidacyType";

describe('Testing candidacy model', () => {
    const getContextCandidacy  = () : ItemContextType => {
        return {
            items : CandidacyFaker,
            setItems : jest.fn()
        };
    }

    it('should remove one element on the array when call deleteCandidacy', () => {
        let context = getContextCandidacy();
        const candidacyRemove : candidacy = context.items[0];

        deleteCandidacy(context, candidacyRemove);

        expect(context.setItems).toHaveBeenCalled();
    });

})