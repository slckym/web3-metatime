import React from 'react';
import {Container} from 'react-bootstrap';
import {Route, Routes} from 'react-router-dom';
import {useWeb3} from '@openzeppelin/network/react';
import {Web3Context} from 'context';
import {Address, Block, Blocks, Home, Transaction, Transactions} from 'screens';
import {Navigation} from 'components';

const projectId = '';

function App() {
  const web3 = useWeb3(`wss://mainnet.infura.io/ws/v3/${ projectId }`);
  return (
      <React.Fragment>
        <Web3Context.Provider value={ {web3} }>
          <Navigation />
          <Container className="my-5">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="blocks" element={ <Blocks /> } />
              <Route path="transactions" element={ <Transactions /> } />
              <Route path="tx/:key" element={ <Transaction /> } />
              <Route path="address/:key" element={ <Address /> } />
              <Route path="block/:key" element={ <Block /> } />
            </Routes>
          </Container>
        </Web3Context.Provider>
      </React.Fragment>
  );
}

export default App;
