
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const cDate = new Date();
const crntWeekDays = days[cDate.getDay()];
const cTrik = cDate.getDate();
const cMonth = months[cDate.getMonth()];
const year = cDate.getFullYear();

const cDayDate = cDate.toDateString();
const cTime = cDate.toLocaleTimeString();

const currnetDate = `${cMonth} ${cTrik} ${year}`;

document.getElementById("crntDay").innerText = `${crntWeekDays} ,`;
document.getElementById("crntDate").innerText = currnetDate;

const taskBtns = document.querySelectorAll(".task-btn");
let disabledCount = 0;
for (const taskBtn of taskBtns) {
    taskBtn.addEventListener("click" , function(ev){
        const taskCount = getDataById("task-count");
        const updateTaskCount = taskCount - 1;
        document.getElementById("task-count").innerText = `0${updateTaskCount}`;
        
        const allTaskCount = getDataById("all-task-count");
        const updateAllTaskCount = allTaskCount + 1;
        document.getElementById("all-task-count").innerText = updateAllTaskCount;
        
        const taskTitle = ev.target.parentNode.parentNode.firstElementChild.nextElementSibling.innerText;

        const container = document.getElementById("history");
        const div = document.createElement("div")
        div.innerHTML = `<div class="bg-slate-200 p-4 rounded-xl mb-3">
                            <h1>You have Complete The Task ${taskTitle} at ${cTime}</h1>
                        </div>`;
        container.classList.remove("hidden")
        container.appendChild(div);
        taskBtn.disabled = true;
        taskBtn.classList.add("disabled:opacity-75")

            // if (taskBtn.disabled === true) {
                disabledCount++;
            // }
            alert("Board Updated Successfully");
            if (taskBtns.length === disabledCount) {
                alert("Congrats!!! You Completed your All Tasks.")
            }
    })
} 

document.getElementById("hishBtn").addEventListener("click" , function (ev) {
    const historyContainer = document.getElementById("history")
    historyContainer.innerHTML = "";
})

document.getElementById("hexCode").addEventListener("click" , function(ev) {
    const hexCode = hexColorCode() 
    document.getElementById("mainTheme").style.backgroundColor = hexCode;
})