import React from "react";
import "../styles/Checkbox.css";
class Checkbox extends React.Component {
  state = {
    checked: false,
  };

  handleChange(value) {
    this.setState({ value });
    this.props.onChange(value);
  }

  render() {
    return (
      <div className="checkbox">
        <input
          type="checkbox"
          name={this.props.name}
          checked={this.state.value}
          onChange={(e) => this.handleChange(e.target.checked)}
          autoComplete={this.props.autoComplete}
          id={this.props.id}
        />
        <label htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}

export default Checkbox;
