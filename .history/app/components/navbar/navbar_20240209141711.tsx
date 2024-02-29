"use client"

import { useState } from 'react';
import clsx from 'clsx';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';



type Props = {}

const links = [
  { 
    name: 'Home', 
    href: '/' },
  {
    name: 'Benefits',
    href: '/benefits',
  },
  { name: 'Our Classes', 
  href: '/classes', 
 },
 { name: 'Contact us', 
  href: '/contact', 
 },
];

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen ] = useState<Boolean>(false)
  const flexBetween = 'flex items-center justify-between'

 const handleClick = () => {
  setIsOpen(!isOpen);
    console.log("clicked")
  }

  console.log('isOpen', isOpen)
  return (
    <nav>
      <div 
        className={`${flexBetween} fixed z-30 top-0 w-full py-6 bg-red-100 border-2 border-gray-500`}
      >
          <div className={`${flexBetween} mx-auto w-5/6 border border-sky-400`}>
            <div className={`${flexBetween} 
            w-full gap-16`}>
                <Image src='/assets/logo.png' alt='Evogym-logo' width={113} height={24} />
                
                {/* Right side */}
                <div className='hidden w-full sm:flex items-center justify-between'>
                  <div className='flex'>
                      {links.map(({href, name}) => (
                        <Link  
                          key={name} 
                          href={href}
                          className={clsx("flex grow items-center justify-center gap-2  p-3 text-sm font-medium hover:text-blue-600",
                          {
                             'text-blue-600': pathname === href
                          }
                          )}
                        >
                            {name}
                        </Link>
                      ))}

                  </div>
                  <div className={`${flexBetween} gap-8 text-sm`}>
                      <p>Sign In</p>
                      <Link 
                        href='/member'
                        className={clsx('btn-primary'
                          {
                          'text-blue-600': pathname === 'href'
                          }
                        )}
                      >
                        Become a Member
                      </Link>
                  </div>
                </div>

                {/* Mobile menu */}
                <div className="sm:hidden">
                  <button onClick={handleClick}
                  className='rounded-full bg-secondary-500 p-2 '
                  >
                    <Bars3Icon className='h-6 w-6 text-white'/> 
                  </button>
                </div>
            </div>
          </div>

          {isOpen && (
             <div className="flex flex-col justify-around items-center fixed top-0 bottom-0 z-40 h-full w-full bg-primary-100 sm:hidden">
             
             
             {/* Menu */}
             <div className='flex flex-col items-center justify-center mx-auto w-5/'>

             {links.map(({href, name}) => (
                        <Link  
                          key={name} 
                          href={href}
                          onClick={handleClick}
                          className={clsx("flex grow  gap-2  p-3 text-sm font-medium hover:text-blue-600",
                          {
                             'text-blue-600': pathname === href
                          }
                          )}
                        >
                           {name}
                        </Link>
                      ))}

              {/* SIGN IN BUTTON */}
              <div className='flex flex-col items-center justify-center grow  gap-2 p-3 text-sm font-medium my-8'>
                <p>Sign In</p>
                <button>Become a Member</button>
              </div>

              {/* CLOSE ICON */}
             <button onClick={handleClick}
              className='rounded-full bg-secondary-500 p-2'>
                <XMarkIcon  className='h-6 w-6 text-white'/>
              </button>

             </div>

             {/* <div className="flex justify-end p-12 ">
               <button onClick={handleClick}
               rounded-full bg-secondary-500 p-2
               >
                 <XMarkIcon className="h-6 w-6 text-gray-400" />
               </button>
             </div> */}
             
             {/* <div>
                      {links.map(({href, name}) => (
                        <Link  
                          key={name} 
                          href={href}
                          onClick={handleClick}
                          className={clsx("flex grow  gap-2  p-3 text-sm font-medium hover:text-blue-600",
                          {
                             'text-blue-600': pathname === href
                          }
                          )}
                        >
                           {name}
                        </Link>
                      ))}

                  </div> */}

                  {/* // <div className={`${flexBetween} gap-8`}>
                  //     <p>Sign In</p>
                  //     <button>Become a Member</button>
                  // </div> */}
            </div>
          )}
      </div>
    </nav>
  )
}

export default Navbar;