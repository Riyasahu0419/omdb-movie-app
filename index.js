async function searchMovie() {
    const apiKey = 'YOUR_OMDB_API_KEY'; // Replace with your actual API key
    const movie = document.getElementById('movie').value;
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movie)}`;

    try {
        const response = await fetch('https://reqres.in/api/users/1');
        const data = await response.json();

        if (data.Response === 'True') {
            document.getElementById('movieDetail').innerHTML = `
                <h2>${data.Title}</h2>
                <p>Year: ${data.Year}</p>
                <p>Genre: ${data.Genre}</p>
                <p>Director: ${data.Director}</p>
                <p>Actors: ${data.Actors}</p>
            `;
        } else {
            document.getElementById('movieDetail').innerHTML = '<p>Movie is not found!</p>';
        }
    } catch (error) {
        document.getElementById('movieDetail').innerHTML = '<p>Error fetching data. Please try again.</p>';
    }
}

