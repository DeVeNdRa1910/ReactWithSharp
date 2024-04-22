import { useDispatch, useSelector } from "react-redux"; 



function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const incrementHandler = () => {
        dispatch({type: 'increment'})
    }

    const decrementHandler = () => {
        dispatch({type: 'decrement'})
    }

    const incrementBy5Handler = () => {
        dispatch({type: 'incBy5'})
    }

    const decrementBy5Handler = () => {
        dispatch({type: 'decBy5'})
    }

    const toggleCounterHandler = () => {};

  return (
    <main className="flex justify-center ">
        <div className="bg-stone-100 w-3/5 p-6 rounded-2xl mt-20">
            <h1 className="text-center font-bold">Redux Counter</h1>
            <div className="text-center my-3 text-4xl font-bold">{counter}</div>
            <div className="flex justify-around pt-4 px-20">
                <button className="border border-stone-950 text-stone-900 hover:bg-black hover:text-white py-1.5 px-8 rounded-xl" onClick={incrementHandler} >Increment</button>
                <button className="border border-stone-950 text-stone-900 hover:bg-black hover:text-white py-1.5 px-8 rounded-xl" onClick={decrementHandler} >Decrement</button>
            </div>
            <div className="flex justify-around pt-4 px-20">
                <button className="border border-stone-950 text-stone-900 hover:bg-black hover:text-white py-1.5 px-8 rounded-xl" onClick={incrementBy5Handler} >IncrementBy5</button>
                <button className="border border-stone-950 text-stone-900 hover:bg-black hover:text-white py-1.5 px-8 rounded-xl" onClick={decrementBy5Handler} >DecrementBy5</button>
            </div>
            <div className="flex justify-center py-8">
                <button className="border border-stone-950 text-stone-900 hover:bg-black hover:text-white py-1.5 px-8 rounded-xl" onClick={toggleCounterHandler} >Toggle Counter</button>
            </div>
        </div>
    </main>
  )

}

export default Counter
