import { Router } from 'express';
import { PersonajeService } from '../services/personajeService.js';
import { Authenticate } from '../common/jwt.strategy.js';

const router = Router();
const personajeService = new PersonajeService();

//obtiene todo
router.get('', Authenticate, async (req, res) => {
    console.log(`This is a get operation`);
    let Personaje;
      Personaje = await personajeService.getPersonaje(req.query.name, req.query.age, req.query.id);

    return res.status(200).json(Personaje);
  });

  //obtiene por id
    /*router.get('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a get operation`);
  
    const Personaje = await personajeService.getPersonajeById(req.params.id);
  
    return res.status(200).json(Personaje);
  });*/
  
  //crea personaje
  router.post('', Authenticate, async (req, res) => {
    console.log(`This is a post operation`);
  
    const Personaje = await personajeService.createPersonaje(req.body);
  
    return res.status(201).json(Personaje);
  });
  
  //actualiza personaje
  router.put('/:id', Authenticate, async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a put operation`);
  
    const Personaje = await personajeService.updatePersonajeById(req.params.id, req.body);
  
    return res.status(200).json(Personaje);
  });

  // elimina personaje
  router.delete('/:id', Authenticate, async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a delete operation`);
  
    const Personaje = await personajeService.deletePersonajeById(req.params.id);
  
    return res.status(200).json(Personaje);
  });

  // detalle pelicula y asocia con personaje de la misma
  router.get('/:id', Authenticate, async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log("Entro al detalle")
    const Personaje = await personajeService.getDetallePersonaje(req.params.id);

    return res.status(200).json(Personaje);

  })
  


  export default router;