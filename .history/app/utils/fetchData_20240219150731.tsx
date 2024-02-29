import React from 'react'

type Props = {}

const fetchData = async ({url, options}: Props) => {
    const response = await fetch(url, option)
  return (
    <div>fetchData</div>
  )
}

export default fetchData