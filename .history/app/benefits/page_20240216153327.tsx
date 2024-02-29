import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon
} from '@heroicons/react/24/solid'
import { BenefitType } from '@/app/ui/types';
import Benefit from "@/app/components/benefit/benefit"
import { MotionDiv } from '@/app/ui/motion'
import Image from 'next/image'

type Props = {}

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}


const Benefits = (props: Props) => {
  return (
    <section className='mx-auto min-h-full w-5/6 py-20 mt-20'>
      {/*  Heading */}
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
        <h1>MORE THAN JUST A GYM.</h1>
        <p className="my-5 text-base ">
        We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
        </p>
      </MotionDiv>

      {/* BENEFITS */}
      <MotionDiv 
      className="mt-5 items-center justify-between gap-8 md:flex"
      initial='hidden'
      whileInView='visible'
      viewport={{once: true, amount: 0.5}}
      variants = {container}
      >
        {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
        ))}
      </MotionDiv>

      {/* GRAPHICS AND DESCRIPTION */}
      <div className="">
        <div className="">
          {/* IMAGE */}
        </div>

        <div className="">
          {/* TITLE */}
          {/* DESCRIPTION */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
              <div>
                <h1>MILLIONS OF HAPPY MEMBERS {' '}
                <span className="text-primary-500">FIT</span>
                </h1>
              </div>

            </div>
          </div>
          {/* BUTTON */}
        </div>
      </div>
    </section>
  )
}

export default Benefits