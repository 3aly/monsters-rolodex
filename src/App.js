import logo from "./logo.svg";
import React, { Component, useState, useEffect } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { Search } from "./components/search/search.component";

export default function App() {
  const [searchValue, setSearchValue] = useState("");

  const [monsters, setMonsters] = useState([]);

  const [filterdMonsters, setFilterdMonsters] = useState(monsters);

  const handelChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users/")
      .then((response) => response.json())
      .then((users) => setMonsters(users.data));
  }, []);

  useEffect(() => {
    setFilterdMonsters(
      monsters.filter(
        (monster) =>
          monster.first_name
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          monster.last_name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [monsters, searchValue]);

  // const filterdMonsters = monsters.filter(
  //   (monster) =>
  //     monster.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
  //     monster.last_name.toLowerCase().includes(searchValue.toLowerCase())
  // );

  return (
    <div className="App">
      <h1>Sims City</h1>
      <Search placeholder={"Search.."} handleChange={handelChange}></Search>
      <CardList monsters={filterdMonsters}></CardList>
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       search: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://reqres.in/api/users/")
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users.data }));
//   }

//   handelChange = (e) => {
//     this.setState({ search: e.target.value });
//   };
//   render() {
//     const { monsters, search } = this.state;
//     const filterdMonsters = monsters.filter((monster) =>
//       monster.first_name.toLowerCase().includes(search.toLowerCase())
//     );
//     return (
//       <div className="App">
//         <h1>Sims City</h1>
//         <Search
//           placeholder={"Search.."}
//           handleChange={this.handelChange}
//         ></Search>
//         <CardList monsters={filterdMonsters}></CardList>
//       </div>
//     );
//   }
// }

// export default App;
