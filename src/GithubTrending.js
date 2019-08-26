import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledList = styled.ul`
	list-style-type: none;
`;

const StyledListItem = styled.li`
	width: 800px;
	border-radius: 6px;
	background-color: black;
	margin: 5px;
	display: flex;
	align-items: center;
`;

const StyledAvatar = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 100px;
	margin-right: 10px;
`;

const StyledLink = styled.a`
	color: white;
	text-decoration: none;
	display: inline-block;
	margin-left: 10px;

	&:hover {
		text-decoration: underline;
		font-weight: bold;
	}
`;

export default ({ since }) => {
	const [trending, setTrending] = useState([]);
	const trendingUrl = `https://github-trending-api.now.sh/repositories?language=javascript&since=${since}`;

	useEffect(async () => {
		const result = await axios(trendingUrl);
		console.log(result.data);
		setTrending(result.data);
	}, []);

	if (!trending.length) {
		return 'Loading Github Trending...';
	}

	return (
		<StyledList>
			{trending.map((item, index) => (
		    	<StyledListItem key={index}>
		    		<StyledAvatar src={item.avatar} />
		    		{item.author}: 
		    		<StyledLink href={item.url}>
		    			{item.name}
	    			</StyledLink>
	    		</StyledListItem>
			))}
		</StyledList>
	);
};
