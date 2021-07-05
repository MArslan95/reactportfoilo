import React, {useEffect,useRef} from 'react'
import './intro.scss'
import {init} from 'ityped'
export default function Intro() {
    // ussing UseRef it work same as query selector in Js
    const textRef = useRef();
    useEffect(() => {
        // console.log(textRef);
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings:["Developer","Designer","React Developer","Content Creator"],
        });
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgcontainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Muhammad Arslan</h1>
                    <h3>Freelance <span ref={textRef}> </span></h3>
                </div>
                <a href="#portfoilo">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
