import { Router } from 'express';
import { PeliculaService } from '../services/peliculaService.js';

const router = Router();
const peliculaService = new PeliculaService();

// get pelicula
router.get('/get', async (req, res) => {
    console.log(`This is a get operation`);
    let Pelicula;
      Pelicula = await peliculaService.getPelicula(req.query.idpelicula, req.query.imagen, req.query.name, req.query.fechadecreacion);

    return res.status(200).json(Pelicula);
  });

  // get pelicula by id
    router.get('/:idpelicula', async (req, res) => {
    console.log(`Request URL Param: ${req.params.idpelicula}`);
    console.log(`This is a get operation`);
  
    const Pelicula = await peliculaService.getPeliculaById(req.params.idpelicula);
  
    return res.status(200).json(Pelicula);
  }); 

// crear pelicula
  router.post('', async (req, res) => {
    console.log(`This is a post operation`);
  
    const Pelicula = await peliculaService.createPelicula(req.body);
  
    return res.status(201).json(Pelicula);
  });


// actualizar pelicula
  router.put('/:idpelicula', async (req, res) => {
    console.log(`Request URL Param: ${req.params.idpelicula}`);
    console.log(`This is a put operation`);
  
    const Pelicula = await peliculaService.updatePeliculaById(req.params.idpelicula, req.body);
  
    return res.status(200).json(Pelicula);
  });
  
// eliminar pelicula
  router.delete('/:idpelicula', async (req, res) => {
    console.log(`Request URL Param: ${req.params.idpelicula}`);
    console.log(`This is a delete operation`);
  
    const Pelicula = await peliculaService.deletePeliculaById(req.params.idpelicula);
  
    return res.status(200).json(Pelicula);
  });

  /* detalle pelicula y asocia con personaje de la misma
  router.get('', async (req, res) => {
    console.log(`Request URL Param: ${req.query.idPelicula}`);
    console.log("Entro al detalle")
    const Pelicula = await peliculaService.getDetallePelicula(req.query.idPelicula);

    return res.status(200).json(Pelicula);

  })*/
  

  export default router;