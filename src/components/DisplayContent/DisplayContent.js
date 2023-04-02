import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import "./DisplayContent.css";

function DisplayContent(props) {
    return (
        <div className='TotalDiv'>
            <div>
                <LeftSide/>
            </div>
            <div>
                <RightSide/>
            </div>
        </div>
    );
}

export default DisplayContent;