import Link from 'next/link'

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    // links: Array<{ name: string, href: string }>;
}

const benefit = ({icon, title, description}: Props) => {
  return (
    <div>
        <Link href='/m'></Link>

    </div>
  )
}

export default benefit