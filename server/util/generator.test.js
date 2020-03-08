const generator = require("./generator");
const data = [
  { id: 1, number: "GJM  " },
  { id: 2, number: "HJM  " },
  { id: 3, number: "IJM  " },
  { id: 4, number: "GKM  " },
  { id: 5, number: "HKM  " },
  { id: 6, number: "IKM  " },
  { id: 7, number: "GLM  " },
  { id: 8, number: "HLM  " },
  { id: 9, number: "ILM  " },
  { id: 10, number: "GJN  " },
  { id: 11, number: "HJN  " },
  { id: 12, number: "IJN  " },
  { id: 13, number: "GKN  " },
  { id: 14, number: "HKN  " },
  { id: 15, number: "IKN  " },
  { id: 16, number: "GLN  " },
  { id: 17, number: "HLN  " },
  { id: 18, number: "ILN  " },
  { id: 19, number: "GJO  " },
  { id: 20, number: "HJO  " },
  { id: 21, number: "IJO  " },
  { id: 22, number: "GKO  " },
  { id: 23, number: "HKO  " },
  { id: 24, number: "IKO  " },
  { id: 25, number: "GLO  " },
  { id: 26, number: "HLO  " },
  { id: 27, number: "ILO  " }
];
describe("Number Generator", () => {
  it("It should return all possible pnone number", () => {
    const output = generator.alphaNnumericphoneNumbers("456");
    expect(output).toEqual(data);
  });
});
