import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../../features/counter/counterSlice';

export default function Counter() {
    const count = useSelector((state) => state.counter.count);
    console.log(count);
    const dispatch = useDispatch();

    return (
        <>
            <h2 className='text-3xl bold my-8'>{count}</h2>

            <div className='flex flex-wrap gap-4 justify-center'>
                <button type='button' className='px-4 py-2 font-semibold text-sm bg-green-500 text-white rounded-none shadow-sm' onClick={() => dispatch(increment())}>Increment</button>
                <button type='button' className='px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm' onClick={() => dispatch(decrement())}>Decrement</button>
                <button type='button' className='px-4 py-2 font-semibold text-sm bg-red-500 text-white rounded-none shadow-sm' onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </>
    )
}