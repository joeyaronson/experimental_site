import React, { Component } from "react";
import styled from "styled-components";
import logo from "../personal_logo.png";

const Button = styled.div`
    background-color: ${(props) => (props.active ? "#dddddd" : "#c2c2c2")};
    height: 26px;
    border-style: ${(props) => (props.active ? "inset" : "outset")};
    display: flex;
    padding: 4px;
    align-items: center;
    margin-left: 2px;
    margin-right: 2px;

    cursor: pointer;

    &:active {
        border-style: inset;
    }
`;

const StartText = styled.b`
    padding: 4px;
    font-weight: 800;
    font-size: 15px;
`;

export default class TaskBarButton extends Component {
    render() {

        return (
            <Button
                onClick={this.props.onClick}
                active={this.props.activeWindow}
            >
                <img src={logo} alt={this.props.title} height="20px" />
                <StartText>{this.props.title}</StartText>
            </Button>
        );
    }
}
