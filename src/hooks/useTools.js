import { useState, useEffect } from 'react';

const useTools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://pacific-beyond-64387.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);

    return [tools, setTools];
}

export default useTools;