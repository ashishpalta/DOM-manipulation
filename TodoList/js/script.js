const addTaskBtn = document.getElementById("addTask");
const taskContainer = document.getElementById("taskContainer");
const inputTask = document.getElementById("inputTask");

addTaskBtn.addEventListener("click", function () {
  let addTask = document.createElement("div");
  addTask.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  addTask.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.classList.add("checkTask");
  checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
  addTask.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteTask");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  addTask.appendChild(deleteButton);

  if (inputTask.value === "") {
    alert("Please Enter a task");
  } else {
    taskContainer.appendChild(addTask);
  }

  inputTask.value = "";

  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through";
  });

  deleteButton.addEventListener("click", function (e) {
    let target = e.target;
    console.log(target);
    target.parentElement.parentElement.remove();
  });
});
