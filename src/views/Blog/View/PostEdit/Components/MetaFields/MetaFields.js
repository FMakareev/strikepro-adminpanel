import React, {Fragment} from 'react';
import {Col} from "reactstrap";
import {Field} from "redux-form";
import {TextField} from "../../../../../../components/TextField/TextField";
import {maxLength} from "../../../../../../validation/maxLength";
import {FormTagInput} from "../../../../../../components/Form/FormTagInput";

const maxLength255 = maxLength(255);

export const MetaFields = () => (<Fragment>
  <Col xs="12">
    <h4>
      META информация
    </h4>
  </Col>
  <Col xs="12">
    <Field
      name="meta_description"
      component={TextField}
      label="meta_description"
      type="text"
      validate={[maxLength255]}
    />
  </Col>
  <Col xs="12">
    <Field
      name="meta_keywords"
      component={FormTagInput}
      label="meta_keywords"
      type="text"
      validate={[maxLength255]}
    />
  </Col>
</Fragment>);

export default MetaFields;
