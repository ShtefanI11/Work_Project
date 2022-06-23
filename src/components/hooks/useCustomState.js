import React from 'react'

const useCustomState = (init) => {
    let initValue = init
    function setInitValue(value) {
        initValue = value

    }
    return { initValue, setInitValue }
}

export default useCustomState