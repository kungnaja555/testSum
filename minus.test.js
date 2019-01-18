const minus = require('./minus')

test("10 - 9 เท่ากับ 1", () => {
    expect(minus(10,9)).toBe(1)
})

test('10 - 8 เท่ากับ 2',() => {
    expect(minus(10,8)).toBe(2)
})

test('10 - 7 เท่ากับ 3',() => {
    expect(minus(10,7)).toBe(3)
})

test('10 - 6 เท่ากับ 4',() => {
    expect(minus(10,6)).toBe(4)
})

test('10 - 5 เท่ากับ 5', () => {
    expect(minus(10,5)).toBe(5)
})