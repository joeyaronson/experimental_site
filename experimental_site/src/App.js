import React, { Component, createRef } from "react";

import "./App.css";
import styled from "styled-components";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import StartItems from "./utils";
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
                content: "test",
            },
        ];

        this.startItems = StartItems(this.pushNewWindow);
        let windowRefs = windows.map(() => createRef());
        this.state = {
            activeWindow: 0,
            windows: windows,
            windowRefs: windowRefs,
        };
    }

    pushNewWindow = (data) => {
        let { windows, windowRefs } = this.state;
        if (!windows.some((w) => w.title === data.title)) {
            windows.push({
                title: data.title,
                content: data.content,
                x: Math.random() * (window.innerWidth - WINDOW_W),
                y: Math.random() * (window.innerHeight - 60 - WINDOW_H),
            });

            windowRefs.push(createRef());

            this.setState({
                windows: windows,
                activeWindow: windows.length - 1,
            });
        }
    };

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
                    content={w.content}
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
                    startItems={this.startItems}
                />
            </>
        );
    }
}
