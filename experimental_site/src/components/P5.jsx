import React, { Component, createRef } from "react";
import Sketch from "react-p5";
let mode = "color";
let p = [];
let timer = 0;

let tempw;
let temph;
let clientWidth;
let clientHeight;
export default class P5 extends Component {
    constructor(props) {
        super(props);
        this.p5Ref = createRef();
    }
    x = 50;
    y = 50;

    setup = (p5, parent) => {
        //angleMode(DEGREES);
        clientWidth = document.getElementById(this.props.title).clientWidth;
        clientHeight = document.getElementById(this.props.title).clientHeight;
        console.log(clientHeight);
        p5.createCanvas(clientWidth, clientHeight).parent(parent);
        p5.strokeWeight(0.5);
        p5.noStroke();
        p5.colorMode(p5.HSB, 100);
        p5.background(0);
        temph = p5.height;
        tempw = p5.width;
    };

    draw = (p5) => {
        let { mouseX, mouseY, width, height } = p5;
        p.push(new Particle(clientWidth / 2, clientHeight / 2, p5));

        if (width !== tempw || height !== temph) {
            tempw = width;
            temph = height;

            p.splice(0, p.length);
            p5.background(0);
        }

        if (p5.mouseIsPressed && timer > 20) {
            let mouseInBounds =
                mouseX > 0 &&
                mouseX < clientWidth &&
                mouseY > 0 &&
                mouseY < clientWidth;

            console.log(mouseX, mouseY);
            if (mouseInBounds) {
                if (mode === "color") {
                    mode = "dark";
                    timer = 0;
                } else if (mode === "dark") {
                    timer = 0;
                    mode = "color";
                }
            }
        }

        for (let i = 0; i < p.length; i++) {
            p[i].display();
            p[i].move();
        }
        for (let i = 0; i < p.length; i++) {
            if (
                p[i].x > p5.width + 100 ||
                p[i].x < -100 ||
                p[i].y > p5.height + 100 ||
                p[i].y < -100
            ) {
                p.splice(i, 1);
            }
        }

        timer++;
        p5.fill(255);
        p5.text("joey aronson 2018", 100, p5.height - 50);
    };

    render() {
        return <Sketch ref={this.p5Ref} setup={this.setup} draw={this.draw} />;
    }
}

class Particle {
    constructor(x, y, p5) {
        this.x = x;
        this.y = y;
        this.s = 0;
        this.t = 0;
        this.p5 = p5;

        //starting angle
        this.degx = this.p5.random(0, 1);
        this.degy = this.p5.random(0, 1);

        this.xs = this.p5.random(-3, 3);

        if (this.xs < 1 && this.xs > -1) {
            this.rany = this.p5.round(this.p5.random(0, 1));
            if (this.rany === 0) {
                this.ys = this.p5.random(1, 3);
            } else {
                this.ys = this.p5.random(-3, -1);
            }
        } else {
            this.ys = this.p5.random(3, -3);
        }

        this.hue = this.p5.random(100);

        this.hue2 = 1;
    }

    display() {
        if (mode === "dark") {
            this.p5.fill(0, 0, 0);
        }
        if (mode === "color") {
            this.p5.fill(this.hue, 100, 100);
        }
        this.p5.stroke(100 - this.hue, 100, 100);
        this.p5.ellipse(this.x, this.y, this.s, this.s);
    }

    move() {
        this.t += 0.02;
        this.x += this.xs * this.t + this.p5.cos(this.degx) * this.t;
        this.y += this.ys * this.t + this.p5.cos(this.degy) * this.t;
        this.s += 0.2;
        this.degx += this.p5.random(0.1, 0.8);
        this.degy += this.p5.random(0.1, 0.8);

        this.hue += this.hue2;

        if (this.hue > 100 || this.hue < 0) {
            this.hue2 *= -1;
        }
    }
}
