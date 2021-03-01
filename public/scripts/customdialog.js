//import {factory} from './purify.js'

let alertButton = document.getElementById('alert');
let confirmButton = document.getElementById('confirm');
let promptButton = document.getElementById('prompt');

let alertDialog = document.getElementById('alertDialog');
let confirmDialog = document.getElementById('confirmDialog');
let promptDialog = document.getElementById('promptDialog');

alertButton.addEventListener('click', () => {
    if (typeof alertDialog.showModal === "function"){
        const output = document.querySelector('output');
        output.innerHTML = "";

        alertDialog.showModal();
    }
    else{
        alert("this browser does not support <dialog>")
    }
})
confirmButton.addEventListener('click', () => {
    if (typeof alertDialog.showModal === "function"){
        const output = document.querySelector('output');
        output.innerHTML = "";

        confirmDialog.showModal();
    }
    else{
        alert("this browser does not support <dialog>")
    }
})
promptButton.addEventListener('click', () => {
    if (typeof alertDialog.showModal === "function"){
        const output = document.querySelector('output');
        output.innerHTML = "";

        promptDialog.showModal();
    }
    else{
        alert("this browser does not support <dialog>")
    }
})

function alertLogic(dialog){

    dialog.addEventListener('close', () => {
        const output = document.querySelector('output');
        output.innerHTML = "You clicked an alert!!!";
        
    })

}
function confirmLogic(dialog){

    dialog.addEventListener('close', () => {
        const answer = dialog.returnValue;
        const output = document.querySelector('output');
        if(answer){
            output.innerHTML = "The value returned by the confirm method is : Yes";
            
        }
        else{
            output.innerHTML = "The value returned by the confirm method is : No";

        }
        
    })

}

function promptLogic(dialog){

    dialog.addEventListener('close', () => {
        const output = document.querySelector('output');
        const text = document.querySelector('#promptDialog input')
        let answer = dialog.returnValue;

        if(answer == ""){
            output.innerHTML = "User didn't enter anything";
            
        }
        else{
            answer = getCleanInput(text.value);
            //answer = DOMPurify.sanitize(answer);
            output.innerHTML = `The value returned by the prompt method is : ${answer}`;

            //<b onmouseover="alert('pawned')">Roll Me!!</b>
        }
    })

}

alertLogic(alertDialog);
confirmLogic(confirmDialog);
promptLogic(promptDialog);