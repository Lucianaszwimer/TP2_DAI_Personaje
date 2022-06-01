import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'
import e from 'express';

const PersonajeTabla = process.env.DB_TABLA_PERSONAJE;
const PeliculaTabla = process.env.DB_TABLA_PELICULA;
const PersonajexPeliculaTabla = process.env.DB_TABLA_PERSONAJEXPELICULA;

export class PersonajeService {

    //obtiene/muestra todos los personajes
    getPersonaje = async (Nombre, Edad, Id) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        let response;
        if (Edad && Nombre && Id){
            //obtiene por edad, nombre y id
            response = await pool.request()
            .input('Edad',sql.Int, Edad)
            .input('Nombre',sql.NChar, Nombre)
            .input('Id', sql.Int, Id)
            .query(`SELECT * from ${PersonajeTabla} where Nombre = @Nombre AND Edad = @Edad AND Id = @Id`);
        } else if (Nombre && Id && !Edad) {
            //obtiene por nombre y id
            response = await pool.request()
            .input('Nombre',sql.NChar, Nombre)
            .input('Id', sql.Int, Id)
            .query(`SELECT * from ${PersonajeTabla} where Nombre = @Nombre AND Id = @Id`);
        } else if (Id && Edad && !Nombre){
            //obtiene por edad y por id
            response = await pool.request()
            .input('Edad',sql.Int, Edad)
            .input('Id', sql.Int, Id)
            .query(`SELECT * from ${PersonajeTabla} where Edad = @Edad AND Id = @Id`);
        } else if (Edad && Nombre && !Id){
            //obtiene por edad y por nombre
            response = await pool.request()
            .input('Edad',sql.Int, Edad)
            .input('Nombre',sql.NChar, Nombre)
            .query(`SELECT * from ${PersonajeTabla} where Edad = @Edad AND Nombre = @Nombre`);
        }else if (Edad && !Nombre && !Id){
             //obtiene por edad
            response = await pool.request()
            .input('Edad',sql.Int, Edad)
            .query(`SELECT * from ${PersonajeTabla} where Edad = @Edad`);
        }else if (!Edad && Nombre && !Id){
            //obtiene por nombre
            response = await pool.request()
            .input('Nombre',sql.NChar, Nombre)
            .query(`SELECT * from ${PersonajeTabla} where Nombre = @Nombre`);
         }else if (!Edad && !Nombre && Id){
            //obtiene por id
            response = await pool.request()
            .input('Id', sql.Int, Id)
            .query(`SELECT * from ${PersonajeTabla} where Id = @Id`);
        }else {
            //obtiene todo
            response = await pool.request()
            .query(`SELECT Id, Nombre, Imagen from ${PersonajeTabla}`)
        }

        console.log(response)

        return response.recordset;
    }

    //obtiene/muestra personaje por id
  /*  getPersonajeById = async (Id, Nombre) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Id',sql.Int, Id)
            .input('Nombre',sql.NChar, Nombre)
            .query(`SELECT Id, Nombre from ${PersonajeTabla} where Id = @Id `);

        console.log(response)
        
        return response.recordset[0];
    }*/

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

    // detalle de personaje 
    getDetallePersonaje = async (Id) => {
        let Pelicula;
        let Personaje;
        const pool = await sql.connect(config);
        Personaje = await pool.request()
            .input('Id', sql.Int, Id)
            .query(`SELECT * FROM ${PersonajeTabla} where Id = @Id`);

        Pelicula = await pool.request()
            .input('Id', sql.Int, Id)
            .query(`SELECT Pelicula.IdPelicula, Pelicula.Titulo from ${PeliculaTabla} 
            INNER JOIN PersonajexPelicula on Pelicula.IdPelicula = PersonajexPelicula.IdPelicula 
            INNER JOIN Personajes on Personajes.Id = PersonajexPelicula.IdPersonaje and
            Personajes.Id = @Id`);
        let ambas;
        ambas = [Pelicula.recordset, Personaje.recordset];

        return ambas;
        
    }
}



