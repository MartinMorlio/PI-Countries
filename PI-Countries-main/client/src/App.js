import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Activities from './components/Activity/activities';
import CountryId from './components/Countries/CountryId';
import NotFound from './components/NotFound/NotFound';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from './actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={Home} />
          <Route path="/activities" component={Activities} />
          <Route exact path="/countries/:id" component={CountryId} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
