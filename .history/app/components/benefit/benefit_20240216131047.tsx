import Link from 'next/link'
import { MotionDiv } from '@/app/ui/motion'

c

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    // links: Array<{ name: string, href: string }>;
}

const Benefit = ({icon, title, description}: Props) => {
  return (
    <MotionDiv 
    className='mt-5 rounded-2 border-2 border-gray-100 px-5 py-16 text-center'
    variants={childVariant}
    >
         <div className="mb-4 flex justify-center">
          <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
            {icon}
          </div>
         </div>

         <h4 className="font-bold">{title}</h4>
         <p className='my-3'>{description}</p>
         <Link 
            href='/classes'
            className='text-base font-bold text-primary-500 underline hover:text-secondary-500'
          >
            Learn More
          </Link>
    </MotionDiv>
  )
}

export default Benefit;