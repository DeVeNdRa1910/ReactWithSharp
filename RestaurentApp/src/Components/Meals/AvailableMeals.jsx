import React from 'react'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Chilli Paneer',
        description: "Finest Panner and Veggies",
        price: 199
    },
    {
        id: 'm2',
        name: 'Mashroom Paneer',
        description: "Finest Panner and Mashroom",
        price: 249
    },
    {
        id: 'm3',
        name: 'Dry Manchurian',
        description: "Finest Manchurian Balls and Veggies",
        price: 149
    },
    {
        id: 'm4',
        name: 'Noodles',
        description: "Finest Noodles and Veggies",
        price: 99
    },
    {
        id: 'm5',
        name: 'Fried Rice',
        description: "Finest Rice and veggies with Paneer",
        price: 219
    }
  ]

function AvailableMeals() {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem 
                                                key={meal.id} 
                                                name={meal.name} 
                                                description={meal.description} 
                                                price={meal.price}
                                              />);
  return (
    <div className='text-black'>
        <section>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    </div>
  )
}

export default AvailableMeals
