import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
 
    title: "Desarrollador Front-End",
    year: "Feb. 2022 - Presente",
    duration: "2 años",
    company: "Munkys S.A.S",
    details:
    "Desarrollar mejoras internas y externas de componentes, controllers dentro de la aplicación para optimizar renderizado de la informacion, ejecución de pruebas y validaciones. puestas en producción (Angular js). Ajustes a webpack para mejorar el compilamiento de los elementos dentro del proyecto. Migración de componentes de Angular js a React dentro de la aplicación. Uso de las Librerias como Redux,React Table,Material UI.Manejo de Hook dentro de los componentes. Creación, ajuste desde Express para el consumo de servicios y enrutamiento de vistas manteniendo la arquitectura de la aplicación. Manejo de ajustes en componentes para optimizar el funcionamiento y tiempo de respuesta a la hora de renderizar los elementos. Creación de tableros dinámicos para la visualización de información suministrada desde web services. Creación de tablero con información suministrada desde Google Analytics para saber el porcentaje de impacto en campaña con referencia a cliente final. Manejo de versionamiento con Git los cambios solicitados y propuestos. Manejo de Jmetter para pruebas de rendimiento de la aplicación. Manejo para interpretar los diseños compartidos desde los diferentes programas (Adobe XD - Figma) para realizar los desarrollos o ajustes pertinentes."
  },
  {
    title: "Analista de desarrollo",
    year: "Oct. 2017 - Feb. 2022",
    duration: "4 años y 6 meses",
    company: "Cadena S.A",
    details:
    "Desarrollar mejoras internas y externas de componentes, controllers dentro de la aplicación para optimizar renderizado de la informacion, ejecución de pruebas y validaciones. puestas en producción (Angular js).Ajustes a webpack para mejorar el compilamiento de los elementos dentro del proyecto.Migración de componentes de Angular js a React dentro de la aplicación.  Uso de las Librerias como Redux,React Table,Material UI.Manejo de Hook dentro de los componentes.  Manejo de ajustes en componentes para optimizar el funcionamiento y tiempo de respuesta a la hora de renderizar los elementos.  Creación de tableros dinámicos para la visualización de información suministrada desde web services.Creación de tablero con información suministrada desde Google Analytics para saber el porcentaje de impacto en campaña con referencia a cliente final.Manejo de versionamiento con Git los cambios solicitados y propuestos. Manejo de Jmetter para pruebas de rendimiento de la aplicación."
  },
  {
    title:"Analista de soluciones",
    year: "Mar. 2017 - Oct. 2017",
    duration: "8 meses",
    company: "Software estrategico",
    details:
      "Parte del equipo de desarrollo, enfocado en diseño de aplicación web con React, CSS y GSAP. Participación en reuniones diarias para revisar progreso y superar desafíos.",
  },
  {
    title: "Analista de Informacion",
    year: "Nov. 2015 - Mar. 2017",
    duration: "1 año y 5 meses",
    company: "Perfodic",
    details:
      "Análisis de reportes de operación, Validación de Inventarios y ajustes al aplicativo. ",
  },
];

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] '> Experiencia Laboral</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
