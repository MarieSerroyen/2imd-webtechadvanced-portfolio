export default class Todo {
    constructor(title) { //zoals first en lastname
      // HINT🤩
      // use a constructor to set basic property values
      this.title = title;
    }
  
    createElement() {

      let li = document.createElement("li");
      let inputValue = document.querySelector("#add-item-text").value;

      const prior = this.title.indexOf(":");
      const result = this.title.substring(0, prior);
      //console.log(result);

      switch(result){
        case "high":
          li.classList.add("prior-high");
          inputValue = inputValue.replace("high:", "");
          //console.log(inputValue);
          break;
        case "low":
          li.classList.add("prior-low");
          inputValue = inputValue.replace("low:", "");
          break;
        default:
          li.classList.add("prior-medium");
          inputValue = inputValue.replace("medium:", "");
          break;
      }

      li.innerHTML = inputValue;
      li.addEventListener("click", this.markDone.bind(li));
      return  li;  

    }
  
    markDone(e) {
      // HINT🤩
      // this function should mark the current todo as done, by adding the correct CSS class
      // if the item is clicked, but was already marked as done, remove the item from the list

      //console.log("click");
      //this.classList.add("done");
      if (this.className.includes("done")) {
        //console.log("has already been clicked");
        this.remove();
        let todos = localStorage.getItem('todos');
        todos = JSON.parse(todos);
        let todoElement = this.innerHTML;
        let index = todos.indexOf(todoElement);
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
      }
      else {
        this.classList.add("done");
        //console.log("done");
      }
      
    }
  
    add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      let todo = this.createElement(); // should return a full <li> with the right classes and innerHTML
      document.querySelector("#todo-list").appendChild(todo);
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify

      let todos = localStorage.getItem("todos");
      todos = JSON.parse(todos) || [];
      todos.push(this.title);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }
  