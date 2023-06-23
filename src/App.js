import './App.css';
import CustomCursor from './components/custom_cursor/CustomCursor';
import Navbar from './components/navbar/Navbar';
import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';
import Stack from './components/page3/Stack';
import MyTeam from './components/page4/MyTeam';
import Contact from './components/page5/Contact';
import Form from './components/page6/Form';

function App() {
  return (
    <div className='h-screen snap-mandatory snap-y scroll-smooth overflow-y-auto no-scrollbar'>
      <Navbar />
      <CustomCursor />
      <Page1 />
      <Page2 />
      <Stack />
      <MyTeam />
      <Contact />
      <Form />
    </div>
  );
}

export default App;
