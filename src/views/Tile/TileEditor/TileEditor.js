import React, {Component} from 'react';
import {TileEditorForm} from "./TileEditorForm";
import {Redirect} from "react-router-dom";
import config from "../../../config";

class TileEditor extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    getParamMatcher(param) {
        let vars = {};
        window.location.href.replace(
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function( m, key, value ) { // callback
                vars[key] = value !== undefined ? value : '';
            }
        );
        if ( param ) {
            return vars[param] ? '/'+vars[param] : '';
        }
        return vars;
    }

    componentWillMount() {
        if(this.getParamMatcher('id') !== ''){
            this.onGetTile(this.getParamMatcher('id')).then(data => {
                if (data !== 401) {
                    this.setState({
                        data: data
                    })
                }
            });
        }
    }

    onGetTile(id) {
        return fetch(config.base + config.api.tile + id, {
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

        console.log(this.state);

        const {data, redirect} = this.state;

        if (redirect) {
            return <Redirect to='/login'/>;
        }

        let initialValues = {
            initialValues: data
        };

        return (
            <div className="animated fadeIn">
                <TileEditorForm {...initialValues}/>
            </div>
        )
    }
}


export {TileEditor};