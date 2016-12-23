import React, { Component} from 'react';

class EditableLabel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      text: this.props.label
    };
  }

  labelClicked() {
    this.setState({ editing: true });
  }

  textChanged() {
    this.setState({ text: this.refs.textInput.value});
  }

  onFocus() {
    document.execCommand('selectall', null, false);
  }

  inputLostFocus() {
    this.setState({ editing: false });
    this.props.onChange(this.state.text);
  }

  keyPressed(event) {
    if(event.key == 'Enter') {
      this.inputLostFocus();
    }
  }

  render() {
    return <div className={this.props.className}>
      {this.state.editing ?
        <input ref='textInput' type='text'
          onChange={ () => this.textChanged() }
          onBlur={ () => this.inputLostFocus() }
          onKeyPress={ (event) => this.keyPressed(event) }
          onFocus={ () => this.onFocus() }
          value={this.state.text} autoFocus /> :
        <span onClick={ () => this.labelClicked() } >{this.state.text}</span>
      }
    </div>;
  }
}

EditableLabel.propTypes = {
  onChange: React.PropTypes.func,
  label: React.PropTypes.string,
  className: React.PropTypes.string
};

export default EditableLabel;
