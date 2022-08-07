import Feedback from './feedback/Feedback'
import options from '../options.json'

export const App = () => {
  return (
   <Feedback 
   options={options}
   />
  );
};
