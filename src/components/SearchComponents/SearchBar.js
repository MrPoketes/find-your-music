import React, { Component } from "react";
import ReactDOM from "react-dom";
import {InputGroup,FormControl,Button} from "react-bootstrap";

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handlePress = this.handlePress.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        var inputValue = ReactDOM.findDOMNode(this.refs.input).value;
        this.props.searchPress(inputValue);
    }
    handlePress(target){
        if(target.key==="Enter"){
            var inputValue = ReactDOM.findDOMNode(this.refs.input).value;
            this.props.searchPress(inputValue);
        }
    }
    render(){
        return(
            <div className="center search-div">
                <h1 style={{'fontSize': '40px'}}>Search for music</h1>
                <InputGroup className="mb-3 search" onKeyPress={this.handlePress}>
                    <FormControl style={{fontFamily:'Raleway'}} ref="input" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"/>
                    <InputGroup.Append>
                        <Button onClick={this.handleClick}  variant="success"><i className="fas fa-search"></i></Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }
}
