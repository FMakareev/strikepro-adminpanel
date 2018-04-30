import React, {Component} from 'react';
import {
    Badge, Button, Table, Card, CardBlock, CardFooter, CardText, CardTitle, Col, Row, Pagination,
    PaginationItem, PaginationLink
} from "reactstrap";
import {Link, Redirect} from "react-router-dom";
import config from "../../../config";

class TileList extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onGetTiles = this.onGetTiles.bind(this);
        this.onDeleteTile = this.onDeleteTile.bind(this);
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
        this.onGetTiles();
    }

    onGetTiles(id = 1) {
        return fetch(config.base + config.api.tiles + `?page=${id}`, {
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
                            return this.onGetTiles(pageNum)
                        }}>{pageNum}</PaginationLink>
                    </PaginationItem>
                )
            }
        }
        return array
    }

    onDeleteTile(id) {
        return fetch(config.base + config.api.tile + '/' + id, {
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

    invertColor(hexTripletColor) {
        let color = hexTripletColor;
        color = color.substring(1); // remove #
        color = parseInt(color, 16); // convert to integer
        color = 0xFFFFFF ^ color; // invert three bytes
        color = color.toString(16); // convert to hex
        color = ("000000" + color).slice(-6); // pad with leading zeros
        color = "#" + color; // prepend #
        return color;
    }

    render() {
        console.log(this.state);
        const {redirect, data, current_page, last_page} = this.state;
        if (redirect) {
            return <Redirect to='/login'/>;
        }

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">
                        <Table hover bordered striped responsive size="sm">
                            <thead>
                            <tr>
                                <th>id</th>
                                <th>resource_id</th>
                                <th>resource_type</th>
                                <th>created_at</th>
                                <th>updated_at</th>
                                <th>public_at</th>
                                <th>background_color</th>
                                <th>cols</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                data && data.map((item, index) => {
                                    return (

                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.resource_id}</td>
                                            <td>{item.resource_type}</td>
                                            <td>{item.created_at}</td>
                                            <td>{item.updated_at}</td>
                                            <td>{item.public_at}</td>
                                            <td style={{
                                                backgroundColor: item.background_color,
                                                color:this.invertColor(item.background_color),
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                            }}>{item.background_color}</td>
                                            <td>{item.cols}</td>
                                            <td>
                                                <Button color="warning">
                                                    <Link
                                                        to={`/tile_editor?id=${item.id}`
                                                        }>Изменить</Link>
                                                </Button>
                                                {' '}
                                                <Button color="danger" onClick={() => {
                                                    this.onDeleteTile(item.id)
                                                }} size="sm">Удалить</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </Col>
                    {
                        last_page > 1 &&
                        <Col xs="12">
                            <nav>
                                <Pagination className="justify-content-center">
                                    {
                                        current_page > 1 &&
                                        <PaginationItem>
                                            <PaginationLink
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    return this.onGetTiles(current_page - 1)
                                                }}
                                                previous href="#">Prev</PaginationLink>
                                        </PaginationItem>
                                    }

                                    {
                                        this.onPagination()
                                    }

                                    {
                                        last_page > current_page &&
                                        <PaginationItem>
                                            <PaginationLink
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    return this.onGetTiles(current_page + 1)
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

export {TileList};