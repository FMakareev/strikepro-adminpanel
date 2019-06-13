import React, {Fragment} from 'react';
import {Col, Row} from "reactstrap";
import {Field} from "redux-form";
import {TextField} from "../../../../../../components/TextField/TextField";
import {maxLength} from "../../../../../../validation/maxLength";

const maxLength255 = maxLength(255);

export const OGMetaFields = () => (<Fragment>
  <Col xs="12">
    <h4>
      OG META (Open Graph)
    </h4>
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="og_url"
      component={TextField}
      label="og_url"
      type="text"
      validate={[maxLength255]}
    />
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="og_image"
      component={TextField}
      label="og_image"
      type="text"
      validate={[maxLength255]}
    />
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="og_type"
      component={TextField}
      label="og_type"
      type="text"
      validate={[maxLength255]}
    />
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="og_title"
      component={TextField}
      label="og_title"
      type="text"
      validate={[maxLength255]}
    />
  </Col>
</Fragment>);

export default OGMetaFields;
