# Node-task-list

    ¿Qué sucedió al usar async y await?
    Al usar async y await, el código se vuelve más legible y parece estar sincronizado, lo que facilita la comprensión del flujo de ejecución. Las funciones asíncronas como addTask, removeTask y completeTask pueden esperar la resolución de las promesas sin bloquear la ejecución.

    ¿Qué sucedió al usar el método then()?
    Al usar el método then() para manejar las promesas, el código sigue un patrón más tradicional de encadenamiento de funciones. Las funciones de manejo son pasadas como argumentos a then(), lo que puede hacer que el código sea un poco más verboso y menos intuitivo en comparación con async/await.

    ¿Qué diferencias encontraste entre async, await y el método then()?
        Async/await: Son palabras clave que permiten escribir código asincrónico de manera más similar a las operaciones sincrónicas. El código es más claro y fácil de leer, ya que parece que se está ejecutando de manera secuencial.
        Método then(): Es una forma tradicional de manejar promesas en JavaScript. Se encadena a las promesas para manejar su resolución y rechazo. Puede volverse un poco confuso con múltiples niveles de anidación de then().

Ambos enfoques son válidos y tienen sus propias ventajas y desventajas. Async/await tiende a ser más claro y fácil de entender, mientras que el método then() puede ser más explícito y adecuado para algunas situaciones.
