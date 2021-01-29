// This is the mostly same as what I submitted last week, with a few updates.
// Originally, I couldn't figure out how to do it with just else-ifs and for
// loops but I vaguely remembered about arrays from a Java class I took over
// the summer so I did that instead. At this point, I don't think I can tighten
// up my code any further.

const suits = ['Hearts' , 'Clubs' , 'Diamonds' , 'Spades'];
const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

let s;
let f;

for (s of suits)
for (f of faces) {
  console.log(f + ' of ' + s);
}
