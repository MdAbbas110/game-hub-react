import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'main' 'aside'`,
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' bg='gold'>
          Aside
        </GridItem>
      </Show>
      <GridItem area='main' bg='blue'>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
