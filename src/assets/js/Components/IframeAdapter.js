
import React, {useState, useEffect} from "react";
import "./IframeAdapter.css"

function IframeAdapter (props) {
    const {url} = props;
    // const fullUrl = url + hash?(`/#${hash}`):"";

    let [styleObject, setStyleObject] = useState({});

    // Grow iframe height
    useEffect(()=>{
            const iframe = window.document.querySelector("iframe");
 
            let pollLimit = 10*5; // 10 times over 5 seconds
            let pollCount = 0;
            let iframePoller = setInterval(()=>{
                let height = iframe.contentWindow.document.documentElement.scrollHeight
                //console.log(height)
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