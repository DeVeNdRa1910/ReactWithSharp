import React, { useContext, useState } from 'react'
import CartItem from './CartItem'
import CartContext from '../../store/CartContext'
import Modal from '../UI/Modal'
import MedContext from '../../store/MedicineContext/medicineContext'

function Cart(props) {
    const cartCtx = useContext(CartContext)

    const medCtx = useContext(MedContext)

    const totalAmount = cartCtx.totalAmount

    const hasItem = cartCtx.items.length > 0

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)

        const medIndex = medCtx.meds.findIndex((tab)=> tab.id===id);
        const med = medCtx.meds[medIndex];
        if(med.quantityAvailable === 0){
          alert("Out Of Stock ! Coming Soon");
          return
        }
        const updatedQuantity = med.quantityAvailable+1;

        const updatedMed = {...med,  quantityAvailable: updatedQuantity};

        const updatedMeds = [...medCtx.meds]

        updatedMeds[medIndex] = updatedMed;

        // console.log(updatedMeds[medIndex]);

        medCtx.meds = [...updatedMeds];

        // console.log(medCtx.meds[medIndex]);
      }
      
      const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, quantity:1})


        const medIndex = medCtx.meds.findIndex((tab)=> tab.id===item.id);
        const med = medCtx.meds[medIndex];
        if(med.quantityAvailable === 0){
          alert("Out Of Stock ! Coming Soon");
          return
        }
        const updatedQuantity = med.quantityAvailable-1;

        const updatedMed = {...med,  quantityAvailable: updatedQuantity};

        const updatedMeds = [...medCtx.meds]

        updatedMeds[medIndex] = updatedMed;

        // console.log(updatedMeds[medIndex]);

        medCtx.meds = [...updatedMeds];

        // console.log(medCtx.meds[medIndex]);
    }


  return (
    <Modal onClose={props.onHideCart}>
      <ul className='list-none m-0 p-0 max-h-80 overflow-scroll'>{cartCtx.items.map(tab => {
        console.log(tab.id);
        return (<CartItem key={tab.id} name={tab.name} quantity={tab.quantity} price={tab.price} 
                onRemove={cartItemRemoveHandler.bind(null, tab.id)}
                onAdd={cartItemAddHandler.bind(null, tab)} />)
      })}</ul>
      <div className='flex justify-between items-center font-bold text-2xl m-1'>
        <span>Total Amount: </span>
        <span>{totalAmount}₹</span>
      </div>
      <div className='text-right'>
        <div className='text-black cursor-pointer bg-transparent py-2 px-8 rounded-2xl ml-4'>
            <button onClick={props.onHideCart} className='border-2 rounded-xl text-gray-700 bg-white px-8 py-1 mx-2 hover:bg-gray-700 hover:text-white'>Close</button>
            {hasItem && <button className='border-2 rounded-xl bg-gray-700 text-white px-8 py-1 mx-2 hover:text-gray-700 hover:bg-white'>Order</button>}
        </div>
      </div>
    </Modal>
  )
}
export default Cart
