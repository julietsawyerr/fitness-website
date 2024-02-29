// import { Bar3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from 'next/image'
import Link from 'next/link'
type Props = {}



const Navbar = (props: Props) => {
  const flexBetween = 'flex items-center justify-between'

  const scrollHandle = (e) => {
    e.preventDefault();
    let id = e.target.id;
    let position = document.getElementById(id.slice(0, id.length - 1)); //removing extra last - (dash)
    window.location.href = "#" + id.slice(0, id.length - 1); // changing the url
    position && position.scrollIntoView({ behavior: "smooth", block: "start" }) //scrolling the page
   }
  return (
    <nav>
      <div 
        className={`${flexBetween} fixed z-30 top-0 w-full py-6 bg-red-300 border-2 border-gray-500`}
      >
          <div className={`${flexBetween} mx-auto w-5/6 border border-sky-400`}>
            <div className={`${flexBetween} 
            w-full gap-16`}>
                <Image src='/assets/logo.png' alt='Evogym-logo' width={113} height={24} />

                {/* Right side */}
                <div className={`${flexBetween} w-full`}>
                  <div >
                    <ul className={`${flexBetween} gap-8 text-sm `}>
                    <li className='border border-red-800'>
                    <Link href='#first'
                    >Home</Link>
                    </li>

                    <li>
                    <Link href='#second'
                    >Benefits</Link>
                    </li>

                    <li>
                    <Link href='#third'
                    >Our Classes</Link>
                    </li>

                    <li>
                    <Link href='#forth'
                    >Contact us</Link>
                    </li>  
                    </ul>
                  </div>
                  <div className={`${flexBetween} gap-8`}>
                      <p>Sign In</p>
                      <button>Become a Member</button>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;