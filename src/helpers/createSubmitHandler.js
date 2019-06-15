import {SubmissionError} from "redux-form";
import {normalizeSubmissionError} from "./normalizeSubmissionError";

export const createSubmitHandler = (fetchAction) => async (options) => {
  const {normalizedPayload, error,} = await fetchAction(options);
  if (normalizedPayload && normalizedPayload.errors || error) {
    throw new SubmissionError(normalizeSubmissionError(normalizedPayload ||
      {
        message: [error.message],
        errors: {}
      }));
  }
};

export default createSubmitHandler;
