import React from 'react';
import { ProtectedRoute } from 'routes/ProtectedRoute';
import styled from '@emotion/styled';
import { Button, Container, Grid, Typography } from '@mui/material';
import PetImage from '../../assets/Pet.svg';
import { Header } from 'components/Header';
import { MainPageState } from './container';

import Item1 from '../../assets/shop/1.svg';
import Item2 from '../../assets/shop/2.svg';
import Item3 from '../../assets/shop/3.svg';
import Item4 from '../../assets/shop/4.svg';
import Item5 from '../../assets/shop/5.svg';
import Item6 from '../../assets/shop/6.svg';
import BasePage from 'components/BasePage';

interface IHomeViewProps {
	mainPageState: MainPageState,
	setPageState: (state: MainPageState) => void, 
};

const HomeView: React.FC<IHomeViewProps> = ({
	mainPageState,
	setPageState,
}) => {
  return (
		<BasePage>
			<HomeMenu>
				<Grid container direction="row" spacing={10} justifyContent='space-around'>
					<img src={PetImage} alt="Pet" />
					
					{mainPageState === MainPageState.SHOP && (
						<Shop>
							<Grid container spacing={2}>
								<Grid item xs={4}>
									<img src={Item1} alt="Item1" />
								</Grid>
								<Grid item xs={4}>
									<img src={Item2} alt="Item2" />
								</Grid>
								<Grid item xs={4}>
									<img src={Item3} alt="Item3" />
								</Grid>
								<Grid item xs={4}>
									<img src={Item4} alt="Item4" />
								</Grid>
								<Grid item xs={4}>
									<img src={Item5} alt="Item5" />
								</Grid>
								<Grid item xs={4}>
									<img src={Item6} alt="Item6" />
								</Grid>
							</Grid>
						</Shop>
					)}
				</Grid>
				<ButtonsGrid container spacing={2}>
					<Grid item xs={4}>
						<MainButtonContainer>
							<MainButton onClick={() => setPageState(MainPageState.SHOP)}>Магазин</MainButton>
						</MainButtonContainer>
					</Grid>
					<Grid item xs={4}>
						<MainButtonContainer>
							<MainButton>Инвентарь</MainButton>
						</MainButtonContainer>
					</Grid>
					<Grid item xs={4}>
						<MainButtonContainer>
							<MainButton>Задания</MainButton>
						</MainButtonContainer>
					</Grid>
				</ButtonsGrid>
			</HomeMenu>
	</BasePage>
  );
}

const MainButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ButtonsGrid = styled(Grid)`
	margin-top: 3em;
`;

const MainButton = styled(Button)`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
	color: #FFFFFF;
	text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
`;

const Backdround = styled.div`
	height: 100vh;
	width: 100%;
	background: linear-gradient(180deg, #0A2896 0%, #00AAFF 100%);
`;

const HomeMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 90vh;
	flex-direction: column;
`;

const Shop = styled.div`
	padding: 80px 90px;
	border-radius: 65px;
	background-color: rgba(255, 255, 255, 0.77);
`;

export default HomeView;
