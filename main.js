const toDoList = [];


const inputSearch = document.querySelector('.inputSearch');
const inputAdd = document.querySelector('.inputAdd');
const inputBtn = document.querySelector('.btnInput');
const tasksNumber = document.querySelector('.tasksNumber span')

let tasks = document.querySelector('.tasks ul')






// Adding elements to the list

    addTask = (e)=>{
    e.preventDefault();
    const inputText = inputAdd.value;
    if(inputText === "")return alert("add some task")    
    let task = document.createElement('li');
    toDoList.push(task);
    tasksNumber.textContent = toDoList.length;
    inputAdd.value="";
    task.innerHTML = `${inputText} ${"-"} ${"<button>Delete</button>"}`
    task.querySelector('button').addEventListener('click', remove)
    key()
    console.log(toDoList)
}

inputBtn.addEventListener('click', addTask)

// Assigning id to the array elements
const key=()=>{
        toDoList.forEach((toDoElement, key) =>{
        toDoElement.id = key;
        tasks.appendChild(toDoElement)

    })}

// Removing elements from the list

const remove = (e)=>{
    e.target.parentNode.remove();
    const index = e.target.parentNode.id;
    toDoList.splice(index,1)
    tasksNumber.textContent = toDoList.length
    console.log(toDoList)
    key()
}

// Search engine

const search = (e)=>{
   let inputSearchText = e.target.value.toUpperCase() 
   let items = toDoList;
   items = items.filter(items => items.textContent.toUpperCase().includes(inputSearchText))

   tasks.textContent = "";

   items.forEach(li=> tasks.appendChild(li))

}

inputSearch.addEventListener('input',search)

