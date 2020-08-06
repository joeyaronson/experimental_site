import React, { Component } from "react";
import styled from "styled-components";
import StartButton from "./StartButton";

const Taskbar = styled.div`
    background-color: #c2c2c2;
    height: 60px;
    bottom: 0;
    position: fixed;
    width: 100%;
    border-style: outset;
    display: flex;
    align-items: center;
    padding: 3px;
`;
const Divider = styled.div`
    height: 54px;
    width: 2px;
    border-style: outset;
    margin-left: 6px;
`;
export default class _Taskbar extends Component {
    render() {
        return (
            <Taskbar>
                <StartButton />
                <Divider/>
            </Taskbar>
        );
    }
}
