import { useState, useEffect } from 'react';

function useTest(value){
    // let text = 'test';
    // set text
    const [test, setTest] = useState(null)

    useEffect(() => {
        function printText(){
            setTest(value)
        }
        window.addEventListener('input', printText)

        // printText(text)

        // need to reset data
        return () => window.removeEventListener('input', setTest(''))
    }, [test])
    // must return a value
    return test;
}

export default useTest