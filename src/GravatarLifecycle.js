import React, { Component } from 'react';
import md5 from 'md5';
import styled from 'styled-components';

const InputStyled = styled.input`
	padding: 10px;
	border: 2px solid blue;
`;

const ImageStyled = styled.img`
	width: 100px;
	height: 100px;
	background-color: blue;
	border: 2px solid black;
`;

export default class GravatarLifecycle extends Component {
	constructor(props) {
		super(props);
		this.handleInput = this.handleInput.bind(this);
		this.state = {
			imageSrc: null
		};
	}

	handleInput(e) {
		const hash = md5(e.target.value);
		this.setState({
			imageSrc: `https://www.gravatar.com/avatar/${hash}`
		});
	}

	render() {
		const { imageSrc } = this.state;
		return (
			<>
				<InputStyled onChange={this.handleInput} />
				<ImageStyled src={imageSrc} />
			</>
		)
	}
};
