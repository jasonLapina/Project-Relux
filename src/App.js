import About from './components/about/About';
import Header from './components/header/Header';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <About />
      </main>
    </Fragment>
  );
}

export default App;
