import React from 'react';
import {Badge, Button, ListGroup, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Transaction = (props) => {
  // noinspection RequiredAttributes,JSValidateTypes
  return (
      <ListGroup as="div">
        {
          props.transactions.length > 0 ?
              props.transactions.map((value, index) => (
                  <ListGroup.Item
                      as="div"
                      className="d-flex justify-content-between align-items-center border-0 border-bottom px-0"
                      key={ index }
                  >
                    <div className="px-2">
                      <Button className="btn rounded-circle btn-secondary p-3" style={ {minWidth: 60} }>Tx</Button>
                    </div>
                    <div className="w-50">
                      <div className="d-flex">
                        <Link
                            to={ '/tx/' + value.blockHash }
                            className="text-truncate d-inline-block"
                            style={ {maxWidth: 120} }
                        >{ value.blockHash }</Link>
                      </div>
                    </div>
                    <div className="w-100">
                      <div className="d-flex">
                        From&nbsp;<Link
                          to={ '/address/' + value.from }
                          className="text-truncate d-inline-block"
                          style={ {maxWidth: 240} }
                      >{ value.from }</Link>
                      </div>
                      <div className="d-flex">
                        To&nbsp;<Link
                          to={ '/address/' + value.to }
                          className="text-truncate d-inline-block"
                          style={ {maxWidth: 240} }
                      >{ value.to }</Link>
                      </div>
                    </div>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>Amount</Tooltip>
                        }
                    >
                      <Badge bg="secondary" pill>{ value.value } Eth</Badge>
                    </OverlayTrigger>
                  </ListGroup.Item>
              ))
              : (
                  <div className="text-center">Loading...</div>
              )
        }
      </ListGroup>
  );
};

export default Transaction;
