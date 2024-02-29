const getData = async() => {
    const response = await fetch('https://api.github.com/users/octocat'); 
    const  data = await response.json();
}