import Todo from "./Todo.js";

export default class App {
    constructor() {
      //console.log("🍕");
      // HINT🤩
      // set up the enter Key
      this.setupEventListeners();
      // when the app loads, we can show previously saved items from localstorage
      this.loadFromStorage();
    }
  
    setupEventListeners() {
      //console.log("👂🏽");
      // HINT🤩
      document.querySelector("#add-item-text").addEventListener("keyup", this.createItem.bind(this)); //ik geef de huidige betekenis van this door

    }
  
    createItem(e) {
      if(e.key === "Enter") {
        //console.log("📕");
        let todoValue = document.querySelector("#add-item-text").value;
        let todo = new Todo(todoValue);
        todo.add();
        todo.saveToStorage();
        this.reset();
      }  
    }
  
    loadFromStorage() {
      // HINT🤩
      // load all items from storage here and add them to the screen
      // use the Todo class to create the elements

      let todos = JSON.parse(localStorage.getItem('todos'));    
      let doneTodos = JSON.parse(localStorage.getItem('doneTodos')); 
      //console.log(todos);      

        if(todos !== null) {
            //console.log("hello");
          todos.forEach((title) => {
              let todo = new Todo(`${title['priority']}:${title['title']}`);
              todo.add();
          });
        }

        if(doneTodos !== null) {
          //console.log("hello");
          doneTodos.forEach((title) => {
            let todo = new Todo(`${title['title']}`);
            //todo.classList.add("done");
            todo.add();
            //doneTodos.add("done");
            //doneTodos.classList.add('done');
          });
        }


    }
  
    reset() {
      // this function should reset the form / clear the text field
      document.querySelector('#add-item-text').value = "";
    }

  }
  