import React from 'react';
import AppRouter from './AppRouter';

import NavigationBar from './components/NavigationBar/NavigationBar';
import Container from './components/Container/Container';

const App: React.FC = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Container>
        <AppRouter></AppRouter>
      </Container>
    </>
  );
};

export default App;
