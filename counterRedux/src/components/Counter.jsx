import { useDispatch, useSelector } from "react-redux"; 
import { useRef } from "react";

// type id known as identifire

// import { INCREMENT, DECREMENT } from "../store";




// for Slice

import { counterActions } from "../store/Counter";


function Counter() {

    const inputRef = useRef(0);

    const dispatch = useDispatch();

 
    //If we export more then one reducer
    const counter = useSelector(state => state.counter.counter);

    const show = useSelector(state => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    };
    
    const increaseHandler = () => {
        let inputNumber = parseInt(inputRef.current.value);
        console.log(typeof inputNumber , " for increment");
        dispatch(counterActions.increase(inputNumber))
        //return dispatch({type: decrease, amount: inputNumber})
    };

    const decreaseHandler = () => {
        let inputNumber = parseInt(inputRef.current.value , " for decrement");
        console.log(typeof inputNumber);
        dispatch(counterActions.decrease(inputNumber)) // Corrected from increase to decrease
        //here this argument (inputNumber) store in action as name of payload
        //return dispatch({type: increase, amount: inputNumber})
    };
    
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter())
    };

  return (
    <main className="flex justify-center ">
        <div className="bg-stone-200 w-3/5 p-6 rounded-2xl mt-20">
            <h1 className="text-center font-bold">Redux Counter</h1>
            <div className="text-center my-1.5  text-4xl font-bold">
                <input ref={inputRef} defaultValue={0} className="text-center w-40 pl-5 rounded-xl font-bold border-2 border-black" type="number" />
            </div>
            {show && <div className="text-center my-3 text-4xl font-bold">{counter}</div>}
            <div className="flex justify-around pt-4 px-20">
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-black hover:text-white  hover:cursor-pointer font-bold' onClick={incrementHandler} >Increment</button>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-black hover:text-white  hover:cursor-pointer font-bold' onClick={decrementHandler} >Decrement</button>
            </div>
            <div className="flex justify-around pt-4 px-20">
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-black hover:text-white  hover:cursor-pointer font-bold' onClick={increaseHandler} >Increment By</button>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-black hover:text-white  hover:cursor-pointer font-bold' onClick={decreaseHandler} >Decrement By</button>
            </div>
            <div className="flex justify-center py-8">
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-black hover:text-white hover:cursor-pointer font-bold' onClick={toggleCounterHandler} >Toggle Counter</button>
            </div>
        </div>
    </main>
  )

}

export default Counter;