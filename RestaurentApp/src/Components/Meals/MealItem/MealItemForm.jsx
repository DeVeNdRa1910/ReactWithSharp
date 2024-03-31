import React from 'react'
import InputField from '../../UI/InputField'

function MealItemForm(props) {
// adding a form to get order
  return (
    <form className='mt-8 flex justify-center'>
        <InputField label="AMOUNT" input={{
            id:"amount",
            type: 'number',
            min:'99',
            step:'1',
            defaultValue: '1'
        }}/>
        <button className='bg-orange-900 text-white px-8 py-2 rounded-2xl shadow-2xl border-2 hover:border-black '>+ ADD</button>
    </form>
  )
}

export default MealItemForm
