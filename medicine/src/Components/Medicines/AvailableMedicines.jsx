import React, { useContext } from 'react'
import MedicineItem from './MedItem/MedicineItem'
import Card from '../UI/Card'
import MedContext from '../../store/MedicineContext/medicineContext'



function AvailableMedicines() {
    const medCtx = useContext(MedContext);

    const MedicineList = medCtx.meds.map(tab => <MedicineItem
                                                    key={tab.id}
                                                    id={tab.id}
                                                    name={tab.name}
                                                    description={tab.description}
                                                    price={tab.price}
                                                    quantityAvailable={tab.quantityAvailable}
        />)
  return (
    <div>
      <section>
        <Card>
            <ul>
                {MedicineList}
            </ul>
        </Card>
      </section>
    </div>
  )
}

export default AvailableMedicines
