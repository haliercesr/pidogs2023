

<h1 align="center">PI-DOGS SPA</h1>

![image](https://github.com/haliercesr/pidogs2023/assets/115671323/41f83fb5-af53-4b4a-ab2c-672035b74727)


¡Hola a todos! 😃 Con mucho esfuerzo y dedicación, he terminado otro proyecto, estoy muy contento de haberlo logrado.

Se trata de una single page application que consta de una Landing Page, Home Page, Detail Page y Form Page. Las tecnologías utilizadas fueron hashtag#React, hashtag#Redux, hashtag#NodeJS, hashtag#Express y hashtag#Sequelize.

El flujo es el siguiente: El frontend se comunica con un servidor BBF (BACK FOR FRONT) robusto y modularizado. Este servidor se programó en Express y filtra la información que se consume desde una API externa y la devuelve al frontend. También puede guardar datos según se solicite en una base de datos relacional. El servidor y la base de datos se comunican a través del ORM Sequelize. La base de datos está hecha con hashtag#PostgreSQL y hashtag#pgAdmin. Para probar el servidor, se utilizó el software hashtag#Insomnia.

Tanto el frontend, el servidor y la base de datos hacen sus propias validaciones y devuelven sus errores. Para manejar los errores se utilizaron promesas y hashtag#asyncawait. 🛠️

Con el tiempo, iré reparando errores y actualizando el proyecto (por ejemplo, cambiar de idioma) e implementando mejores prácticas y nuevas tecnologías. 🚀

## Tabla de Contenidos

- [Funcionalidades](#funcionalidades)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Guía de Uso](#guía-de-uso)
- [Cómo Contribuir](#cómo-contribuir)
- [Licencia](#licencia)

## Funcionalidades

**1.** Búsqueda de Personajes por ID: Los usuarios pueden ingresar un ID de personaje y buscar información sobre ese personaje específico.

**2.** Listado de Personajes: Se muestra una lista de personajes con sus nombres y algunas características principales.

**3.** Detalles de Personajes: Los usuarios pueden hacer clic en un personaje en la lista para ver información detallada, como su especie, origen y episodios en los que aparece.

**4.** Agrega a Favoritos: Los usuarios pueden agregar personajes a su lista de favoritos para acceder rápidamente a ellos más tarde.

**5.** Barra de Navegación: Una barra de navegación proporciona enlaces a las diferentes secciones de la aplicación, como la página de inicio, detalles de personajes, favoritos y más.

**6.** Reproducción de Sonido: Se reproduce un sonido al interactuar con ciertas acciones, como realizar una búsqueda o cerrar un elemento.

**7.** Registro de Usuarios: Los usuarios pueden registrarse en la aplicación, lo que podría darles acceso a características adicionales en el futuro.

**8.** Alertas Personalizadas: Se muestran alertas personalizadas en caso de errores o acciones importantes, como credenciales de inicio de sesión incorrectas.

**9.** Rutas y Enrutamiento: Se utiliza React Router para administrar y facilitar la navegación entre diferentes páginas y componentes de la aplicación.

**10.** Gestión de Estado con Redux: Redux se utiliza para gestionar el estado global de la aplicación, como la lista de personajes y los favoritos.

**11.** Diseño Responsivo: La interfaz está diseñada para adaptarse a diferentes tamaños de pantalla y dispositivos, asegurando una experiencia de usuario consistente.

**12.** Estilos Personalizados: Los estilos CSS personalizados se aplican para crear una apariencia agradable y coherente en toda la aplicación.

**13.** Interacción con API: La aplicación se conecta a una API externa para obtener información actualizada sobre los personajes de "Rick and Morty".

## Tecnologías Utilizadas

- React
- React Router
- Redux
- Axios
- Bootstrap
- Expres
- PostgreSQL
- Sequalize
- Promises
- AsyncAwait

## Capturas de Pantalla

 <img src="https://github.com/haliercesr/rick_and_morty/assets/115671323/e980addd-d6ba-4e8d-972b-d439d607033e" alt="alt text" width=225 height=400>

  <img src="https://github.com/haliercesr/rick_and_morty/assets/115671323/b984ce69-48fb-4db8-8fbd-d06d0ad939ac" alt="alt text" width=225 height=400>

<img src="https://github.com/haliercesr/rick_and_morty/assets/115671323/59500a85-80bd-4fa7-9745-a682d919eee4" alt="alt text" width=225 height=400>

<img src="https://github.com/haliercesr/rick_and_morty/assets/115671323/aac5b95f-d244-4e6d-99cb-0540335113e3" alt="alt text" width=225 height=400>
 

 <img src="https://github.com/haliercesr/rick_and_morty/assets/115671323/e46a491c-2f4e-441d-a121-4f213a69a28d" alt="alt text" >


![image](https://github.com/haliercesr/rick_and_morty/assets/115671323/139b5717-83f8-4f6c-80d9-1b6c5b932489)







## Guía de Uso

**1.** Visita [https://versed-amount-production.up.railway.app/](https://versed-amount-production.up.railway.app/) en tu navegador.

<p align="center">
  <img src="https://github.com/haliercesr/rick_and_morty/assets/115671323/72d0c707-3485-4fc1-a153-303005853600" alt="Inicio" width=400 height=200>
</p>



**2.** Registrate con un email y una contraseña.

<p align="center">
  <img src="https://github.com/haliercesr/rick_and_morty/assets/115671323/4ade80ad-1500-47d4-8870-67816b4300cc" alt="Inicio" width=400 height=200>
</p>


**3.** Inicia sesion con tus datos de registro.

**4.** Las instrucciones estan en la pantalla de inicio.

<p align="center">
  <img src="https://github.com/haliercesr/rick_and_morty/assets/115671323/139b5717-83f8-4f6c-80d9-1b6c5b932489" alt="Inicio" width=400 height=200>
</p>


**5.** Disfruta.

## Cómo Contribuir

Si quieres contribuir a este proyecto, sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una rama con tu nueva funcionalidad (`git checkout -b nueva-funcionalidad`).
3. Realiza tus cambios y realiza commits (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a tu fork (`git push origin nueva-funcionalidad`).
5. Crea un pull request en este repositorio.

## Licencia

Este proyecto está bajo la Licencia [---](----).
