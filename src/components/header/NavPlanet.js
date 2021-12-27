import React from 'react'

function NavPlanet(props) {

    const image = props.image;
    const name = props.name;
    const chevron = props.chevron;
    const circle = props.circle;

    return (
        <div className='nav-planet'>
            <div className="left">
                <div>{circle}</div>
                <h4>{name}</h4>
            </div>
            <img src={chevron} alt="" />
        </div>
    )
}

export default NavPlanet
