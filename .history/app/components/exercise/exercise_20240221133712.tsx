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
    className='mt-5 rounded-2 border-2 border-gray-100 px-5 py-16 text-center'
    variants={childVariant}
    >
        <Image src={'/exercise-gif/${img}'} alt={workout} width={384} height={216} />
    </MotionDiv>
  )
}

export default exercise