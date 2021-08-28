const ForecastExtender = require("./ForecastExtender")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new ForecastExtender.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
