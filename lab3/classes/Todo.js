export default class Todo {
    constructor(title, priority, done) { 
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
  
    markDone(e) {
      let todos = localStorage.getItem('todos');
      todos = JSON.parse(todos) || ("todos");

      if (this.className.includes("done")) {
        //console.log("has already been clicked");
        this.remove();
        todos.forEach((element, index) => {
          if(element['title'] === this.innerHTML){
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
        todos.forEach((element, index)=> {
          if(element['title'] === this.innerHTML) {
            let todo = todos[index];
            todo['done']= "done";
            localStorage.setItem("todos", JSON.stringify(todos));
          }

        });
      }     
    }
  
    add(done) {
      let todo = this.createElement();

      if(done){
        todo.classList.add("done");
      }

      document.querySelector("#todo-list").appendChild(todo);
    }
  
    saveToStorage() {
      let todos = localStorage.getItem("todos");
      todos = JSON.parse(todos) || [];
      todos.push({"priority":this.priority, "title": this.title, 'done': "todo"});
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    
  }


  