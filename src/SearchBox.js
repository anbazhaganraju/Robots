import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className='pa3'>
            <input className='pa3 ba b--blue bg-washed-green'
                type='search' placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;