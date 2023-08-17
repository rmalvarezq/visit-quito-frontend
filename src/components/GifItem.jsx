import React from 'react';

export const GifItem = ({ title, url, id }) => {
	console.log({ title, url, id });
	return (
		<div className='card'>
			<img src={url} alt={title} style={{ maxWidth: '200px' }} />
			<p>{title}</p>
		</div>
	);
};
