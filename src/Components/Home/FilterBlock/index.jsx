/** @format */

import React, { useState } from 'react';
import ProductBlock from '../../../Generic/ProductBlock';
import { data } from '../../../Mock/data';
import { Block, Text, TopCategory, ViewBlock } from './style';

const FilterBlock = () => {
	// const [category, setCategory] = useState('housePlants');

	const [mockData, setMockData] = useState(data);
	
	return (
		<Block>
			<Block.Left>
				<Text size='16px' lineHeight='16px' fontWeight='700' color='#3D3D3D'>
					Categories
				</Text>
				<Text categoryText={true}>House Plants</Text>
				<Text categoryText={true}>Potter Plants</Text>
				<Text categoryText={true}>Seeds</Text>
				<Text categoryText={true}>Small Plants</Text>
				<Text categoryText={true}>Big Plants</Text>
				<Text categoryText={true}>Succulents</Text>
				<Text categoryText={true}>Big Plants</Text>
				<Text categoryText={true}>Trerrariums</Text>
				<Text categoryText={true}>Gardening</Text>
				<Text categoryText={true}>Accessories</Text>
			</Block.Left>
			<Block.Right>
				<TopCategory></TopCategory>
				<ViewBlock>
					{mockData.products.map(
						(value, id) => <ProductBlock key={id} img={value.img} title={value.title} price={value.price} desc={value.productDesc} />
					)}
				</ViewBlock>
			</Block.Right>
		</Block>
	);
};

export default FilterBlock;
