import React, {Component} from 'react';
import {Field, Form, reduxForm} from "redux-form";
import {Button, Col, Row} from "reactstrap";
import FormInput from "../../../../../components/Form/form_input";

export class FormNomenclatureCharacteristicsEditor extends Component {

  onSubmit() {

  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onSubmit)}>
        <Row className={'pb-3'}>
          <Col xs="12" md="6" lg="4">
            <Field
              name="title"
              component={FormInput}
              label="title"
              type="text"
            />
          </Col>
          <Col xs="12" md="6" lg="4">
            <Field
              name="description"
              component={FormInput}
              label="description"
              type="text"
            />
          </Col>
          <Col xs="12" md="6" lg="4">
            <Field
              name="template"
              component={FormInput}
              label="templates"
              type="text"
            />
          </Col>
        </Row>

        <Row className={'pb-3'}>
          <Col xs="12" md="6" lg="4">
            <Button
              color="primary"
              type="submit"
              // disabled={pristine || submitting}
            >
              Сохранить
            </Button>
          </Col>
        </Row>

      </Form>
    )
  }

}


FormNomenclatureCharacteristicsEditor = reduxForm({
  form: 'FormNomenclatureCharacteristicsEditor'
})(FormNomenclatureCharacteristicsEditor);

export default FormNomenclatureCharacteristicsEditor;
