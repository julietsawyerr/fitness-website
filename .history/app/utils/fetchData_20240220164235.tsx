// const url = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'eddcf991f4mshf9e0e9e9c02ab10p1c98bbjsnff4fcc2be6b1',
// 		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
// 	}
// };

const url = 'https://exerciseapi3.p.rapidapi.com/exercise/secondary_muscle/chest';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eddcf991f4mshf9e0e9e9c02ab10p1c98bbjsnff4fcc2be6b1',
		'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
	}
};


export const getData = async() => {
    const response = await fetch(url, options); 
    const  data = await response.json();  
     return data;
}