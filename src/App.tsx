import '@mantine/core/styles.css';
import './App.css';
import { Container, MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from './Navigation/HeaderMegaMenu';
import { Home } from './Home/Home';

function App() {
  return (
    <>
      <MantineProvider theme={{
        fontFamily: 'Roboto Mono, monospace',
        headings: { fontFamily: 'Yatra One, system-ui' },
}}
>
        <Container fluid>
        <HeaderMegaMenu />
          <Home />
          {/* Will add Projects Container later, as currently it's WIP. <ProjectsContainer /> */}
        </Container>
      </MantineProvider>
    </>
  )
}

export default App
