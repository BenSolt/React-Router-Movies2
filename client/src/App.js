import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

import {Route, Link} from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    
    <div>
     
      <SavedList list={savedList} />

      <Route exact path='/' component={MovieList}/>
      {/* <Route exact path="/" render={props => <MovieList {...props} movies={MovieList}/>} /> */}
      <Route path='/movie/:id' component={Movie}/>
      
    </div>
  );
};

export default App;
