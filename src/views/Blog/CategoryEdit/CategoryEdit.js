import React, {Component} from 'react';
import CategoryEditForm from "./CategoryEditForm";
import {Redirect} from "react-router-dom";
import config from "../../../config";


class CategoryEdit extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onGetCategory = this.onGetCategory.bind(this);
    }

    get initialState() {
        return {
            redirect: false
        }
    }

    componentWillMount() {
        if (window.location.href.indexOf('?id=') >= 0) {
            this.onGetCategory(window.location.href.substring(window.location.href.indexOf('?id=')).substring(4)).then(data => {
                console.log(data);
                this.setState({
                    data: data
                })
            })
        }
    }

    onGetCategory(id) {
        return fetch(config.base + config.api.category + '/'+id, {
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

        const {data, redirect} = this.state;



        if (redirect) {
            return <Redirect to='/login'/>;
        }

        if (window.location.href.indexOf('?id=') >= 0) {
            if (!data) {
                return null;
            }
        }

        let initialValues = {
            initialValues: data
        };
        console.log(initialValues);
        return (
            <div className="animated fadeIn">
                <CategoryEditForm {...initialValues}/>
            </div>
            )
    }
}

export default CategoryEdit;