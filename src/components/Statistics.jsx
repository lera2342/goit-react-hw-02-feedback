import {StatisticsList} from '../components/FeedbackAlertMessage/Statistisc.styled'


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <StatisticsList>
        <p>Good: {good}</p>
      </StatisticsList>
            <StatisticsList>
        <p>Neutral: {neutral}</p>
      </StatisticsList>
            <StatisticsList>
        <p>Bad: {bad}</p>
      </StatisticsList>
            <StatisticsList>
        <p>Total: {total(good, neutral, bad)}</p>
      </StatisticsList>
            <StatisticsList>
        <p>Positive feedback: {positivePercentage(good, bad, neutral)}</p>
        </StatisticsList>
    </ul>
  )
}

export default Statistics