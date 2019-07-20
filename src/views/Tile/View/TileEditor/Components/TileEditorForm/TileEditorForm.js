import React, {Component} from 'react';
import {Col, FormGroup, Row, Button, Alert} from "reactstrap";
import {Field, reduxForm, SubmissionError} from "redux-form";
import FormSelect from "../../../../../../components/Form/FormSelect";
import FormDateTimePicker from "../../../../../../components/FormDateTimePicker/FormDateTimePicker";
import FormInputColor from "../../../../../../components/Form/FormInputColor";
import {TextField} from "../../../../../../components/TextField/TextField";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";

import {
  CreateTileAction,
  isRetrievingCreateTile, isRetrievingUpdateTile,
  UpdateTileAction
} from "../../../../../../store/reduxRestEasy/Tiles/TilesResource";
import {normalizeSubmissionError} from "../../../../../../helpers/normalizeSubmissionError";
import {withRouter} from "react-router-dom";
import {required} from "../../../../../../validation/required";
import {hasOwnProperty} from "../../../../../../helpers/hasOwnProperty";
import {createSubmitHandler} from "../../../../../../helpers/createSubmitHandler";
import {FormattedMessage} from "react-intl";


export class TileEditorForm extends Component {


  onSubmit = async (values) => {
    console.log('values: ', values);
    const {history, UpdateTileAction, CreateTileAction} = this.props;
    if (hasOwnProperty(values, 'id')) {
      await createSubmitHandler(UpdateTileAction)({
        body: values,
        urlParams: {
          id: values.id,
        }
      })
    } else {
      await createSubmitHandler(CreateTileAction)({body: values})
    }
    history.push('/tile-list');
  };


  render() {
    const {error, handleSubmit, tileTypes, pristine, submitting} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Row>
          <Col xs="12" md="6" lg="4">
            <Field
              name="resource_id"
              component={TextField}
              label={ <FormattedMessage
                id='form.label.resource_id'
                defaultMessage='form.label.resource_id'
              />}
              type="text"
              validate={[required]}
            />
          </Col>
          {
            tileTypes &&
            <Col xs="12" md="6" lg="4">
              <Field
                name="resource_type"
                component={FormSelect}
                valueKey={'name'}
                label={ <FormattedMessage
                  id='form.label.resource_type'
                  defaultMessage='form.label.resource_type'
                />}
                type="select"
                data={tileTypes}
              />
            </Col>
          }
          <Col xs="12" md="6" lg="4">
            <Field
              name="cols"
              component={TextField}
              label={ <FormattedMessage
                id='form.label.cols'
                defaultMessage='form.label.cols'
              />}
              type="text"
            />
          </Col>
          <Col xs="12" md="6" lg="4">
            <Field
              name="background_color"
              component={FormInputColor}
              label={ <FormattedMessage
                id='form.label.background_color'
                defaultMessage='form.label.background_color'
              />}
              type="color"
            />
          </Col>
          <Col xs="12" md="6" lg="4">
            <Field
              name="public_at"
              label={ <FormattedMessage
                id='form.label.public_at'
                defaultMessage='form.label.public_at'
              />}
              component={FormDateTimePicker}
            />
          </Col>
        </Row>

        {
          error &&
          <Row>
            <Col xs="12">
              <Alert color="danger">
                {error}
              </Alert>
            </Col>
          </Row>

        }

        <Row>
          <Col xs="6">
            <div className="controls">
              <FormGroup>
                <Button
                  color="primary"
                  type="submit"
                  className="px-4"
                  disabled={pristine || submitting}
                >
                  <FormattedMessage
                    id='button.save'
                    defaultMessage='button.save'
                  />

                </Button>
              </FormGroup>
            </div>
          </Col>
        </Row>
      </form>
    )
  }
};

TileEditorForm.propTypes = {};

TileEditorForm.defaultProps = {};


TileEditorForm = reduxForm({
  form: 'TileEditorForm'
})(TileEditorForm);

TileEditorForm = connectRestEasy(
  (state, ownProps) => ({
    isRetrievingCreateTile: isRetrievingCreateTile(state, ownProps),
    isRetrievingUpdateTile: isRetrievingUpdateTile(state, ownProps),
  }),
  dispatch => ({
    CreateTileAction: (options) => dispatch(CreateTileAction(options)),
    UpdateTileAction: (options) => dispatch(UpdateTileAction(options)),
  })
)(TileEditorForm);

TileEditorForm = withRouter(TileEditorForm);


export default TileEditorForm;
