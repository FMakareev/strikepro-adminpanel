import React, {Component} from 'react';
import PostEditForm from "./PostEditForm";
import {connect} from "react-redux";
import config from "../../../config";
import {Redirect} from "react-router-dom";

class PostEdit extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onGetCategory = this.onGetCategory.bind(this);
        this.onGetPost = this.onGetPost.bind(this);
    }

    get initialState() {
        return {
            categories: null,
            redirect: false
        }
    }

    componentWillMount() {

        this.onGetCategory().then(data => {
            if (data !== 401) {
                this.setState({
                    categories: data
                })
            }
        });
        if (window.location.href.indexOf('?id=') >= 0) {
            this.onGetPost(window.location.href.substring(window.location.href.indexOf('?id=')).substring(4)).then(data => {
                console.log(data);
                this.setState({
                    data: data
                })
            })
        }
    }

    onGetPost(id) {
        return fetch(config.base + config.api.post + '/' + id, {
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response);
            }
            if (response.status > 400) {
                this.setState({redirect: true})
            }
            return Promise.reject(response.status);
        })
            .then((response) => {
                console.log(response);
                return response.json()
            }).then((response) => {
                console.log(response);
                return response
            })
            .catch(error => {
                console.error(error);
                return error;
            });
    }

    onGetCategory() {
        return fetch(config.base + config.api.categories+'?without_pagination=1', {
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response);
            }
            if (response.status > 400) {
                this.setState({redirect: true})
            }
            return Promise.reject(response.status);
        })
            .then((response) => {
                console.log(response);
                return response.json()
            }).then((response) => {
                console.log(response);
                return response
            })
            .catch(error => {
                console.error(error);
                return error;
            });
    }

    render() {

        const {categories, data, redirect} = this.state;
        console.log('this.stateasda:',this.state);

        if (!categories) {
            return null;
        }
        if (window.location.href.indexOf('?id=') >= 0) {
            if (!data) {
                return null;
            }
        }


        if (redirect) {
            return <Redirect to='/login'/>;
        }

        let initialValues = {
            initialValues: data
        };
        return (
            <div className="animated fadeIn">
                <PostEditForm categories={categories} {...initialValues}/>
            </div>
        )
    }
}

PostEdit = connect(
    state => ({
        Store: state,
    }),
    dispatch => ({
        setStore: (type, value) => {
            dispatch({type: type, payload: value})
        }
    })
)(PostEdit);

export default PostEdit;
