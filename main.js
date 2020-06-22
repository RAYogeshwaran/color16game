
for(let i = 0 ; i<16 ;i++){
    let box = document.createElement('div');
    box.className = "smallBox"
    document.getElementById('box').append(box)
} 
 const divs = document.querySelectorAll('.smallBox')
console.log(divs)

function randomNumber() {
    return Math.floor(Math.random() * 256)
} 

function randomColor(){
    return 'rgb('+randomNumber()+','+randomNumber()+','+randomNumber()+')';
}
 for(let i = 0;i<divs.length;i++) {
     divs[i].onclick = function (e) {
         e.target.style.backgroundColor = randomColor()
         
     }
 }



