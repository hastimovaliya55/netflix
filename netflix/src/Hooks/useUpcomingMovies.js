import axios from "axios";
import {getUpcomingMovie } from "../redux/MovieSlice";
import {Upcoming_Movie, options } from "../util/connection";
import {useDispatch} from "react-redux";

const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Upcoming_Movie, options);
        dispatch(getUpcomingMovie(res.data.results));
    } catch (error) {
        console.log(error);
    }
}
export default useUpcomingMovies;