//Question 1:


var word = prompt("Enter your name & num");
for(i = word.length -1 ; i >=0 ; i--){
    console.log(word[i])
}



function data(x) {
      
    //Here i will used toString to convert number on string and split and join 
    var y = x.toString().split("").reverse().join("");
    console.log(y);
    
};

// call function on arguments
data(32243);

//Question 2
var word = prompt("Enter your word ");
var check = "";
for(var i= word.length -1; i >=0 ; i--){   //for (i=0; i<= 10 ; i++)
}if(check === word){
    console.log(word+ " " + "word is plandrome");
}else{
    console.log("your word is not plandrome");
}

//Question 3

 let possibleCombinations = (str) =>{
    let combinations = [];
      for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i , j));
        }
    }
   return combinations;
}
document.write(possibleCombinations('saqib'));

//Question 4
function con(str){
    let list_of_string =[];
    for(i=0; i< str.length; i++){
        for(j=i + 1; j< str.length + 1; j++){
            list_of_string.push(str.slice(i , j));
        }
  
    } return list_of_string;

}


// Question 5

var word = prompt("Enter your name ");
var fChar = word.slice(0,1);
var otherChar = word.slice(1);
fChar = fChar.toUpperCase();
otherChar = otherChar.toLowerCase();
var word = fChar + otherChar ;
console.log(word);

function big(){

    var sentence = "the jump brown fox ";
    sentence = sentence.split("");
    for(i=0;i < sentence.length;i++){
        console.log(sentence[i][0].toUpperCase);
    }
}

big();


// Question 6

function vowle(str) {

    var vowel_list = "oieuaAIOUE";
    var vacc = 0;
    for(j=0;j<str.length;j++){
        if(vowel_list.indexOf(str[j]) !== -1){
            vacc += 1;
        }
    } return vacc;
    
}console.log("the quick fox");


