import React, {Fragment} from 'react';
import {Col, Row} from "reactstrap";
import {Field} from "redux-form";
import {TextField} from "../../../../../../components/TextField/TextField";
import {maxLength} from "../../../../../../validation/maxLength";
import {FormattedMessage} from "react-intl";

const maxLength255 = maxLength(255);

export const OGMetaFields = () => (<Fragment>
  <Col xs="12">
    <h4>
      <FormattedMessage
        id="form.title.ogMeta"
      />
    </h4>
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="og_url"
      component={TextField}
      label={<FormattedMessage
        id="form.label.ogUrl"
      />}
      type="text"
      validate={[maxLength255]}
    />
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="og_image"
      component={TextField}
      label={<FormattedMessage
        id="form.label.ogImage"
      />}
      type="text"
      validate={[maxLength255]}
    />
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="og_type"
      component={TextField}
      label={<FormattedMessage
        id="form.label.ogType"
      />}
      type="text"
      validate={[maxLength255]}
    />
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="og_title"
      component={TextField}
      label={<FormattedMessage
        id="form.label.ogTitle"
      />}
      type="text"
      validate={[maxLength255]}
    />
  </Col>
</Fragment>);

export default OGMetaFields;
