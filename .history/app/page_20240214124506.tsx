
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex gap-16 py-10 border-2 md:h-full md:pb-0">
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
        <Link href='' className='[' />
        </div>

        {/* IMAGE */}
        <div className=""></div>
      </div>

     
    </section>
  );
}
