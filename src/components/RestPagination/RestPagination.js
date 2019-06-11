import React, {Component} from 'react';
import PropType from 'prop-types';
import {Col, Pagination, PaginationItem, PaginationLink} from "reactstrap";
import {withRouter} from "react-router-dom";

export class RestPagination extends Component {

  static propTypes = {
    onMovePage: PropType.func,
    metaData: PropType.object,
  }

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return {
      page_min: 0,
      page_max: 5,
    }
  }

  onPagination({last_page}) {
    let array = [];

    let {
      page_min,
      page_max,
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
    for (let i = page_min; i < last_page; i++) {
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
            <PaginationLink
              onClick={(event) => {
                event.preventDefault();
                const {onMovePage} = this.props;
                this.onMovePageHistory(pageNum);
                onMovePage(pageNum);
              }}
            >
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        )
      }
    }
    return array
  }

  onMovePageHistory = (count) => {
    const {match, history} = this.props;
    history.push(`${match.path}?page=${ count}`);
    return count;
  };


  onMovePage = (event, count) => {
    event.preventDefault();
    const {metaData, onMovePage} = this.props;
    onMovePage(metaData.current_page + count);
    this.onMovePageHistory(metaData.current_page +count);
    return count;
  };

  render() {
    const {metaData} = this.props;
    if (!metaData || !(metaData && metaData.last_page > 1)) {
      return null;
    }
    return (<Col xs="12">
      <nav>
        <Pagination className="justify-content-center">
          {
            metaData.current_page > 1 &&
            <PaginationItem>
              <PaginationLink
                onClick={(event) => this.onMovePage(event, -1)}
                previous href="#">Prev</PaginationLink>
            </PaginationItem>
          }

          {
            this.onPagination(metaData)
          }

          {
            metaData.last_page > metaData.current_page &&
            <PaginationItem>
              <PaginationLink
                onClick={(event) => this.onMovePage(event, 1)}
                next href="#">Next</PaginationLink>
            </PaginationItem>
          }
        </Pagination>
      </nav>
    </Col>)
  }
}

RestPagination = withRouter(RestPagination);
export default RestPagination;
