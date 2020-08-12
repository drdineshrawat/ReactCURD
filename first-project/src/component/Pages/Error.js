import React from 'react';
import '../.././style/Error.css'

class Error extends React.Component{
    render(){
        return(
            <div className="error-div">
                 <span className="error-contant">404</span>
                <span className="error-contant">File Not Found</span>
            </div>
        )
    }
}

export default Error;