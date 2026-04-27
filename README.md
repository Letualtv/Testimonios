# Testimonios

Aplicación web construida con **React** que muestra testimonios de clientes con su foto, nombre, país, cargo y empresa.

## Demo

[https://Letualtv.github.io/Testimonios](https://Letualtv.github.io/Testimonios)

## Tecnologías

- React 18
- CSS personalizado
- Create React App

## Estructura del proyecto

```
src/
├── App.js                          # Componente principal
├── componentes/
│   └── Testimonio.js               # Componente reutilizable de testimonio
├── hojas-de-estilo/
│   └── Testimonio.css              # Estilos del componente
└── imagenes/                       # Fotos de los clientes
```

## Componente `Testimonio`

Acepta las siguientes props:

| Prop         | Descripción                       |
|--------------|-----------------------------------|
| `nombre`     | Nombre del cliente                |
| `pais`       | País del cliente                  |
| `imagen`     | Nombre del archivo de imagen      |
| `cargo`      | Cargo del cliente                 |
| `empresa`    | Empresa donde trabaja             |
| `testimonio` | Texto del testimonio              |

## Scripts disponibles

### `npm start`

Inicia la aplicación en modo desarrollo.  
Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### `npm run build`

Genera la versión de producción en la carpeta `build`.

### `npm test`

Ejecuta las pruebas en modo interactivo.