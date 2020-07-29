import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import Header from './Header';
import MovieList from './MovieList';

const App = () => {
  const [filterSearch, setFilterSearch] = useState('');

  const handleFilter = (event) => {
    setFilterSearch(event.target.value);
  };

  return (
    <>
      <Header title={'Favourite Movies'} />
      <Input
        onKeyUp={handleFilter}
        placeholder="Filter"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '40px',
        }}
      />
      <MovieList filterSearch={filterSearch} />
    </>
  );
};

export default App;
