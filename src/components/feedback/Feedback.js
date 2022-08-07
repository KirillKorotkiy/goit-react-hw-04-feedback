import React from 'react';
import Statistics from '../statisctics/Statisctics';
import FeedbackOptions from '../feedback-options/FeedbackOptions ';
import Section from '../section-title/Section';
import Notification from '../notification/Notification';
import { useState } from 'react';

const Feedback = ({ options }) => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onLeaveFeedback = event => {
    switch (event.target.name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      case 'neutral':
        setNeutral(prevNuetral => prevNuetral + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const result = bad + neutral + good;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const percent = Math.ceil((good * 100) / countTotalFeedback());
    const positiveFeedback = `${percent}%`;
    return positiveFeedback;
  };

  const optionsArr = Object.keys(options);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsArr}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
};

// class Feedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = evnt => {
//     const name = evnt.target.name;
//     this.setState(prevValue => ({
//       [name]: prevValue[name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, bad, neutral } = this.state;
//     const result = bad + neutral + good;
//     return result;
//   };z

//   countPositiveFeedbackPercentage = () => {
//     const percent = Math.ceil(
//       (this.state.good * 100) / this.countTotalFeedback()
//     );
//     const positiveFeedback = `${percent}%`;
//     return positiveFeedback;
//   };

//   render() {
//     const result = this.countTotalFeedback();
//     const positivPercent = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         {result === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               bad={bad}
//               neutral={neutral}
//               total={result}
//               positivePercentage={positivPercent}
//             />
//           </Section>
//         )}
//       </>
//     );
//   }
// }

export default Feedback;
