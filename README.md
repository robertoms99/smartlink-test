# SmartLinks Test App

SmartLinks Test App es una aplicación construida en React. Consiste en una aplicación web de agencia de viajes que consume varios Microservicios proporcionados para para mostrar las recomendaciones de autos según los criterios que enviemos por url y asi cumplir los requerimientos de la prueba técnica de smartlinksDev como Frontend Developer.

# Requerimientos

- La aplicación debe ser entregada, desplegada y usable.
- El sistema debe recibir los parámetros por GET, para que pueda tomarlos y hacer la consulta a la API, es decir, se espera una URL amigable y reciba las siguientes variables:
  - origen
  - destino
  - fecha recogida
  - fecha entrega
- Así debe formarse la URL del sistema: TUDOMINIO.com/challenge/{originCityCode}/{destinationCityCode}/{pickUpDate}/{dropOffDate}
- El sistema debe mostrar los datos según el diseño desarrollado por nuestra especialista de UX/UI, siendo full responsive

# Diseño

![image](https://user-images.githubusercontent.com/54558382/144766776-46e1efda-a1eb-4060-84f3-26783e214951.png)

# Casos de uso

Por ejemplo:

- Para una búsqueda de un auto recogiendo en miami y dejando en miami del 1 de enero al 3 de enero del 2022:
  - TUDOMINIO.com/challenge/mia/mia/010122/030122
- Para una búsqueda de un auto recogiendo en miami y dejando en miami del 20 de Mayo al 22 de Mayo del 2022:
  - TUDOMINIO.com/challenge/mia/mia/200522/220522

# Solucion

- Al momento de iniciar la aplicacion y ser pasados los parametros necesarios en la url del navegador empezara a cargar la aplicacion solicitando el Bearer token, las localizaciones almacenadas y luego se buscaran las recomendaciones de autos respecto a la localizacion y el rango de fechas parametrizados:

![image](https://user-images.githubusercontent.com/54558382/144766941-f55e7fe3-30c9-4ea1-8d63-98e653c28461.png)

## Herramientas

- html
- css
- javascript
- typescript
- reactjs
- styled-components
- netlify

## Scripts

- Para correr el proyecto en desarrollo:

  - ### `yarn dev`

- Para correr los tests unitarios:

  - ### `yarn test`

- Para lanzar la aplicacion en un server local

  - ### `yarn start`

- Para compilar la aplicacion en directorio estatico
  - ### `yarn build`
