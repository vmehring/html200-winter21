function getSquare() {

  let number = prompt('Gimme a number');

  function square(root){
    root = root * root;
    alert('Your square is ' + root);
  }

  square(number);
}
