import {FC} from 'react';
import './App.css';
import { User } from './components/Person';
import { JobRole } from './Enums';

const App: FC = () => {
  return (
    <div className="App">
      <User name="Emma" age={25} email="emma.mccann@bazaarvoice.com" jobRole={JobRole.Engineer2} />
    </div>
  );
}

export default App;
