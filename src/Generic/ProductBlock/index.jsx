/** @format */

import React from 'react';
import { Block, Text } from './style';

const ProductBlock = ({ img, title, price, desc }) => {
	return (
		<Block>
			<Block.ImgArea>
				<Block.Img src={img} />
			</Block.ImgArea>
			<Text color='#3D3D3D'>{title}</Text>
			<Text color='#46A358' fWeight='700' fSize='18px'>
				{price}
			</Text>
		</Block>
	);
};

export default ProductBlock;
