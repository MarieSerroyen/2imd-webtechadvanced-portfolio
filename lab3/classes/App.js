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
      // pressing the enter key in the text field triggers the createItem function
      // addEventListener("keyup", this.createItem.bind(this));
      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // while testing, feel free to console.log(this) to see what's in it
    }
  
    createItem(e) {
      if(e.key === "Enter") {
        //console.log("📕");
        let todoValue = document.querySelector("#add-item-text");
        let todo = new Todo(todoValue.value);
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
      //console.log(todos);
      
      if(todos !== null) {
        todos.forEach((title) => {
          //console.log("hello");
          let todo = new Todo(title);
          todo.add();
        });
      }

    }
  
    reset() {
      // this function should reset the form / clear the text field
      document.querySelector('#add-item-text').value = "";
    }
  }
  