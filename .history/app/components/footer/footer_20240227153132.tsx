import Image from 'next/image'


const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <Image src='/assets/Logo.png' alt='logo'
                width={113}
                height={24} />

                <p className=>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil neque consequuntur nostrum tempora veniam vero ea obcaecati cumque ipsa ut fugit laudantium iusto, ratione dolores illum pariatur cupiditate, modi dolor.
                </p>
            </div> 
            <div className="">2</div>
            <div className="">3</div>
        </div>
    </footer>
  )
}

export default Footer