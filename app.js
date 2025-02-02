const Express=require("express")
const Cors=require("cors")

const app=Express()
app.use(Cors())
app.use(Express.json())

// Tu código va desde aquí ⬇️

//Declaracion de las Estructuras de los Datos
const tasks = [
    {id:1,
    title:"Diseñar Interfaz",
    description:"Diseño visual de la aplicacion",
    completed:true,
},
    {id:2,
    title:"Implementacion de Funciones",
    description:"Añadir las funciones de la aplicacion",
    completed:false,
},
    {id:3,
    title:"Correccion de Errores",
    description:"Inspeccion del codigo y limpieza de posibles errores",
    completed:false,
},
    {id:4,
    title:"Implementar la logica del negocio",
    description:"Desarrollar las funciones principales de la aplicación",
    completed:true,
},
] 

//Declaracion de Rutas
//Ruta Principal del Servidor
app.get('/',(req,res)=> {
    res.send('Tareas del Sistema');
//Codigo 200 para Validar el funcionamiento en Consola
    const output= {
        code:200,
        message:"Si lees este mensaje, esta linea funciona"
     }
     return res.send(output).status(200)
})
//Ruta para obtener la lista de tareas
app.get('/tasks',(req,res) => {
    res.send(tasks);
    const output= {
        code:200,
        message:"Si lees este mensaje, esta linea funciona"
     }
     return res.send(output).status(200)
    
})
//Ruta para Obtener una Tarea especifica
app.get('/tasks/:id',(req,res) => {
    const tarea = tasks.find(c=> c.id === parseInt(req.params.id));
//Se ejecuta un If en caso de no encontrar la tarea para redirigir y marcar error
    if(!tarea) return res.status(404).send('Tarea no Encontrada - Error de ID');
//En caso contrario, mostrar el ID solicitado
    else res.send(tarea);
    const output= {
        code:200,
        message:"Si lees este mensaje, esta linea funciona"
     }
     return res.send(output).status(200)
})
//Ruta para crear una nueva tarea
app.post('/tasks',(req,res) => {
    const tarea = {
        id: tasks.length + 1,
        title: req.body.title,
        description: req.body.description,
        complete: (req.body.complete === 'true')
    };
//Una vez creada la nueva Tarea, se empuja al array principal
    tasks.push(tarea);
    res.send(tarea);

    const output= {
        code:200,
        message:"Si lees este mensaje, esta linea funciona"
     }
     return res.send(output).status(200)
    
})
//asdsasdasa
app.put('/tasks/:id',(req,res) => {
    const output= {
        code:200,
        message:"Si lees este mensaje, esta linea funciona"
     }
     return res.send(output).status(200)


})
//Ruta para Borrar una Tarea especifica
app.delete('/tasks/:id',(req,res) => {
    const output= {
        code:200,
        message:"Si lees este mensaje, esta linea funciona"
     }
     return res.send(output).status(200)

    //const tarea = tasks.
})


// Hasta aquí ⬇⬆️

module.exports={app}