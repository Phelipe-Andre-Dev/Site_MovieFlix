import React from 'react'
import styles from './MovieList.module.css'



const MovieList = (props) => {
    return(
        
        <div className={styles.body}>
            
            <div className={styles.div}>
            {props.movies.map((movie, index) => (
              
            <img className={styles.img}
            src={movie.Poster} alt='movie'></img>
              
           ))}
           </div>


        </div>
    )
}
export default MovieList