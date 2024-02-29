import { useForm } from 'react-hook-form';
import { MotionDiv } from '../ui/motion';
import Image from  'next/image';


type Props = {}

const Contact = (props: Props) => {
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
        <div className=""></div>
      </div>
    </section>
  )
}

export default Contact