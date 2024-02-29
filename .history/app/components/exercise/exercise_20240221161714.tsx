import { MotionDiv } from '@/app/ui/motion'
import { ExerciseType } from "@/app/ui/types"
import Image from 'next/image'

const childVariant = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity:1, scale:1}
}

const Exercise = ({workout, equipment, description, img, video}: ExerciseType) => {
  return (
    <MotionDiv 
    className='bg-white w-[350px] mt-5 rounded-2 border-2 border-gray-100'
    variants={childVariant}
    >
      exercise
      {/* Images */}
      div.
    </MotionDiv>
    //   {/* image */}
    //   <div className="">
    //     <Image 
    //       src={`/exercise-gif/${img}`}
    //       width={300} height={200}
    //       layout='responsive'
    //       alt={workout}  
    //       />
    //   </div>

    //     {/* description */}
    //     <div className="px-5 py-16 text-center">
    //       {workout}
    //       {equipment}
    //     </div>
  )
}

export default Exercise;