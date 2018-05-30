
var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
    todo: [],
    completed: []
  };

// Remove and complete icons in SVG format
var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';
var saveSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="488.446px" height="488.446px" viewBox="0 0 488.446 488.446" style="enable-background:new 0 0 488.446 488.446;" xml:space="preserve"> <g> <g> <g> <path class="fillColor" d="M153.029,90.223h182.404c5.427,0,9.873-4.43,9.873-9.869V0H143.137v80.354C143.137,85.793,147.571,90.223,153.029,90.223 z"/> <path class="fillColor" d="M480.817,122.864L377.88,19.494v60.859c0,23.404-19.043,42.447-42.447,42.447H153.029 c-23.409,0-42.447-19.043-42.447-42.447V0H44.823C20.068,0,0.002,20.07,0.002,44.808v398.831 c0,24.736,20.066,44.808,44.821,44.808h398.813c24.74,0,44.808-20.068,44.808-44.808V141.325 C488.444,134.392,485.698,127.758,480.817,122.864z M412.461,385.666c0,14.434-11.703,26.154-26.168,26.154H102.137 c-14.451,0-26.153-11.722-26.153-26.154V249.303c0-14.43,11.702-26.148,26.153-26.148h284.156 c14.465,0,26.168,11.72,26.168,26.148V385.666z"/> <path class="fillColor" d="M356.497,265.131H131.949c-9.008,0-16.294,7.273-16.294,16.28s7.286,16.28,16.294,16.28h224.549 c8.988,0,16.277-7.273,16.277-16.28S365.487,265.131,356.497,265.131z"/> <path class="fillColor" d="M323.936,330.264H164.508c-8.994,0-16.28,7.273-16.28,16.28c0,8.989,7.286,16.28,16.28,16.28h159.427 c8.994,0,16.281-7.291,16.281-16.28C340.217,337.537,332.93,330.264,323.936,330.264z"/> </g> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>';
var editSVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;" xml:space="preserve"> <g> <path class = "fillColor" d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z"/></svg>';
renderTodoList();

// User clicked on the add button
// If there is any text inside the item field, add that text to the todo list
document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if(value){
        addItem(value);
    }
});

document.getElementById('item').addEventListener('keydown', function (e) {
    var value = this.value;
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && value) {
      addItem(value);
    }
  });

function addItem(value) {
	addItemToDOM(value);
	document.getElementById('item').value = '';

	data.todo.push(value);
	dataObjectUpdated();
}

function renderTodoList() {
    if (!data.todo.length && !data.completed.length) return;

    for (var i = 0; i < data.todo.length; i++) {
        var value = data.todo[i];
        addItemToDOM(value);
    }

    for (var j = 0; j < data.completed.length; j++) {
        var value = data.completed[j];
        addItemToDOM(value, true);
    }
}

function dataObjectUpdated() {
    localStorage.setItem('todoList', JSON.stringify(data));
}

function saveItem() {
    var item = this.parentNode.parentNode;
    var child = item.childNodes[0];
    var value = child.value;
    var index = data.todo.indexOf(value);
    console.log(index);


    // data.todo.push(value);
	// dataObjectUpdated();
}

function editItem() {
    var item = this.parentNode.parentNode;
    item.classList = 'itemSave';

    var input = document.createElement('INPUT');
    input.setAttribute('type','text');
    input.setAttribute('value',item.innerText);

    item.innerText='';
    item.appendChild(input);

    var divBtn = document.createElement('DIV');
    divBtn.classList = 'buttons button-save';
    item.appendChild(divBtn);

    var buttons = document.createElement('BUTTON');
    buttons.classList = 'save';
    buttons.innerHTML = saveSVG;
    divBtn.appendChild(buttons);

    buttons.addEventListener('click',saveItem);
}

function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;
    
    if (id === 'todo') {
        data.todo.splice(data.todo.indexOf(value), 1);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);      
    }
    dataObjectUpdated();

    parent.removeChild(item);
}

function completeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;

    if (id === 'todo') {
        data.todo.splice(data.todo.indexOf(value), 1);
        data.completed.push(value);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
        data.todo.push(value);       
    }
    dataObjectUpdated();

    // Check if the item should be added to the completed list or to re-added to the todo list
    var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}
// Adds a new item to the todo list
function addItemToDOM(text, completed){
    var list = (completed) ? document.getElementById('completed'):document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;
    
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var edit = document.createElement('button');
    edit.classList.add('edit');
    edit.innerHTML = editSVG;

    //add click event for editing the item
    edit.addEventListener('click',editItem);

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;

    //add click event for removing the item
    remove.addEventListener('click',removeItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeSVG;

    //add click event for completing the item
    complete.addEventListener('click',completeItem);

    buttons.appendChild(edit);
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);
    list.insertBefore(item, list.childNodes[0]);
}