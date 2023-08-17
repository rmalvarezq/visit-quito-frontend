import { useEffect } from "react";

export const Messaje = () => {
    useEffect(() => {
      console.log('montado');
    
      return () => {
        console.log('desmontado');
      }
    }, [])
    
	return (
		<>
			<h1>usuario ya existe</h1>
		</>
	);
};
