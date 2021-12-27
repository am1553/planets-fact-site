import React from 'react'
import NavPlanet from './NavPlanet'
function NavPanel() {
    
    let mercuryCircle = <div className="mercury circle"></div>
    let venusCircle = <div className="venus circle"></div>
    let earthCircle = <div className="earth circle"></div>
    let marsCircle = <div className="mars circle"></div>
    let jupiterCircle = <div className="jupiter circle"></div>
    let saturnCircle = <div className="saturn circle"></div>
    let uranusCircle = <div className="uranus circle"></div>
    let neptuneCircle = <div className="neptune circle"></div>

    return (
        <div className='nav-panel'>
            <NavPlanet circle={mercuryCircle} name='Mercury' chevron='images/icon-chevron.svg'  />
            <NavPlanet circle={venusCircle} name='Venus' chevron='images/icon-chevron.svg'  />
            <NavPlanet circle={earthCircle} name='Earth' chevron='images/icon-chevron.svg'  />
            <NavPlanet circle={marsCircle} name='Mars' chevron='images/icon-chevron.svg'  />
            <NavPlanet circle={jupiterCircle} name='Jupiter' chevron='images/icon-chevron.svg'  />
            <NavPlanet circle={saturnCircle} name='Saturn' chevron='images/icon-chevron.svg'  />
            <NavPlanet circle={uranusCircle} name='Uranus' chevron='images/icon-chevron.svg'  />
            <NavPlanet circle={neptuneCircle} name='Neptune' chevron='images/icon-chevron.svg'  />
        </div>
    )
}

export default NavPanel
