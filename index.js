const card = document.querySelectorAll('.card');
let number = 1;

function change(){
    for(let i = 0; i < card.length; i++){
        card[i].style.display = 'none' 
    }
    card[number-1].style.display = 'flex' ;
    number++
    if(number > card.length){
       number = 1
    }   
}
setInterval(change,2000)








