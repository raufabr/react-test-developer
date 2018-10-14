import React, { Component } from "react";
import axios from "axios";
import { Grid, Col, Row, Media } from "react-bootstrap";

const API_CALL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=95ccce525cb65ec0312e9082baab2093&language=en-US";
const API_KEY = "95ccce525cb65ec0312e9082baab2093";

class PopularMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: []
    };
  }

  componentDidMount() {
    const self = this;
    axios
      .get(API_CALL)
      .then(function(response) {
        // handle success
        const movie = response.data.results;
        console.log(movie);
        self.setState({
          movie
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
        //console.log("Movies" + data);
      });
  }

  render() {
    return (
      <div className="popularRoot">
        <Grid>
          <Row>
            {this.state.movie.map(movie => (
              <Col key={movie.id} xs={6} md={4}>
                <div className="grid">
                  <div className="poster">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" + movie.poster_path
                      }
                      width="356px"
                      height="500px"
                    />
                  </div>
                  <div className="popular-movie-title">
                    <strong>{movie.title} </strong>
                  </div>
                  <div>
                    {" "}
                    <strong>Popularity: </strong>
                    {movie.popularity}
                  </div>
                  <div> Genres: {movie.genre_ids} </div>
                  <div className="popular-movies">
                    Language: {movie.original_language}
                  </div>
                  <p />
                </div>
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default PopularMovies;
