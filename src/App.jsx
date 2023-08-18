import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Inicio } from './Inicio.jsx';
import './styles/Styles.css';
import Heatmap from 'heatmap.js';
import { HeatmapGrid } from './components';
const data = [
  // Lunes
  { day: 'Lunes', hour: 0, value: 10 },
  { day: 'Lunes', hour: 1, value: 20 },
  { day: 'Lunes', hour: 2, value: 30 },
  { day: 'Lunes', hour: 3, value: 40 },

  // Martes
  { day: 'Martes', hour: 0, value: 60 },
  { day: 'Martes', hour: 1, value: 70 },
  { day: 'Martes', hour: 2, value: 80 },
  { day: 'Martes', hour: 3, value: 90 },

  // Miércoles
  { day: 'Miércoles', hour: 0, value: 20 },
  { day: 'Miércoles', hour: 1, value: 10 },
  { day: 'Miércoles', hour: 2, value: 40 },
  { day: 'Miércoles', hour: 3, value: 50 },

  // Jueves
  { day: 'Jueves', hour: 0, value: 70 },
  { day: 'Jueves', hour: 1, value: 60 },
  { day: 'Jueves', hour: 2, value: 50 },
  { day: 'Jueves', hour: 3, value: 40 },

  // Viernes
  { day: 'Viernes', hour: 0, value: 30 },
  { day: 'Viernes', hour: 1, value: 40 },
  { day: 'Viernes', hour: 2, value: 50 },
  { day: 'Viernes', hour: 3, value: 60 },

  // Sábado
  { day: 'Sábado', hour: 0, value: 40 },
  { day: 'Sábado', hour: 1, value: 50 },
  { day: 'Sábado', hour: 2, value: 60 },
  { day: 'Sábado', hour: 3, value: 70 },

  // Domingo
  { day: 'Domingo', hour: 0, value: 50 },
  { day: 'Domingo', hour: 1, value: 60 },
  { day: 'Domingo', hour: 2, value: 70 },
  { day: 'Domingo', hour: 3, value: 80 },
];
function App() {
	return (
		<div className='App'>
			<HeatmapGrid data={data} cellSize={50} />
		</div>
	);
}

export default App;
