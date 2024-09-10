const inputArea = document.querySelector('#input-box');
const taskArea = document.querySelector('#tasklists');

function addTask(){
    if(inputArea.value.trim() === ''){
        window.alert("You must write something!");
    } else {
        let li = document.createElement('li');
        li.innerText=inputArea.value;
        taskArea.append(li);
        let span = document.createElement('span');
        span.innerText='x';
        li.append(span);
    }
    inputArea.value='';
    StoreData()
}

taskArea.addEventListener('click',function(e){
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
    StoreData()
}
)

function StoreData() {
    localStorage.setItem("data",taskArea.innerHTML);
}

function showData() {
    taskArea.innerHTML=localStorage.getItem("data");
}

//Responsive design script



showData();

