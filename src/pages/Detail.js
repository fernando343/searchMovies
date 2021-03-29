import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const API_KEY = '5e0c4436'

export class Detail extends Component {
    static propTypes = {
        id: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }

    _fetchMovie({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log({ movie });
                this.setState({ movie })
            })
    }

    _goBack() {
        window.history.back()
    }

    componentDidMount() {
        const { movieId } = this.props.match.params
        this._fetchMovie({ id: movieId })
    }

    render() {
        const { Title, Poster, Actors, Language, Rated, Released, Runtime, Plot } = this.state.movie
        return (
            <div>
                <div className="detail">
                    <img src={Poster} alt={Title} />
                    <div className="detalles">
                        <h1>{Title}</h1>
                        <p><b>Actors:</b> {Actors}</p>
                        <p><b>Language:</b> {Language}</p>
                        <p><b>Rated:</b> {Rated}</p>
                        <p><b>Released:</b> {Released}</p>
                        <p><b>Plot:</b> {Plot}</p>
                        <small><b>Runtime:</b> {Runtime}</small>
                    </div>
                </div>
                <Link to="/" className="button is-info">Go Back</Link>
            </div>
        );
    }
}