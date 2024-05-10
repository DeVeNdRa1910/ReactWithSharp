import React from 'react'
import MailListSetting from './MailListSetting'
import Emailtype from './Emailtype'
import EmailBody from './EmailBody'
import Compose from './Compose';



function MailList(props) {




  return (
    <div className='w-[84%] pl-2 mt-1 py-2 pr-4 relative min-h-full '>
        <MailListSetting />
        <Emailtype />
        <EmailBody name={"Devendra"} subject={"clone mail"} msg={"Lorem ipsum dolor sit amet consectetur adipisicing elit"} time={"02:30PM"} />
        {props.compose && <div className='sticky right-0 bottom-4 z-50'>
                            <Compose />
                        </div>
        }
    </div>
  )
}

export default MailList
