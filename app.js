function add(){
    const num1x = document.getElementById("frist").value;
    const num2x = document.getElementById("second").value;
    const num1 = parseInt(num1x);
    const num2 = parseInt(num2x);
    const answers = num1 + num2;
    console.log(answers);
    const message = "Yoo the answers is";
    document.getElementById("promo").innerHTML=message;;
    document.getElementById("answer").innerHTML=answers;

}

function multiply(){
    const num1x = document.getElementById("frist").value;
    const num2x = document.getElementById("second").value;
    const num1 = parseInt(num1x);
    const num2 = parseInt(num2x);
    const answers = num1 * num2;
    console.log(answers);
    const message = "Yoo the answers is";
    document.getElementById("promo").innerHTML=message;;
    document.getElementById("answer").innerHTML=answers;

}


function subtract(){
    const num1x = document.getElementById("frist").value;
    const num2x = document.getElementById("second").value;
    const num1 = parseInt(num1x);
    const num2 = parseInt(num2x);
    const answers = num1 - num2;
    console.log(answers);
    const message = "Yoo the answers is";
    document.getElementById("promo").innerHTML=message;;
    document.getElementById("answer").innerHTML=answers;

}


function divide(){
    const num1x = document.getElementById("frist").value;
    const num2x = document.getElementById("second").value;
    const num1 = parseInt(num1x);
    const num2 = parseInt(num2x);
    const answers = num1 / num2;
    console.log(answers);
    const message = "Yoo the answers is";
    document.getElementById("promo").innerHTML=message;;
    document.getElementById("answer").innerHTML=answers;

}