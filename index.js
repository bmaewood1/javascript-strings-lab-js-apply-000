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

