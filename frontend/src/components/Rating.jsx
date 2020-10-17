import React from 'react';

const ratings = [0, 1, 2, 3, 4];

const Rating = ({ value, text, color }) => {
	return (
		<div className='rating'>
			{ratings.map((rating, index) => (
				<span key={index}>
					<i
						style={{ color }}
						className={
							value >= rating + 1
								? 'fas fa-star'
								: value >= rating + 0.5
								? 'fas fa-star-half-alt'
								: 'far fa-star'
						}></i>
				</span>
			))}
			{text && <span>{text}</span>}
		</div>
	);
};

Rating.defaultProps = {
	color: '#f8e825',
};

export default Rating;
