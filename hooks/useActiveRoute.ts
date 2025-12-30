import { useLocation } from 'react-router-dom';

export const useActiveRoute = () => {
  const location = useLocation();
  
  const obtenerOpcionPorRuta = () => {
    const rutas = {
      '/dashboard': 'inicio',
      '/dashboard/users': 'usuarios',
      '/dashboard/restaurant': 'restaurant',
      '/dashboard/events': 'events',
    };

    // Buscar coincidencia exacta primero
    if (rutas[location.pathname]) {
      return rutas[location.pathname];
    }

    // Buscar coincidencias parciales para rutas dinámicas
    for (const [ruta, opcion] of Object.entries(rutas)) {
      if (ruta.includes(':') && location.pathname.startsWith(ruta.split('/:')[0])) {
        return opcion;
      }
    }

    return null;
  };

  return obtenerOpcionPorRuta();
};

// En tu componente
// const MiComponente = () => {
//   const opcionActiva = useRutaActiva();
//   // ... resto del componente
// };