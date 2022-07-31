/** @format */

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../Mock/data';
import { Block } from './style';

export const ProductPages = () => {
	const { id } = useParams();
	const [state, setState] = useState(
		data.products.filter((value) => value.id == id),
	);

	return (
		<Block>
			{state.map((value, id) => (
                <div key={id}>
                    <h1>{ value.title}</h1>
                </div>
			))}
		</Block>
	);
};

export default ProductPages;
