import React, {Component} from 'react';
import {
    Button, Card, CardBlock, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row,
    Table
} from "reactstrap";
import config from "../../../config";
import {Link, Redirect} from "react-router-dom";

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;

        this.onGetCategory = this.onGetCategory.bind(this);
        this.onDeleteCategory = this.onDeleteCategory.bind(this);
        this.onPagination = this.onPagination.bind(this);

    }

    get initialState() {
        return {
            data: null,
            redirect: false,
            page_min: 0,
            page_max: 5,
        }
    }

    componentWillMount() {
        this.onGetCategory();
    }

    onGetCategory(id = 1) {
        return fetch(config.base + config.api.categories + `?page=${id}`, {
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
            }).then((data) => {
                console.log(data);
                this.setState(data);
                return data
            })
            .catch(error => {
                console.error(error);
                return error;
            });
    }

    onDeleteCategory(id) {

        console.log('onDeleteCategory: ', id);

        return fetch(config.base + config.api.category + '/' + id, {
            method: 'DELETE',
            credentials: 'include',
            cache: 'no-cache',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                let newData = [];
                this.state.data.map(item => {
                    if (item.id !== id) {
                        newData.push(item);
                    }

                });
                this.setState({data: newData});
                return Promise.resolve(response);
            }
            if (response.status > 400) {
                this.setState({redirect: true})
            }
            return Promise.reject(response);
        }).catch(error => {
            console.error(error);
            throw new SubmissionError({
                _error: error.status + ': ' + error.statusText
            });
        });
    }

    onPagination() {
        let array = [];


        let {
            page_min,
            page_max,
            last_page,
            current_page
        } = this.state;


        if (current_page === page_max) {
            if (page_max < last_page) {
                page_max += 1;
                page_min += 1;
            }
        } else if (current_page === page_min + 1) {
            if (page_min > 0) {
                page_max -= 1;
                page_min -= 1;
            }
        }
        if (page_max !== this.state.page_max && page_min !== this.state.page_max) {
            this.setState(page_max, page_min);
        }

        for (let i = page_min; i < this.state.last_page; i++) {
            let pageNum = i + 1;
            if (pageNum === current_page) {
                array.push(
                    <PaginationItem key={i} active>
                        <PaginationLink href="#">{pageNum}</PaginationLink>
                    </PaginationItem>
                )
            } else {
                array.push(
                    <PaginationItem key={i}>
                        <PaginationLink onClick={(event) => {
                            event.preventDefault();
                            return this.onGetCategory(pageNum)
                        }}>{pageNum}</PaginationLink>
                    </PaginationItem>
                )
            }
        }
        console.log(array);
        return array
    }


    render() {
        console.log('this.state: ',this.state);

        const {redirect} = this.state;

        if (redirect) {
            return <Redirect to='/login'/>;
        }

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                <strong>Categories</strong>
                            </CardHeader>
                            <CardBlock className="card-body">
                                <Table hover bordered striped responsive size="sm">
                                    <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Имя</th>
                                        <th>Дата создания</th>
                                        <th>Дата обновления</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.data && this.state.data.map((item, index) => {
                                            return (

                                                <tr key={index}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.created_at}</td>
                                                    <td>{item.updated_at}</td>
                                                    <td>
                                                        <Button color="warning">
                                                            <Link
                                                                to={`/category_editor?id=${item.id}`
                                                                }>Изменить</Link>
                                                        </Button>
                                                        {' '}
                                                        <Button color="danger" onClick={() => {
                                                            this.onDeleteCategory(item.id)
                                                        }} size="sm">Удалить</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </Table>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col xs="12">
                        <nav>
                            <Pagination className="justify-content-center">
                                {
                                    this.state.current_page > 1 &&
                                    <PaginationItem>
                                        <PaginationLink
                                            onClick={(event) => {
                                                event.preventDefault();
                                                return this.onGetCategory(this.state.current_page - 1)
                                            }}
                                            previous href="#">Prev</PaginationLink>
                                    </PaginationItem>
                                }

                                {
                                    this.state.last_page > 1 &&
                                    this.onPagination()
                                }

                                {
                                    this.state.last_page > this.state.current_page &&
                                    <PaginationItem>
                                        <PaginationLink
                                            onClick={(event) => {
                                                event.preventDefault();
                                                return this.onGetCategory(this.state.current_page + 1)
                                            }}
                                            next href="#">Next</PaginationLink>
                                    </PaginationItem>
                                }
                            </Pagination>
                        </nav>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Categories;