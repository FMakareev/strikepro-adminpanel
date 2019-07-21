import React, {Fragment} from 'react';
import {Col} from "reactstrap";
import {Field} from "redux-form";
import {TextField} from "../../../../../../components/TextField/TextField";
import {FormattedMessage} from "react-intl";


export const OGMetaFields = () => (<Fragment>
  <Col xs="12">
    <h4>
      <FormattedMessage
        id="form.title.ogMeta"
        defaultMessage="form.title.ogMeta"
      />
    </h4>
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="og_url"
      component={TextField}
      label={ <FormattedMessage
        id="form.label.ogUrl"
        defaultMessage="form.label.ogUrl"
      />}
      type="text"
    />
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="og_image"
      component={TextField}
      label={ <FormattedMessage
        id="form.label.ogImage"
        defaultMessage="form.label.ogImage"
      />}
      type="text"
    />
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="og_type"
      component={TextField}
      label={ <FormattedMessage
        id="form.label.ogType"
        defaultMessage="form.label.ogType"
      />}
      type="text"
    />
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="og_title"
      component={TextField}
      label={ <FormattedMessage
        id="form.label.ogTitle"
        defaultMessage="form.label.ogTitle"
      />}
      type="text"
    />
  </Col>
</Fragment>);

export default OGMetaFields;
