### Respuestas preguntas:
1. ¿Cómo cambiarias la base de datos si se quiere internacionalizar?
    
    R:// Se debe tener en cuenta varios factores: Alguno de ellos: 
    - La base de datos debe aceptar multidiomas y diseñar la base de datos para que acepte los idiomas
    - Manejo de tipos de texto: evitar usar unicode pues este generaria solo caracteres que pueden aceptarse de un idioma pero en otro se utilizan otro tipo de caracteres
    - Manejo de formatos con formatos ISO tanto en fechas como otros

2. Si asumimos que la base de datos va a crecer y puede llegar a tener un millón de
productos, ¿qué arquitectura le darías y por qué?
   
   R:// Montaria la Base de Datos en nube y la agregaria a un servicio de base de datos que ofrezca la cloud que se elija, a su vez pensaria en seguridad de informacion como cifrados y autenticacion de usuarios, tambien pensaria una NoSQL Database puesto que aunque este normalizada una BD Relacional implica consumo de recursos navegar atraves de las tablas, y en la NoSQL manejariamos documentos y referencias a los cuales serian mas escalable

3. Si además del número de records crece tremendamente (> 10 millones) y el número
de consultas simultáneas asciende a más de 10,000/segundo que otros ajustes
realizarías a la solución inicial?
    
    R:// Agregaria manejo de cache para que en consultas que no cambia la data a traves del tiempo y asi mejorar el rendimiento, escalaria los recursos de nube y este lo pasaria atraves de monitoreos constantes, agregaria un Load Balancer para asi distribuir entre servidores el trabajo, se podria manejar indices en las bd y asi mejorar el rendimiento de consultas y tambien optimizar las consultas 

4. ¿Cómo implementarías una búsqueda de productos para catálogos de muchos (>
10 million) productos?
   
   R:// Estructuraria los productos de forma y los clasificaria para que herramientas como elasticsearch

5. ¿Cómo añadirías la implementación de un carrito de compras?'

    R:// Un manejo de autorizaciones y autenticaciones para que primeramente antes de hacer una compra el usuario debe ser valido, a su vez agregaria formas de pagos y pasarelas de pago, un esquema de productos por entregar y ya el manejo logistico de la misma plataforma
