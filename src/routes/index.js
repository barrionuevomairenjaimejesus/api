const express = require('express')
const router = express.Router()

const Anos_perdidos = require ('../models/schema01')
const Muertes_prematuras = require ('../models/schema02')

/*=======================PÁGINA DE INICIO=======================*/
router.get('/', async (req, res) =>{
    const anos_perdidos = await Anos_perdidos.find()
    res.render('inicio');
});
/*=======================PÁGINA DE INICIO=======================*/

/*=======================TABLAS=======================*/
//Tabla de los años perdidos por contaminantes.
router.get('/tabla_anos', async (req, res) =>{
    const anos_perdidos = await Anos_perdidos.find()
    res.render('tabla_anos', {
        anos_perdidos
    });
});
//Tabla de las muertes prematuras.
router.get('/tabla_muertes', async (req, res) =>{
    const muertes_prematuras = await Muertes_prematuras.find()
    res.render('tabla_muertes', {
        muertes_prematuras
    });
});
/*=======================TABLAS=======================*/

/*=======================GRÁFICAS=======================*/
//Gráfico de años perdidos por contaminantes (3 líneas).
router.get('/grafica01_anos', async (req, res) => {
  const anos_perdidos = await Anos_perdidos.find()
  res.render('grafica01_anos', {
    anos_perdidos
  });
});
//Total de años perdidos.
router.get('/grafica02_anos', async (req, res) => {
  const anos_perdidos = await Anos_perdidos.find()
  const muertes_prematuras = await Muertes_prematuras.find()
  res.render('grafica02_anos', {
    anos_perdidos , muertes_prematuras
  });
});
//Gráfico por formulario con años perdidos.
router.get('/grafica03_anos', async (req, res) => {
  const anos_perdidos = await Anos_perdidos.find()
  res.render('grafica03_anos', {
    anos_perdidos
  });
});


//Gráfico de muertes prematuras por contaminantes (3 líneas).
router.get('/grafica01_muertes', async (req, res) => {
  const muertes_prematuras = await Muertes_prematuras.find()
  res.render('grafica01_muertes', {
    muertes_prematuras
  });
});
//Total de muertes prematuras.
router.get('/grafica02_muertes', async (req, res) => {
  const muertes_prematuras = await Muertes_prematuras.find()
  res.render('grafica02_muertes', {
    muertes_prematuras
  });
});
//Gráfico por formulario con muertes prematuras.
router.get('/grafica03_muertes', async (req, res) => {
  const muertes_prematuras = await Muertes_prematuras.find()
  res.render('grafica03_muertes', {
    muertes_prematuras
  });
});

/*=======================GRÁFICAS=======================*/

/*=======================MAPAS=======================*/
//Círculo por total de años perdidos por país.
router.get('/mapa_anos', async (req, res) =>{
    const anos_perdidos = await Anos_perdidos.find()
    res.render('mapa_anos', {
      anos_perdidos
    });
});
//Círculo por total de muertes prematuras por país.
router.get('/mapa_muertes', async (req, res) =>{
    const muertes_prematuras = await Muertes_prematuras.find()
    //console.log(anos_perdidos)
    res.render('mapa_muertes', {
      muertes_prematuras
    });
});

router.get('/prueba', async (req, res) =>{
    const anos_perdidos = await Anos_perdidos.find()
    res.render('prueba', {
        anos_perdidos
    });
});
/*=======================MAPAS=======================*/
module.exports= router
