// code your solution here
function show(value){
    console.log(value);
  }

  function saturdayFun(someThing = "roller-skate"){
    return `This Saturday, I want to ${someThing}!`;
  }
n
  function mondayWork(toDo = "go to the office"){
    return `This Monday, I will ${toDo}.`;
  }


function wrapAdjective(mywrap = "*"){
   function inner (single = "special"){
        return `You are ${mywrap}${single}${mywrap}!`;
    };

    return inner;
}