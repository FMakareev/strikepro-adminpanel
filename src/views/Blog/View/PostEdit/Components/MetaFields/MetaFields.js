import React, {Fragment} from 'react';
import {Col} from "reactstrap";
import {Field} from "redux-form";
import {TextField} from "../../../../../../components/TextField/TextField";
import {maxLength} from "../../../../../../validation/maxLength";
import {FormTagInput} from "../../../../../../components/Form/FormTagInput";
import {FormattedMessage, injectIntl} from "react-intl";

const maxLength255 = maxLength(255);

export const MetaFields = ({intl}) => (<Fragment>
  <Col xs="12">
    <h4>
      <FormattedMessage
        id="form.title.meta"
        defaultMessage="form.title.meta"
      />    </h4>
  </Col>
  <Col xs="12">
    <Field
      name="meta_description"
      component={TextField}
      placeholder={intl && intl.messages["form.label.metaDescription"]}
      label={<FormattedMessage
        id="form.label.metaDescription"
        defaultMessage="form.label.metaDescription"
      />}
      type="text"
      validate={[maxLength255]}
    />
  </Col>
  <Col xs="12">
    <Field
      name="meta_keywords"
      component={FormTagInput}
      placeholder={intl && intl.messages["form.label.metaKeywords"]}
      label={<FormattedMessage
        id="form.label.metaKeywords"
        defaultMessage="form.label.metaKeywords"
      />}
      type="text"
      validate={[maxLength255]}
    />
  </Col>
</Fragment>);

export default injectIntl(MetaFields);
