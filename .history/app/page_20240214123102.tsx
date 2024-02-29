
import Image from 'next/image'

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
                <Image src='/assets/HomePageText.png' alt='home-page-text' width={{400} />
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className=""></div>
      </div>

     
    </section>
  );
}
