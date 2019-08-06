var greeting = "";

var specialGuest = "Neil deGrasse Tyson"

var greetSpecialGuest = "" + specialGuest + "!";

var topic = "space";

var conversation = `${topic}`;


it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

function greeting(){
  return "Hello, everybody!"
}

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

function greetSpecialGuest(specialGuest)
  return `Hello, ${specialGuest}!`

