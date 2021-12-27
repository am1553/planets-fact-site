import React, {useState} from 'react'
import NavPanel from './NavPanel'
function Navigation() {

    const [showMenu, setShowMenu] = useState(false)

    let navPanel

    if(showMenu) {
        navPanel = 
            <NavPanel />
    }
    
    return (
        <nav>
            <button onClick={(e) => {
                setShowMenu(!showMenu)

                if(!showMenu) {
                    e.target.classList.add('active');
                } else {
                    e.target.classList.remove('active')
                }
            }}>
                <img src="images/icon-hamburger.svg" alt="" />
            </button>

            {navPanel}
        </nav>
    )
}

export default Navigation
