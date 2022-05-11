import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'
import e from 'express';

const PeliculaTabla = process.env.DB_TABLA_PELICULA;

export class PeliculaService {

    //obtiene/muestra todos los pelicula
    getPelicula = async (Nombre) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        let response;
    //obtiene por nombre
        if (Nombre){
            response = await pool.request()
            .input('Nombre',sql.NChar, Nombre)
            .query(`SELECT * from ${PeliculaTabla} where Nombre = @Nombre`);
        } else {
            response = await pool.request()
            .query(`SELECT * from ${PeliculaTabla}`)
        }

        console.log(response)

        return response.recordset;
    }

    //obtiene/muestra personaje
    getPeliculaById = async (Id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Id',sql.Int, Id)
            .query(`SELECT * from ${PeliculaTabla} where Id = @Id`);
        console.log(response)

        return response.recordset[0];
    }

    //crea Pelicula
    createPelicula = async (Pelicula) => {
        console.log('This is a function on the service');

        console.log(Pelicula);
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Titulo',sql.NChar, Pelicula?.Titulo ?? '')
            .query(`INSERT INTO ${PeliculaTabla} (Titulo) VALUES (@Titulo)`);
        console.log(response)

        return response.recordset;
    }

    //actualiza Pelicula
    updatePeliculaById = async (Id, Pelicula) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input ('Id', sql.Int, Id?? '')
            .input('Titulo',sql.NChar, Pelicula?.Titulo ?? '')
            .query(`UPDATE Pelicula SET Titulo = @Titulo WHERE Id = @Id`);
        console.log(response)

        return response.recordset;
    }

    //Elimino pelicula
    deletePeliculaById = async (Id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Id',sql.Int, Id)
            .query(`DELETE FROM ${PeliculaTabla} WHERE Id = @Id`);
        console.log(response)

        return response.recordset;
    }
}
