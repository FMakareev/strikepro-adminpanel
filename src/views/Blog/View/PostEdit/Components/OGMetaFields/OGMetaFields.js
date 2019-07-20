import React, {Fragment} from 'react';
import {Col, Row} from "reactstrap";
import {Field} from "redux-form";
import {TextField} from "../../../../../../components/TextField/TextField";
import {maxLength} from "../../../../../../validation/maxLength";
import {FormattedMessage, injectIntl} from "react-intl";

const maxLength255 = maxLength(255);

export const OGMetaFields = ({intl}) => (<Fragment>
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
      placeholder={intl && intl.messages["form.label.ogUrl"]}
      label={ <FormattedMessage
        id="form.label.ogUrl"
        defaultMessage="form.label.ogUrl"
      />}
      type="text"
      validate={[maxLength255]}
    />
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="og_image"
      component={TextField}
      placeholder={intl && intl.messages["form.label.ogImage"]}
      label={ <FormattedMessage
        id="form.label.ogImage"
        defaultMessage="form.label.ogImage"
      />}
      type="text"
      validate={[maxLength255]}
    />
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="og_type"
      component={TextField}
      placeholder={intl && intl.messages["form.label.ogType"]}
      label={ <FormattedMessage
        id="form.label.ogType"
        defaultMessage="form.label.ogType"
      />}
      type="text"
      validate={[maxLength255]}
    />
  </Col>
  <Col xs="12" md="6" lg="4">
    <Field
      name="og_title"
      component={TextField}
      placeholder={intl && intl.messages["form.label.ogTitle"]}
      label={ <FormattedMessage
        id="form.label.ogTitle"
        defaultMessage="form.label.ogTitle"
      />}
      type="text"
      validate={[maxLength255]}
    />
  </Col>
</Fragment>);

export default injectIntl(OGMetaFields);
