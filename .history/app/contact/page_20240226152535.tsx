import { useForm } from 'react-hook-form';
import { MotionDiv } from '../ui/motion';
import Image from  'next/image';


type Props = {}

const Contact = (props: Props) => {
  return (
    <section 
     className='mx-auto w-5/6 pt-24 pb-32'
    >
      <div className="md:3/5">
        <h1>
          <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE.
        </h1>
        <p className="my-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque beatae voluptatum sed, voluptas animi, quisquam necessitatibus architecto maiores omnis officiis optio commodi. Suscipit assumenda delectus esse dicta cumque, voluptatibus quo.Feel free to reach out and let’s
        </p>
      </div>
    </section>
  )
}

export default Contact