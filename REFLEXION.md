# Reflexión: Pruebas automatizadas y CI

## ¿Qué tipo de error evita el CI?
El CI ayuda a evitar que se suban cambios que rompen algo que antes funcionaba.  
Si alguien modifica el código y afecta el comportamiento esperado, las pruebas fallan y el error se detecta de inmediato, antes de que el cambio avance o llegue a producción.

## ¿Qué tipo de error no evita?
El CI no evita errores que no estén cubiertos por pruebas, como casos que no se pensaron, problemas de diseño, de experiencia de usuario o errores de lógica que nadie validó.  
Si no existe una prueba para ese caso, el CI no tiene forma de detectarlo.

## ¿Qué pasaría si un equipo ignora el CI?
Si un equipo ignora el CI, los errores se detectan tarde o cuando ya están en producción.  
Esto provoca retrabajo, pérdida de tiempo y menor confianza en el sistema, porque la calidad depende solo de revisiones manuales y no de validaciones automáticas.
