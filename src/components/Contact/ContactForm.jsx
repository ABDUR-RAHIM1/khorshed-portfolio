import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {

  const handleSubmit = (e)=>{
     e.preventDefault();
     toast.success("Email Send successful")
  }

  return (
    <form onSubmit={handleSubmit} className='card_color py-5 px-3 hover:translate-y-0'>
      <div className='mb-4'>
        <p className=' italic text-lg'>Enter Your Name</p>
        <input name='name' className='inputs' type="text" placeholder='Name' required />
      </div>

      <div className='mb-4'>
        <p className=' italic text-lg '>Enter Your Enail</p>
        <input name='email' className='inputs' type="email" placeholder='Email' required />
      </div>

      <div className='mb-4'>
        <p className=' italic text-lg '>Enter Subject</p>
        <input name='subject' className='inputs' type="text" placeholder='Subject' required />
      </div>

      <div className='mb-4'>
        <p className=' italic text-lg '>Message</p>
        <textarea rows={6} name='message' className='inputs' type="text" placeholder='Enter Your  Message' required />
      </div>
      <button className='px-4 py-2 bg-emerald-400 text-center text-black font-semibold hover:bg-emerald-700 duration-200'>Send Email</button>
      <ToastContainer
       position="bottom-right"
       autoClose={2000}
      />
    </form>
  )
}

export default ContactForm