import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'
import e from 'express';

const PersonajeTabla = process.env.DB_TABLA_PERSONAJE;

export class PersonajeService {

    //obtiene/muestra todos los personajes
    getPersonaje = async (Nombre, Edad, IdPelicula) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        let response;
    //obtiene por nombre
        if (Edad && Nombre && IdPelicula){
            response = await pool.request()
            .input('Edad',sql.Int, Edad)
            .input('Nombre',sql.NChar, Nombre)
            .input('IdPelicula', sql.Int, IdPelicula)
            .query(`SELECT * from ${PersonajeTabla} where Nombre = @Nombre AND Edad = @Edad AND IdPelicula = @IdPelicula`);
        } else if (Nombre && !Edad) {
            response = await pool.request()
            .input('Nombre',sql.NChar, Nombre)
            .query(`SELECT * from ${PersonajeTabla} where Nombre = @Nombre`);
        } else if (Edad && !Nombre){
            //obtiene por edad
            response = await pool.request()
            .input('Edad',sql.Int, Edad)
            .query(`SELECT * from ${PersonajeTabla} where Edad = @Edad`);
        } else {
            response = await pool.request()
            .query(`SELECT * from ${PersonajeTabla}`)
        }

        console.log(response)

        return response.recordset;
    }

    //obtiene/muestra personaje
    getPersonajeById = async (Id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Id',sql.Int, Id)
            .query(`SELECT * from ${PersonajeTabla} where Id = @Id`);
        console.log(response)

        return response.recordset[0];
    }

    //crea personaje
    createPersonaje = async (Personaje) => {
        console.log('This is a function on the service');

        console.log(Personaje);
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Imagen',sql.NChar, Personaje?.Imagen ?? '')
            .input('Nombre',sql.NChar, Personaje?.Nombre ?? '')
            .input('Edad',sql.Int, Personaje?.Edad ?? 0)
            .input('Peso',sql.Int, Personaje?.Peso ?? 0)
            .input('Historia',sql.NChar, Personaje?.Historia ?? '')
            .query(`INSERT INTO ${PersonajeTabla} (Imagen, Nombre, Edad, Peso, Historia) VALUES (@Imagen, @Nombre, @Edad, @Peso, @Historia)`);
        console.log(response)

        return response.recordset;
    }

    //actualiza personaje
    updatePersonajeById = async (Id, Personaje) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input ('Id', sql.Int, Id?? '')
            .input('Imagen',sql.VarChar(50), Personaje?.Imagen ?? '')
            .input('Nombre',sql.NChar, Personaje?.Nombre ?? '')
            .input('Edad',sql.Int, Personaje?.Edad ?? false)
            .input('Peso',sql.Int, Personaje?.Peso ?? 0)
            .input('Historia',sql.NChar, Personaje?.Historia ?? '')
            .query(`UPDATE Personajes SET Imagen = @Imagen, Nombre = @Nombre, Edad = @Edad, Peso = @Peso, Historia = @Historia WHERE Id = @Id`);
        console.log(response)

        return response.recordset;
    }

    //Elimino personaje
    deletePersonajeById = async (Id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Id',sql.Int, Id)
            .query(`DELETE FROM ${PersonajeTabla} WHERE Id = @Id`);
        console.log(response)

        return response.recordset;
    }
}



