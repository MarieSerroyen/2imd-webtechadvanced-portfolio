import Todo from "./Todo.js";

export default class App {
    constructor() {
      this.setupEventListeners();
      this.loadFromStorage();
    }
  
    setupEventListeners() {
      document.querySelector("#add-item-text").addEventListener("keyup", this.createItem.bind(this));
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
      let todos = JSON.parse(localStorage.getItem('todos'));    
      //console.log(todos);      

        if(todos !== null) {
            //console.log("hello");
          todos.forEach((title) => {
              let todo = new Todo(`${title['priority']}:${title['title']}`);
              if(title['done'] === "done"){
                todo.add("done");
              }
              else {
                todo.add();
              }              
          });
        }
    }
  
    reset() {
      document.querySelector('#add-item-text').value = "";
    }
  }
  