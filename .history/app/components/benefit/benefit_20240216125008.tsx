import Link from 'next/link'

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    // links: Array<{ name: string, href: string }>;
}

const Benefit = ({icon, title, description}: Props) => {
  return (
    <div className='mt-5 rounded-2 border-2 border-gray-100 px-5 py-16 text-center'>
         <div className="mb-4 flex justify-center">
          <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
            {icon}
          </div>
         </div>

         <h4 className="font-bold">{title}</h4>
         p
    </div>
  )
}

export default Benefit;