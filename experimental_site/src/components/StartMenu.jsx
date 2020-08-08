import React, { Component } from "react";
import styled from "styled-components";
import StartItem from "./StartItem";
const Menu = styled.div`
    background-color: #c2c2c2;
    height: 600px;
    width: 250px;
    bottom: 52px;
    position: fixed;
    z-index: 5;
    border-style: outset;
    display: flex;
    padding: 3px;
`;

const StartItemList = styled.div`
    display:flex;
    flex-direction:column-reverse;
    width:90%;
`;


const SideBar = styled.div`
    background: linear-gradient(to top, #11106d, #1981cd);
    width: 35px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: visible;
`;

const SideText = styled.div`
    margin-bottom: 20px;
    color: #ffffff;
    width: 10%;
    word-break: keep-all;
    white-space: nowrap;
    font-size: 20px;

    transform: rotate(-90deg);
`;

export default class StartMenu extends Component {
    generateStartItems = () => {
        return this.props.startItems.map((data) => {
            return <StartItem data={data} key={data.title} />;
        });
    };

    render() {
        return (
            <Menu>
                <SideBar>
                    <SideText>
                        <b>Joseph</b> Aronson
                    </SideText>
                </SideBar>
                <StartItemList>{this.generateStartItems()}</StartItemList>
            </Menu>
        );
    }
}
