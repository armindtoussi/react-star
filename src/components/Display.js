import React from 'react';
import PropTypes from 'prop-types';


export class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: props.person,
        };
    }
    
    mapResults() {
        const results = this.state.person.map((person, idx) => 
            <li 
                className="list-group-item" 
                key={idx}>
                    {person.name} Height: {person.height} Hair Color: {person.hair_color}
            </li>
        );
        return results;
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.person) {
            this.setState({
                person: nextProps.person,
            })
        }
    }

    displayResults() {
        const results = this.mapResults();
        return (
            <ul className="list-group list-group-flush">
                {results}        
            </ul>
        );
    }

    render() {
        let title = "";
        let results = this.displayResults();

        if(this.state.person.length > 0) {
            title = `Showing ${this.state.person.length} results`;
        } else {
            title = `No results found`;
        }


        return (
            <div>
                <h2>{title}</h2>
                {results}
            </div>
        );
    }
}

Display.propTypes = {
    person: PropTypes.array
}
