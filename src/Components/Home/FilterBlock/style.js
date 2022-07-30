/** @format */

import styled from 'styled-components';

const Block = styled.div`
	width: 100%;
	height: 900px;
	display: grid;
	grid-template-columns: 310px 1fr;
`;
Block.Left = styled.div`
	padding: 14px 18px;
`;
Block.Right = styled.div`
    display: grid;
    grid-template-rows: 23px 1fr;
`;

const Text = styled.div`
	font-size: ${({ size }) => (size ? size : '16px')};
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
	color: ${({ color }) => (color ? color : '#000')};
	line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 'none')};
	display: ${({ span }) => (span ? 'inline-block' : 'block')};
	margin: ${({ margin }) => (margin ? margin : '0 0')};

	${({ categoryText }) =>
		categoryText &&
		'font-size: 15px; line-height: 40px; color: #3D3D3D; margin: 10px 13px; font-weight: 700; cursor: pointer;'};

	:hover {
		color: #46a358;
	}
`;



const TopCategory = styled.div`
	width: 100%;

`;

const ViewBlock = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 40px;
	padding: 20px 54px;
`;














export { Block, Text, TopCategory, ViewBlock };