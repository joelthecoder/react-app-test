import React, { useState } from 'react';
import md5 from 'md5';
import styled from 'styled-components';

const InputStyled = styled.input`
	padding: 10px;
	border: 2px solid red;
`;

const ImageStyled = styled.img`
	width: 100px;
	height: 100px;
	background-color: red;
	border: 2px solid black;
`;

export default () => {
	const [imageSrc, setImageSrc] = useState(null);
	const handleInput = e => {
		const hash = md5(e.target.value);
		setImageSrc(`https://www.gravatar.com/avatar/${hash}`);
	}

	return (
		<>
			<InputStyled onChange={handleInput} />
			<ImageStyled src={imageSrc} />
		</>
	);
};
