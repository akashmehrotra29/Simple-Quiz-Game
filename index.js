// Overview: This is how much you know me quiz. Here, I'll ask some basic ques about myself and you have to answer it. You score will tell how much you know me :D.

var readlineSync = require("readline-sync");

var score = 0;

var username = readlineSync.question("What is your name? ");
console.log ("Hi! "+ username +". Welcome to ||How much you know me|| Quiz. ");

var check = readlineSync.question ("Do you want to start quiz? [Y/N] \n");

if (check == "N")
{
  //exit;
  process.exit(0);
}

function play (ques, ans)
{
  var user_ans = readlineSync.question(ques);

  if (user_ans === ans) 
  {
    console.log ("Correct Answer!!");
    score++;
  }
  else
  {
    console.log ("Incorrect Answer. The correct answer is "+ans);
  }

  console.log ("Your current score is "+score);
  console.log ("______________________");  
}



var questions = [{ques:"What is my name? \n", ans: "Akash Mehrotra"}, {ques:"Where do I live? \n" , ans:"Lucknow"}, 
{ques:"Who is my favourate superhero? \n" , ans:"Thor"}]; 

for (var i=0; i<questions.length; i++)
{
  play (questions[i].ques, questions[i].ans);
}


console.log ("Your total score is: "+score);