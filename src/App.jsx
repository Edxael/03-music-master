import React, { Component } from 'react'
import './style.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';


class App extends Component{


    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
    }


    search() {
        console.log('this.state ', this.state );
    }


    render(){
        return(
            <div className="App">

                <div className="App-title"> Music Master</div>

                <FormGroup>
                    <InputGroup>

                        <FormControl
                            type="text"
                            placeholder="Search for an Artist"
                            query={this.state.query}
                            onChange={event => {this.setState({query: event.target.value})}}
                        />

                        <InputGroup.Addon>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>

                    </InputGroup>
                </FormGroup>

                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>

                <div className="Gallery">
                    Gallery
                </div>

            </div>
        )
    }
}

export default App;
