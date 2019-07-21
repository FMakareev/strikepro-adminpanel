import React, {Fragment} from 'react';
import {Col} from "reactstrap";
import {Field} from "redux-form";
import {TextField} from "../../../../../../components/TextField/TextField";
import {FormTagInput} from "../../../../../../components/Form/FormTagInput";
import {FormattedMessage} from "react-intl";


export const MetaFields = () => (<Fragment>
  <Col xs="12">
    <h4>
      <FormattedMessage
        id="form.title.meta"
      />
    </h4>
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="meta_description"
      component={TextField}
      label={<FormattedMessage
        id="form.label.metaDescription"
      />}
      type="text"
    />
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="meta_title"
      component={TextField}
      label={<FormattedMessage
        id="form.label.metaTitle"
      />}
      type="text"
    />
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="meta_keywords"
      component={FormTagInput}
      label={<FormattedMessage
        id="form.label.metaKeywords"
      />}
      type="text"
    />
  </Col>
</Fragment>);

export default MetaFields;
