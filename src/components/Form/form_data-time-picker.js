import React, {Component} from 'react';
import {FormGroup, Label} from "reactstrap";
import {DateTimePicker} from "react-widgets";

import moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css'

moment.locale('en');
momentLocalizer();


class FormDateTimePicker extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {
            public_at: new Date()
        }
    }

    render() {

        const {input: {onChange, value},label, showTime} = this.props;

        return (
            <div className="controls">
                <FormGroup>
                    <Label>{label}</Label>
                    <DateTimePicker
                        min={new Date()}
                        value={new Date(this.state.public_at)}
                        onChange={value => {
                            this.setState({ public_at:value });
                            return onChange(moment(value).format("YYYY-MM-D h:mm:ss"));
                        }}
                    />
                </FormGroup>
            </div>
        );
    }

}


export default FormDateTimePicker;