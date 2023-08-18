import { HeatmapCell } from './HeatmapCell';
import { scaleSequential } from 'd3-scale';
import { interpolateViridis } from 'd3-scale-chromatic';
import { HeatmapLabel } from './HeatmapLabel';

const dayMapping = {
	Lunes: 0,
	Martes: 1,
	Miércoles: 2,
	Jueves: 3,
	Viernes: 4,
	Sábado: 5,
	Domingo: 6,
};
const days = [
	'Lunes',
	'Martes',
	'Miércoles',
	'Jueves',
	'Viernes',
	'Sábado',
	'Domingo',
];

export const HeatmapGrid = ({ data, cellSize }) => {
	const colorScale = scaleSequential()
		.domain([0, 100]) // Reemplaza con tus valores mínimo y máximo
		.interpolator(interpolateViridis);
	const labelOffset = 20; // Ajusta según tu diseño
	const cellWidth = cellSize * 1; // Ajusta según tus preferencias
	const cellMargin = 1; // Ajusta según tus preferencias

	return (
		<svg width={400} height={400}>
			{days.map((day, i) => (
				<HeatmapLabel
					key={i}
					text={day}
					x={(i + 0.5) * cellWidth}
					y={labelOffset - 10}
				/>
			))}
			{Array.from({ length: 4 }).map((_, i) => (
				<HeatmapLabel
					key={i}
					text={`${i}:00`}
					x={labelOffset - 10}
					y={(i + 0.5) * cellSize + labelOffset}
				/>
			))}
			<g transform={`translate(${labelOffset}, ${labelOffset})`}>
				{data.map((d, i) => (
					<HeatmapCell
						key={i}
						day={dayMapping[d.day]}
						hour={d.hour}
						value={d.value}
						colorScale={colorScale}
						cellSize={cellSize}
						cellWidth={cellWidth}
						cellMargin={cellMargin}
					/>
				))}
			</g>
		</svg>
	);
};
