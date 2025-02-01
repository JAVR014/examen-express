const {app} = require("./app.js");

const task = [
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

app.post('/',(req,res) => {
    const tasks = {
        id: task.length+1,
        title: req.body.name,
        description: req.body.name,
        completed: (req.body.completed==='true')
    }
})
app.get('/api/task',(req,res) => {
    res.send(task);
})
//Id
app.get('/api/task/:id',(req,res) => {
    const tasks = task.find(c=> c.id === parseInt(req.params.id));
    if (!tasks) return res.status(404).send('Tarea no Encontrada');
    else res.send(tasks);
})
app.put('/',(req,res) => {

})
app.delete('/',(req,res) => {
    const tasks = task.find(c=> c.id === parseInt(req.params.id));
    if(!tasks) return res.status(404).send('Tarea no Encontrada');

    const index = task.indexOf(tasks);
    task.splice(index,1);
    res.send(tasks)
})





app.listen(3000,()=>console.log("Listening on port 3000"))