import styled from 'styled-components';
import { black } from 'styles/colors';
import { mainFont } from 'styles/fonts';

export const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 700;
	width: inherit;
	outline: 0;
`;

export const Backdrop = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.3);
	z-index: 500;
`;

export const StyledModal = styled.div`
	z-index: 100;
	background: white;
	position: relative;
	margin: auto;
	border-radius: 10px;
	min-width: 300px;
	padding: 25px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.3rem;
	color: ${black};
	font-family: ${mainFont};
	font-size: 25px;
	margin-bottom: 20px;
`;

export const HeaderText = styled.div`
	align-self: center;
	color: ${black};
`;

export const CloseButton = styled.button`
	font-size: 1rem;
	border: none;
	margin-left: 0.5rem;
	background: none;
	:hover {
		cursor: pointer;
	}
`;

export const Content = styled.div`
	padding: 10px;
	max-height: 30rem;
	overflow-x: hidden;
	overflow-y: auto;
`;
