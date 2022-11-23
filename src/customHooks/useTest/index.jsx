import { useState, useEffect } from 'react';

function useTest(){
    let text = 'test';
    // set text
    const [test, setTest] = useState(text)

    useEffect(() => {
        function printText(value){
            setTest(value)
        }
        printText(text)

        // need to reset data
        // return setTest('')
    }, [])
    // must return a value
    return test;
}

export default useTest