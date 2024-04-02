import React, { useRef , useState } from 'react'
import InputField from '../../UI/InputField'

function MealItemForm(props) {

  const [isAmountValid, setIsAmountValid] = useState(true)

  const amountInputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber >= 6){
      setIsAmountValid(false)
      return;
    }
    // console.log("String" , enteredAmount);
    // console.log("String too number" , enteredAmountNumber);
    props.onAddToCart(enteredAmountNumber)
  }
// adding a form to get order
  return (
    <form className='mt-8 flex justify-center' onSubmit={submitHandler}>
        <InputField ref={amountInputRef} label="AMOUNT" input={{
            id: 'amount_' +props.id,
            type: 'number',
            min:'1',
            max:'6',
            step:'1',
            defaultValue: '1'
        }}/>
        <button className='bg-orange-900 text-white px-8 py-2 rounded-2xl shadow-2xl border-2 hover:border-black '>+ ADD</button>
        {!isAmountValid && <p className='text-red-700'>Please enter a valid amount (1-6).</p>}
    </form>
  )
}

export default MealItemForm
