import React from 'react'


function Home({movies}){
    return(
    <>
        <ul>
            {
                movies.map(movie => <li>{movie.title}</li>)
            }
        </ul>
    </>
    )
}

export default Home;