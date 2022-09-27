import About from './components/about/About';
import Header from './components/header/Header';
import { Fragment } from 'react';
import Features from './components/features/Features';
import Villas from './components/villas/Villas';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <About />
        <Features />
        <Villas />
        <Testimonials />
      </main>
    </Fragment>
  );
}

export default App;
