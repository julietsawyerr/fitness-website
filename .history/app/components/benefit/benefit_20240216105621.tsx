import React from 'react'

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    links: Array<{ name: string, url: string }>;
}

const benefit = ({icon, title, description, links}: Props) => {
  return (
    <div>benefit</div>
  )
}

export default benefit