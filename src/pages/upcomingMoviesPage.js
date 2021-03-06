import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovie } from "../api/tmdb-api";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'

const UpcomingMoviesPage = (props) => {
    const { data, error, isLoading, isError } = useQuery('discover', getUpcomingMovie)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const movies = data.results;

    return (
        <PageTemplate
            title='Upcoming Movies'
            movies={movies}
            action={(movie) => {
                return <PlaylistAddIcon movie={movie} />
            }}
        />
    );
};
export default UpcomingMoviesPage;