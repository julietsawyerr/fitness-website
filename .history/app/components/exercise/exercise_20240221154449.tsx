import { MotionDiv } from '@/app/ui/motion'
import { ExerciseType } from "@/app/ui/types"
import Image from 'next/image'

const childVariant = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity:1, scale:1}
}

const exercise = ({workout, equipment, description, img, video}: ExerciseType) => {
  return (
    <MotionDiv 
    className='bg-white  mt-5 rounded-2 border-2 border-gray-100 '
    variants={childVariant}
    >
      {/* image */}
      <div className="w-[350px] h-[300px] border-2 border-grak">
        <Image src={`/exercise-gif/${img}`} alt={workout} width={350} height={200} />
      </div>

        {/* description */}
        <div className="px-5 py-16 text-center">
          <p>{workout}</p>
          {equipment}
        </div>
        
    </MotionDiv>
  )
}

export default exercise