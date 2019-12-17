const chai = require("chai");
const expect = chai.expect;
const roller = require("../client/utils/roller.js");

describe("Roller", () => {
    it("Should return a number greater than 0", () => {
        expect(roller(1, 20)).to.be.a("number");
        expect(roller(1, 20)).to.be.at.least(1);
    });
    it("Should return a number greater than 1 when rolling 2 dice", () => {
        expect(roller(2, 20)).to.be.a("number");
        expect(roller(2, 20)).to.be.at.least(2);
    })
    it("Should return a number greater than the bonus specified", () => {
        expect(roller(1, 20, 5)).to.be.a("number");
        expect(roller(1, 20, 5)).to.be.at.least(5);
    })
    it("Should average correctly when rolled 10,000 times", () => {
        expect(roller(10000, 20) / 10000).to.be.at.least(10);
        expect(roller(10000, 20) / 10000).to.be.at.most(11);
    })
})