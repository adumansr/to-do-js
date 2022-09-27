const todos = []


function Todo(title, description, dueDate){
  return {
    title,
    description,
    dueDate
  }
}

function createTodo(){
  let title = prompt('enter a title')
  let description = prompt('description')
  let dueDate = prompt('Enter a date')
  let todo = new Todo(title, description, dueDate)
  return todo
}

function addTodo(todo){
  todos.push(todo)


}

addTodo(createTodo())
console.log(todos)