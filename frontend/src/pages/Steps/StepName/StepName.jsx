import React from 'react'

const StepName = ({onNext}) => {
    return (
        <div>
            Set Name
            <button onClick={onNext}>Next</button>
        </div>
    )
}

export default StepName
