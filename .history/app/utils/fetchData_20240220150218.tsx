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
		'X-RapidAPI-Key': 'eddcf991f4mshf9e0e9e9c02ab10p1c98bbjsnff4fcc2be6b1',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};


export const FetchData = async ({url}: Props) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
    }
}

