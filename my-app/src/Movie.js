import React, {Component} from 'react'
import PropTypes from "prop-types"
import './Movie.css'
// import LinesEllipsis from 'react-lines-ellipsis'

class Movie extends Component{

componentWillMount(){
  console.log('willmount');
  
}

  // static propTypes = {
  //   title : PropTypes.string.isRequired,
  //   poster : PropTypes.string.isRequired
  // }
  render(){
    return(
      <div>

      </div>
    )
  }
}

// class MoviePoster extends Component{

//   static propTypes = {
//     poster : PropTypes.string.isRequired
//   }
//   render(){
//     return(
//       <img src={this.props.poster} alt="" />
//     )
//   }
// }

// function Movie({title, poster, genres, synopsis}){
//   return (
//     <div className="Movie">
//       <div className="Movie_Column">
//         <MoviePoster poster={poster} alt={title}/>
//       </div>
//       <div className="Movie_Column">
//         <h1>{title}</h1>
//         <div className="Movie_Genres">
//           {genres.map((genre, index) => <MovieGenre genre={genre} key={index} /> )}
//         </div>
//         <p className="Movie_Synopsis">
//           <LinesEllipsis 
//             text={synopsis}
//             maxLine='3'
//             ellipsis ="..."
//             trimRight
//             basedOn='letters'
//           />
//         </p>
//       </div>
//     </div>
//   )
// }

function MoviePoster ({poster, alt}){
  return (
    <img src={poster} alt={alt} className="Movie_Poster" />
  )
}

function MovieGenre ({genre}){
  return (
    <span className="Movie_Genre">{genre}</span>
  )
}

// Movie.propTypes = {
//   title : PropTypes.string.isRequired,
//   poster : PropTypes.string.isRequired,
//   genres : PropTypes.array.isRequired,
//   synopsis : PropTypes.string.isRequired
// }

// MoviePoster.propTypes = {
//   poster : PropTypes.string.isRequired,
//   alt : PropTypes.string.isRequired
// }

// MovieGenre.propTypes = {
//   genres : PropTypes.array.isRequired
// }


export default Movie  