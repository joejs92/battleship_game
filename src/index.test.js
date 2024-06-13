const putOutSomething = require('./index');

it('Print Test', () => {
    expect(putOutSomething("Hello, World!")).toBe("Hello, World!");
});