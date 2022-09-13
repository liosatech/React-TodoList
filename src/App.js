import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

//import component
import Header from './Components/Layout/Header'
import FormAddToDo from './Components/Todo/FormAddToDo'
import TodoList from './Components/Todo/TodoList'



function App() {

 
  const [todos, setTodos] = useState([]);
  

  function addTodo (formInput){
    setTodos(prevState => [...prevState,  {key : Date.now(), done: false, formInput}]);
  }

  function deleteTodo(key){
    setTodos(todos.filter(item => item.key !== key))
  }

  function editeTodo(key,text){
    let todo = todos.find(item => item.key=== key);
    todo.formInput = text;
    let newTodos = todos.filter(item => item.key !== todo.key)
    setTodos([...newTodos, todo])
  }

  function togelTodo(key){
    let todo = todos.find(item => item.key=== key);
    todo.done = !todo.done;
    let newTodos = todos.filter(item => item.key !== todo.key)
    setTodos([...newTodos, todo])
  }
  


 

  return (

    
    <div className="App">
        <Header/>
        <main>
          <section className="jumbotron">
            <div className="container d-flex flex-column align-items-center">
                <h1 className="jumbotron-heading">Welcome!</h1>
                <p className="lead text-muted">To get started, add some items to your list:</p>
                <FormAddToDo add={addTodo}/>
            </div>
          </section>
          <div className="todosList">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                        <TodoList todos={todos} delete={deleteTodo} done={togelTodo} edit={editeTodo}/>
                        
                    </div>
              
                </div>
          </div>
        </main>
    </div>
  );
}

export default App;
