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


// const addTaskBtn = document.querySelector("#addTaskBtn");
// addTaskBtn.addEventListener("click", myFunction);

const taskInput = document.querySelector("#taskInput");
addTaskBtn.addEventListener("click", myFunction);
function myFunction() {
  const box1 = document.querySelector(".box1");
  const box2 = document.querySelector(".box2");
  const box3 = document.querySelector(".box3");

  clickCount++;

  if (clickCount === 1) {
    box1.textContent = taskInput.value;
    taskInput.value = ""
  } else if (clickCount === 2) {
    box2.textContent = taskInput.value;
    taskInput.value = ""
  } else if (clickCount === 3) {
    box3.textContent = taskInput.value;
    taskInput.value = ""
  }
}

    

// const addTaskBtn1 = document.querySelector("#addTaskBtn")
//     addTaskBtn.addEventListener("click",myfunction1)

//     function myfunction1(){
//         document.querySelector(".box1").innerHTML = "bye"
//     }
