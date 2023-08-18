export const HeatmapCell = ({
	day,
	hour,
	value,
	colorScale,
	cellSize,
	cellWidth,
	cellMargin,
}) => {
	return (
		<rect
			x={hour * cellWidth + cellMargin}
			y={day * cellSize + cellMargin}
			width={cellWidth - 2 * cellMargin}
			height={cellSize - 2 * cellMargin}
			rx={(cellSize - 2 * cellMargin) * 0.1} // radio del borde en x
			ry={(cellSize - 2 * cellMargin) * 0.1} // radio del borde en y
			fill={colorScale(value)}
		/>
	);
};
