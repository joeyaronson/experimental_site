import React, { Component } from "react";
import styled from "styled-components";
import logo from "../personal_logo.png";

const Button = styled.div`
    background-color: #c2c2c2;
    height: 46px;
    width: 150px;
    border-style: outset;
    display: flex;
    padding: 4px;
    align-items: center;
    cursor: pointer;


    &:hover{
        border-style: inset;
    }

`;


const StartText = styled.b`

    padding: 4px;
    font-weight: 800;
    font-size: 30px;
`;




export default class StartButton extends Component {
    render() {
        return (
            <Button>
                <img src={logo} height="50px" />
                <StartText>Start</StartText>
            </Button>
        );
    }
}
