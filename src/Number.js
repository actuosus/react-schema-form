/**
 * Created by steve on 15/09/15.
 *
 * @format
 */

import React, { SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import ComposedComponent from './ComposedComponent';
import {
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    TextField
} from 'material-ui';

/**
 * There is no default number picker as part of Material-UI.
 * Instead, use a TextField and validate.
 */
class Number extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            lastSuccessfulValue: this.props.value
        };
    }

    static propTypes = {
        value: PropTypes.string,
        error: PropTypes.string,
        form: PropTypes.object
    };

    /**
     * @param {Object} nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            lastSuccessfulValue: nextProps.value
        });
    }

    /**
     * @param {string} n
     */
    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
     * @param {string} n
     */
    isEmpty(n) {
        return !n || 0 === n.length;
    }

    /**
     * Prevent the field from accepting non-numeric characters.
     * @param {SyntheticEvent} e
     */
    handleChange(e) {
        const { value } = e.target;

        if (this.isNumeric(value)) {
            this.setState({
                lastSuccessfulValue: value
            });
            this.props.onChangeValidate(e);
        } else if (this.isEmpty(value)) {
            this.setState({
                lastSuccessfulValue: value
            });
            this.props.onChangeValidate(e);
        } else {
            this.numberField.value = this.state.lastSuccessfulValue;
        }
    }

    render() {
        const isError = Boolean(this.props.error);

        return (
            <FormControl error={isError} className={this.props.form.htmlClass}>
                <InputLabel htmlFor="name-error">
                    {this.props.form.title}
                </InputLabel>
                <Input
                    type={this.props.form.type}
                    label={this.props.form.title}
                    placeholder={this.props.form.placeholder}
                    error={isError}
                    errorText={this.props.error}
                    onChange={this.handleChange}
                    value={this.state.lastSuccessfulValue}
                    ref={_ => (this.numberField = _)}
                    disabled={this.props.form.readonly}
                    style={this.props.form.style || { width: '100%' }}
                />
                <FormHelperText id="name-error-text">
                    {this.props.error}
                </FormHelperText>
            </FormControl>
        );
    }
}

export default ComposedComponent(Number);
