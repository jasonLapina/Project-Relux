import About from './components/about/About';
import Header from './components/header/Header';
import { Fragment, useState } from 'react';
import Features from './components/features/Features';
import Villas from './components/villas/Villas';
import Testimonials from './components/testimonials/Testimonials';
import Booking from './components/booking/Booking';
import Footer from './components/footer/Footer';
import Navigation from './components/UI/Navigation';
import Form from './components/form/Form';

function App() {
  const [showForm, setShowForm] = useState(false);
  const showFormHandler = () => {
    setShowForm(true);
  };
  const hideFormHandler = () => {
    setShowForm(false);
    console.log('tite');
  };
  return (
    <Fragment>
      <Navigation />
      {showForm && <Form onClose={hideFormHandler} />}
      <Header />
      <main>
        <About />
        <Features />
        <Villas onShowForm={showFormHandler} />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
