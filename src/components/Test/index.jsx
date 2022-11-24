import React, { useState, useEffect } from 'react';

import {useTest} from '../../customHooks/'

const Test = () => {
    const [val, setVal] = useState('');
    const txt = useTest('');

    // useEffect(() => {
    //     // testHook()
    // }, [txt])

    function testHook(e){
        // const temp = e.value;
        // setTxt('hello world')
        console.log(txt)
        // setTxt('Hello world')
        return txt;
    }

    return <>
        <label htmlFor='txt-input'>Type random text:</label>
        <input type="text" id='txt-input'
            placeholder={txt} onChange={testHook} />
        <p>{ txt }</p>
    </>
}

export default Test;

/** Input notes:
 * need onChange mainly
 * can do without useEffect?
 */