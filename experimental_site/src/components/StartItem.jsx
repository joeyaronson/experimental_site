import React, { Component } from "react";
import styled from "styled-components";

const StartItem = styled.div`
    background-color: #c2c2c2;
    &:hover {
        border-style: inset;
    }
    height: 50px;
    /* width: 100%; */
    z-index: 5;
    display: flex;
    padding: 5px;
    align-items: center;
`;

const Icon = styled.img`
    margin: 10px;
`;

export default class StartMenu extends Component {
    render() {
        let { data } = this.props;
        return (
            <StartItem onClick={() => data.onClick(data)}>
                <Icon src={data.icon} alt={data.title} height="30px" />
                {data.title}
            </StartItem>
        );
    }
}
