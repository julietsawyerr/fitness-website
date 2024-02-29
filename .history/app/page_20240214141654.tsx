
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex flex-col gap-16 py-10 border-2 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <Image src='/assets/HomePageText.png' alt='home-page-text' width={400} height={200} />
              </div>
            </div>
            <p className="mt-8 text-sm "> 
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>

        {/* BUTTONS */}
          <div className="mt-y">
          <Link 
          href='/member' 
          className='btn-primary'>
            Join Now
          </Link>

          <Link 
            href='/contact'
            className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
          >
            Learn More
          </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className='flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end'>
          <Image src='/assets/HomePageGraphic.png' alt='home-page-graphics' width={575} height={628}/>
        </div>
      </div>

     {/* SPONSORS */}
     <div className="hidden md:block">
      <div className="">
        <div className="">
          <Image src='/assets/SponsorRedBull.png' alt='red-pull-sponsor' width={92} height={54}/>

          <Image src='/assets/SponsorForbes.png' alt='forbes-sponsor' width={103} height={28}/>

          <Image src='/assets/SponsorFortune.png' alt='fortune-sponsor' width={113} height={26}/>
        </div>
      </div>
     </div>
    </section>
  );
}
