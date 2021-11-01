import { renderHook } from "@testing-library/react-hooks"
import { useReducer } from "react"
import { act } from "react-dom/test-utils"
import { CandidacyFaker } from "../../../Data/_CandidacyFaker"
import { CandidacyAction, CandidacyActionEnum, CandidacyReducer } from "./CandidacyReducer"

describe('Test reducer', () => {
    it('should called STORE reducer action', () => {
        const {result} = renderHook(() => useReducer(CandidacyReducer, {items: []}))
        
        act(() => {    
            const [, dispatch] = result.current;
            dispatch({
                type: CandidacyActionEnum.STORE,
                payload: CandidacyFaker
            });    
        })

        const [state] = result.current;
        expect(3).toEqual(state.items.length);
    })

    it('should called STORE create action', () => {
        const {result} = renderHook(() => useReducer(CandidacyReducer, {items: []}))
        
        act(() => {    
            const [, dispatch] = result.current;
            dispatch({
                type: CandidacyActionEnum.CREATE,
                payload: [CandidacyFaker[0]]
            });    
        })

        const [state] = result.current;
        expect(1).toEqual(state.items.length);
    })

    it('should called not action exist', () => {
        const {result} = renderHook(() => useReducer(CandidacyReducer, {items: []}))
        
        act(() => {    
            const [, dispatch] = result.current;
            dispatch({
                type: 10,
                payload: [CandidacyFaker[0]]
            });   
        })

        const [state] = result.current;
        expect(0).toEqual(state.items.length);
    })
})