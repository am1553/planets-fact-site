import React, {useState} from 'react'
import "../../styles/index.css"
import Navigation from './Navigation'

function Header() {

    const [open, setOpen] = useState(false)

    return (
        <div className='header'>
            <div className="logo">
                <span>The Planets</span>
            </div>

            <Navigation />
            
        </div>
    )
}

export default Header
