import Link from 'next/link'

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    // links: Array<{ name: string, href: string }>;
}

const Benefit = ({icon, title, description}: Props) => {
  return (
    <div className='mt-5 rounded-2 border-gray-100 px-5 py-16 text-center'>
         <div className="mb-4 flex justify-cen"></div>
    </div>
  )
}

export default Benefit;