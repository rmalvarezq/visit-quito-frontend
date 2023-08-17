import { useLayoutEffect, useRef, useState } from 'react';

export const Catalogo = ({ nombre, nombreCatalogoPadre }) => {
	const pRef = useRef();
	const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
	useLayoutEffect(() => {
		const { height, width } = pRef.current.getBoundingClientRect();
		setBoxSize({ height, width });
	}, [Catalogo]);
	return (
		<>
			<p ref={pRef}> {nombre}</p>
			<h1>{nombre}</h1>
			<h2>{nombreCatalogoPadre}</h2>
			<code>{JSON.stringify(boxSize)}</code>
		</>
	);
};
