import Image from 'next/image'


const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <Image src='/assets/Logo.png' alt='logo'
                width={113}
                height={24} />

                <p className='my-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil neque consequuntur nostrum tempora veniam vero ea obcaecati cumque ipsa ut fugit laudantium iusto, ratione dolores illum pariatur cupiditate, modi dolor.
                </p>

                <p className="">&copy; All right reserved.

                </p>
            </div> 

            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">About</p>
                <p className="my-5">Blog</p>
                <p className="my-5">Jobs</p>
            </div>

            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">About</p>
                <p className="my-5">Blog</p>
                <p className="my-5">Jobs</p>
            </div>
            
        </div>




        


    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Image src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" width={1} />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>



    </footer>
  )
}

export default Footer