var favouriteBook ="bangla";

// arry
var favouriteBookList=["bangla","math","english","marketing"];

var BanglaIndex=favouriteBookList.indexOf("bangla");

console.log(BanglaIndex);

favouriteBookList[1]="aribi",
favouriteBookList.push("small Giants");

favouriteBookList.pop();

// conditionals

if(favouriteBookList[1] =="math"){
               console.log("right")
}
else{
               console.log("wrong")

}

// loop

// while loop
var i =0; //loop variable

while(i<15){
               console.log(i);
               console.log('looping');
               i++;
}

// for loop
for (var i =0 ; i<15 ;i++){
               console.log(i);
}