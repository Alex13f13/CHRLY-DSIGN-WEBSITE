import { useState, useEffect, useRef } from "react";

export default function useAnimeOnView({ threshold = 0.8 } = {}) {
	const [isVisible, setIsVisible] = useState(false);
	const elementRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{
				root: null,
				rootMargin: "0px",
				threshold,
			}
		);

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => observer && observer.disconnect();
	}, []);

	return [isVisible, elementRef];
}

//Guia de uso de IntersectionObserver:

// root: null indica que el elemento de referencia para calcular la intersección será el viewport del navegador.

// rootMargin: "0px" establece un margen alrededor del viewport para considerar el cambio en la intersección.

// threshold: 0.3 define el valor de intersección necesario para activar la función de devolución de llamada.
// Un valor de 0.3 significa que si el elemento está al menos un 30% visible, se considerará que está intersectando.
