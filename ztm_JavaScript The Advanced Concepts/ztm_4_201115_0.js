var favouriteFood = 'grapes';

var foodThoughts = function () {
    console.log("Original favourite food: "
    + favouriteFood);

    var favouriteFood = "sushi";

    console.log("New favourite food: " +
    favouriteFood);
};

foodThoughts()

//Andrei´s bellow
function bigBrother(){

    function littleBrother() {
      return 'it is me!';
    }
    return littleBrother();
    function littleBrother() {
      return 'no me!';
    }
  }
  
  // Before running this code, what do you think the output is?
  bigBrother();