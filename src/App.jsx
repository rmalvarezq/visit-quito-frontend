import './App.css';
import './styles/Styles.css';
import HeatMap from './components/Heatmap/';

function App() {
	// const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);
	const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);

  const yLabels = ['Lun', 'Mar', 'Mier', 'Jue', 'Sáb', 'Dom'];
	const xLabelsVisibility = new Array(24)
		.fill(0)
		.map((_, i) => (i % 2 === 0 ? true : false));

	// const yLabels = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Sábado', 'Domingo'];
  
	const data = new Array(yLabels.length)
		.fill(0)
		.map(() =>
			new Array(xLabels.length)
				.fill(0)
				.map(() => Math.floor(Math.random() * 100))
		);

	return (
		<>
			<HeatMap
				xLabels={xLabels}
				yLabels={yLabels}
				xLabelsLocation={'bottom'}
				xLabelsVisibility={xLabelsVisibility}
				xLabelWidth={50}
				data={data}
				squares
				onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
				cellStyle={(background, value, min, max, data, x, y) => ({
					background: `rgb(12, 160, 244, ${1 - (max - value) / (max - min)})`,
					fontSize: '11px',
					fontFamily: 'Arial',
				})}
				cellRender={(value) => value && `${value}%`}
				title={(value, unit, index) => value && `${value}-${xLabels[index]}`}
			/>
		</>
	);
}

export default App;
