import React from 'react'; 
//import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
//import Result from './components/Result';
 
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
      result: '' 
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.goToNextQuestion = this.goToNextQuestion.bind(this);
    this.goToPreviousQuestion = this.goToPreviousQuestion.bind(this);
    this.endTest = this.endTest.bind(this);
  }

  componentWillMount() {
    this.loadQuestions()
   // const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
/*    
    console.log(quizQuestions);
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].options
    });
  */ 
  }

  loadQuestions() {
    return $.getJSON('localhost:8080/paper/1')
      .then((data) => {
        console.log(data);
        this.setState({ 
          question: data.question,
          answerOptions : data.options 
        });
      });
  }

/*
  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
*/

  handleAnswerSelected(event) {
 //   this.setUserAnswer(event.currentTarget.value);
    console.log(event.currentTarget.value);
    this.state.userAnswers[this.state.counter] = event.currentTarget.value;
    this.setState({
      answer: event.currentTarget.value
    })
    
  //  this.state.answer = event.currentTarget.value;
    console.log(this.state.userAnswers);  

  /*  
    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
    } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
    }
  */  
}

  goToNextQuestion() {
    console.log(this.state.questionId);
    if (this.state.questionId < quizQuestions.length) {
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

/*
  setUserAnswer(answer) {

    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });

    
    console.log(updatedAnswersCount);

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });    
  }
*/  

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].options,
        answer: this.state.userAnswers[counter] || ''
    });
  }

  setPreviousQuestion() {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].options,
        answer: this.state.userAnswers[counter] || ''
    });
  }

endTest() {
  
}

/*
  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }
*/

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        userAnswers={this.state.userAnswers}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        goToNext={this.goToNextQuestion}
        goToPrevious={this.goToPreviousQuestion}
      />
    );
  }

/*
  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }
*/

  render() {
    return (
      <div className="App">
       
        {this.renderQuiz()}
      </div>
    );
  }

}

export default App;
