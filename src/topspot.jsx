import React from 'react';

export default function (props) {
    var latitude = props.location[0];
    var longitude = props.location[1];
    var link = `https://maps.google.com/?q=${latitude},${longitude}`;
    return (
        <div className='spots-container well'>
            <h4 className="titles">{ props.name }</h4>
            <p className="description">{ props.description }</p>
            <a className="links" href={link} target="blank">Location in Google Maps</a>
        </div>);
}
