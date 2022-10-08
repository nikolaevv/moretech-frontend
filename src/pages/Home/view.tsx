import React from 'react';
import { ProtectedRoute } from 'routes/ProtectedRoute';
import styled from '@emotion/styled';
import { Button, Container, Grid, Typography } from '@mui/material';
import PetImage from '../../assets/Pet.svg';

const HomeView = () => {
  return (
		<Backdround>
			<Container>
				<HomeMenu>
					<img src={PetImage} alt="Pet" />
					<ButtonsGrid container spacing={2}>
						<Grid item xs={4}>
							<MainButtonContainer>
								<MainButton>Магазин</MainButton>
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
			</Container>
		</Backdround>
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

export default HomeView;