import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.button`
    height: 22px;
    width: 22px;
    border-style: outset;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c2c2c2;
    color: black;
    margin: 1px;
    outline: none;

    &:hover {
        background-color: #aaaaaa;
    }

    &:active {
        border-style: inset;
    }
`;
export default class _Button extends Component {
    static propTypes = {
        onClick: PropTypes.func,
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Button onClick={this.props.onClick}>
                <FontAwesomeIcon icon={this.props.icon} />
            </Button>
        );
    }
}
