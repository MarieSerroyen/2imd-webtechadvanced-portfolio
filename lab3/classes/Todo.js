export default class Todo {
    constructor(title, priority, done) { //zoals first en lastname
      // HINT🤩
      // use a constructor to set basic property values
      this.title = title;
      this.priority = priority;
      this.done = done;
    }
  
    createElement() {
      let li = document.createElement("li");

      if(this.title.startsWith("high:")) {
        li.classList.add("prior-high");
        this.title = this.title.replace("high:", "");
        this.priority = "high";
      }
      else if (this.title.startsWith("low:")) {
        li.classList.add("prior-low");
        this.title = this.title.replace("low:", "");
        this.priority = "low";
      }
      else {
        li.classList.add("prior-medium");
        this.title = this.title.replace("medium:", "");
        this.priority = "medium";
      }

      li.innerHTML = this.title;
      li.addEventListener("click", this.markDone.bind(li));

      return  li; 
    }
  
    markDone(e, todo) {
      // HINT🤩
      // this function should mark the current todo as done, by adding the correct CSS class
      // if the item is clicked, but was already marked as done, remove the item from the list

      //console.log("click");
      //this.classList.add("done");
      if (this.className.includes("done")) {
        //console.log("has already been clicked");
        this.remove();
        let todos = localStorage.getItem('todos');
        todos = JSON.parse(todos) || ("todos");
        todos.forEach((element, index) => {
          if(element['title'] === this.innerHTML){
            //let index = todos.indexOf(todoElement);
            todos.splice(index, 1);
            //console.log(index);
            localStorage.setItem('todos', JSON.stringify(todos));
          }
        });
        //console.log(todoElement); 
        
      }
      else {
        this.classList.add("done");
        //console.log("done")
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
      todos.push({"priority":this.priority, "title": this.title});
      localStorage.setItem("todos", JSON.stringify(todos));

    }
    
  }


  