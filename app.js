process.stdin.resume();
process.stdin.setEncoding('utf8');

console.log('How old are you? ');
process.stdin.on('data', (nbr) => {
    if(nbr > 0 && nbr <100){
        nbr = 2019 - nbr;
        console.log('You were born in ' + nbr);
    }else if(nbr > 99){
        console.log("you are not so old");
    }else if(nbr < 0){
        console.log("You can not have a negative or no age");
    }else{
        console.log("Is not a number");
    }
  process.exit();
})