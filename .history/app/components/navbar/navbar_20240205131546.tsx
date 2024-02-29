"use client"

import clsx from 'clsx';
import { Bar3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react';


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
                  <div className={`${flexBetween} gap-8`}>
                      <p>Sign In</p>
                      <button>Become a Member</button>
                  </div>
                </div>

                {/* Mobile menu */}
                <div className="sm:hidden">
                  <Button>
                    
                  </Button
                  className
                  >
                    {/* {!isOpen ? <Bar3Icon /> : <XMarkIcon /> } */}
                </div>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;