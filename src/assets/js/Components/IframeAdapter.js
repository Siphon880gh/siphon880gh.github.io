import React, {useState, useEffect} from "react";
import "./IframeAdapter.css"

function IframeAdapter (props) {
    let {url} = props;
    if(Boolean(window.location.hash)) { // Eg: #php
        url += window.location.hash;
    }

    let [styleObject, setStyleObject] = useState({});

    // Grow iframe height
    useEffect(()=>{
            const iframe = window.document.querySelector("iframe");
 
            let pollLimit = 10*5; // 10 times over 5 seconds
            let pollCount = 0;
            let iframePoller = setInterval(()=>{
                window.iframe = iframe;
                let height = iframe?.contentWindow?.document?.documentElement?.scrollHeight
                if(height)
                    setStyleObject({height})

                pollCount++
                if(pollCount>=pollLimit) {
                    clearInterval(iframePoller);
                }
            },100)

    }, [])

    return (<iframe src={url} style={styleObject}></iframe>)
}

export default IframeAdapter;