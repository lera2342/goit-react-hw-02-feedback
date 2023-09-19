import FeedbackOptions from "./Feedback";
import Notification from "./Notification";
import Section from "./Section";
import Statistics from "./Statistics"
import {Component} from "react";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  conditionFeedback = (event) => {
    if (event.target.textContent === "good") {
      this.setState(({good}) => {
        return { good: good + 1 }
      })
    }
    if (event.target.textContent === "bad") {
  this.setState(({bad}) => {
    return { bad: bad + 1 }
  })
}
      if (event.target.textContent === "neutral") {
      this.setState(({neutral}) => {
        return { neutral: neutral + 1 }
      })
    }
  }
  
  countPositiveFeedbackPercentage(good, bad) {
    const result = good / (good + bad) * 100;
    return `${Math.round(result)}%`;
  }
  countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

  render() {
    const { good, neutral, bad } = this.state;
    return (<div>
    <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.conditionFeedback} />
    </Section>
      <Section title="Statistics">
        {(good > 0 || neutral > 0 || bad > 0) ?
          (<Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} />) :
          (<Notification message="There is no feedback" />)
        }
    </Section> 
    </div>)
        
    
  }
}
