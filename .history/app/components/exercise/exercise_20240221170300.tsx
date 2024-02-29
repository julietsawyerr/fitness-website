import { MotionDiv } from '@/app/ui/motion'
import { ExerciseType } from "@/app/ui/types"
import Image from 'next/image'
import Link from 'next/link'

const childVariant = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity:1, scale:1}
}

const Exercise = ({workout, equipment, description, img, video}: ExerciseType) => {
  return (
    <div className='bg-white w-[350px] mt-5 rounded-2 border-2 border-gray-100'>
      {/* Images */}
      {/* <div className="md:w-[350px] h-[300px] border-2 border-gray-500">
        <Image  src={`/exercise-gif/${img}`} alt={workout} fill/>
      </div> */}

  {/* description */}
  <div className="px-5 py-16">
  <h4 className="font-bold">{workout}</h4>
  <p>Equipment: {equipment}</p>
  <p className='my-3'>{description}</p>
  {/* <Link href={`{video}`}>Watch Video</Link> */}

  </div>
    </div>


  
  )
}

export default Exercise;