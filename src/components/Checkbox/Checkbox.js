import React, {Component} from 'react';
import {Alert, FormGroup, Label} from "reactstrap";


export class Checkbox extends Component {
    render() {
        const {label, input, type, value, meta: {touched, error}} = this.props;
        return (<FormGroup>
            <div className="checkbox">
                <Label check={value === input.value} htmlFor="checkbox1">
                    <input type={type} {...input} name="checkbox1"
                           value={value}/> {label}
                </Label>
            </div>
            {
                touched && error &&
                <Alert color="danger">
                    {error}
                </Alert>
            }
        </FormGroup>)
    }
}

export default Checkbox;
