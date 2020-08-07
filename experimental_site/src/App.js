import React, { Component, createRef } from "react";

import "./App.css";
import styled from "styled-components";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";

const Desktop = styled.div`
    background-color: #008080;
    min-height: calc(100vh - 47px);
    width: 100%;
`;
const WINDOW_W = 500;
const WINDOW_H = 500;

export default class App extends Component {
    constructor(props) {
        super(props);
        let windows = [
            {
                title: "window 1",
                x: Math.random() * (window.innerWidth - WINDOW_W),
                y: Math.random() * (window.innerHeight - 60 - WINDOW_H),
            },
            {
                title: "window 2",
                x: Math.random() * (window.innerWidth - WINDOW_W),
                y: Math.random() * (window.innerHeight - 60 - WINDOW_H),
            },
            {
                title: "window 3",
                x: Math.random() * (window.innerWidth - WINDOW_W),
                y: Math.random() * (window.innerHeight - 60 - WINDOW_H),
            },
            {
                title: "window 4",
                x: Math.random() * (window.innerWidth - WINDOW_W),
                y: Math.random() * (window.innerHeight - 60 - WINDOW_H),
            },
        ];
        let windowRefs = windows.map(() => createRef());
        this.state = {
            activeWindow: 0,
            windows: windows,
            windowRefs: windowRefs,
        };
    }

    setActiveWindow = (index) => {
        this.setState({ activeWindow: index });
    };

    onExit = (index) => {
        this.state.windows.splice(index, 1);
        this.state.windowRefs.splice(index, 1);
    };

    generateWindows() {
        return this.state.windows.map((w, i) => {
            return (
                <Window
                    ref={this.state.windowRefs[i]}
                    key={w.title}
                    x={w.x}
                    y={w.y}
                    width={WINDOW_W}
                    height={WINDOW_H}
                    title={w.title}
                    i={i}
                    setActiveWindow={this.setActiveWindow}
                    activeWindow={i === this.state.activeWindow}
                    onExit={this.onExit}
                ></Window>
            );
        });
    }
    render() {
        return (
            <>
                <Desktop>{this.generateWindows()}</Desktop>

                <Taskbar
                    windows={this.state.windows}
                    windowRefs={this.state.windowRefs}
                    activeWindow={this.state.activeWindow}
                    setActiveWindow={this.setActiveWindow}
                />
            </>
        );
    }
}
