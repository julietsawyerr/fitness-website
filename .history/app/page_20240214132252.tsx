
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex flex-col gap-16 py-10 border-2 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <div className="">
        
        {/* MAIN HEADER */}
        <div className="">
          {/* HEADINGS */}
          <div className="">
            <div className="">
              <div className="">
                <Image src='/assets/HomePageText.png' alt='home-page-text' width={400} height={200} />
              </div>
            </div>

            <p className="mt-8"> 
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>

        {/* BUTTONS */}
          <div className="">
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
        <div className="">
          <Image src='/assets/HomePageGraphic.png' alt='home-page-graphics' width={575} height={628}/>
        </div>
      </div>

     {/* SPONSORS */}
     <div className="">
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
