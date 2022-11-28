import React, { useState, useEffect } from 'react';

import {useTest} from '../../customHooks/'

const Test = () => {
    const [val, setVal] = useState('');
    let txt;

    useEffect(() => {
        // testHook()
        // txt = useTest(val);
    }, [val])

    function testHook(e){
        // const temp = e.value;
        setVal('hello')
        // const txt = useTest(val);
        console.log(txt)
        return txt;
    }

    return <>
        <label htmlFor='txt-input'>Type random text:</label>
        <input type="text" id='txt-input' onChange={() => testHook()} />
        <p>{ txt }</p>
        
        <p>Counter</p>
    </>
}

export default Test;

/** Input notes:
 * need onChange mainly
 * can do without useEffect?
 */