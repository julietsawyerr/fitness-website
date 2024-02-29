'use client'

import { useForm } from 'react-hook-form';
import { MotionDiv } from '../ui/motion';
import Image from  'next/image';


type Props = {}

const Contact = (props: Props) => {
  const { register, trigger, formState: {errors} } = useForm();

  const inputStyle = `w-full rounded-lg bg-primary-300 px-5 py-3 mt- placeholder-white text-base font-medium`;

  const handleSubmit = async (e:any)  => {
    const isValid = await trigger();

    if(!isValid){
      e.preventDefault();
    }
  }
  return (
    <section 
     className='mx-auto w-5/6 mt-20 py-20'
    >
      <div className="md:w-3/5">
        <h1>
          <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE.
        </h1>
        <p className="my-5">
        Have a question, feedback, or just want to say hello? We do love to hear from you! Please feel free to reach out using the contact details below or fill out the contact form.
        </p>
      </div>

      {/* FORM AND IMAGE */}
      <div className="mt-10 justify-between gap-8 md:flex">
        <div className="mt-10 basis-3/5 md:mt-0">
          <form
          target='_blank' 
          onSubmit={handleSubmit}
           action='https://formsubmit.co/your@email.com'
           method='POST'
           >
              <input 
                type="text" 
                className={inputStyle}
                placeholder='NAME'
                {...register('email', {
                  required: true,
                  maxLength:100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === 'required' && 'Please enter your name.'}
                  {errors.name.type === 'maxLength' && 'Max length is 100 character'}
                </p>
              )}

              <input 
                type="email" 
                className={inputStyle}
                placeholder='EMAIL'
                {...register('email', {
                  required: true,
                  pattern:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === 'required' && 'Please enter your email address.'}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

<input 
                type="text" 
                className={inputStyle}
                placeholder='NAME'
                {...register('email', {
                  required: true,
                  
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === 'required' && 'Please enter your name.'}
                  {errors.name.type === 'maxLength' && 'Max length is 100 character'}
                </p>
              )}
           </form>
        </div>
      </div>
    </section>
  )
}

export default Contact