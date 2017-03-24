require('./utils/dom.js');
require('./utils/noderequirejs.js');
const expect = require('chai').expect;

describe('app', () => {
    it('should load', () => {
        const app = require('../public/app.js');
        const el = document.querySelector('h1');
        expect(document.body.children.length).to.equal(1);
        expect(el.innerHTML).to.equal('Hello Vue.js!');
    })
})
