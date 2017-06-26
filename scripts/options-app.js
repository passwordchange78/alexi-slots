'use strict';

function insertNewUser() {
  var form = document.createElement('form');
  var label = document.createElement('label');
  var selectUser = document.getElementById('selectUser');
  var button = document.createElement('button');
  form.setAttribute('id', 'newUser');
  var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'userNameSelected');
  input.setAttribute('value', 'Enter your name');
  // input.setAttribute('pattern', /^[a-zA-Z\-]+$/);
  label.textContent = 'New User';
  form.appendChild(label);
  form.appendChild(input);
  button.setAttribute('id', 'addNewUser');
  button.textContent = 'Start Playing';
  form.appendChild(button);
  selectUser.appendChild(form);
}

function insertPastUsers() {
  var form = document.createElement('form');
  var label = document.createElement('label');
  var selectUser = document.getElementById('selectUser');
  var button = document.createElement('button');
  form.setAttribute('id', 'pastUsers');
  label.textContent = 'Select the User';
  var select = document.createElement('select');
  select.setAttribute('name', 'userNameSelected');
  var allusers = Data.getAllUsers();
  for(var i = 0; i < allusers.length; i++){
    var each = allusers[i];
    var option = document.createElement('option');
    option.setAttribute('value', each.userName);
    option.textContent = each.userName;
    select.appendChild(option);
  }
  form.appendChild(label);
  form.appendChild(select);
  button.setAttribute('id', 'showPastUsers');
  button.textContent = 'Play';
  form.appendChild(button);
  selectUser.appendChild(form);
};

insertPastUsers();
insertNewUser();

var addNewUserButton = document.getElementById('addNewUser');
var showPastUsersButton = document.getElementById('showPastUsers');
var pastUsersForm = document.getElementById('pastUsers');
var newUserForm = document.getElementById('newUser');

console.log(newUserForm);

addNewUserButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (checkIfValid(newUserForm.userNameSelected)){
    var newUser = new User(newUserForm.userNameSelected.value);
    Data.saveUser(newUser);
    console.log(newUserForm.userNameSelected.value);
  };
});

showPastUsersButton.addEventListener('click', function(event) {
  event.preventDefault();
  console.log(pastUsersForm.userNameSelected.value);
});



function checkIfValid(formInput) {
  var validUsername = formInput.value.match(/^[a-zA-Z\-]+$/);
  if (validUsername === null){
    alert("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
    formInput.focus();
    return false;
  };
  return true;
};




// <button id="startPlaying">Play</button>
// var playButton = document.getElementById('startPlaying');
// playButton.addEventListener('click', function(event){
//   var formShowing = document.getElementById(currentOptionShowing);
//   console.log(formShowing);
// });
