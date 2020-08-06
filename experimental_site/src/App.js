import React, { Component } from "react";

import "./App.css";
import styled from "styled-components";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";

const Desktop = styled.div`
    background-color: #008080;
    min-height: calc(100vh - 60px);
    width: 100%;
`;

export default class App extends Component {
    render() {
        return (
            <>
                <Desktop>
                    <Window width={500} height={500} title="Projects"></Window>
                </Desktop>
                <Taskbar></Taskbar>
            </>
        );
    }
}
