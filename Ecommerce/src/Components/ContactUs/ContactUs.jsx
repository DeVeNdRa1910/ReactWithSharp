import React, { useRef, useState } from 'react'
import Header from '../UI/Header'
import Footer from '../UI/Footer'

function ContactUs() {
    const nameRef = useRef("")
    const emailRef = useRef("")
    const phoneRef = useRef("")
    const phone2Ref = useRef("")
    const issueRef = useRef("")

    const [msg, setMsg] = useState(false)


    

    const submitHandler = (e) => {
        e.preventDefault();

        setMsg(true)

        const obj = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            phone2: phone2Ref.current.value,
            issue: issueRef.current.value
        }

        postdata(obj);

        nameRef.current.value ="";
        emailRef.current.value ="";
        phoneRef.current.value ="";
        phone2Ref.current.value ="";
        issueRef.current.value ="";
    }

    async function postdata(obj) {
        try{
            const resp = await fetch("https://ecommerce-b3acd-default-rtdb.firebaseio.com/ecommerce.json", {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-Type' : 'Issue/json'
                }
            })

            if(!resp.ok){
                throw new Error("Something went wrong")
            }

            const data = await resp.json();
            console.log(data);
        } catch(err){
            console.log(err.message);
        }
    }

  return (
    <div>
      <Header />
        <main className='bg-gray-300 flex justify-center py-5'>
            {msg && (<p>Hello {nameRef.current.value} we received your issue you will get your solution with in 24 hour. We will update you by sending solution Email on {emailRef.current.value} </p>)}
            { !msg && <form onSubmit={submitHandler} className='w-4/5 border border-black p-4 rounded-xl'>
                <div className='flex justify-between w-full'>
                    <div className='pt-2 pb-3 w-1/2 mr-1' >
                        <label className='pb-2 flex justify-start font-bold text-lg' htmlFor="Name">Name: </label>
                        <input ref={nameRef} className='bg-slate-200 py-1 px-4 font-semibold text-lg border-2 border-black w-full rounded-xl' type="text" />
                    </div>
                    <div className='pt-2 pb-3 w-1/2 mr-1' >
                        <label className='pb-2 flex justify-start font-bold text-lg' htmlFor="Email">Email: </label>
                        <input ref={emailRef} className='bg-slate-200 py-1 px-4 font-semibold text-lg border-2 border-black w-full rounded-xl' type="text" />
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='pt-2 pb-3 w-1/2 mr-1' >
                        <label className='pb-2 flex justify-start font-bold text-lg' htmlFor="phone">Phone: </label>
                        <input ref={phoneRef} className='bg-slate-200 py-1 px-4 font-semibold text-lg border-2 border-black w-full rounded-xl' type="text" />
                    </div>
                    <div className='pt-2 pb-3 w-1/2 mr-1' >
                        <label className='pb-2 flex justify-start font-bold text-lg' htmlFor="phone">Phone 2: </label>
                        <input ref={phone2Ref} className='bg-slate-200 py-1 px-4 font-semibold text-lg border-2 border-black w-full rounded-xl' type="text" />
                    </div>
                </div>
                <div>       
                    <label className='pb-2 flex justify-start font-bold text-lg' htmlFor="Issue">Issue:</label>
                    <textarea ref={issueRef} className='bg-slate-200 py-1 px-4 font-semibold text-lg border-2 border-black w-full rounded-xl' name="" id="issue" rows={3}></textarea>
                </div>
                <div className='flex justify-center mt-4 mb-1'>
                    <button className='bg-gray-600 text-blue-300 border-2 py-3 px-10 rounded-2xl hover:bg-blue-300 hover:text-gray-700 hover:border-2 hover:border-black' >SUBMIT</button>
                </div>
            </form>}
        </main>
      <Footer />
    </div>
  )
}

export default ContactUs
