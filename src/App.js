import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import './App.css';

const App = () => {
    const Home = () => 'Home page';
    const Movies = () => 'MOVEIS PAGE';
    const TvShows = () => 'TV SHOWS PAGE';

    const routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: 'movies', element: <Movies /> },
        { path: 'tv-shows', element: <TvShows /> },
    ]);

    return routes;
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
