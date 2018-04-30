import React, {Component} from 'react';
import {
    Badge,
    Button,
    Card, CardBlock, CardFooter, CardHeader, CardImg, CardSubtitle, CardText, CardTitle, Col, Pagination,
    PaginationItem,
    PaginationLink,
    Row
} from "reactstrap";


import config from "../../../config";
import {Link, Redirect} from "react-router-dom";

// function isAuth() {
//    return function (target) {
//        console.log('isAuth', target);
//        Object.defineProperty(target, 'render', {
//            value: () => <Redirect to='/post_editor'/>,
//        })
//    }
// }


class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;

        this.onGetPosts = this.onGetPosts.bind(this);
        this.onDeletePost = this.onDeletePost.bind(this);
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
        this.onGetPosts();
    }

    onGetPosts(id = 1) {
        return fetch(config.base + config.api.posts + `?page=${id}`, {
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response);
            }
            if (response.status === 401) {
                this.setState({redirect: true})
            }
            return Promise.reject(response.status);
        })
            .then((response) => {
                return response.json()
            }).then((data) => {
                this.setState(data);
                return data
            })
            .catch(error => {
                console.error(error);
                return error;
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
        for (let i = page_min; i < page_max; i++) {
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
                            return this.onGetPosts(pageNum)
                        }}>{pageNum}</PaginationLink>
                    </PaginationItem>
                )
            }
        }
        return array
    }

    onDeletePost(id) {
        return fetch(config.base + config.api.post + '/' + id, {
            method: 'DELETE',
            credentials: 'include',
            cache: 'no-cache',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
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
        })
            .then((response) => {
                return response.json()
            }).then((response) => {
                return response;
            })
            .catch(error => {
                console.error(error);
                throw new SubmissionError({
                    _error: error.status + ': ' + error.statusText
                });
            });
    }


    render() {
        console.log('this.state:', this.state);      // true

        const {redirect} = this.state;
        if (redirect) {
            return <Redirect to='/login'/>;
        }

        return (
            <div className="animated fadeIn">
                <Row>
                    {
                        this.state.data && this.state.data.map((item, index) => {
                            return (
                                <Col xs="12" sm="6" md="4" key={index}>
                                    <Card>
                                        {/*<CardImg top width="100%"*/}
                                        {/*src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"*/}
                                        {/*alt="Card image cap"/>*/}
                                        <CardBlock>
                                            <CardTitle>
                                                {item.title}
                                            </CardTitle>
                                            <CardText>{item.excerpt}</CardText>
                                        </CardBlock>
                                        <CardFooter className="text-muted">
                                            <Button color="warning">
                                                <Link to={`/post_editor?id=${item.id}`}>Изменить</Link>
                                            </Button>
                                            <Button color="danger" onClick={() => {
                                                this.onDeletePost(item.id)
                                            }}>Удалить</Button>
                                            <Badge color="success" className="float-right">{item.status}</Badge>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                    {
                        this.state.last_page > 1 &&
                        <Col xs="12">
                            <nav>
                                <Pagination className="justify-content-center">
                                    {
                                        this.state.current_page > 1 &&
                                        <PaginationItem>
                                            <PaginationLink
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    return this.onGetPosts(this.state.current_page - 1)
                                                }}
                                                previous href="#">Prev</PaginationLink>
                                        </PaginationItem>
                                    }

                                    {
                                        this.onPagination()
                                    }

                                    {
                                        this.state.last_page > this.state.current_page &&
                                        <PaginationItem>
                                            <PaginationLink
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    return this.onGetPosts(this.state.current_page + 1)
                                                }}
                                                next href="#">Next</PaginationLink>
                                        </PaginationItem>
                                    }
                                </Pagination>
                            </nav>
                        </Col>
                    }


                </Row>
            </div>
        )
    }
}

export default Posts;