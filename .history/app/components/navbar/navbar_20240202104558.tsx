import { Bar3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from 'next/image'
import Link from 'react-scroll/modules'
type Props = {}



const Navbar = (props: Props) => {
  const flexBetween = 'flex items-center justify-between'
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
                  <div>
                    <ul className={`${flexBetween} gap-8 text-sm `}>
                    <li className='border border-red-800'>
                    <Link href='#first'
                    data-te-smooth-scroll-init
                    >Home</Link>
                    </li>

                    <li>
                    <Link href='#second'
                     data-te-smooth-scroll-init
                    >Benefits</Link>
                    </li>

                    <li>
                    <Link href='#third'
                    data-te-smooth-scroll-init
                    >Our Classes</Link>
                    </li>

                    <li>
                    <Link href='#forth'
                    data-te-smooth-scroll-init
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