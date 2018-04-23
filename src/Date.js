/**
 * Created by steve on 22/12/15.
 */
import React from "react";
var utils = require("./utils");
var classNames = require("classnames");
import ComposedComponent from "./ComposedComponent";
import DatePicker from "material-ui/TextField";
import IconButton from "material-ui/IconButton";
import Clear from "@material-ui/icons/Clear";

/**
 * There is no default number picker as part of Material-UI.
 * Instead, use a TextField and validate.
 */
class Date extends React.Component {
  constructor(props) {
    super(props);
    this.onDatePicked = this.onDatePicked.bind(this);
  }

  onDatePicked(empty, date) {
    this.props.onChangeValidate(date);
  }

  render() {
    var value = null;
    if (this.props && this.props.value) {
      value = this.props.value;
    }

    return (
      <div
        style={{ width: "100%", display: "block" }}
        className={this.props.form.htmlClass}
      >
        <DatePicker
          mode={"landscape"}
          autoOk={true}
          label={this.props.form.title}
          placeholder={this.props.form.title}
          onChange={this.onDatePicked}
          onShow={null}
          onDismiss={null}
          value={value}
          disabled={this.props.form.readonly}
          style={
            this.props.form.style || { width: "90%", display: "inline-block" }
          }
        />
        {this.props.value && (
          <IconButton
            ref="button"
            onClick={() => this.props.onChangeValidate("")}
            style={{
              position: "relative",
              display: "inline-block",
              top: "6px",
              right: "4px",
              padding: "0",
              width: "24px",
              height: "24px"
            }}
          >
            <Clear />
          </IconButton>
        )}
      </div>
    );
  }
}

export default ComposedComponent(Date);
