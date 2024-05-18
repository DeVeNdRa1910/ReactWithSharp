import React, { useEffect, useState } from 'react'
import MailListSetting from './MailListSetting'
import Emailtype from './Emailtype'
import EmailBody from './EmailBody'
import Compose from './Compose';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from '../../store/features/MailSlice';
import { db } from '../../FirebaseApp';
import { collection, doc } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import firebaseApp from '../../FirebaseApp';

const auth = getAuth(firebaseApp);


function MailList(props) {

  const isMessageOpen = useSelector(selectSendMessageIsOpen)

  const [emails, setEmails] = useState([]);

  const getMail = async () => {
    
    const userDoc = doc(db, "Users", `${auth.currentUser?.email}`)
    const messageDoc = collection(userDoc, `${props.subCollect  ? props.subCollect : "Inbox"}`)

    try {
      const resp = await getDocs(messageDoc)
      const data = resp.docs.map((item)=>({
        ...item.data(),
        id: item.id
      }))
      setEmails(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getMail()
  },[ props.subCollect])



/*   useEffect(()=>{
    const fetchEmails = async () => {
      try {
        const emailsRef = collection(db, 'emails');
        const snapshot = await getDocs(emailsRef);
        const emailsData = snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }));
        
        setEmails(emailsData)
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    }

    fetchEmails();
  }, [])
  console.log(emails); */

  return (
    <div className='w-[84%] px-3 relative min-h-screen '>
        <MailListSetting />
        <Emailtype />
        {
          emails.map(email => {
            console.log(email.id);
            const mailMsg = email.mail;
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = mailMsg;
            const extractedText = tempDiv.textContent || tempDiv.innerText || '';
            return (
            <EmailBody key={email.id} id={email.id} name={email.sender} subject={email.subject} msg={extractedText} time={new Date(email.timestamp?.seconds*1000).toLocaleTimeString()} />
          )})
        }
        {isMessageOpen && <div className='sticky right-0 bottom-4 z-50'>
                            <Compose />
                        </div>
        }
    </div>
  )
}

export default MailList
