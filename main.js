function getTotalPoints() {

    var mustInputs = [
        {
            id: 'class',
            text: '班级',
            divId: 'class_div'
        },
        {
            id: 'number',
            text: '学号',
            divId: 'number_div'
        },
        {
            id: 'name',
            text: '姓名',
            divId: 'name_div'
        }
    ];

    if (hasEmptyMustInput(mustInputs)) {

        return false;
    }
    return getScores();

}

function hasEmptyMustInput(inputs) {

    var tag = true;
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var element =$("#"+input.id)[0];

        if (element && _.isEmpty(element.value)) {
            $('#' + input.divId).addClass('has-error');
            tag =  false && tag;
        }else {
            $('#' + input.divId).removeClass('has-error');
        }
    }
    if(!tag){
        $('#myModal').modal();
        return true;
    }
    return false;
}

function getBlankPoints() {

    var blankItem1 = new Items(['统一建模语言'], 5);
    var blankItem2 = new Items(['封装性', '继承性', '多态性'], 5);
    var answer1 = $('#blank1_1_1').val();
    var answer2 = [];

    answer2.push($('#blank1_2_1').val());
    answer2.push($('#blank1_2_2').val());
    answer2.push($('#blank1_2_3').val());

    if (answer1.value === blankItem1.key) {

        blankItem1.points = blankItem1.score;
    }

    for (var i = 0; i < 3; i++) {

        for (var j = 0; j < 3; j++) {

            if (blankItem2.key[i] === answer2[j]) {

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

    var getValues = [getValue1, getValue2];
    var getValuej = [getValue3, getValue4];

    var selectionJudges = new Items(['B', 'A'], 10);
    var selectionJudgej = new Items(['x', 'v'], 10);

    for (var i = 0; i < getValues.length; i++) {

        if (getValues[i] === selectionJudges.key[i]) {
            selectionJudges.points += selectionJudges.score;

        }
    }
    for (var k = 0; k < getValuej.length; k++) {

        if (getValuej[k] === selectionJudgej.key[k]) {
            selectionJudgej.points += selectionJudgej.score;

        }
    }
    return selectionJudges.points + selectionJudgej.points;
}

function getMultiPoints() {

    var value7 = $('#blank3_1_1'+':checked');
    var value8 = $('#blank3_1_2'+':checked');
    var value9 = $('#blank3_1_3'+':checked');
    var value10 = $('#blank3_1_4'+':checked');
    var value11 = $('#blank3_2_1'+':checked');
    var value12 = $('#blank3_2_2'+':checked');
    var value13 = $('#blank3_2_3'+':checked');
    var value14 = $('#blank3_2_4'+':checked');
    var MutiPoints1 = 0;
    var MutiPoints2 = 0;
    var multiAnswer1 = (value7 && value8 && value10) && (!value9);
    var multiAnswer2 = (value11 && value12 && value13) && (!value14);
    if (multiAnswer1) {
        MutiPoints1 = 10;
    }
    if (multiAnswer2) {
        MutiPoints2 = 10;
    }
    var MutiPoints = MutiPoints1 + MutiPoints2;
    return MutiPoints;
}

function getShortAnswerPoints() {

    var value17 = $('#b');
    var shortAnswer = new Items(['模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。'], 20);

    if (value17.value == shortAnswer.key[0]) {

        shortAnswer.points = shortAnswer.score;
    }
    return shortAnswer.points;
}

function getScores() {

    var value18 = $('#scores')[0];
    var totalpoints = 0;

    totalpoints = getBlankPoints() + getSelectionJudgePoints() + getMultiPoints() + getShortAnswerPoints();
    value18.innerHTML = totalpoints;
    $('#' + "scoresId").addClass('has-error');

    return false;
}
