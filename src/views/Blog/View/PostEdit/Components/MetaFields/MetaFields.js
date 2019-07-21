import React, {Fragment} from 'react';
import {Col} from "reactstrap";
import {Field} from "redux-form";
import {TextField} from "../../../../../../components/TextField/TextField";
import {maxLength} from "../../../../../../validation/maxLength";
import {FormTagInput} from "../../../../../../components/Form/FormTagInput";
import {FormattedMessage, injectIntl} from "react-intl";


export const MetaFields = () => (<Fragment>
  <Col xs="12">
    <h4>
      <FormattedMessage
        id="form.title.meta"
        defaultMessage="form.title.meta"
      />
    </h4>
  </Col>
  <Col xs="12">
    <Field
      name="meta_description"
      component={TextField}
      label={<FormattedMessage
        id="form.label.metaDescription"
        defaultMessage="form.label.metaDescription"
      />}
      type="text"
    />
  </Col>
  <Col xs="12">
    <Field
      name="meta_keywords"
      component={FormTagInput}
      label={<FormattedMessage
        id="form.label.metaKeywords"
        defaultMessage="form.label.metaKeywords"
      />}
      type="text"
    />
  </Col>
</Fragment>);

export default MetaFields;
