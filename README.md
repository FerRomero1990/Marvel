# Marvel

En esta página Web podemos encontrar los comics disponibles por parte de Marvel con la imágen del mismo junto con una breve descripción, en su versión V.0.1 podemos encontrar una página que rendiriza la API sin tener en cuenta aquellos elementos que no cuentan con la información completa de los comics.

Podemos ver que permite añadir cada uno de los comics para que sean tomados como favoritos

El diseño se encuentra en su fase inicial y próximamente brindará al usuario una experiencia mucho más agradable visualmente, adicionalmente se implementará un registro y claramente el logueo que permitirá al usuario consultar sus preferencias cuando lo quiera.

- Patrón arquitectónico: Desarrollo Frontend

El código sigue el enfoque de desarrollo frontend en el que se separa la lógica de presentación de la lógica de negocio. Los componentes Layout y App se encargan de la presentación de la interfaz de usuario, mientras que la lógica de obtener los cómics favoritos se maneja en el componente Layout utilizando el efecto useEffect y la solicitud a la API de Marvel con la biblioteca axios.
El estado de los cómics favoritos se almacena en el componente Layout utilizando el estado local de React (useState), y se pasa al componente Layout como una propiedad desde el componente App.
El código sigue el flujo de datos unidireccional, donde el componente Layout recibe los datos de los cómics favoritos y los muestra en el modal cuando se hace clic en el botón "Favoritos".
El código también utiliza estilos CSS en el archivo Layout.css para aplicar estilos a los elementos de la interfaz de usuario.

![image](https://github.com/FerRomero1990/Marvel/assets/113949903/047084b2-e5a0-4dc7-a850-f47dd2b6fde9)
