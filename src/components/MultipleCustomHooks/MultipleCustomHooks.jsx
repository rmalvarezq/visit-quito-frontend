import { useCounter, useFetch } from '../../hooks/';
import { Catalogo, Loading } from './';

export const MultipleCustomHooks = () => {
	// const { counter, increment } = useCounter();
	// console.log(counter);
	const { data, isLoading, hasError } = useFetch(
		'http://localhost:44722/api/Catalogo/GetAllCatalogo'
		// `https://www.breakingbadapi.com/api/quotes/${1}`
	);
	// console.log({ data, isLoading, hasError });
	const { nombre, nombreCatalogoPadre } = !!data && data[0];

	// const {} =useFetch('https://app.visitquito.ec/apiWagger/api/Catalogo/GetAllCatalogo')
	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<Catalogo nombre={nombre} nombreCatalogoPadre={nombreCatalogoPadre} />
			)}
			<button style={{ backgroundColor: red }}>next +</button>
		</>
	);
};
