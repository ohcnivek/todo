import React from "react";


class ToDoItem extends React.Component {

    render() {
        return (
            <li>
                <input 
                type ="checkbox" 
                checked = {this.props.todo.completed}
                onChange= {() => this.props.handleChangeProps(this.props.todo.id)}
                /> 

                <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                    Delete
                </button>

                {
                    this.props.todo.title
                }
            </li>
        );

    }
}

//functional component
// function ToDoItem(props) { // same name as the component class, we do not need a render method 
//   return <li>{props.todo.title}</li>
// }

export default ToDoItem

