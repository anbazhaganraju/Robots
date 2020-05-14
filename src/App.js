import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        this.setState({ robots: robots });
    }
    
    onSearchChange = (event => {
        this.setState({ searchField: event.target.value });
    }
    )
    
    render() {
        const filterRobot = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        }
        )
        return (
            <div className='tc'>
                <h1 className='f1'>Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filterRobot} />
            </div>
        );
    }
}

export default App;