import { MotionDiv } from '@/app/ui/motion'
import { ExerciseType } from "../ui/types"

const childVariant = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity:1, scale:1}
}

type Props = {}

const exercise = ({workout, equipment, description, img, vi}: ExerciseType) => {
  return (
    <div>exercise</div>
  )
}

export default exercise