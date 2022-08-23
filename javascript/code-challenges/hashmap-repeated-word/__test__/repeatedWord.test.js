
const repeatedWord = require("../repeatedWord")

test("Repeated Words Test",()=>{
  const text = " ";
  expect(repeatedWord(text)).toBe("Exception")

})
test("Repeated Words Test",()=>{
  const text =  "hello , not working ? ";
  expect(repeatedWord(text)).toBe("There is no repeated words")

})
test("Repeated Words Test",()=>{
  const text = "hello , is there any  issue with this code or it is not working ? "
  expect(repeatedWord(text)).toBe("is")

})



