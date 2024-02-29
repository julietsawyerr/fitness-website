'use client'

import { useForm } from 'react-hook-form';
import { MotionDiv } from '../ui/motion';
import Image from  'next/image';


type Props = {}

const Contact = (props: Props) => {
  const { register, trigger, formState: {errors} } = useForm();

  const inputStyle = `w-full rounded-lg bg-primary-300 px-5 py-3 mb-4 placeholder-white text-base font-medium active:bg-primary-300 `;

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
           action="https://formsubmit.co/julietsawyerr@gmail.com" method="POST"
           >
              <input 
                type="text" 
              className={inputStyle}
                placeholder='NAME'
                {...register('name', {
                  required: true,
                  maxLength:100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500 text-sm">
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
                <p className="mt-1 text-primary-500 text-sm">
                  {errors.email.type === 'required' && 'Please enter your email address.'}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea   
                className={inputStyle}
                placeholder='MESSAGE'
                rows={4}
                cols={50}
                {...register('message', {
                  required: true,
                  maxLength:2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500 text-sm">
                  {errors.message.type === 'required' && '** This field is required.'}
                  {errors.message.type === 'maxLength' && 'Max length is 2000 character'}
                </p>
              )}

              <button 
                type='submit'
                className='btn-primary mt-4'
              >
                SUBMIT
              </button>
           </form>
           </div>

           <div className="relative mt-16 basis-2/5 md:mt-0">
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
            <Image
                className="w-full"
                alt="contact-us-page-graphic"
                src='/assets/ContactUsPageGraphic.png'
                width={200}
                height={250}
              />
            </div>
           </div>
        </div>

    </section>
  )
}

export default Contact