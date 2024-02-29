import { MotionDiv } from '@/app/ui/motion'
import { ExerciseType } from "@/app/ui/types"
import Image from 'next/image'

const childVariant = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity:1, scale:1}
}

const Exercise = ({workout, equipment, description, img, video}: ExerciseType) => {
  return (
    <div className='bg-white mt-5 rounded-2 border-2 border-gray-100'>
    
      {/* Images */}
      <div className="overflow-hidden">
        <Image  
          src={`/exercise-gif/${img}`} 
          alt={workout} 
          width={345} 
          height={400}
          className='w-auto h-auto object-fit-contain' 
        />
      </div>

  {/* description */}
  <div className="px-5 pt-8 pb-16">
  <h4 className="font-bold">{workout}</h4>
  <p>Equipment: {equipment}</p>
  <p className='my-3'>{description}</p>
  <a 
    href={video}
    target='_blank'
    className='text-base font-bold text-primary-500 underline hover:text-secondary-500'
  >Watch Video</a>

  </div>
    </div>


  
  )
}

export default Exercise;