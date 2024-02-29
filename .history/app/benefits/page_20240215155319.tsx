import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon
} from '@heroicons/react/24/solid'

type Props = {}

const Benefits = (props: Props) => {
  return (
    <section className='mx-auto min-h-full w-5/6 py-20 mt-10'>
      {/*  Heading */}
      <div className="">
        <h1>MORE THAN JUST A GYM.</h1>
        <p className="my-5 text-base  md:w-3/5">
        We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
        </p>
      </div>
    </section>
  )
}

export default Benefits