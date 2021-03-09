import React from "react";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: [],
    };
  }

  addToDo = (newToDo) => {
    this.setState({ toDoItems: [...this.state.toDoItems, newToDo] });
  };

  toggleDone = (item) => {
    item.done === false ? (item.done = true) : (item.done = false);
    const index = this.state.toDoItems.findIndex((obj) => obj.id === item.id);
    const newArray = [...this.state.toDoItems];
    newArray[index] = item;
    this.setState({ toDoItems: newArray });
  };

  removeItem = (item) => {
    const index = this.state.toDoItems.findIndex((obj) => obj.id === item.id);
    const newArray = [...this.state.toDoItems];
    newArray.splice(index, 1);
    this.setState({ toDoItems: newArray });
  };

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="header__title">My To-Do List</h1>
          <InputForm
            addToDo={this.addToDo}
            currentList={this.state.toDoItems}
          />
        </header>
        <main className="main">
          {this.state.toDoItems.length === 0 ? (
            <h2 className="main__emptyMessage">no tasks available</h2>
          ) : (
            <ToDoList
              toDoItems={this.state.toDoItems}
              toggleDone={this.toggleDone}
              removeItem={this.removeItem}
            />
          )}
        </main>
      </div>
    );
  }
}

export default App;
