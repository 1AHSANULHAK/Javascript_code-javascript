console.log("We in conditional Operator. ");
const age = 288;
/*if(age == 18){
    console.log('Age is 18');
}else if(age==90){
    console.log("age is 90 ");
}
    else if(age ==65){
        console.log("age is 65");
    } 
        
else{
console.log('Age is greater than 18');

}
doesDrive=false;

if(doesDrive && age<=19)

{
console.log("You can drive ");

}
else{

    console.log("you cannot drive ");
}*/

switch(age){
    case 18:
        console.log("You are 18");
        break;
        case 19:
            console.log("you are 19");
            break;
            case 28:
                console.log("you are 28");
                break;
                default:
                    console.log("you are unknown");
                    break;



}