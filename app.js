//
  var user = prompt('What is your name?');
  alert('Hello, ' + user + ', I am going to ask you a few questions.');
  console.log('The user\'s name is ' + user);

  var counter = 0;

  var answer1 = prompt(user + ', these are yes/no questions, so please answer with Y or N. Is Margaux from Seattle?');
  console.log('The user answered Question 1: ' + answer1);

//make it so that we can accept 'n' or 'N' or 'no' or 'No' as an acceptable response
  if(answer1.toLowerCase() === 'n' || answer1.toLowerCase() === 'no') {
    alert('That is correct!');
    counter += 1;
  }   else {
    alert('Wrong!');
    alert('You got ' + counter + ' correct');
  }

  var answer2 = prompt(user + ' ,did Margaux play softball in college?');
  console.log('The user answered Question 2: ' + answer2);

  if(answer2.toLowerCase() === 'n' || answer2.toLowerCase() === 'no') {
    alert('That is correct!');
    counter += 1;
  }   else {
    alert('Wrong!');
  }

  var answer3 = prompt(user + ', does Margaux have cats?');
  console.log('The user answered Question 3: ' + answer3);

  if(answer3.toLowerCase() === 'n' || answer3.toLowerCase() === 'no') {
    alert('That is correct!');
    counter += 1;
  }   else {
    alert('Wrong!');
    alert('You got ' + counter + ' correct');
  }

//   var answer4 = prompt(user + ', how many user manuals does Margaux have?');
//   console.log('The user answered Question 4: ' + answer4);
// while(answer4 != 10){
//    if(answer4 <= 9){
//     alert('Too low! Try again.');
//     answer4 = prompt(user + ', how many user manuals does Margaux have?');
//   } else {
//     alert('Too high! Try again.');
//     answer4 = prompt(user + ', how many user manuals does Margaux have?');
//   }
// };
// alert('Correct!');
// counter += 1;
//
// console.log("value of counter is: " + counter);
//
var answer4 = prompt(user + ', how many user manuals does Margaux have?');
console.log('The user answered Question 4: ' + answer4);

while (answer4 <=9) {
  alert('Too low! Try again.');
  answer4 = prompt(user + ', how many user manuals does Margaux have?');
};

while (answer4 >10) {
  alert('Too high! Try again.');
  answer4 = prompt(user + ', how many user manuals does Margaux have?');
};

alert('Correct!');
counter += 1;
alert('You got ' + counter + ' correct');
console.log("value of counter is: " + counter);
