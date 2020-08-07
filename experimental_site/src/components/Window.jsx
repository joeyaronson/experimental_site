import React, { Component } from "react";
import styled, { keyframes } from 'styled-components';
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import Button from "./Button";
import {
    faWindowMaximize,
    faWindowMinimize,
} from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const keyFrameExampleOne = keyframes`
  0% {
    height: 200px;
  }
  100% {
    height: 600px;
    background: orange;
  }
`

const Window = styled.div`
    transition: height 0.1s z-index 0.1s;
    /* top: ${(props) => (props.minimized ? "5000px" : 0)}; */
    background-color: #c2c2c2;
    height: ${(props) => (props.minimized ? 0 : props.height)}px;
    width: ${(props) => (props.minimized ? 0 : props.width)}px;
    border-style: outset;
    display: flex;
    flex-direction: column;
    position: absolute;
    ${(props) => props.minimized && "display: none"};
    z-index: ${(props) => (props.minimized ? -1 : props.activeWindow ? 1 : 0)};
    /* animation: ${keyFrameExampleOne} 2s ease-in-out 0s infinite; */

`;
const ContentContainer = styled.div`
    height: 100%;
    padding: 30px 2px 15px 2px;
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

const IconGroup = styled.div`
    display: flex;
`;

const TopBar = styled.div`
    background: ${(props) =>
        props.activeWindow
            ? "linear-gradient(to right, #11106d, #1981cd)"
            : "linear-gradient(to right, #888888, #aaaaaa)"};
    height: 25px;
    display: flex;
    justify-content: space-between;

    align-items: center;
    color: ${(props) => (props.activeWindow ? "#ffffff" : "#aaaaaa")};
    padding: 4px;
`;

export default class _Window extends Component {
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        title: PropTypes.string,
    };
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width,
            height: this.props.height,
            controlledPosition: {
                x: this.props.x,
                y: this.props.y,
            },
        };
    }

    onControlledDrag = (e, position) => {
        const { x, y } = position;
        this.setState({ controlledPosition: { x, y } });
    };

    onStart = (e, position) => {
        if (position) {
        }
        if (this.state.maximized) {
            const x = window.innerWidth / 2;
            const y = 0;
            this.maximize(x, y);
        }
        this.props.setActiveWindow(this.props.i);
    };

    maximize = (x, y) => {
        let pos;
        if (this.state.maximized) {
            if (x && y) {
                pos = { x: x, y: y };
            } else {
                pos = { x: this.props.x, y: this.props.y };
            }
            this.setState({
                width: this.props.width,
                height: this.props.height,
                controlledPosition: pos,
                maximized: false,
            });
        } else {
            pos = { x: 0, y: 0 };
            this.setState({
                width: window.innerWidth - 8,
                height: window.innerHeight - 40,
                controlledPosition: pos,
                maximized: true,
            });
        }
    };

    setMinimized = () => {
        this.setState({
            minimized: true,
        });
    };

    unsetMinimized = () => {
        this.setState({
            minimized: false,
        });
    };

    render() {
        return (
            <Draggable
                handle=".handle"
                bounds="parent"
                position={this.state.controlledPosition}
                onDrag={this.onControlledDrag}
                onStart={this.onStart}
            >
                <Window
                    width={this.state.width}
                    height={this.state.height}
                    onClick={this.onStart}
                    activeWindow={this.props.activeWindow}
                    minimized={this.state.minimized}
                >
                    <TopBar
                        className="handle"
                        activeWindow={this.props.activeWindow}
                    >
                        {this.props.title}
                        <IconGroup>
                            <Button
                                icon={faWindowMinimize}
                                onClick={this.setMinimized}
                            ></Button>
                            <Button
                                icon={faWindowMaximize}
                                onClick={this.maximize}
                            ></Button>
                            <Button
                                icon={faTimes}
                                onClick={() => {
                                    this.props.onExit(this.props.i);
                                }}
                            ></Button>
                        </IconGroup>
                    </TopBar>
                    <ContentContainer>
                        <Content>{this.props.activeWindow.toString()}</Content>
                    </ContentContainer>
                </Window>
            </Draggable>
        );
    }
}
