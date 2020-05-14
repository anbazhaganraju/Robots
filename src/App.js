import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
        ;
    }

    onSearchChange = (event => {
        this.setState({ searchField: event.target.value });
    }
    )
    
    render() {
        const filterRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        }
        )
        return !(this.state.robots.length) ?
            <h1>Loading...</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filterRobot} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

export default App;