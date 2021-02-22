import { greet } from "./func1";
describe('test function', () => {
    it('Should retuen Reza', ()=>{
    expect(greet("Reza")).toContain('Reza')
    expect(greet("Reza")).toBe('Welcome Reza')
    })
})