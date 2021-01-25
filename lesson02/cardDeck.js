const suits = ['Hearts' , 'Clubs' , 'Diamonds' , 'Spades'];
const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

var s;
var f;

for (f of faces)
for (s of suits) {
  console.log(f + ' of ' + s);
}
