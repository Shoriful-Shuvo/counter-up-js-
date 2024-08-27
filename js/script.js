// let counter = document.querySelector(".counter")

// console.log(counter.dataset.number);

// let count = 0;


// function counterup() {
//     count++
//     console.log(count);
    
    
// }
// counterup()

// thats for single data


// let counter = document.querySelector(".counter")


// let count = 0;

// function counterup() {
//     count++

//    counter.innerHTML = count ;
    
// if (count==counter.dataset.number) {

//     clearInterval(stop);
// }

// }



 
// let stop = setInterval(function () {
//     counterup();    
// },1000);

// that for multiple data
let counter = document.querySelectorAll(".counter");
let arr = Array.from(counter)

arr.map((item)=>{

let count = 0

function counterup() {
    count++ ;

    item.innerHTML= count;

    if (count== item.dataset.number) {
        clearInterval(stop)
        
    }

    
}


let stop = setInterval(function () {
    counterup();
    
},1000/item.dataset.number)



}

)



// lat r oge aita na dile potek ta elemeny ak ak kore Barte thakbe

