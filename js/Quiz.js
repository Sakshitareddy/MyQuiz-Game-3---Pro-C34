class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 start(){
    
      contestant = new Contestant();
      
        contestant.getCount();
      
      question = new Question()
      question.display();
    
  }

  play(){
    question.hide();
    background("Orange");
    fill(0);
    textSize(30);
    text("Result of the Quiz",340, 50);
    text("----------------------------",320, 65);
    Contestant.getPlayerInfo();
    //Write a condition,data is not equal to undefined.
    if(allContestants!==undefined){
      debugger;
      var display_Answers = 230;
      fill("Yellow");
      textSize(15);
      textFont("Georgia")
      //add a Note to help contestants understand the result.
      text("NOTE: Contestant who answered correct are highlighted in green color! Contestants who answered incorrectly are in red color.",5,230);
     // Write a for loop statement and check the condition if the correct answer is equal to the contestant’s answer. 
      for(var plr in allContestants){
        debugger;
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");

        display_Answers+=30;
        textSize(20);
        textFont("Courier")
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 150,display_Answers)
      }
    } 
  }
}