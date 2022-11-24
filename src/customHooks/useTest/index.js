import { useState, useEffect } from 'react';

function useTest(){
    let text = 'test';
    // set text
    const [test, setTest] = useState(text)

    useEffect(() => {
        function printText(value){
            setTest(value)
        }
        window.addEventListener('input', printText(text))

        printText(text)

        // need to reset data
        return () => window.removeEventListener('input', setTest(''))
    }, [test])
    // must return a value
    return test;
}

export default useTest