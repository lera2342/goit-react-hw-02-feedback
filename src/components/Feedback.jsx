import {FeedbackButton} from "../components/FeedbackAlertMessage/Feedack.styled"

const FeedbackOptions = ({onLeaveFeedback, options}) => {
  return (
    <ul>
      {options.map((option, id) => {
        return <li key={id}>
          <FeedbackButton onClick={onLeaveFeedback}>{option}</FeedbackButton>
        </li>
      })}
    </ul>
  );
}
export default FeedbackOptions
