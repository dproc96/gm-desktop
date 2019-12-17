import React from "react";
import App from "../src/App";
import { expect } from "chai";
import { render, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("App", () => {
    const app = render(<App />);
    it("should render a div", () => {
        expect(app.is("div")).to.be.true
    })
    it("should have content", () => {
        expect(Boolean(app.html())).to.be.true
    })
})