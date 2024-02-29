
import Image from 'next/image'
import Link from 'next/link'
import { MotionDiv } from '@/app/ui/motion'

export default function Home() {
  return (
    <section className="flex flex-col gap-16 py-10 border-2 md:h-full md:pb-16">
      {/* IMAGE AND MAIN HEADER */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <MotionDiv 
          className="-mt-10 md:-mt-20"
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration : 0.5}}
          variants={{ 
            hidden:{opacity:0, x: -50}, 
            visible:{ opacity:1, x: 0 }, 
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <Image src='/assets/HomePageText.png' alt='home-page-text' width={400} height={200} />
              </div>
            </div>
            <p className="mt-8 text-base "> 
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of. Get Your Dream
              Body Now.
            </p>
          </MotionDiv>

        {/* BUTTONS */}
          <MotionDiv 
          className="mt-8 flex text-base items-center gap-8 md:justify-start"
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration : 0.5}}
          variants={{ 
            hidden:{opacity:0, x: -50}, 
            visible:{ opacity:1, x: 0 }, 
            }}
          >
          <Link 
          href='£#' 
          className='btn-primary'>
            Join Now
          </Link>

          <Link 
            href='/contact'
            className='text-base font-bold text-primary-500 underline hover:text-secondary-500'
          >
            Learn More
          </Link>
          </MotionDiv>
        </div>

        {/* IMAGE */}
        <div className='flex basis-3/5 justify-center mt-10 md:z-10 
              md:ml-40 md:mt-16 md:justify-items-end'>
          <Image src='/assets/HomePageGraphic.png' alt='home-page-graphics' width={500} height={450}/>
        </div>
      </div>

    </section>
  );
}
