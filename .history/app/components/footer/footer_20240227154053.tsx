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

            <div className="mt-16 basis-1/4 md:mt-10">
                <h4 className="font-bold">Links</h4>
                p.font-bold
            </div>
            <div className="">3</div>
        </div>
    </footer>
  )
}

export default Footer