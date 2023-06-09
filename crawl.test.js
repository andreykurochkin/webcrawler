const {normalizeUrl} = require('./crawl.js');
const { test, expect } = require('@jest/globals');

test( 'normalizeUrl should remove protocol', () => {
    const input = 'https://github.com/andreykurochkin/webcrawler';
    const actual = normalizeUrl(input);
    const expected = 'github.com/andreykurochkin/webcrawler';
    expect(actual).toEqual(expected);
});

test( 'normalizeUrl should remove trailing slash', () => {
    const input = 'https://github.com/andreykurochkin/webcrawler/';
    const actual = normalizeUrl(input);
    const expected = 'github.com/andreykurochkin/webcrawler';
    expect(actual).toEqual(expected);
});

test( 'normalizeUrl should ignore capitals', () => {
    const input = 'https://GITHUB.com/andreykurochkin/webcrawler/';
    const actual = normalizeUrl(input);
    const expected = 'github.com/andreykurochkin/webcrawler';
    expect(actual).toEqual(expected);
});

test( 'normalizeUrl should string http', () => {
    const input = 'http://github.com/andreykurochkin/webcrawler/';
    const actual = normalizeUrl(input);
    const expected = 'github.com/andreykurochkin/webcrawler';
    expect(actual).toEqual(expected);
});
