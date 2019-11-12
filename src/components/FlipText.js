import React from "react";
import TextLoop from "react-text-loop";


// const sub = {
//     textAlign: 'center',
//     width: '250px',
//     fontStyle: 'italic',
// }
class FlipText extends React.Component {
    render() {
        return (
                <TextLoop springConfig={ {stiffness: 340, damping: 30} }>
                    <div className="subHeadline developer"><span>Web Developer</span></div>
                    <div className="subHeadline programmer"><span>Programmer</span></div>
                    <div className="subHeadline musician"><span>Erstwhile musician</span></div>
                    <div className="subHeadline student"><span>Perennial student</span></div>
                </TextLoop>
        );
    }
}

export default FlipText;