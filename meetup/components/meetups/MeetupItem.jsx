import Card from '../ui/Card';
import Link from 'next/link';

function MeetupItem(props) {

  return (
    <li className='my-4'>
      <Card>
        <div className='w-full h-80 overflow-hidden border-t-2 '>
          <img className='w-full object-cover' src={props.image} alt={props.title} />
        </div>
        <div className='p-4 text-center'>
          <h3 className='text-lg text-gray-800'>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className='border border-pink-900 bg-transparent my-2'>
          <Link href={'/'+props.id} className='text-black'>Show Details</Link>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
