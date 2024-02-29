import Link from 'next/link'

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    // links: Array<{ name: string, href: string }>;
}

const Benefit = ({icon, title, description}: Props) => {
  return (
    <div>
        <Link href='/classes'>
        <div className="className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      
        <p>Learn More</p>
        </Link>

    </div>
  )
}

export default Benefit;