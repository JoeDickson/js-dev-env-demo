import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';



describe('our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say hello', () => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementByTageName('h1')[0];

        })
    })
})