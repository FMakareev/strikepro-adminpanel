import React, {Fragment} from 'react';
import {Col, Row} from "reactstrap";
import {Field} from "redux-form";
import {TextField} from "../../../../../../components/TextField/TextField";
import {maxLength} from "../../../../../../validation/maxLength";

const maxLength255 = maxLength(255);

export const MetaFields = () => (<Fragment>
  <Col xs="12" md="6" lg="4">
    <Field
      name="meta_description"
      component={TextField}
      label="meta_description"
      type="text"
      validate={[maxLength255]}
    />
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="meta_keywords"
      component={TextField}
      label="meta_keywords"
      type="text"
      validate={[maxLength255]}
    />
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="meta_title"
      component={TextField}
      label="meta_title"
      type="text"
      validate={[maxLength255]}
    />
  </Col>
</Fragment>);

export default MetaFields;
