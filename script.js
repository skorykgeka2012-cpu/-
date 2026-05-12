// script.js

import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
  onValue
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


// FIREBASE CONFIG

const firebaseConfig = {
  apiKey: "AIzaSyCBj5tmVjgoGgnxV2-ZSloBngEHP46VF9U",
  authDomain: "site-semia.firebaseapp.com",
  projectId: "site-semia",
  storageBucket: "site-semia.firebasestorage.app",
  messagingSenderId: "900650920990",
  appId: "1:900650920990:web:86e5827c80a23c27dc520f",
  measurementId: "G-37EZY7S57K"
};

// ПОДКЛЮЧЕНИЕ

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);


// СОХРАНЕНИЕ

window.saveTask = function(person){

  let input =
  document.getElementById(person + "Input");

  let text = input.value;

  if(text === "") return;

  push(
    ref(db, person),
    {
      task: text
    }
  );

  input.value = "";

};


// ЗАГРУЗКА

function loadTasks(person){

  const tasksDiv =
  document.getElementById(person + "Tasks");

  onValue(ref(db, person), (snapshot)=>{

    tasksDiv.innerHTML = "";

    snapshot.forEach((child)=>{

      let div =
      document.createElement("div");

      div.className = "task";

      div.innerText =
      child.val().task;

      tasksDiv.appendChild(div);

    });

  });

}


// ЗАГРУЗКА ВСЕГО

loadTasks("nadya");

loadTasks("mom");

loadTasks("dad");

loadTasks("zhenya");

loadTasks("honor");