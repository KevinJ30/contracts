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

        const result = deleteCandidacy(context, candidacyRemove);

        expect(context.setItems).toHaveBeenCalled();
        expect(true).toEqual(result)
    });

    it("shouldn't return false value if setItems value is null", () => {
        const context : ItemContextType = {
            items : CandidacyFaker,
            setItems : null
        };

        const candidacyRemove : candidacy = context.items[0];
        let result =  deleteCandidacy(context, candidacyRemove);

        expect(false).toEqual(result);
    })
})