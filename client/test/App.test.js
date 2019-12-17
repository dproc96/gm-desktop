import React from "react";
import App from "../src/App";
import { expect } from "chai";
import { render, configure, shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import jsdom from "jsdom";
const doc = new jsdom.JSDOM("<!doctype html><html><body></body></html>");
global.document = doc.window.document;
global.window = doc.window;
global.navigator = {
    userAgent: 'node.js',
};

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

describe("Encounter Tracker", () => {
    const app = mount(<App />)
    const initial = app.state().encounter.monsters.length;
    app.find("#add-monster").simulate("click");
    it("should add a monster to the state when the add button is clicked", () => {
        expect(app.state().encounter.monsters.length).to.be.equal(initial + 1);
    });
    it("should render a new monster when add button is clicked", () => {
        expect(app.find("#tracker-monsters").length).to.be.equal(initial + 1);
    })
})