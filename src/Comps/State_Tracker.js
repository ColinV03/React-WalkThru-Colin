import React, { Component } from "react";
import ItemCard from "./ItemCard";

class StateTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      list: [],
    };
    this.addItem = this.addItem.bind(this); // arrow functions do this implicitly
  }

  //clearing whole list: 
  clearAll = () => {
    this.setState({
      list: [],
    })
  }

  //enter listener: 
  enterPressed = (e) => {
    if (e.key === "Enter") {
      this.addItem();
    }
  
  }

  handleInput = (e) => {
    // console.log(e.target.value);
    this.setState({
      item: e.target.value,
    });
    return;
  };
  /// adding items: Setting defaults, pushing elements to new arrays.
  addItem() {
    console.log("addItem fired");
    this.setState({
      item: "",
      list: [...this.state.list, this.state.item],
    });
    return;
  }

  //deleting individual items, Index is required; 
  deleteItem = (index) => {
    console.log("delete item fired");
    let coppiedList = [...this.state.list];
    coppiedList.splice(index, 1);
    this.setState({
      list: coppiedList,
    });
    return;
  };

  render() {
    const { item, list } = this.state;
    const mappedItems = list.map((e, index) => {
      // return <li key={index}>{e}</li>;
      return (
        <ItemCard
          className="card"
          name={e}
          index={index}
          deleteFunc={this.deleteItem}
        />
      );
    });
    console.log(this.state);

    return (
      <div className="App">
        <header className="App-header"> {this.props.person}'s ToDo List</header>
        <div>
          <input
            placeholder="Enter New Item"
            onChange={(e) => this.handleInput(e)}
            value={item}
            onKeyPress={this.enterPressed}
          />
          <div>
            <button onClick={this.addItem}>Add Item</button>
            <button onClick={this.clearAll}>Clear List</button>
          </div>
        </div>
        <ul>{mappedItems}</ul>
      </div>
    );
  }
}
export default StateTracker;
