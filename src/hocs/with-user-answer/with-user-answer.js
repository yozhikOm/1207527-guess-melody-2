import React, {PureComponent} from 'react';

const withUserAnswer = (Component) => {
  class WithUserAnswer extends PureComponent {
    constructor(props) {
      super(props);

      this._answersNumber = 4;
      this.state = {
        userAnswer: new Array(this._answersNumber).fill(false),
      };

      this._setState = this._setState.bind(this);
    }

    _setState(updatedUserAnswer) {
      this.setState({userAnswer: updatedUserAnswer});
    }

    render() {
      const {userAnswer} = this.state;

      return <Component {...this.props}
        userAnswer={userAnswer}
        setState={this._setState}
      />;
    }
  }

  WithUserAnswer.propTypes = {};

  return WithUserAnswer;
};

export default withUserAnswer;
