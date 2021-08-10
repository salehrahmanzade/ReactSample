import React from 'react';

import '../style/Backdrop.css'

const Backdrop =(props)=>{

    return props.show ? <div className="backdrop" onClick={props.click}></div> : null
}

export default Backdrop;