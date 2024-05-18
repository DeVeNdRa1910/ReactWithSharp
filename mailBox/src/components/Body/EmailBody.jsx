import React from 'react'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { MdLabelImportantOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../FirebaseApp';
import { getAuth } from 'firebase/auth';
import firebaseApp from '../../FirebaseApp';

const auth = getAuth(firebaseApp);

function EmailBody({id, name, subject, msg, time}) {

  const deleteMail= async (id, name) =>{

    const userDoc = doc(db, "Users", `${auth.currentUser?.email}`)
    const messageDoc = doc(userDoc,"Inbox", id)

    try {
      await deleteDoc(messageDoc)
      console.log(`Deleting mail of ${name}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex items-center justify-between'>
      <div className=' flex-[95%] text-sm flex items-center border-b border-b-zinc-800 px-2 py-1 min-h-10 hover:shadow-xl hover:cursor-pointer opacity-85 hover:opacity-100'>
        <div className='left flex gap-2 items-center min-w-60 flex-[20%]  '>
          <MdOutlineCheckBoxOutlineBlank />
          <FaRegStar />
          <MdLabelImportantOutline />
          <h4 className='opacity-100'>{name}</h4>
        </div>
        <div className='middel flex items-center flex-[70%]'>
          <div className='msg text-xs flex-[90%] max-w-lg'>
              <p className='whitespace-nowrap overflow-hidden truncate'><b>{subject} </b>{msg}</p>
          </div>
        </div>
        <div className='right text-right flex-[10%]'>
          <p className='text-xs'>{time}</p>
        </div>
      </div>
      <button onClick={()=>deleteMail(id, name)} className='flex-[5%] px-4 text-xl outline-none' > <RiDeleteBin6Line /> </button>
    </div>
  )
}

export default EmailBody
