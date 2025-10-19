// Name: Koushik Rama
// G#: G01508456

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days*24*60*60*1000);
  document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + expires.toUTCString() + ";path=/";
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if(match) return decodeURIComponent(match[2]);
  return null;
}

function getGreeting(name) {
  const hour = new Date().getHours();
  let greeting = "Good Evening";
  if(hour < 12) greeting = "Good Morning";
  else if(hour < 18) greeting = "Good Afternoon";
  return `${greeting} ${name}, welcome to CS Department Survey!`;
}

function askName() {
  const name = prompt("Please enter your name:");
  if(name && name.trim() !== "") {
    setCookie("username", name.trim(), 7);
    location.reload();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const username = getCookie("username");
  const greetingDiv = document.getElementById("greeting");

  if(username) {
    greetingDiv.innerHTML = `${getGreeting(username)} <a href="#" id="changeName">Are you not ${username}?</a>`;
    document.getElementById("changeName").addEventListener("click", function(e){
      e.preventDefault();
      askName();
    });
  } else {
    askName();
  }
});