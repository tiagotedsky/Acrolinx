import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { FilterBox } from './components/FilterBox/FilterBox';
import { Table } from './components/Table/Table';
import { data } from './mock/data';
import { FilterList } from './App.types';

const App = (): JSX.Element => {
  const [filters, setFilters] = useState<FilterList>({});

  return (
    <Container fixed>
      <FilterBox data={data} setFilters={setFilters} filters={filters} />
      <Table data={data} filters={filters} />
    </Container>
  );
};

export default App;
