import TextLoop from "react-text-loop";
import React from "react";

class FlipText extends React.Component {
    render() {
        return (
            <h2>
                <TextLoop>
                    <span>Web Developer</span>
                    <span>Programmer</span>
                    <span>Erstwhile musician</span>
                    <span>Perennial student</span>
                </TextLoop>
            </h2>
        );
    }
}

export default TextLoop;