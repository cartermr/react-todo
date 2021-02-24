import './App.css';
import React from 'react'

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
    this.setState({todos: [...this.state.todos, this.state.input]})
    this.setState({input: ''})
    console.log(this.state.todos)
  }

  render() {    
    return (
      <div className="App">
        <label>Enter a New Todo</label>
        <input type='text' value={this.state.input} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Enter Todo</button>
      </div>
    );
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