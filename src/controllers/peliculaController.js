import { Router } from 'express';
import { PeliculaService } from '../services/peliculaService.js';

const router = Router();
const peliculaService = new PeliculaService();

router.get('', async (req, res) => {
    console.log(`This is a get operation`);
    let Pelicula;
      Pelicula = await peliculaService.getPelicula(req.query.idpelicula, req.query.imagen, req.query.titulo, req.query.fechadecreacion);

    return res.status(200).json(Pelicula);
  });

    router.get('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a get operation`);
  
    const Pelicula = await peliculaService.getPeliculaById(req.params.id);
  
    return res.status(200).json(Pelicula);
  });
  
  router.post('', async (req, res) => {
    console.log(`This is a post operation`);
  
    const Pelicula = await peliculaService.createPelicula(req.body);
  
    return res.status(201).json(Pelicula);
  });
  
  router.put('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a put operation`);
  
    const Pelicula = await peliculaService.updatePeliculaById(req.params.id, req.body);
  
    return res.status(200).json(Pelicula);
  });
  
  router.delete('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a delete operation`);
  
    const Pelicula = await peliculaService.deletePeliculaById(req.params.id);
  
    return res.status(200).json(Pelicula);
  });
  

  export default router;