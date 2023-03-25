//Q1. Write the code to access element which is having id as "text"

let text=document.getElementById('text')
function callId(){
    console.log(text.innerHTML)
}

//Q2. Write the code to access element which is having tag as "h1"

let H=document.getElementsByTagName('h1')
function callTag(){
    console.log(H[0].innerText)
}

//Q3. Write the code to access element which is having class as "box"

let box=document.getElementsByClassName('box')
function callTagBox(){
    console.log(box[0].innerHTML);
}


//Q4. <h1>Hello </h1>
// Change the heading from "Hello" to "Hello World" using DOM functions


let head = document.getElementsByTagName('h1')
function callChange(){
    console.log(head[0]);
    head[1].innerHTML = "Hello World"
}


// Q5. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"


let old= document.getElementById('old');
let newText = "Welcome to Elevation academy";
function replaceMe(){
    console.log(old.innerText);
    old.innerText = newText;
}

// Q6. <h1>Hello </h1>

// Add one style attribute and give text color as red and id attribute and give the id value as "heading" in the above given h1 tag using DOM functions


// Get the h1 element
let h1elem = document.querySelectorAll('h1');
// Set the style attribute to red text color
h1elem[2].style.color = 'red';
// Set the id attribute to "heading"
h1elem[2].setAttribute('id', 'heading');

// Q7. Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

let parent=document.querySelector('.parent');
let button1= document.querySelector('#check');
let count = 0;

button1.addEventListener('click',() =>{
    if(count % 2 === 0){
    parent.setAttribute('style','flex-direction: column');
    
    }
    else {
        parent.setAttribute('style','flex-direction: row');   
    }
    count++;
})

// Q9. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

let head2= document.querySelector('h2');
function theClock(){
    let present = new Date();
    let hrs = present.getHours() ;
    let mins = present.getMinutes() ;
    let secs = present.getSeconds() ;
    let clock = ` ${hrs} : ${mins} : ${secs}`   
    head2.innerHTML= clock
    
}
setInterval(() =>{
    theClock();
},1000) 












