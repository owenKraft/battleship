import React from 'react'

const InfoPanel = (props) => {
    const displayMessage = props.message

    return (
        <div className="info-panel">
            {displayMessage}
        </div>
    )

}

export default InfoPanel