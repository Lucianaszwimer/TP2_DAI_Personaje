import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'
import e from 'express';

const PeliculaTabla = process.env.DB_TABLA_PELICULA;

export class PeliculaService {

    getPelicula = async (IdPelicula, Imagen, Titulo, FechaDeCreacion) => {
        //Obtiene todas las Peliculas
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        let response;

        if(Titulo){
            //obtiene por titulo
            response = await pool.request()
            .input('IdPelicula',sql.Int, IdPelicula)
            .input('Imagen',sql.VarChar(200), Imagen)
            .input('Titulo',sql.VarChar(200), Titulo)
            .input('FechaDeCreacion',sql.Date, FechaDeCreacion)
            .query(`SELECT IdPelicula, Imagen, Titulo, FechaDeCreacion from ${PeliculaTabla} where Titulo = @Titulo`);
        } else{
            // obtiene todo
            response = await pool.request()
            .input('IdPelicula',sql.Int, IdPelicula)
            .input('Imagen',sql.VarChar(200), Imagen)
            .input('Titulo',sql.VarChar(200), Titulo)
            .input('FechaDeCreacion',sql.Date, FechaDeCreacion)
            .query(`SELECT IdPelicula, Imagen, Titulo, FechaDeCreacion from ${PeliculaTabla}`);
        }
               
        console.log(response)

        return response.recordset;
    }

    //obtiene/muestra pelicula por id
    getPeliculaById = async (IdPelicula) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('IdPelicula',sql.Int, IdPelicula)
            .query(`SELECT * from ${PeliculaTabla} where IdPelicula = @IdPelicula`);
        console.log(response)

        return response.recordset[0];
    }

    //crea Pelicula
    createPelicula = async (Pelicula) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Imagen',sql.NChar, Pelicula?.Imagen ?? '')
            .input('Titulo',sql.NChar, Pelicula?.Titulo ?? '')
            .input('FechaDeCreacion',sql.Date, Pelicula?.FechaDeCreacion ?? '')
            .input('Calificacion',sql.NChar, Pelicula?.Calificacion ?? '')
            .query(`INSERT INTO ${PeliculaTabla} (Imagen, Titulo, FechaDeCreacion, Calificacion) VALUES (@Imagen, @Titulo, @FechaDeCreacion, @Calificacion)`);
        console.log(response)

        return response.recordset;
    }

    //actualiza Pelicula
    updatePeliculaById = async (IdPelicula, Pelicula) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input ('IdPelicula', sql.Int, IdPelicula?? '')
            .input('Titulo',sql.NChar, Pelicula?.Titulo ?? '')
            .query(`UPDATE Pelicula SET Titulo = @Titulo WHERE IdPelicula = @IdPelicula`);
        console.log(response)

        return response.recordset;
    }

    //Elimino pelicula
    deletePeliculaById = async (IdPelicula) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('IdPelicula',sql.Int, IdPelicula)
            .query(`DELETE FROM ${PeliculaTabla} WHERE IdPelicula = @IdPelicula`);
        console.log(response)

        return response.recordset;
    }

    
}
