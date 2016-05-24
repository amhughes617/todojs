
var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementById("add-button"); //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

var createNewTaskElement = function(taskString) {
  var listItem = document.createElement("li");
  //input (checkbox)
  var checkbox = document.createElement("input");
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input");
  //button .edit
  var editButton = document.createElement("button");
  //button .delete
  var deleteButton = document.createElement("button");
  //each of elements needs modification

  //each of elements needs appended
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}

//create new task
var addTask = function() {
  console.log("addTask");
  //when create button is pressed
  //create a new list item from #new-task
  var listItem = createNewTaskElement("some task element");
  incompleteTasksHolder.appendChild(listItem);
  //append to incompleteTasksHolder
}
//edit an existing task
var editTask = function() {
  console.log("editTask");
  //when the edit button is pressed
    // if parent class has class .editMode
      //switch from .editMode
      //label text becomes input's value
    // else switch to .editMode
      //input value becomes label's text
    //toggle .editMode
}
//delete an existing task
var deleteTask = function() {
  console.log("deleteTask");
  //when the button is pressed
    //remove parent list item from the ul
}

//mark a task as complete
var markComplete = function() {
  console.log("markComplete");
  //when the checkbox is checked
    //append the task list item to the #completed-tasks
}
//mark a task as incomplete
var markIncomplete = function() {
  console.log("markIncomplete");
  //when the checkbox is unchecked
    //append the task list item to the #incomplete-tasks
}

var bindTaskEvents = function(taskListItem, checkboxEventHandler) {
  console.log("bind list item events");
  //select it's children
  var checkbox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  //bind editTask to edit button
  editButton.onclick = editTask;
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  //bind taskCompleted to checkbox
  checkbox.onchange = checkboxEventHandler;
}

//set up click handler for the addTask function
addButton.onclick = addTask;

//cylce over incompleteTasksHolder
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
    //bind events to list item's children(taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[i], markIncomplete);
}
//cylce over completedTasksHolder
for (var i = 0; i < completedTasksHolder.children.length; i++) {
  bindTaskEvents(completedTasksHolder.children[i], markComplete);
}
