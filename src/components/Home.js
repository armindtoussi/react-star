import React from 'react';

import { Display } from './Display';
import './Home.css';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            person: undefined,
            fetched: false,
            displayCmp: undefined,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let req = `/people/search?name=${this.state.value}`;
        fetch(req)
        .then((res) => res.json())
        .then(data => {
            this.setState({
                person: data,
                fetched: true,
            });
        }).catch((err) => {
            console.error("Error fetching: ", err);
        });
    }
    
    render() {
        const fetched = this.state.fetched;
        let display;

        if(fetched) {
            display = <Display person={this.state.person}/>
        }

        return (
            <div className="container">
                <div className="row vertical-spacing">
                    <div className="col-sm-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control inputs" id="name" placeholder="Enter a Star Wars Character" onChange={this.handleChange} />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                       {display}
                    </div>
                </div>
            </div>
        );
    }
}
