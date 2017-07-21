import React from 'react';
import Quiz from './components/Quiz.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      userAnswers: [],
      quizQuestions: []
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.goToNextQuestion = this.goToNextQuestion.bind(this);
    this.goToPreviousQuestion = this.goToPreviousQuestion.bind(this);
    this.endTest = this.endTest.bind(this);
    this.loadQuestions = this.loadQuestions.bind(this);
  }

  componentWillMount() {
    console.log(this.props.match.params.id);
    this.loadQuestions()
  }

  loadQuestions() {
    console.log('entered');
    return $.get('http://localhost:8080/paper/' + this.props.match.params.id)
      .then((data) => {
        console.log(data.questions);
        if (data.questions) {
          this.setState({
            quizQuestions: data.questions,
            question: data.questions[0].question,
            answerOptions: data.questions[0].options
          });
        }
      });
  }

  handleAnswerSelected(event) {
    console.log(event.currentTarget.value);
  //  this.state.quizQuestions[this.state.counter]["userSelAns"] = event.currentTarget.value;
    this.state.userAnswers[this.state.counter] = event.currentTarget.value;
    this.setState({
      answer: event.currentTarget.value
    })

    console.log(this.state.userAnswers);
  }

  goToNextQuestion() {
    console.log(this.state.questionId);
    if (this.state.questionId < this.state.quizQuestions.length) {
      this.setNextQuestion()
    } else {
      //  this.setResults(this.getResults())
    }
  }

  goToPreviousQuestion() {
    console.log(this.state.questionId);
    if (this.state.questionId > 1) {
      this.setPreviousQuestion()
    } else {
      //   this.setResults(this.getResults())
    }
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.state.quizQuestions[counter].question,
      answerOptions: this.state.quizQuestions[counter].options,
      answer: this.state.userAnswers[counter] || ''
    });
  }

  setPreviousQuestion() {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.state.quizQuestions[counter].question,
      answerOptions: this.state.quizQuestions[counter].options,
      answer: this.state.userAnswers[counter] || ''
    });
  }

  endTest() {

  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        userAnswers={this.state.userAnswers}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={this.state.quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        goToNext={this.goToNextQuestion}
        goToPrevious={this.goToPreviousQuestion}
      />
    );
  }

  render() {
    if (this.state.quizQuestions.length) {
      return (
        <div className="App">
          {this.renderQuiz()}
        </div>
      );
    } else {
      return (
        <div className="App">
          <h3>No question paper exists</h3>
        </div>
      );
    }
  }
}

export default App;
