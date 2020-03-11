import React, { useState, useEffect } from "react";

function usePersistedState(name, defaultValue) {
    const [state, setState] = useState(
        JSON.parse(localStorage.getItem(name)) || defaultValue
    );

    useEffect(() => {
        localStorage.setItem(name, JSON.stringify(state));
    }, [name, state]);

    return [state, setState];
}

export default usePersistedState;