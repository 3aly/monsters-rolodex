import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { Search } from "./components/search/search.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users/")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users.data }));
  }

  handelChange = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    const { monsters, search } = this.state;
    const filterdMonsters = monsters.filter((monster) =>
      monster.first_name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Sims City</h1>
        <Search
          placeholder={"Search.."}
          handleChange={this.handelChange}
        ></Search>
        <CardList monsters={filterdMonsters}></CardList>
      </div>
    );
  }
}

export default App;
