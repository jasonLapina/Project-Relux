import About from './components/about/About';
import Header from './components/header/Header';
import { Fragment } from 'react';
import Features from './components/features/Features';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <About />
        <Features />
      </main>
    </Fragment>
  );
}

export default App;
