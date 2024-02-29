"use client"

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Links } from './links'



type Props = {}

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen ] = useState<Boolean>(false)
  const [isAtTop, setIsAtTop] = useState<Boolean>(true);
  const flexBetween = 'flex items-center justify-between'


  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is at the top
      const atTop = window.scrollY === 0;
      console.log(window.scrollY)
      if(atTop){
        setIsAtTop(true);
      }
      
      if(!atTop){
        setIsAtTop(false)
      }
      
    };

    // Add event listener for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  const navBg = isAtTop ? '' : 'bg-primary-100 drop-shadow'

 const handleClick = () => {
  setIsOpen(!isOpen);
  }

  return (
    <nav>
      <div 
        className={`${navBg} ${flexBetween} fixed z-30 top-0 w-full py-6`}
      >
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} 
            w-full gap-16`}>
                <Image src='/assets/logo.png' alt='Evogym-logo' width={113} height={24} />
                
                {/* Right side */}
                <div className='hidden w-full sm:flex items-center justify-between'>
                  <div className='flex'>
                      {Links.map(({href, name}) => (
                        <Link  
                          key={name} 
                          href={href}
                          className={clsx("flex grow items-center justify-center gap-2  p-3 text-base font-medium hover:text-primary-500",
                          {
                             'text-primary-500': pathname === href
                          }
                          )}
                        >
                            {name}
                        </Link>
                      ))}

                  </div>
                  <div className={`${flexBetween} gap-8 text-base`}>
                      <Link href='#'>Sign In</Link>
                      <Link 
                        href='#'
                        className={clsx('btn-primary',
                        
                          {
                          'bg-primary-500 text-white': pathname === '/member'
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

             {Links.map(({href, name}) => (
                        <Link  
                          key={name} 
                          href={href}
                          onClick={handleClick}
                          className={clsx("flex grow  gap-2  p-3 text-base font-medium hover:text-primary-500",
                          {
                             'text-primary-500': pathname === href
                          }
                          )}
                        >
                           {name}
                        </Link>
                      ))}

              {/* SIGN IN BUTTON */}
              <div className='flex flex-col items-center justify-center grow  gap-2 p-3 text-base font-medium my-8'>
                <Link href="#">Sign In</Link>
                <button>Become a Member</button>
              </div>

              {/* CLOSE ICON */}
             <button onClick={handleClick}
              className='rounded-full bg-secondary-500 p-2'>
                <XMarkIcon  className='h-6 w-6 text-white'/>
              </button>

             </div>
            </div>
          )}
      </div>
    </nav>
  )
}

export default Navbar;