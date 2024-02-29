import { ExerciseList } from "../ui/exercise"
import { MotionDiv } from '@/app/ui/motion'
import { ExerciseType } from "../ui/types"
import Exercise from '@/app/components/exercise/exercise'

type Props = {}

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}


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

      {/* EXERCISE */}
      <MotionDiv 
      className="mt-5 items-center justify-between gap-8 md:flex"
      initial='hidden'
      whileInView='visible'
      viewport={{once: true, amount: 0.5}}
      variants = {container}
      >
        {ExerciseList.map((exercise: ExerciseType) => (
            <Exercise
              key={exercise.workout}
              img={exercise.img}
              title={exercise.workout}
              equipment={exercise.equipment}
              description={exercise.description}
              video={exercise.video}
              
        ))}
      </MotionDiv>
            



    </div>
  )
}

export default OurClasses