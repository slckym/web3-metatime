import React, {useContext, useEffect, useState} from 'react';
import {Block, Transaction} from 'components';
import {Card, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Web3Context} from 'context';

const Home = () => {
  const {web3: {lib}} = useContext(Web3Context);
  const [latestBlocks, setLatestBlocks] = useState([]);
  const [latestTransactions, setLatestTransactions] = useState([]);
  const {eth, utils} = lib;
  const fetchLatestBlockNumber = async () => {
    if (lib) {
      let latestBlocksArray = [];
      let latestTransactionsArray = [];
      const lastBlock = await eth.getBlockNumber();
      for (let i = 1; i <= 10; i++) {
        let block = await eth.getBlock(lastBlock - i);
        latestBlocksArray.push({
          hash: block.hash,
          number: block.number,
          timestamp: block.timestamp,
          extraData: block.extraData,
          miner: block.miner,
          nonce: block.nonce,
          price: utils.fromWei(block.baseFeePerGas.toString(), 'ether'),
        });
        let transaction = await eth.getTransactionReceipt(block.transactions[0]);
        latestTransactionsArray.push({
          blockHash: transaction.blockHash,
          blockNumber: transaction.blockNumber,
          data: transaction.data,
          from: transaction.from,
          hash: transaction.hash,
          nonce: transaction.nonce,
          to: transaction.to,
          value: utils.fromWei(transaction.effectiveGasPrice.toString(), 'ether'),
        });
      }
      setLatestTransactions(latestTransactionsArray);
      setLatestBlocks(latestBlocksArray);
    }
  };
  useEffect(() => {
    fetchLatestBlockNumber().then();
    // eslint-disable-next-line
  }, [lib]);
  return (
      <Row>
        <Col>
          <Card>
            <Card.Header as="h6">Latest Blocks</Card.Header>
            <Card.Body>
              <Block blocks={ latestBlocks } />
            </Card.Body>
            <Card.Footer>
              <Link className="btn btn-outline-primary w-100" to="/blocks">View
                all blocks</Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header as="h6">Latest Transaction</Card.Header>
            <Card.Body>
              <Transaction transactions={ latestTransactions } />
            </Card.Body>
            <Card.Footer>
              <Link className="btn btn-outline-primary w-100" to="/blocks">View
                all transaction</Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
  );
};

export default Home;
