import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  incrementStatistics = e => {
    const name = e.target.name;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1
      }
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = good / total * 100;
    return Math.round(positivePercentage);
  }

  render() {

    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.incrementStatistics} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? <Notification message="No feedback given" /> 
        :<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />}
        
      </Section>
      </>
    );
  }
}