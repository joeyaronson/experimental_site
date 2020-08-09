import React, { Component } from "react";
// import src from "./wiggles";

export default class P5 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let title = this.props.title;
        async function load() {
            let file = await import(`./${title}`);
            return file.default();
        }
        return load()
            .then((file) => {
                return `<!DOCTYPE html>
           <html>
               <head>
                   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.1/p5.min.js"></script>
                   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.1/addons/p5.dom.min.js"></script>
                   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.1/addons/p5.sound.min.js"></script>
               </head>
               <body >
                   <div>
                       <script>
                            ${file}
                       </script>
                   </div>
               </body>
           </html>`;
            })
            .then((file) => this.setState({ htmlFile: file }));
    }

    render() {
        return (
            <>
                {this.state.htmlFile && (
                    <iframe
                        title="wiggles.js"
                        srcDoc={this.state.htmlFile}
                        height="100%"
                        width="100%"
                        frameBorder={0}
                        vspace={0}
                        hspace={0}
                        marginWidth={0}
                        marginHeight={0}
                        scrolling="no"
                    />
                )}
            </>
        );
    }
}
