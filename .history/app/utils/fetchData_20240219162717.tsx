import React from 'react'

type Props = {
    url: string;
    options: {
        method: string;
        headers: {
            'X-RapidAPI-Key': string;
            'X-RapidAPI-Host': string;
        };
    }
}


export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
	}
};


export const FetchData = async ({url, options}: Props) => {
    const response = await fetch(url, options)
    const data = await response.text();
  
    return data
}

