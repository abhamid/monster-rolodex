import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search/search.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchText: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const monsters = users.map(user => {
          return { name: user.name, id: user.id, email: user.email };
        });

        this.setState({ monsters });
      })
      .catch(err => console.log(err));
  }

  onChangeSearchHandler = event => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    const filteredMonster = this.state.monsters.filter(monster =>
      monster.name.toLowerCase().includes(this.state.searchText.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search
          placeholder="Search Monster"
          onChange={this.onChangeSearchHandler}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
