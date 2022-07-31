/** @format */

import styled from 'styled-components';

const Block = styled.div`
	background: #fbfbfb;
	height: 320px;
    display: grid;
    align-items: center;
    cursor: pointer;
    padding: 10px;

`;
Block.ImgArea = styled.div`
	display: grid;
	align-items: center;
    justify-content: center;

`;
Block.Img = styled.img`
    width: 250px;
    height: 250px;

`;

const Text = styled.div`
	font-style: normal;
	font-weight: ${({ fWeight }) => (fWeight ? fWeight : '400')};
	font-size: ${({ fSize }) => (fSize ? fSize : '16px')};
	line-height: ${({ lHeight }) => lHeight ? lHeight : '16px'};
	color: ${({ color }) => color ? color : 'black'};

`;

export { Block, Text };
