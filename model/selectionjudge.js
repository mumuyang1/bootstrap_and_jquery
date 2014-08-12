function SelectionJudge(name){

  this.name = name;

}

SelectionJudge.prototype.get = function(){

  var selection_judge  = document.getElementsByName(this.name);
  var getValue = '';

  for(var i = 0; i < selection_judge.length; i++){

    if(selection_judge[i].checked){

      getValue = selection_judge[i].value;
      break;
    }

  }

  return getValue;

}
