import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { Container } from '@mui/material';
import { Header } from 'components/Header';
import background from "assets/wallpaper.jpg";

interface IBasePageProps {
	children: ReactElement;
};

const BasePage: React.FC<IBasePageProps> = ({
	children
}) => {
  return (
		<Backdround>
			<SecondBackdround>
				<Header />
				<Container>
					{children}
				</Container>
			</SecondBackdround>
		</Backdround>
  	);
}

const Backdround = styled.div`
	height: 100vh;
  overflow-y: hidden;
	width: 100%;
	background-image: url('${background}');
  background-size: auto auto;
`;

const SecondBackdround = styled.div`
	height: 100vh;
  overflow-y: hidden;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

export default BasePage;
