export default function loadAssets() {

  //SONIDOS
  loadSound("puerta", "sounds/puerta.mp3");
  loadSound("recolectar", "sounds/recolectar.wav");
  loadSound("musicajuego", "sounds/musicajuego.mp3");
  loadSound("jump", "sounds/jump.wav");
  loadSound("step", "sounds/step.wav");
  loadSound("chest", "sounds/chest.wav");
  loadSound("death", "sounds/death.wav");
  


  //FONDOS
  loadSprite('bg', 'sprites/bg.png');//nivel 1
  loadSprite('bg2', 'sprites/bg2.png');//nivel 2
  loadSprite('bg3', 'sprites/bg3.png');// nivel 3
  loadSprite('fin', 'sprites/fin.png');//fondo de gameover
  loadSprite('inicio', 'sprites/inicio.png');//fondo de inicio
  loadSprite('ganaste', 'sprites/ganaste.png');//fondo de ganaste
  loadSprite('creditos', 'sprites/creditos.png');//fondo de creditos
  loadSprite('Controles', 'sprites/Controles.png');//fondo de controles

  loadSprite("tierra", "sprites/tierra.png");//plataforma de tierra con degradado
  loadSprite("tierra2", "sprites/tierra2.png");//tierra sin degradado
  loadSprite("finaltierra2", "sprites/finaltierra2.png");//esquina de la plataforma
  loadSprite('plat3', 'sprites/plat3.png');//plataforma de pasto
  loadSprite('plat3pequeña', 'sprites/plat3pequeña.png');//plataforma de pasto
  loadSprite('piedraplat', 'sprites/piedraplat.png');//plataforma pequeña de piedra
  loadSprite('picosVertical', 'sprites/picosVertical.png');//picos de caverna azules
  loadSprite('picosVerticalizq', 'sprites/picosVerticalizq.png');//picos de caverna azules
  loadSprite('plat4mina', 'sprites/plat4mina.png');//plataforma grande de piedra
  loadSprite('plat4bajo', 'sprites/plat4bajo.png');//plataforma grande de piedra
  loadSprite('arbustomina', 'sprites/arbustomina.png');//Cactus
  loadSprite('rocafondo', 'sprites/rocafondo.png');
  loadSprite('rocagrandefondo', 'sprites/rocagrandefondo.png');
  loadSprite('plantas', 'sprites/plantas.png');
  loadSprite('techomina', 'sprites/techomina.png');

  //Sprites Nivel 2 
  loadSprite('musgo1', 'sprites/musgo1.png');
  loadSprite('musgo2', 'sprites/musgo2.png');
  loadSprite('roca', 'sprites/roca.png');
  loadSprite('arbol2', 'sprites/arbol2.png');//Arbolrosado
  loadSprite('paredpiedra', 'sprites/paredpiedra.png');


  loadSprite('flotante', 'sprites/flotante.png');
  loadSprite('flotante2', 'sprites/flotante2.png');
  loadSprite('arbol', 'sprites/arbol.png');
  loadSprite('puerta', 'sprites/puerta.png');
  loadSprite('arbusto', 'sprites/arbusto.png');
  loadSprite('lampara', 'sprites/lampara.png');
  loadSprite('señal', 'sprites/señal.png');
  loadSprite('piedra2', 'sprites/piedra2.png');
  loadSprite('cerca', 'sprites/cerca.png');
  loadSprite('pozo', 'sprites/pozo.png');
  loadSprite('troncos', 'sprites/troncos.png');
  loadSprite('trigo', 'sprites/trigo.png');
  loadSprite('letrero', 'sprites/letrero.png');
  loadSprite('corazon', 'sprites/corazon.png');
  loadSprite('cofre', 'sprites/cofre.png');
  loadSprite('picos', 'sprites/picos.png');
  loadSprite('palo', 'sprites/palo.png');
  loadSprite('palocorto', 'sprites/palocorto.png');

  loadSprite('vasijas', 'sprites/vasijas.png');//Arbolrosado
  loadSprite('girasoles', 'sprites/girasoles.png');//Arbolrosado
  loadSprite('letrerovida', 'sprites/letrerovida.png');
  //loadSprite('yerba', 'sprites/yerba.png');

  //Sprites del jugador
  loadSprite('Atlas_jugador', 'sprites/Atlas_jugador.png', {
    sliceX: 12,//Número de imagenes en X
    sliceY: 6,//Número de imagenes en Y
    "x": 421,//Tamaño en X 
    "y": 205,//Tamaño en Y
    anims: { //Animaciones de cada acción 
      quieto: { from: 0, to: 13, loop: true, speed: 5 },
      correr: { from: 15, to: 22, loop: true, speed: 10 },
      salto: { from: 24, to: 36, loop: true, speed: 29 },
      ataque: { from: 37, to: 52, loop: false, speed: 40 },
      muerte: { from: 53, to: 64, loop: true, speed: 5 }
    },
  })
  loadSprite('gato', 'sprites/gato.png', {///Enemigo nivel 1
     sliceX: 4,
     anims: {
       moveG:{from: 0, to: 3, loop:true, speed: 8},
       muerte:{from: 0, to: 0, loop:true, speed: 1}
    }
  })
  
  loadSprite('cherry', 'sprites/cherry.png', {///Fruta para recolectar 
     sliceX: 5,
     anims: {
       mover:{from: 0, to: 4, loop:true, speed: 8}
    }
  })

  loadSprite('esqueleto', 'sprites/esqueleto.png', {//Enemigo nivel 2
    sliceX: 9,// númerp de columnas
    sliceY: 3,//número de filas
    anims: {
      caminar: { from: 0, to: 3, speed: 10, loop: true },
      ataque: { from: 4, to: 9, speed: 10, loop: true },
      daño: { from: 10, to: 13, speed: 10, loop: false },//Animación de recibir daño
      muerte: { from: 14, to: 17, speed: 10, loop: false },
      quieto: { from: 18, to: 21, speed: 10, loop: true },
    }
  })
  loadSprite('gusano', 'sprites/gusano.png', {//Enemigo nivel 4
    sliceX: 6,// númerp de columnas
    sliceY: 8,//número de filas
    anims: {
      idle: { from: 0, to: 8, speed: 10, loop: true },
      walk: { from: 9, to: 17, speed: 10, loop: true },
      attack: { from: 18, to: 33, speed: 10, loop: true },
      gethit: { from: 34, to: 36, speed: 10, loop: false },
      death: { from: 37, to: 44, speed: 10, loop: false },
    }
  })
  loadSprite('bolafuego', 'sprites/bolafuego.png', {///Enemigo nivel 1
     sliceX: 6,
     sliceY:3,
     anims: {
       bola:{from: 0, to: 5, loop:false, speed: 15},
       explosion:{from: 6, to: 12, loop:false, speed: 10}
    }
  })
  loadSprite('cofreabierto', 'sprites/cofreabierto.png',
    {
      sliceX: 7,
      // sliceY:
      x: 31, y: 9,
      anims: {
        abierto: { from: 0, to: 6, speed: 20, "loop": false },
        cerrado: { from: 6, to: 0, speed: 20, "loop": false }
      }
    })
  loadSprite('diamante', 'sprites/diamante.png', {
    sliceX: 5,//7
    anims: {
      brillo: { from: 0, to: 4, speed: 9, loop: true },
    }
  })
  loadSprite('espada', 'sprites/espada.png', {
    sliceX: 6,
    sliceY: 2,
    anims: {
      espadaG: { from: 0, to: 7, speed: 9, loop: true },
    }
  })
}