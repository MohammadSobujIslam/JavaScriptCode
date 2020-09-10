// var isrun=true
// while(isrun){
//     var rand=Math.floor(Math.random()*50+1)
    
//     if(rand==5){
//         console.log('\nYou are winner and you have got exact number= '+rand+'\n')
//         break;

//     }else{
//         console.log('no match exact number,You have got this number is = '+rand)
//     }
// }


//Now explain infinite loop
for( ; ; ){
    var rand=Math.floor(Math.random()*50+1)
    
    if(rand==5){
        console.log('\nYou are winner and  exact number= '+rand+'\n')
        break;

    }else{
        console.log('no match exact number,this number = '+rand)
    }
}