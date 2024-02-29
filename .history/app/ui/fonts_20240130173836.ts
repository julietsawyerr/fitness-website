import { DM_Sans, Montserrat } from 'next/font/google'
 
export const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})
 
export const mont = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
  display: 'swap',
})