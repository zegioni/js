let num = 50;

if (num < 49) {
  console.log("Not a true");
} else if (num > 100) {
  console.log("Mnogo");
} else {
  console.log("true");
}

num == 50 ? console.log("true") : console.log("false");

switch (num) {
  case num < 49:
    console.log("Not a true");
    break;

  case num > 100:
    console.log("Mnogo");
    break;
  case num > 80:
    console.log("very mnogo");
    break;
  case 50:
    console.log("true");
    break;

  default:
    console.log("sorry, error");
    break;
}
