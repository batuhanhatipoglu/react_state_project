import React from 'react';
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import KomleWeb from './images/kompleweb.jpg';
import './Course.css';

const courseMap = {
    Angular,
    Bootstrap,
    Ccsharp,
    KomleWeb,
};

function Course() {
    return (
        
           <div> {Object.keys(courseMap).map((courseName, index) => (
                <div className="courseDiv" key={index}>
                    <img className="course" src={courseMap[courseName]} alt={courseName} />
                </div>
               
            ))}
        </div>
    );
}

export default Course;
