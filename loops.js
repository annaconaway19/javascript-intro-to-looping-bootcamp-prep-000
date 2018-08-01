function forLoop(array) {
for (let i = 0; i < 25; i++) {
  if (i === 1) {
<<<<<<< HEAD
    array.push("I am 1 strange loop.");
  } else {
    array.push(`I am ${i} strange loops.`);
  }
}
return array;
=======
    return "I am 1 strange loop.";
  } else {
    return `I am ${i} strange loops.`;
  }
}
>>>>>>> e4dbe515bae5db4de2a3afbad47df6ac88765707
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return 'done';
}

<<<<<<< HEAD
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array) {
  do {array.pop()
      } while (array.length > 0 && maybeTrue())
return array;
}
=======
function doWhileLoop(array) {
  do { --array;
      } while (array.length > 0 && maybeTrue())
}
>>>>>>> e4dbe515bae5db4de2a3afbad47df6ac88765707
