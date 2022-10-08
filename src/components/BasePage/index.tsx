import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { Container } from '@mui/material';
import { Header } from 'components/Header';

interface IBasePageProps {
	children: ReactElement;
};

const BasePage: React.FC<IBasePageProps> = ({
	children
}) => {
  return (
		<Backdround>
			<Header />
			<Container>
				{children}
			</Container>
		</Backdround>
  	);
}

const Backdround = styled.div`
	height: 100vh;
	width: 100%;
	background: linear-gradient(180deg, #0A2896 0%, #00AAFF 100%);
`;

export default BasePage;
