import fetch from 'node-fetch';
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }

        let data = await response.json();

        return data;
    } catch(error) {
        return `Error: ${error.message}`;
    }
}

fetchData().then(value => console.log(value))