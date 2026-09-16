
## app/app.ts
Este es el componente principal de tu aplicación. Aqui estara la logica del componente.
~~~typescript
export class App {
  nombre = 'Andrés';
}
~~~

## app/app.html 
Es la plantilla HTML del componente. Aqui escribes lo que quieres mostrar:
~~~html
<h1>Hola mundo</h1>
<p>Mi primera aplicación Angular</p>
~~~


## app/app.css
Son los estilos del componente App.
~~~css
h1 {
  font-size: 30px;
}
~~~  

## main.ts
Este es importante para entender como arranca Angular. No vas a estar modificandolo constantemente, pero debes entender qué hace.  




```text
main.ts
   ↓
inicia Angular
   ↓
App
   ↓
app.html
   ↓
lo que ves en el navegador
```

## styles.css
Es el CSS global de toda la aplicación.

Aquí puedes poner estilos que quieras que estén disponibles en diferentes componentes.

~~~css
body {
    margin: 0;
}
~~~
Ese estilo afecta al documento completo.

## app/app.config.ts

Aqui se configura parte del funcionamiento de Angular.  

Por ejemplo, cuando posteriormente queramos utilizar HTTP para consumir tu API de Spring Boot, este archivo tendrá importancia.

## app/app.routes.ts
Este archivo se utiliza para definir las rutas/navegacion de la aplicacion.

```
/productos
/categorias
/login
```

## app/app.spec.ts
Es para pruebas automatizadas (testing).