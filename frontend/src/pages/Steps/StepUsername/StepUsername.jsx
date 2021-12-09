import React from 'react'

const StepUsername = ({onNext}) => {
    return (
        <div>
            Set Username
            <button onClick={onNext}>Next</button>
        </div>
    )
}

export default StepUsername
