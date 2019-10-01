process.stdin.resume();
process.stdin.setEncoding('utf8');

console.log('How old are you? ');
process.stdin.on('data', (number) => {
    if(typeof number === "number"){
        console.log("Is not a number");
    }else if(number > 99){
        console.log("you are not so old");
    }else if(number < 0){
        console.log("You can not have a negative or no age");
    }else{
        number = 2019 - number;
        console.log('You were born in' + number);
    }
  process.exit();
})