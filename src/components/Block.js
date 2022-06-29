import React from 'react';
import {Badge, Button, ListGroup, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import TimeAgo from 'react-timeago';

const Block = (props) => {
  // noinspection RequiredAttributes,JSValidateTypes
  return (
      <ListGroup as="div">
        { props.blocks.length > 0 ?
            props.blocks.map((value, index) => (
                <ListGroup.Item
                    as="div"
                    className="d-flex justify-content-between align-items-center border-0 border-bottom px-0"
                    key={ index }
                >
                  <div className="px-2">
                    <Button className="btn rounded btn-secondary p-3">Bk</Button>
                  </div>
                  <div className="w-50">
                    <div className="fw-bold">
                      <Link to={ '/block/' + value.number }>{ value.number }</Link>
                    </div>
                    <small><TimeAgo date={ new Date(value.timestamp * 1000) } /></small>
                  </div>
                  <div className="w-100">
                    <div className="fw-bold d-flex">Miner &nbsp;
                      <Link
                          to={ '/address/' + value.miner }
                          className="text-truncate d-inline-block"
                          style={ {maxWidth: 120} }
                      >
                        { value.miner }
                      </Link>
                    </div>
                  </div>
                  <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip>Block Reward</Tooltip>
                      }
                  >
                    <Badge bg="secondary" pill>{ value.price } Eth</Badge>
                  </OverlayTrigger>
                </ListGroup.Item>
            )) : (
                <div className="text-center">Loading...</div>
            ) }
      </ListGroup>
  );
};

export default Block;
