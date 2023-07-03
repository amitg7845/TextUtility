import React from 'react'

function Alert(props) {
    const capitalized = (words) => {
        let lowerLetter = words.toLowerCase();
        return lowerLetter.charAt(0).toUpperCase() + lowerLetter.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.types} alert-dismissible fade show`} role="alert">
            <strong>{capitalized(props.alert.types)}</strong> {props.alert.msgs}
        </div>
    )
}

export default Alert
