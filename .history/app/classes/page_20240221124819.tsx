import { Exercise } from "../ui/exercise"
import { MotionDiv } from '@/app/ui/motion'

type Props = {}

const OurClasses = (props: Props) => {
  return (
    <div className='mx-auto min-h-full w-5/6 py-20 mt-20'>
      <MotionDiv 
        className="md:w-2/5 mx-auto text-center"
        initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration : 0.5}}
          variants={{ 
            hidden:{opacity:0, x: -50}, 
            visible:{ opacity:1, x: 0 }, 
            }}
      >
        <h1>OUR  <span className='text-primary-500'> CLASSES </span></h1>
      </MotionDiv>

      



    </div>
  )
}

export default OurClasses