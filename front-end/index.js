// let isFirstClick = true;

// const addTaskBtn = document.querySelector("#addTaskBtn");
// addTaskBtn.addEventListener("click", myFunction);

// function myFunction() {
//   const box1 = document.querySelector(".box1");
//   const box2 = document.querySelector(".box2");
//   const box3 = document.querySelector(".box3");


//   if (isFirstClick) {
//     box1.textContent = "Hello world";
//     isFirstClick = false;
//   } else if (box1 = box1.textContent) {
//     box2.textContent = "Bye";
//   } else if (box2 = box2.textContent) {
//     box3.textContent = "GOOD MORNING";
//   }
// }
let clickCount = 0;

const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn"); // Add the missing declaration for the "addTaskBtn"
const reload = document.querySelector("#reload")

addTaskBtn.addEventListener("click", myFunction);

function myFunction() {
  const box1 = document.querySelector(".box1");
  const box2 = document.querySelector(".box2");
  const box3 = document.querySelector(".box3");
  const box4 = document.querySelector(".box4");
  const box5 = document.querySelector(".box5");
  const box6 = document.querySelector(".box6");
  const box7 = document.querySelector(".box7");

  clickCount++;

  if (clickCount === 1) {
    box1.textContent = taskInput.value;
    taskInput.value = "";
  } else if (clickCount === 2) {
    box2.textContent = taskInput.value;
    taskInput.value = "";
  } else if (clickCount === 3) {
    box3.textContent = taskInput.value;
    taskInput.value = "";
  } else if (clickCount === 4) {
    box4.textContent = taskInput.value;
    taskInput.value = "";
  } else if (clickCount === 5) {
    box5.textContent = taskInput.value;
    taskInput.value = "";
  } else if (clickCount === 6) {
    box6.textContent = taskInput.value;
    taskInput.value = "";
  } else if (clickCount === 7) {
    box7.textContent = taskInput.value;
    taskInput.value = "";
  }
}

reload.addEventListener("click",function(){
    window.location.reload();
})
    

// const addTaskBtn1 = document.querySelector("#addTaskBtn")
//     addTaskBtn.addEventListener("click",myfunction1)

//     function myfunction1(){
//         document.querySelector(".box1").innerHTML = "bye"
//     }
