import './App.css';
import React from 'react'
import TodoItem from './TodoItem'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: [],
      input: ''
    }
  }

  handleChange = (e) => {
    this.setState({input: e.target.value})
  }

  handleClick = () => {
    this.setState({todos: [...this.state.todos, this.state.input],
    input: ''})
  }

  handleCompleted = (index) => {
    let list = this.state.todos
    list.splice(index, 1)
    this.setState({todos: [...list]})
  }

  render() {
      return (
          <div className='main'>
            <div className='App'>
              <label>Enter a New Todo</label>
              <input type='text' value={this.state.input} onChange={this.handleChange}></input>
              <button onClick={this.handleClick}>Enter Todo</button>
            </div>
            <div className='App'>
              <label>Todo List</label>
              <ol>
                {this.state.todos.map((todo, index) => <TodoItem key={index} index={index} title={todo} remove={this.handleCompleted} />)}
              </ol>
            </div>
          </div>
      )
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );