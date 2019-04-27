import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'


class App extends Component {
  // render : componentWillMount() -> render() -> componentDidMount()

  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  // state = {
  //   greeting : 'Hello!',
  //   movies : [
  //     { 
  //       _id : 0,
  //       title : "HarryPotter",
  //       poster : "http://dh.aks.ac.kr/Edu/wiki/images/thumb/a/aa/%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B01.jpg/200px-%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B01.jpg"
  //     },
  //     { 
  //       _id : 1,
  //       title : "Star Wars",
  //       poster : "http://moonhak.co.kr/home/wp-content/uploads/bookcover/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EC%94%A8%EB%84%A4%EC%95%84%ED%8A%B86_%ED%91%9C1_web-600x751.jpg"
  //     },
  //     { 
  //       _id : 2,
  //       title : "Old Boy",
  //       poster : "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79861/79861_1000.jpg"
  //     },
  //     { 
  //       _id : 3,
  //       title : "Super Man",
  //       poster : "https://post-phinf.pstatic.net/MjAxNzEwMTVfOTQg/MDAxNTA4MDAyOTM0NzE2.4A1TqpW8GHOHAgSzAN5fwhx5SOltwpraBmvxG6gi2Y8g._uCr70cTi4HIjpRtkHFjktFhy9LZkBp6Q3va8JKCDIUg.JPEG/%EC%8A%88%ED%8D%BC%EB%A7%A82.jpg?type=w1200"
  //     }
  //   ]
  // }

  state = {}


  componentDidMount() {
    console.log('test')
    setTimeout(() => {
      this._getMovies()

    },5000)

    // setTimeout(() => {
    //   this.setState({
    //     movies: [
    //       ...this.state.movies,
    //       {
    //         _id : 4,
    //         title: 'Saw',
    //         poster: 'http://cfs11.tistory.com/image/14/tistory/2008/12/05/18/57/4938fb0fac257'
    //       }
    //     ]
    //   })
    // }, 5000)
  }

  _renderMovies = () => {
    // const movies = this.state.movies.map(movie => {
    //   return <Movie 
    //   // title={movie.title} 
    //   // poster={movie.medium_cover_image} 
    //   // key={movie.id} 
    //   // genres={movie.genres} 
    //   // synopsis={movie.synopsis}
    //   />
    // })
    // return movies
    return <Movie />
  }

   _getMovies = async() => {
    // const movies = await this._callApi()
    this.setState({
      movies : {a : 'a'}
    }) 
  }
  
  // _callApi = () => {
  //   return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
  //   .then(data => data.json())
  //   .then(json => json.data.movies)
  //   .catch(err => console.log(err))
  // }

  render() {
    return (
      <div className="App">
        { this.state.movies ? this._renderMovies() : 'Loading' }
      </div>
    )
  }
}

export default App;
