class InputField extends React.Component {

  constructor(props, context) {
    super(props, context);
    
    this.state = { value: props.value || '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this); 
    
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleKeyDown(e) {
    const {
      onKeyDown, 
      onSubmitEditing
    } = this.props;
    const { value } = e.target;
    switch(e.keyCode){
      case 13: 
        if (value.trim()){
          onSubmitEditing && onSubmitEditing(value); 
        }
        //e.target.value = '';
        this.setState({
          value: ''
        })
        break;
    }
    onKeyDown && onKeyDown(e);
  }

  render() {
    return (
      <input 
        {...this.props} 
        type="text"
        value={this.state.value} 
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
      />
    );
  }

}

InputField.propTypes = {
  onSubmitEditing: React.PropTypes.func
}; 

window.App.InputField = InputField;