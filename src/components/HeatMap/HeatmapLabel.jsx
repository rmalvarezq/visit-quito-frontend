export const HeatmapLabel = ({ text, x, y }) => {
	return (
		<text x={x} y={y} fill='black' fontSize='12' textAnchor='middle'>
			{text}
		</text>
	);
};
