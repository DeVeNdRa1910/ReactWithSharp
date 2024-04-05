import React , {useRef, useState} from 'react'
import InputField from '../../UI/InputField'

function MedicineItemForm(props) {

    const [isQuantityValid, setIsQuantityValid] = useState(true)

    const quantityInputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()

        const enteredQuantity = quantityInputRef.current.value;
        const enteredQuantityNumber = +enteredQuantity;
        
      console.log(enteredQuantityNumber);

        if(enteredQuantityNumber < 1 || enteredQuantityNumber > 10 || enteredQuantity.trim().length === 0){
            setIsQuantityValid(false);
            return;
        }

        props.onAddToCart(enteredQuantityNumber);
    }

  return (
    <form onSubmit={submitHandler}>
      <InputField ref={quantityInputRef} label="Quanity"
      input={{
        id: 'quantity_'+props.id,
        type: 'number',
        min: 1,
        max:10,
        step: '1',
        defaultValue: '1'
      }}
      />
      <button className='bg-gray-500 text-white my-4 w-full rounded-xl shadow-2xl border-2 hover:border-black'>+ ADD </button>
      {!isQuantityValid && <p className='text-red-700'> Please enter a valid number</p>}
    </form>
  )
}

export default MedicineItemForm
