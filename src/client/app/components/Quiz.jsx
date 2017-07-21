import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Question from '../components/Question.jsx';
import QuestionCount from '../components/QuestionCount.jsx'; 
import AnswerOption from '../components/AnswerOption.jsx'; 

function Quiz(props) {

  function renderAnswerOptions(key) {
    console.log(key);
    return (
      <AnswerOption
        key={key}
        answerContent={key}
        userAnswers={props.userAnswers}
        answerType={key}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <ReactCSSTransitionGroup
      className="animate-container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}>
      <div>
        <QuestionCount
          counter={props.questionId}
          total={props.questionTotal} />
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
      <div className="nextPrevButtons">
        <button className="pevButton" onClick={props.goToPrevious}>Previous</button>
        <button className="testEndButton" onClick={props.goToPrevious}>End Test</button>
        <button className="nextButton" onClick={props.goToNext}>Next</button>
    </div>
    </ReactCSSTransitionGroup>
    
  );
}

Quiz.propTypes = {
  answer: React.PropTypes.string.isRequired,
  answerOptions: React.PropTypes.array.isRequired,
  question: React.PropTypes.string.isRequired,
  questionId: React.PropTypes.number.isRequired,
  questionTotal: React.PropTypes.number.isRequired,
  onAnswerSelected: React.PropTypes.func.isRequired
};

export default Quiz;
