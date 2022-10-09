import React from 'react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';

import BasePage from 'components/BasePage';
import { ITransaction } from 'models/ITransaction';

interface IHistoryViewProps {
  transactions: ITransaction[],
  userId: number
};

const HistoryView: React.FC<IHistoryViewProps> = ({
  transactions
}) => {
  return (
		<BasePage>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <div className="nes-table-responsive" style={{backgroundColor: 'white'}}>
          <table className="nes-table is-bordered is-centered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Тип</th>
                <th>Предмет</th>
                <th>Время</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tr) => (
                <tr>
                  <td>{tr.id}</td>
                  <td>{tr.sender.id ? 
                    <span className="nes-text is-primary">Primary</span> 
                    : <span className="nes-text is-error">Error</span>}</td>
                  <td>NFT</td>
                  <td>{tr.endedAt.toISOString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Grid>
	  </BasePage>
  );
}

const MainButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default HistoryView;
