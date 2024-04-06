import React, {useContext, useState} from 'react'
import MedicineItemForm from './MedicineItemForm'
import CartContext from '../../../store/CartContext'
import MedContext from '../../../store/MedicineContext/medicineContext'


function MedicineItem(props) {
    const cartCtx = useContext(CartContext)
    const medCtx = useContext(MedContext)
    const medIndex = medCtx.meds.findIndex((item)=> item.id===props.id);
    const med = medCtx.meds[medIndex];



    
    const addToCartHandler = (quantity) => {

      

      if(med.quantityAvailable > quantity){



          cartCtx.addItem({
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            quantity: quantity
          })



        for(let i =0 ; i < quantity ; i++){
          if(med.quantityAvailable >0){
          
            //setQuantAvl((prevCounter)=>prevCounter-1)
            
            const medIndex = medCtx.meds.findIndex((item)=> item.id===props.id);
            const med = medCtx.meds[medIndex];
            if(med.quantityAvailable === 0){
              alert("Out Of Stock ! Coming Soon");
              break;
            }
            const updatedQuantity = med.quantityAvailable-1;

            const updatedMed = {...med,  quantityAvailable: updatedQuantity};

            medCtx.meds[medIndex] = updatedMed;

          // console.log(medCtx.meds);





          // const med = medCtx.meds.filter(tab => tab.id === props.id)
          // const medQuantity = med[0].quantityAvailable
          // med[0].quantityAvailable = medQuantity-1
          // console.log(med[0]);
        }
        
      }} else{
        alert(`Sorry ${props.name} is Out Of Stock`)
      }
    }

  return (
    <li className='flex justify-between border-b-2 border-black m-4'>
      <div>
        <h3 className='text-2xl font-bold'>{props.name}</h3>
        <span><h3 >Quantity Available : <span className='font-bold'>{ med.quantityAvailable}</span></h3></span>
        <div>Description : {props.description}</div>
        <div className='mb-2 text-xl font-semibold'>{props.price} ₹</div>
      </div>
      <div>
        <MedicineItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MedicineItem
