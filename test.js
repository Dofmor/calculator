const test = function (str) {
    const defaultLength = 7
    const defaultSize = 0.5
    const size = str.length
    const newSize = (defaultSize / (Math.ceil(size/ defaultLength)) * 2)
    console.log(size)
    console.log(newSize)

}
test('12345678')