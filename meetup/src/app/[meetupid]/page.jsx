import React from 'react'
import MeetupDetails from  '../../../components/meetups/MeetupDetails'
import { MongoClient } from 'mongodb'

const connectionString = "mongodb+srv://devendra7:devendra2000@devendra7.opbisf9.mongodb.net/meetups?retryWrites=true&w=majority&appName=devendra7";

function page() {
  //MeetupDetails Page

  const Dummy_Meetups = [
    {
      "id": 1,
      "title": "Taj Mahal",
      "image": "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg",
      "address": "Agra, Uttar Pradesh, India",
      "description": "The Taj Mahal, an ivory-white marble mausoleum on the southern bank of the river Yamuna, is one of the Seven Wonders of the World and a UNESCO World Heritage Site."
    },
    {
      "id": 2,
      "title": "Jaipur",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Jaipur_03-2016_39_Jal_Mahal_-_Water_Palace.jpg/264px-Jaipur_03-2016_39_Jal_Mahal_-_Water_Palace.jpg",
      "address": "Jaipur, Rajasthan, India",
      "description": "Jaipur, the capital city of Rajasthan, is known as the 'Pink City' for its trademark building color. It's famous for its historic palaces and forts, including the Hawa Mahal and Amber Fort."
    },
    {
      "id": 3,
      "title": "Kerala Backwaters",
      "image": "https://www.tripsavvy.com/thmb/UoylMLyzOBPdDp34ForEiJd9m3s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-522478216-5ab12c4e3de4230036949cee.jpg",
      "address": "Alleppey, Kerala, India",
      "description": "The Kerala Backwaters are a network of interconnected canals, rivers, lakes, and inlets, a labyrinthine system formed by more than 900 km of waterways. It's a popular tourist destination known for its houseboats."
    },
    {
      "id": 4,
      "title": "Varanasi",
      "image": "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/12/a6.jpg",
      "address": "Varanasi, Uttar Pradesh, India",
      "description": "Varanasi, one of the oldest continuously inhabited cities in the world, is known for its ghats lining the River Ganges, where pilgrims perform ritual ablutions and Hindu priests conduct ceremonies."
    },
    {
      "id": 5,
      "title": "Goa",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb7Ts1LUFgQ3GxAK_wZzmtULql0tQ0JfYhCC_aBR5tRw&s",
      "address": "Goa, India",
      "description": "Goa is a state in western India with coastlines stretching along the Arabian Sea. It is renowned for its beaches, Portuguese heritage, vibrant nightlife, and diverse flora and fauna."
    }
  ]

  return (
    <div>
      {Dummy_Meetups.map(item => (
        <div key={item.id}>
          <MeetupDetails 
            image={item.image} 
            title={item.title} 
            address={item.address} 
            description={item.description}
          />
        </div>
      ))}
    </div>
  )
}

export default page
