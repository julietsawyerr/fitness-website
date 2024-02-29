import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
            



        


    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Image src='/assets/Logo.png' alt='logo' width={113} height={24}/>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0" role="list">
                <li>
                <Link href="#" className="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                </li>
                <li>
                    < href="#" className="hover:underline me-4 md:me-6">Licensing</>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center">©  <Link href="/" className="hover:underline">Evogym™</Link> All Rights Reserved.</span>
    </div>


    </div>

    </footer>
  )
}

export default Footer