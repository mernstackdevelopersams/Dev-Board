const colors = ['#CFCFCF', '#7D7D7D', '#FFD700', '#4CAF50', '#1E90FF', '#FF69B4'];

let i = 0;

document.getElementById('theme-btn').addEventListener('click', (event) => {

    event.preventDefault()
    document.body.style.backgroundColor = colors[i]

    if (i >= colors.length) {
        i = 0;
    }
    i++;

});


document.getElementById('discover').addEventListener('click', function() {
    window.location.href = './blog.html'
})


const d = new Date();

const day = d.toLocaleDateString("en-US", { weekday: "short" });
const month = d.toLocaleDateString("en-US", { month: "short" });
const date = d.getDate();
const year = d.getFullYear();


const formatted = `${day},<br><b>${month} ${date} ${year}</b>`;

document.getElementById('date').innerHTML = formatted;




// document.getElementById('status-done1').addEventListener('click', function () {
//     let taskDone = parseInt(document.getElementById('task-done').innerText);
//     const taskCompleted = parseInt(document.getElementById('task-completed').innerText);


//     if (taskDone > 0) {
//         const subtract = taskDone - 1;
//         document.getElementById('task-done').innerText = subtract;
//         const sum = taskCompleted + 1;
//         document.getElementById('task-completed').innerText = sum;
//     }
//     else {
//         alert('Please check your tasks');
//     }

// }) 
// document.getElementById('status-done2').addEventListener('click', function () {
//     let taskDone = parseInt(document.getElementById('task-done').innerText);
//     const taskCompleted = parseInt(document.getElementById('task-completed').innerText);


//     if (taskDone > 0) {
//         const subtract = taskDone - 1;
//         document.getElementById('task-done').innerText = subtract;
//         const sum = taskCompleted + 1;
//         document.getElementById('task-completed').innerText = sum;
//     }
//     else {
//         alert('Please check your tasks');
//     }

// }) 



// const tasks = document.querySelectorAll('.tasks-name').innerText;
// const clock = new Date()
// const time = clock.toLocaleTimeString()


let buttons = document.querySelectorAll('.status');

const totalTask = document.getElementById('task-done');
const completedTask = document.getElementById('task-completed');

let total = parseInt(totalTask.innerText);
let completed = parseInt(completedTask.innerText);

const activity = document.getElementById('activity');

for (let button of buttons) {
    button.addEventListener('click', function (event) {

         event.preventDefault()

        if (!button.disabled) {

            total--;
            totalTask.innerText = total;

            completed++;
            completedTask.innerText = completed;

            button.disabled = true;

            // সময় event-এর সময় নাও
            const time = new Date().toLocaleTimeString();

            // 🔥 মূল অংশ: এই বাটনের নিজের card থেকে task-name নাও
            const taskName = button.closest('.task-card').querySelector('.tasks-name').innerText;

            const div = document.createElement('div');
            div.classList.add('log');

            div.innerHTML = `<p>You have completed the task "${taskName}" at ${time}</p>`;

            activity.appendChild(div);
        }
    });
}



document.getElementById('btn-clear-history').addEventListener('click', function () {
    document.getElementById('activity').innerText = '';
})


