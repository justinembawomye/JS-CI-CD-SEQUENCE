const multiply = require('./main');
test('Multipy 3 * 3 equals 9', ()=>{
    expect(multiply(3,3)).toBe(9);
});