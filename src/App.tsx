import '@mantine/core/styles.css';
import './App.css';
import { Container, Divider, MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from './Navigation/HeaderMegaMenu';
import { ProjectsContainer } from './Projects/ProjectsContainer';
import { Home } from './Home/Home';

function App() {
  return (
    <>
      <MantineProvider>
        <Container fluid>
        <HeaderMegaMenu />
          <Home />
          <Divider my="xl" size="lg" />
          <ProjectsContainer />
        </Container>
      </MantineProvider>
    </>
  )
}

export default App
