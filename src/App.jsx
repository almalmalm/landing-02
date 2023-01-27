import Header from './components/Header';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';
import Hero from './components/Hero';

function App() {
  const modalIsOpen = useSelector((state) => state.modal.modalIsOpen);
  return (
    <div className="bg-[#F6F5F4]">
      {modalIsOpen && <Modal />}
      <Header />
      <Hero />
    </div>
  );
}

export default App;
