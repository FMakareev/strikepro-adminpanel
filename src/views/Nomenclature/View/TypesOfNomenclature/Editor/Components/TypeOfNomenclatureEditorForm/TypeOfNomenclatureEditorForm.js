import React, {Component} from 'react';
import {Button, Col, Row} from "reactstrap";
import {Field, reduxForm, Form} from "redux-form";
import FormInput from "../../../../../../../components/Form/form_input";
import Checkbox from "../../../../../../../components/Checkbox/Checkbox";

export class TypeOfNomenclatureEditorForm extends Component {
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
              type="title"
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
              name="measurement"
              component={FormInput}
              label="measurement"
              type="text"
            />
          </Col>
          <Col xs="12" md="6" lg="4">
            <Field
              name="value_type"
              component={FormInput}
              label="value_type"
              type="text"
            />
          </Col>
          <Col xs="12" md="7">
            <Field
              name="is_visible"
              component={Checkbox}
              label="is_visible"
              type="checkbox"
              value={true}
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

TypeOfNomenclatureEditorForm = reduxForm({
  form: 'TypeOfNomenclatureEditorForm'
})(TypeOfNomenclatureEditorForm);

export default TypeOfNomenclatureEditorForm;
