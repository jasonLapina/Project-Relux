import About from './components/about/About';
import Header from './components/header/Header';
import { Fragment } from 'react';
import Features from './components/features/Features';
import Villas from './components/villas/Villas';
import Testimonials from './components/testimonials/Testimonials';
import Booking from './components/booking/Booking';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <About />
        <Features />
        <Villas />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
