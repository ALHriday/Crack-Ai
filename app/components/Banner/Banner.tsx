import { useState } from 'react';
import './Banner.css';
import axios from 'axios';

const Banner = () => {
    const [output, setOutput] = useState(``);
    const [inputVal, setInputVal] = useState('');

    // const outputData = output.replace(/(\d+\.)/g, '\n$1');

    const outputBG = output ? 'bg-slate-200' : '';

    const handleTestAi = (value: string) => {
        if (inputVal) {
            // http://localhost:3100/test-ai?
            // https://crack-ai-server-lovat.vercel.app/test-ai
            axios.get(`https://crack-ai-server-lovat.vercel.app/test-ai?prompt=${value}`)
                .then(data => {
                    const testData = data.data;
                    setOutput(testData);
                })
        }
    }

    return (
        <div className="banner w-full min-h-screen">
            <div className=' flex flex-col justify-center items-center gap-6'>
                <div className='mt-6'>
                    <h1 className='text-5xl font-bold text-teal-900'>Crack AI</h1>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <input
                        onChange={(e) => setInputVal(e.target.value)}
                        className='p-2 bg-slate-200 outline-2 outline-teal-400 focus:bg-slate-100 border-2 text-black border-teal-500 rounded-xl shadow-md'
                        type="text" />
                    <button onClick={() => handleTestAi(inputVal)} className='btn bg-teal-600 rounded-xl text-xl border border-slate-300'>Search</button>
                </div>
                <div className={`${outputBG} p-3 w-10/12 max-h-[240px] overflow-auto border-t-2 rounded-md border-teal-200 mx-auto text-black`}>
                    {output ? <p>{output}</p> : <p className='text-center'>Search any query using Flash Writer.</p>}
                </div>
            </div>
        </div>
    );
};

export default Banner;