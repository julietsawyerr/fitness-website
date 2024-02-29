import { ExerciseList } from "../ui/exercise"
import { MotionDiv } from '@/app/ui/motion'
import { ExerciseType } from "../ui/types"
import Exercise from '@/app/components/exercise/exercise'

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}


const OurClasses = () => {
  return (
    <section className='mx-auto min-h-full w-5/6 py-20 mt-20'>
      <MotionDiv 
        className="md:w-3/5 mx-auto text-center"
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
        <p className="my-5 text-base">Our classes focus on the technique to effectively engage the muscles for strength building and muscle definition.</p>
      </MotionDiv>

      {/* EXERCISE */}
      <MotionDiv 
      className="grid grid-cols-1 sm: grid-cols-2 md:grid-cols-43 md:grid-auto-flow-row  " 
      initial='hidden'
      whileInView='visible'
      viewport={{once: true, amount: 0.5}}
      variants = {container}
      >
        {ExerciseList.map((exercise: ExerciseType) => (

            <Exercise
              key={exercise.workout}
              img={exercise.img} 
              workout={exercise.workout}
              equipment={exercise.equipment}
              description={exercise.description}
              video={exercise.video} />
          ))}
      </MotionDiv>
            



    </section>
  )
}

export default OurClasses