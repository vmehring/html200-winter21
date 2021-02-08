function getSquare() {

  let number = prompt('Gimme a number');

  function square(root) {
    root = root * root;
    alert('Your square is ' + root);
  }

  square(number);
  
}

function multiplyReply() {

  let num1 = prompt('Gimme a number...');
  let num2 = prompt('...and another one');

  function multiplyTwo(x, y) {
    result = x * y;
    alert('Your result is ' + result)
  }

  multiplyTwo(num1, num2);

}
