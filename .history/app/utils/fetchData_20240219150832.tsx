import React from 'react'

type Props = {}

const fetchData = async ({url, options}: Props) => {
    const response = await fetch(url, options)
    const data = await response.json()
  return data
}

export default fetchData