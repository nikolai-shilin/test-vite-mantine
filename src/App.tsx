// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import NavBar from './components/NavBar/NavBar';
import { Grid, MantineProvider } from '@mantine/core';
import Logs from './pages/Logs/Logs';

export default function App() {
  return <MantineProvider>
    <Grid gutter={10}>
      <Grid.Col span={2}>
      <NavBar />
      </Grid.Col>
      <Grid.Col span={10}>
      <Logs />
      </Grid.Col>
    </Grid>
  </MantineProvider>;
}