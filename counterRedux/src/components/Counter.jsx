import { useDispatch, useSelector, connect } from "react-redux"; 
import { Component } from "react";


function Counter() {
    
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const incrementHandler = () => {
        dispatch({type: 'increment'})
    }

    const decrementHandler = () => {
        dispatch({type: 'decrement'})
    }

    const decreaseHandler = () => {
        dispatch({type: 'decrease', amount: 50})
    }

    const increaseHandler = () => {
        dispatch({type: 'increase', amount: 500})
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
                <button className="border border-stone-950 text-stone-900 hover:bg-black hover:text-white py-1.5 px-8 rounded-xl" onClick={increaseHandler} >IncrementBy5</button>
                <button className="border border-stone-950 text-stone-900 hover:bg-black hover:text-white py-1.5 px-8 rounded-xl" onClick={decreaseHandler} >DecrementBy5</button>
            </div>
            <div className="flex justify-center py-8">
                <button className="border border-stone-950 text-stone-900 hover:bg-black hover:text-white py-1.5 px-8 rounded-xl" onClick={toggleCounterHandler} >Toggle Counter</button>
            </div>
        </div>
    </main>
  )

}

export default Counter;

//this is redux in class based component
/*
 class Counter extends Component{
    //hooks are not usable in classbased components for that redux provide a connect functionthat connect  class based component to redux 

    incrementHandler() {
        this.props.increment();
    }

    decrementHandler() {
        this.props.decrement();
    }

    toggleCounterHandler() {}

    return (
        <main className="flex justify-center ">
            <div className="bg-stone-100 w-3/5 p-6 rounded-2xl mt-20">
                <h1 className="text-center font-bold">Redux Counter</h1>
                <div className="text-center my-3 text-4xl font-bold">{this.props.counter}</div>
                <div className="flex justify-around pt-4 px-20">
                    <button className="border border-stone-950 text-stone-900 hover:bg-black hover:text-white py-1.5 px-8 rounded-xl" onClick={this.incrementHandler.bind(this)} >Increment</button>
                    <button className="border border-stone-950 text-stone-900 hover:bg-black hover:text-white py-1.5 px-8 rounded-xl" onClick={this.decrementHandler.bind(this)} >Decrement</button>
                </div>
                <div className="flex justify-center py-8">
                    <button className="border border-stone-950 text-stone-900 hover:bg-black hover:text-white py-1.5 px-8 rounded-xl" onClick={this.toggleCounterHandler} >Toggle Counter</button>
                </div>
            </div>
        </main>
      )

}

const mapStateToProps = (state) =>{
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({type: 'increment'}),
        decrement: () => dispatch({type: 'decrement'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

*/
