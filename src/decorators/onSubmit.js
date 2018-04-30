import {SubmissionError} from "redux-form";
import config from "../config";

export default (url) => {
    return (target) => {
        target.prototype.onSubmit = (values, $this) => {
            console.log('values: ',values);
            const body = JSON.stringify(values);
            return fetch(config.base + url + $this.state.id, {
                method: $this.state.id !== '' ? 'PUT' : 'POST',
                credentials: 'include',
                mode:'cors',
                cache: 'no-cache',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: body
            }).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    $this.setState({
                        redirect: true
                    });
                    return Promise.resolve(response);
                } else if (response.status === 401) {
                    $this.setState({
                        redirect: true,
                        redirectUrl: '/login'
                    })
                } else {
                    throw new SubmissionError({
                        _error: response.status + ': ' + response.statusText
                    });
                }
                return Promise.reject(response);
            })
        }
    }
};