import React, { Component } from "react";
import styled from "styled-components";
import TaskBarButton from "./TaskBarButton";
import StartMenu from "./StartMenu";
const Taskbar = styled.div`
    background-color: #c2c2c2;
    height: 40px;
    bottom: 0;
    position: fixed;
    z-index: 5;
    width: 100%;
    border-style: outset;
    display: flex;
    align-items: center;
    padding: 3px;
`;
const Divider = styled.div`
    height: 34px;
    width: 2px;
    border-style: outset;
    margin-left: 3px;
    margin-right: 3px;
`;
export default class _Taskbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startOpen: true,
        };
    }
    onClick = (i) => {
        let currentWindow = this.props.windowRefs[i].current;
        if (i === this.props.activeWindow) {
            if (currentWindow.state.minimized) {
                currentWindow.unsetMinimized();
            } else {
                currentWindow.setMinimized();
                if (
                    this.props.windowRefs.some(
                        (w) =>
                            !(
                                w.current.state.minimized ||
                                w.current.props.i === i
                            )
                    )
                ) {
                    this.props.setActiveWindow(
                        (i + 1) % this.props.windows.length
                    );
                } else {
                    this.props.setActiveWindow(-1);
                }
            }
        } else {
            if (currentWindow.state.minimized) {
                currentWindow.unsetMinimized();
            }
            this.props.setActiveWindow(i);
        }
    };

    onStartClick = () => {
        this.setState({
            startOpen: !this.state.startOpen,
        });
    };

    generateWindowButtons = () => {
        return this.props.windows.map((w, i) => {
            return (
                <TaskBarButton
                    key={w.title}
                    title={w.title}
                    activeWindow={i === this.props.activeWindow}
                    onClick={() => this.onClick(i)}
                />
            );
        });
    };
    render() {
        return (
            <>
                {this.state.startOpen && (
                    <StartMenu startItems={this.props.startItems} />
                )}
                <Taskbar>
                    <TaskBarButton title="Start" onClick={this.onStartClick} />
                    <Divider />
                    {this.generateWindowButtons()}
                </Taskbar>
            </>
        );
    }
}
