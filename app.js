var ans1 = document.getElementById('result1');
var ans2 = document.getElementById('result2');
var ans3 = document.getElementById('result3');

var user = prompt('What is your name?');
alert('Hello, ' + user + ', I am going to ask you a few questions.');
console.log('The user\'s name is ' + user);

var correct = 0;

var question_one = [
  user + ', these are yes/no questions, so please answer with Y or N. Is Margaux from Seattle?',  // question
  '',    // answer
  'n',   // correct answer
  'no',  // correct answer
  'That is correct!', // response - correct
  'Wrong!', // response - incorrect
  ans1  // pass text into HTML at location for this var
];

var question_two = [
  user + ' ,did Margaux play softball in college?',
  '',
  'n',
  'no',
  'That is correct!',
  'Wrong!',
  ans2
];

var question_three = [
  user + ', does Margaux have cats?',
  '',
  'n',
  'no',
  'That is correct!',
  'Wrong!',
  ans3
];


var question_data = [question_one, question_two, question_three];

for (i = 0; i < question_data.length; i++ ) {
  question_data[i][1] = prompt(question_data[i][0]).toLowerCase();
  console.log('The user answered: ' + question_data[i][1]);

  //make it so that we can accept 'n' or 'N' or 'no' or 'No' as an acceptable response
  if((question_data[i][1] === question_data[i][2]) || (question_data[i][1] === question_data[i][3])) {
    //alert('That is correct!');
    question_data[i][6].textContent = question_data[i][4];
    correct++;
    question_data[i][6].className = 'correct';
  } else {
    question_data[i][6].textContent = question_data[i][5];
    //alert('Wrong!');
    question_data[i][6].className = 'incorrect';
  }
  console.log('complete loop ' + i);
}

console.log('Correct responses:  ' + correct);


  //alert('You got ' + counter + ' correct');
  //answer3.textContent = 'You got ' + counter + ' correct'

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
