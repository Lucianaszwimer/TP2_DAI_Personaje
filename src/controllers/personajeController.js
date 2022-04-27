import { Router } from 'express';
import { PersonajeService } from '../services/personajeService.js';

const router = Router();
const personajeService = new PersonajeService();

router.get('', async (req, res) => {
    console.log(`This is a get operation`);
    return res.status(200).json();
  });

    router.get('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a get operation`);
  
    const Personaje = await personajeService.getPersonajeById(req.params.id);
  
    return res.status(200).json();
  });
  
  router.post('', async (req, res) => {
    console.log(`This is a post operation`);
  
    const Personaje = await personajeService.createPersonaje(req.body);
  
    return res.status(201).json();
  });
  
  router.put('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a put operation`);
  
    const Personaje = await personajeService.updatePersonajeById(req.body);
  
    return res.status(200).json();
  });
  
  router.delete('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a delete operation`);
  
    const Personaje = await personajeService.deletePersonajeById(req.params.id);
  
    return res.status(200).json();
  });
  


  export default router;