import React from "react";
import ToDoList from "./ToDoList";
import Header from "./Header";
import InputToDo from "./InputToDo"
import { v4 as uuidv4 } from "uuid";

class ToDoContainer extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: true
              },
              {
                id: uuidv4(),
                title: "Develop website and add content",
                completed: false
              },
              {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
              }
        ]
    }

    handleChange = (id) => (
        this.setState(prevState => (
                {
                    todos: prevState.todos.map(
                        todo => {
                            if (todo.id === id) {
                                return {
                                    ...todo,
                                    completed: !todo.completed,
                                  }
                            }
                            return todo
                            
                        }
        
                    )
                }
            ) 
        )
    ); 

    delToDo = (id) => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                  return todo.id !== id;
                })
              ]
        })
    }

    addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
          };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };

    render() {
        return(
            
            <div className="container">
                <div className="inner">
                    <Header/>
                    <InputToDo addTodoProps={this.addTodoItem}/>
                    <ToDoList 
                        todos = {this.state.todos} 
                        handleChangeProps = {this.handleChange} 
                        deleteTodoProps={this.delToDo}
                    />
                </div>
            </div>

            // <ul>
            //     {/* using curly braces here will essentially let you write valid js code */}
            //     {
            //         this.state.todos.map(todos => 
            //             <li>
            //                 {todos.title}
            //             </li>
            //         )
            //     }
            // </ul>
        );
    }
}

export default ToDoContainer
