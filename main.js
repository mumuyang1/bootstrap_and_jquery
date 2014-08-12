function getBlankPoints(){

    var blankItem1 = new Items(['统一建模语言'], 5);
    var blankItem2 = new Items(['封装性','继承性','多态性'], 5);
    var answer1 = document.getElementById("blank1_1_1");
    var answer2 = [];
    answer2.push( document.getElementById("blank1_2_1" ).value);
    answer2.push( document.getElementById("blank1_2_2" ).value);
    answer2.push( document.getElementById("blank1_2_3" ).value);

     if (answer1.value === blankItem1.key ){

        blankItem1.points = blankItem1.score;
     }

     for(var i = 0; i < 3; i++){

      for(var j = 0; j < 3; j++){

        if(blankItem2.key[i] === answer2[j]){

          blankItem2.points += blankItem2.score;

          break;

            }
          }
       }

       return   blankItem1.points + blankItem2.points;

  }

function getSelectionJudgePoints() {

  var selectionJudge1 = new SelectionJudge('blank2_1');
  var selectionJudge2 = new SelectionJudge('blank2_2');
  var selectionJudge3 = new SelectionJudge('blank4_1');
  var selectionJudge4 = new SelectionJudge('blank4_2');

  var getValue1 = selectionJudge1.get();
  var getValue2 = selectionJudge2.get();
  var getValue3 = selectionJudge3.get();
  var getValue4 = selectionJudge4.get();

  var getValues = [getValue1,getValue2];
  var getValuej = [getValue3,getValue4];

  var selectionJudges = new Items(['B','A'], 10);
  var selectionJudgej = new Items(['x','v'], 10);

  for(var i = 0; i < getValues.length; i++){

    if(getValues[i] === selectionJudges.key[i]){
      selectionJudges.points += selectionJudges.score;

      }
    }
  for(var k = 0; k < getValuej.length; k++){

    if(getValuej[k] === selectionJudgej.key[k]){
      selectionJudgej.points += selectionJudgej.score;

      }
    }
   return selectionJudges.points + selectionJudgej.points;
}

function getMultiPoints() {

  var v7 = document.getElementById("blank3_1_1").checked;
  var v8 = document.getElementById("blank3_1_2").checked;
  var v9 = document.getElementById("blank3_1_3").checked;
  var v10 = document.getElementById("blank3_1_4").checked;
  var v11 = document.getElementById("blank3_2_1").checked;
  var v12 = document.getElementById("blank3_2_2").checked;
  var v13 = document.getElementById("blank3_2_3").checked;
  var v14 = document.getElementById("blank3_2_4").checked;
  var MutiPoints1 = 0;
  var MutiPoints2 = 0;
  var multiAnswer1 = (v7&&v8&&v10)&&(!v9);
  var multiAnswer2 = (v11&&v12&&v13)&&(!v14);
  if(multiAnswer1){
      MutiPoints1 = 10;
     }
  if(multiAnswer2) {
      MutiPoints2 = 10;
     }
  var MutiPoints =MutiPoints1 + MutiPoints2;
  return MutiPoints;
}

function getShortAnswerPoints(){

  var value17 = document.getElementById("b");
  var shortAnswer = new Items(['模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。'], 20);

  if(value17.value == shortAnswer.key[0]){

    shortAnswer.points = shortAnswer.score;
    }

    return shortAnswer.points;
  }

function getTotalPoints() {

    var requiredInputs = [
        {
            id: 'class',
            text: '班级'
        },
        {
            id: 'number',
            text: '学号'
        },
        {
            id: 'name',
            text: '姓名'
        }
    ];

    if (hasEmptyRequiredInput(requiredInputs)) {
        return false;
    }

   return getScores();

}

function hasEmptyRequiredInput(inputs) {

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var element = document.getElementById(input.id);
        if (element && _.isEmpty(element.value)) {
            alert('请填写' + input.text + '！');
              if(input.text === '班级'){

                document.getElementById("class_div").className = "has-error";
                return true;
                break;

              }
            else{

              document.getElementById("class_div").className = "form control";
            }

              if(input.text === '学号'){

                document.getElementById("number_div").className = "has-error";
                return true;
                break;

              }
              else{

                document.getElementById("number_div").className = "form control";
              }

              if(input.text === '姓名'){

                document.getElementById("name_div").className = "has-error";
                return true;
                break;
              }

              else{

                document.getElementById("name_div").className = "form control";
              }

        }
    }

    return false;

}

function getScores(){

  var v18 = document.getElementById("scores");
  var totalpoints = 0;

  totalpoints = getBlankPoints() + getSelectionJudgePoints()+ getMultiPoints() + getShortAnswerPoints();
  v18.innerHTML =totalpoints;
  v18.style.color = 'red';
  
  return false;
}
