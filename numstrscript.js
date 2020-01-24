// help
var num1 = document.getElementById("first"); // document.getElementById("")
var num2 = document.getElementById("second"); // document.getElementById("")
var num3 = document.getElementById("third"); // document.getElementById("")
var num4 = document.getElementById("fourth"); // document.getElementById("")
var num5 = document.getElementById("fifth"); // document.getElementById("")
var num6 = document.getElementById("sixth"); // document.getElementById("")
var output = document.getElementById("gohere"); // document.getElementById("output")

// functions

function order(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);

    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    o1 = Math.min(first, second, third, fourth, fifth, six);

    if(o1 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o1 === second){
        first = first;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o1 === third){
        first = first;
        second = second;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o1 === fourth){
        first = first;
        second = second;
        third = third;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o1 === fifth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        fifth = sixth;
    }
    else if(o1 === sixth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        fifth = fifth;
    }

    o2 = Math.min(first, second, third, fourth, fifth);

    if(o2 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o2 === second){
        first = first;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o2 === third){
        first = first;
        second = second;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o2 === fourth){
        first = first;
        second = second;
        third = third;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o2 === fifth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        fifth = sixth;
    }
    
    o3 = Math.min(first, second, third, fourth);

    if(o3 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o3 === second){
        first = first;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o3 === third){
        first = first;
        second = second;
        third = fourth;
        fourth = fifth;
    }
    else if(o3 === fourth){
        first = first;
        second = second;
        third = third;
        fourth = fifth;
    }
    else if(o3 === fifth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
    }
}

function median(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);

    output.innerHTML="";

    var mid2 = one;
    if(mid2 < two){
        mid2 = two;
    }
    if(mid2 < three){
        mid2 = three;
    }
    if(mid2 < four){
        mid2 = four;
    }
    if(mid2 > five){
        mid2 = five;
    }
    if(mid2 > six){
        mid2 = six;
    }
    var mid = one;
    if(mid < two){
        mid = two;
    }
    if(mid < three){
        mid = three;
    }
    if(mid > four){
        mid = four;
    }
    if(mid > five){
        mid = five;
    }
    if(mid > six){
        mid = six;
    }
    output.innerHTML = (mid2-mid)/2+mid;
}

function largest(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);

    var largest = first;
    if(largest < second){
        largest = second;
    }
    if(largest < third){
        largest = third;
    }
    if(largest < fourth){
        largest = fourth;
    }
    if(largest < fifth){
        largest = fifth;
    }
    if(largest < sixth){
        largest = sixth;
    }
    output.innerHTML = largest;
}

function smallest(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);

    var largest = first;
    if(largest > second){
        largest = second;
    }
    if(largest > third){
        largest = third;
    }
    if(largest > fourth){
        largest = fourth;
    }
    if(largest > fifth){
        largest = fifth;
    }
    if(largest > sixth){
        largest = sixth;
    }
    output.innerHTML = largest;
}

function mean(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);

    var numStr = (first + second + third + fourth + fifth + sixth)/6;
    output.innerHTML = numStr;
}

function mode(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);

    
}

function range(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);

    
}

function duplicate(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);
    output.innerHTML = "";
    
    if(first === second || first === third || first === fourth || first === fifth || first === sixth){
        output.innerHTML += " "+first;
    }
    if(second === third || second === fourth || second === fifth || second === sixth){
        output.innerHTML += " "+second;
    }
    if(third  === fourth || third === fifth || third === sixth){
        output.innerHTML += " "+third;
    }
    if(fourth === fifth || fourth === sixth){
        output.innerHTML += " "+fourth;
    }
    if(fifth === sixth){
        output.innerHTML += " "+fifth;
    }
    if(first === second && third && fourth && fifth && sixth){
        output.innerHTML += ""
    }
}

function unique(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);
    output.innerHTML = "";

    if(first !== second && first !== third && first !== fourth && first !== fifth && first !== sixth){
        output.innerHTML += " "+first;
    }
    if(second !== first && second !== third && second !== fourth && second !== fifth && second !== sixth){
        output.innerHTML += " "+second;
    }
    if(third !== first && third !== second && third !== fourth && third !== fifth && third !== sixth){
        output.innerHTML += " "+third;
    }
    if(fourth !== first && fourth !== second && fourth !== third && fourth !== fifth && fourth !== sixth){
        output.innerHTML += " "+fourth;
    }
    if(fifth !== first && fifth !== second && fifth !== third && fifth !== fourth && fifth !== sixth){
        output.innerHTML += " "+fifth;
    }
    if(sixth !== first && sixth !== second && sixth !== third && sixth !== fourth && sixth !== fifth){
        output.innerHTML += " "+sixth;
    }
}