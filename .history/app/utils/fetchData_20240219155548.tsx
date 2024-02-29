import React from 'react'

type Props = {
    options: {
        method: string;
        headers: {
            'X-RapidAPI-Key': string;
            'X-RapidAPI-Host': string;
        };
    }
}

const url = 'https://work-out-api1.p.rapidapi.com/search?Muscles=biceps';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eddcf991f4mshf9e0e9e9c02ab10p1c98bbjsnff4fcc2be6b1',
		'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
	}
};


const fetchData = async ({url, options}: Props) => {
    const response = await fetch(url, options)
    const data = await response.json()
  
    return data
}

export default fetchData