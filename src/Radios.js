import React from 'react';
import utils from './utils';
import classNames from 'classnames';
import ComposedComponent from './ComposedComponent';

import {FormControlLabel} from 'material-ui';
import Radio, { RadioGroup } from 'material-ui/Radio';

class Radios extends React.Component {

    render() {
        let items = this.props.form.titleMap.map(function(item, index) {
            return (
              <FormControlLabel key={index}
                                value={item.value}
                                control={<Radio color="primary" />}
                                label={item.name}
                                disabled={this.props.form.readonly}
              />
            )
        }.bind(this));

        return (
            <span className={this.props.form.htmlClass}>
              <label className="control-lable">{this.props.form.title}</label>
              <RadioGroup defaultSelected={this.props.value} name={this.props.form.title} onChange={this.props.onChangeValidate}>
                  {items}
              </RadioGroup>
            </span>
        );
    }
}

export default ComposedComponent(Radios);
