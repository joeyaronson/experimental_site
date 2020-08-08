
import React from "react";
import logo from "./personal_logo.png";
import P5 from "./components/P5";
const startItems = (newWindow) => {
    return [
        {
            title: "README.txt",
            content: "test",
            icon: logo,
            onClick: newWindow,
        },
        {
            title: "wiggles.js",
            content: <P5 title={"wiggles.js"}/>,
            icon: logo,
            onClick: newWindow,
        },
    ];
};

export default startItems;
