import React from "react"
import ReactDOM from "react-dom"

import ToDoContainer from "./components/ToDoContainer"

import "./App.css"


// saying we want to render ToDoContainer in the root element of the doc
ReactDOM.render(
  <React.StrictMode>
    <ToDoContainer />
  </React.StrictMode>, 
  document.getElementById("root")
)


// const element = <h1>Hello from Create React App</h1>

// ReactDOM.render(element, document.getElementById("root"))
