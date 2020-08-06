import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Draggable from "react-draggable";

const Window = styled.div`
    background-color: #c2c2c2;
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    border-style: outset;
    display: flex;
    flex-direction: column;
`;
const ContentContainer = styled.div`
    height: 100%;
    padding:30px 2px 15px 2px;
    display: flex-grow;
`;
const Content = styled.div`
    background-color: #00ffff;
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    border-style: inset;
    display: flex;

`;

const TopBar = styled.div`
    background: #11106d;
    background: -webkit-linear-gradient(left, #11106d, #1981cd);
    background: -moz-linear-gradient(left, #11106d, #1981cd);
    background: linear-gradient(to right, #11106d, #1981cd);
    height: 25px;
    /* display: flex; */
    align-items: center;
    color: #ffffff;
    padding:4px;
`;

export default class _Window extends Component {
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        title: PropTypes.string,
    };
    constructor(props) {
        super(props);
        console.log("test");
    }
    render() {
        return (
            <Draggable handle=".handle" bounds="parent">
                <Window width={this.props.width} height={this.props.height}>
                    <TopBar className="handle"> {this.props.title}</TopBar>
                    <ContentContainer><Content></Content></ContentContainer>
                </Window>
            </Draggable>
        );
    }
}
