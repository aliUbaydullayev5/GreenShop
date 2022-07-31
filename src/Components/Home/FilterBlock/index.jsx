/** @format */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductBlock from '../../../Generic/ProductBlock';
import { data } from '../../../Mock/data';
import { Block, Text, TopCategory, ViewBlock } from './style';

const FilterBlock = () => {
	const [category, setCategory] = useState('all');
	const [sale, setSale] = useState('allPlants');
	const navigate = useNavigate();

	const pushURLFunc = (e) => navigate(`/shop/product/${e}`);

	return (
		<Block>
			<Block.Left>
				<Text
					size='16px'
					lineHeight='16px'
					fontWeight='700'
					color={category === 'all' ? '#46a358' : '$3D3D3D'}
					onClick={() => setCategory('all')}>
					Categories
				</Text>
				<Text
					categoryText={true}
					onClick={() => setCategory('housePlants')}
					color={category === 'housePlants' ? '#46a358' : '$3D3D3D'}>
					House Plants
				</Text>
				<Text
					categoryText={true}
					onClick={() => setCategory('potterPlants')}
					color={category === 'potterPlants' ? '#46a358' : '$3D3D3D'}>
					Potter Plants
				</Text>
				<Text
					categoryText={true}
					onClick={() => setCategory('seeds')}
					color={category === 'seeds' ? '#46a358' : '$3D3D3D'}>
					Seeds
				</Text>
				<Text
					categoryText={true}
					onClick={() => setCategory('smallPlants')}
					color={category === 'smallPlants' ? '#46a358' : '$3D3D3D'}>
					Small Plants
				</Text>
				<Text
					categoryText={true}
					onClick={() => setCategory('bigPlants')}
					color={category === 'bigPlants' ? '#46a358' : '$3D3D3D'}>
					Big Plants
				</Text>
				<Text
					categoryText={true}
					onClick={() => setCategory('succulents')}
					color={category === 'succulents' ? '#46a358' : '$3D3D3D'}>
					Succulents
				</Text>
				<Text
					categoryText={true}
					onClick={() => setCategory('trerrariums')}
					color={category === 'trerrariums' ? '#46a358' : '$3D3D3D'}>
					Trerrariums
				</Text>
				<Text
					categoryText={true}
					onClick={() => setCategory('gardening')}
					color={category === 'gardening' ? '#46a358' : '$3D3D3D'}>
					Gardening
				</Text>
				<Text
					categoryText={true}
					onClick={() => setCategory('accessories')}
					const
					color={category === 'accessories' ? '#46a358' : '$3D3D3D'}></Text>
			</Block.Left>
			<Block.Right>
				<TopCategory>
					<Text
						span='true'
						size='18px'
						margin='0 18px'
						fontWeight='500'
						onClick={() => setSale('allPlants')}>
						All Plants
					</Text>
					<Text
						span='true'
						size='18px'
						margin='0 18px'
						fontWeight='500'
						onClick={() => setSale('newArrivals')}>
						New Arrivals
					</Text>
					<Text
						span='true'
						size='18px'
						margin='0 18px'
						fontWeight='500'
						onClick={() => setSale('sale')}>
						Sale
					</Text>
				</TopCategory>
				<ViewBlock>
					{data.products.map(
						(value, id) =>
							(value.type === category || category === 'all') &&
							value.id <= 9 && (
								<div onClick={() => pushURLFunc(value.id)} key={id}>
									<ProductBlock
										img={value.img}
										title={value.title}
										price={value.price}
										desc={value.productDesc}
									/>
								</div>
							),
					)}
				</ViewBlock>
			</Block.Right>
		</Block>
	);
};

export default FilterBlock;
