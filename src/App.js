import logo from './logo.svg';
import './App.css';
import Baner from './componets/baner/Baner';
import Tabletop from './componets/tabletop/Tabletop';
import Heading from './componets/heading/Heading';
import RepeatHeading from './componets/repeat-heading/RepeatHeading';

function App() {
  return (
    <>
      <div className='app-overflow'>
        <Baner />
        <Tabletop />
        <Heading />
        <RepeatHeading />
      </div>
    </>
  );
}

export default App;
