const app = require('./index');
const test = require('./test');
const assert = require('assert');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const pageContent = require('./pageContent').content();

const dom = new JSDOM(
    pageContent,
    { includeNodeLocations: true }
);
const document = dom.window.document;
const item = document.createElement('li');
item.classList.add('primary-nav__item-active');
const addActiveClass = new app(item);

console.log(addActiveClass.addActiveClasses());

describe('Navegation bar', function() {
    it('should return the sum of 2 + 2', () => {    
        assert.equal(test.myFunction(2,2), 4);
    });
    
    it('should remove classes given an item', () => {      
        //console.log('item hpta', app);
        //assert.equal(test.myFunction(2,2), 4);
    });
});