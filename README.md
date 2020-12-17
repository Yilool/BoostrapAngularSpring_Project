# Acerca del Projecto
El projecto consiste en un frontend basado en un backend subido al siguiente enlace https://github.com/Yilool/EmpresaSpringDDBB.

## Parte Visual
El projecto consiste en un pequeño sitio Web estático diseño responsive que usa los estilos y componentes de [Bootstrap].

El sitio está formado por 3 páginas enlazadas entre sí (Inicio, not Found y Operaciones).

Es completamente responsive, de forma que se adapta tanto a pantallas extra pequeñas de smartphone como a tablets

y pantallas más grandes de portátiles y de escritorio.

Tiene una barra de navegación principal que se contre cuando la pantalla sea pequeña. Esta barra posee:

-Enlaces.

-Una imagen como logotipo.

-Un buscador (no funcional).

En las 3 páginas hay:

-Un carousel con tres imágenes. Con intervalo para que las imágenes se muestren durante 3000 ms.

-Iconos con [FontAwesome].

-Botones.

-Un desplegable.

-Una sección con fichas o pestañas.

-Un formulario horizontal.

-Una tabla responsive con bordes y de tipo striped.

Sea utilizado el estilo base que define Bootstrap.

## Parte Funcional
En las tres pestañas dentro de operaciones (Product, Employee, Custom) se ha creado un formulario con 4 botoness para realizar las siguientes operaciones:

-una petición [POST] hacia el endpoint correspondiente del backend para crear.

-una petición [GET] al endpoint del backend para poder listar todos los datos del proyecto.

-una petición [GET] al endpoint del proyecto backend pasándole un ID para poder consultar un registro concreto. 

-una petición [DELETE] hacia el endpoint correspondiente del backend pasándole un ID para borrar.

Los datos obtenidos se muestra en una tabla responsive con bordes y de tipo striped.
# IntegrarSpring

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
