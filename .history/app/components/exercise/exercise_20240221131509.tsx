import { MotionDiv } from '@/app/ui/motion'
import { ExerciseType } from "@/app/ui/types"

const childVariant = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity:1, scale:1}
}


const exercise = ({workout, equipment, description, img, video}: ExerciseType) => {
  return (
    <div>exercise</div>
  )
}

export default exercise