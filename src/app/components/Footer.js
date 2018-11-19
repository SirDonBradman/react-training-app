import React from 'react';

export default function Footer(props){
    const {appTitle, year, address} = props;
    return (
        <div>
            <hr/>
            <p>Copyrights@{year}, {appTitle}</p>
            <p>Address {address.city}, {address.state}</p>
        </div>
    );
}