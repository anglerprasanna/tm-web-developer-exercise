import React from "react";
import "../styles/FormInput.css";
class FormInput extends React.Component {
  state = {
    value: "",
  };

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.onChange(e);
  }

  render() {
    return (
      <div className={"form-input " + (this.props.valid ? "" : "error")}>
        <label className="field-name">{this.props.label}</label>
        <input
          type={this.props.type}
          name={this.props.name}
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
          autoComplete={this.props.autoComplete}
        />
        <label className="error">
          {this.props.valid ? "" : this.props.errorMessage}
        </label>
      </div>
    );
  }
}

export default FormInput;
