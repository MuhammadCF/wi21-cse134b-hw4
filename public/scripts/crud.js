const addBtn = document.getElementById("addBtn");
const entries = document.getElementById("entries");

const addDialog = document.getElementById("addDialog");
const editDialog = document.getElementById("editDialog");
const deleteDialog = document.getElementById("deleteDialog");

let storage = [];


storage[0] = {
    title: "10 best noodle recipes",
    date: "1/3/2021",
    sum: "curated collection of recipes for noodles from different cultures"
}

storage[1] = {
    title: "10 best operating systems",
    date: "1/3/2021",
    sum: "curated collection of highly popular OS"
}
let activeId = 2;
let editId = 0;
let deleteId = 0;


addBtn.addEventListener('click', () => {
    if (typeof addDialog.showModal === "function"){
        

        addDialog.showModal();
    }
    else{
        alert("this browser does not support <dialog>")
    }
})

function addLogic(dialog){

    dialog.addEventListener('close', () => {
    
        let title = document.querySelector('#addDialog .title')
        const date = document.querySelector('#addDialog .date')
        let summary = document.querySelector('#addDialog .summary')
        let answer = dialog.returnValue;

        if(answer == ""){
            
        }
        else{
            title = getCleanInput(title.value);
            summary = getCleanInput(summary.value);

            addEntry(title,date.value,summary);
            //<b onmouseover="alert('
        }
        
    })

}

function editLogic(dialog){

    dialog.addEventListener('close', () => {
    
        let title = document.querySelector('#editDialog .title')
        const date = document.querySelector('#editDialog .date')
        let summary = document.querySelector('#editDialog .summary')
        let answer = dialog.returnValue;

        if(answer == ""){
            
        }
        else{
            title = getCleanInput(title.value);
            summary = getCleanInput(summary.value);

            editEntry(title,date.value,summary);
            //<b onmouseover="alert('
        }
        
    })

}

function deleteLogic(dialog){

    dialog.addEventListener('close', () => {
    
        
        let answer = dialog.returnValue;

        if(answer == ""){
            
        }
        else{
            
            deleteEntry();
            //<b onmouseover="alert('
        }
        
    })

}




//New Task List Item
var createNewEntry = function () {
    
    var listItem = document.createElement("li");
    //listItem.setAttribute("id", idCounter);

    var content = document.createElement("span");

    //input (text)
    var editButton = document.createElement("button"); 

    //button.delete
    var deleteButton = document.createElement("button");


    editButton.classList.add("editBtn");
    editButton.classList.add("icon-pencil");
    editButton.textContent = "Edit";

    deleteButton.classList.add("deleteBtn");
    deleteButton.classList.add("icon-trash");
    deleteButton.textContent = "Delete";

    content.classList.add("content");


    listItem.appendChild(content);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);



    return listItem;
};




//Add a new task
var addEntry = function (title, date, sum) {

    var entry = createNewEntry();

    entry.id = activeId;
    
    var text = `${title}-${date}-${sum}`;
    var content = entry.querySelector('span.content');
    content.textContent = text;

    //Append new entry to the list
    entries.appendChild(entry);


    bindEntry(entry);


    storage[activeId] = {
        "title": title,
        "date": date,
        "sum": sum
    }
    //storeTask(taskInput.value);
    //delete the item
    activeId++;

}

var editEntry = function (title, date, sum) {

    var entry = document.getElementById(`${editId}`);
    //Modify listItem
    var text = `${title}-${date}-${sum}`;
    var content = entry.querySelector('span.content');
    content.textContent = text;


    storage[editId] = {
        "title": title,
        "date": date,
        "sum": sum
    };
    //editTask(taskInput.value);
    //delete the item

}

var deleteEntry = function () {

    var entry = document.getElementById(`${deleteId}`);

    entries.removeChild(entry);

    storage[deleteId] = null;
}


var bindEntry = function (entryItem) {


    var deleteButton = entryItem.querySelector("button.deleteBtn");
    var editButton = entryItem.querySelector("button.editBtn");
    //var content = entryItem.querySelector("span.content");
    var id = entryItem.id;


    editButton.addEventListener('click', () => {
        if (typeof editDialog.showModal === "function"){
            
    
            editDialog.showModal();
            editId = id;
        }
        else{
            alert("this browser does not support <dialog>")
        }
    })

    //bind deleteTask to delete button
    deleteButton.addEventListener('click', () => {
        if (typeof deleteDialog.showModal === "function"){
            
    
            deleteDialog.showModal();
            deleteId = id;
        }
        else{
            alert("this browser does not support <dialog>")
        }
    })


};

addLogic(addDialog);
editLogic(editDialog);
deleteLogic(deleteDialog);

