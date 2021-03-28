import React, { useState, useContext} from 'react'
import ContextThema from "../../Context";

const Header = () => {
    const [darMode, setDarMode] = useState(false);
    const color = useContext(ContextThema);
    const handleClick = () => {
        setDarMode(!darMode);
    }
    

    return (
        <div className="header">
            <h1 style={{color}} >Header</h1>
            <button type="button" className="button" onClick={handleClick}>
                {darMode ? 'Darkmode' : 'LightMode'}
            </button>
        </div>
    )
}

export default Header



