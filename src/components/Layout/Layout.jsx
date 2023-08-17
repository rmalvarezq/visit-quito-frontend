import { useCounter, useFetch } from '../../hooks';
import { Catalogo, Loading } from '../MultipleCustomHooks';

export const Layout = () => {
	const { data, isLoading, hasError } = useFetch(
		'http://localhost:44722/api/Catalogo/GetAllCatalogo'
	);
	const { nombre, nombreCatalogoPadre } = !!data && data[0];

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<Catalogo nombre={nombre} nombreCatalogoPadre={nombreCatalogoPadre} />
			)}
			<button>next +</button>
		</>
	);
};
