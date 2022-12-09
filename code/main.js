//Autora : Evelyn Tabares Valencia
//2022/12/05
import kaboom from "kaboom"
import loadAssets from "./assets"

kaboom({//Inicializar pantalla de juego
  global: true,
  debug: true,
  scale: 1.335,
  fullscreen: true,
})
loadAssets()//Importar Sprites

// define Algunas constantes
const FLOTANTE_SPEED = 80
const FALL_DEATH = 2400

//Mapas de nivel
const LEVELS = [
  
  //Nivel 1
  [
    "             5 5                        ",
    "             2 2 5         5  5 5 4 5   ",
    " c 4. 5 5        2         2 2 2 2  2   ",
    " 2 2 2 2 2                        <     ",
    "                       5                ",
    "   +   4    r                  $   %    ",
    "  5 5   >>>5>5>        5    h  5 5 >    ",
    "  !    !  ! !         -    !  ! !       ",
    "                       5                ",
    "                                        ",
    "  5                    5     5 4 5 5    ",
    "  c   5                    5 2 2 2 2    ",
    "  2   2   5     <      |   2            ",
    "          2                    n        ",
    "     l                5  5  4  > 5  *5  ",
    "* 5  4 5 >&>    5      !      !     !   ",
    "!    !     !     !     #      #     #   ",
    "#    #     #     #     #      #     #   ",
    "e    e     e     e     e      e     e   ",
  ],
  //Nivel 2
  ["              5       5       5         ",
    "         5     2      2   2   2    2  c ",
    "      5   2                           2 ",
    "   a5 2  s  2                %   $      ",
    "   2                      ? s  h   s    ",
    "                  -    u g   !        5 ",
    "     u¿u &u            !   ! !        5 ",
    "   !     !             #  #  #        5 ",
    "   #     #         5                 s5 ",
    "   e     e                          5  2",
    "                   5               5 2a ",
    "         s                    a    2    ",
    "                   5              %     ",
    "    3                 2      5 5  uu  5 ",
    "  3    3   3       5     5u&u   !     ! ",
    "  3    3  53           5  !      #    # ",
    "   35 3 5 223  5  5 g  ¿ !     #      # ",
    "3c 5  2    3   2   !      #      #    # ",
    " 222               #      e      e    e ",
  ],

  
  //Nivel 3
  [
    "                                       v",
    "                ?                       ",
    "                 5 jsk5 5 s   o         ",
    "5ñ  5f4    5   m m  m   m         5     ",
    "m m  m      pp b    b   b     i         ",
    "b    b  b  b   b    b   b               ",
    "t  t     t     t    t   t               v",
    "q                                       ",
    "                              5         ",
    "45j5k 5  5   5    f       5    ,        ",
    " m m              m       ^             ",
    " b b         ,    b                     ",
    "                  t      p p p p p pp   ",
    "                         m m   mm       ",
    "                                        ",
    "   5    5       5   5    ?     $        ",
    "  j ñ   f    jñ      ñ          4  5 c  ",
    "m   m    m   m  m    m  m  m  m  m  m m ",
    "b   b    b   b  b    b  b  b  b  b  b b ",
  ],

]


//Define lo que significa cada símbolo en el gráfico de nivel
const levelConf = {
  // Separación entre Sprites
  width: 25,
  height: 26,

  // define cada objeto y su lista de componentes
  '|': () => [sprite('pozo'), scale(1)],
  '+': () => [sprite('troncos'), scale(1.3), layer('obj')],
  'r': () => [sprite('trigo'), layer('obj')],
  'l': () => [sprite('letrero')],
  '>': () => [sprite('arbusto'), layer('obj')],
  '<': () => [sprite('arbol')],
  'n': () => [sprite('girasoles')],
  '*': () => [sprite('piedra2'), scale(1.8)],

  //Sprites nivel 2
  'a': () => [sprite('arbol2'), scale(1.7)],
  'u': () => [sprite('musgo1'), scale(1.8)],
  'g': () => [sprite('musgo2'), scale(1.8)],
  '¿': () => [sprite('roca'), scale(1.8)],
  '2': () => [sprite('plat3pequeña'), solid(), area(), 'wall'],
  '3': () => [sprite('paredpiedra')],
  'h': () => [sprite('vasijas'), scale(1.2)],
  //Sprites nivel 3
  'o': () => [sprite('palocorto'), scale(1.3), pos(8.5, 25), solid(), area()],
  'i': () => [sprite('palo'), scale(1.3), pos(8.5, 30), solid(), area()],
  'm': () => [sprite('plat4mina'), solid(), area(), 'wall'],
  'b': () => [sprite('plat4bajo'), solid(), area()],
  't': () => [sprite('techomina')],
  'v': () => [sprite('picosVertical'), solid(), area(), pos(9, 0), "danger"],
  'q': () => [sprite('picosVerticalizq'), solid(), area(), pos(-35, 15), "danger"],
  '^': () => [sprite('flotante2'), solid(), area(), 'flotante2', { dir: -1, timer: 0 }],
  '!': () => [sprite('plat3'), solid(), area(), 'wall'],
  'ñ': () => [sprite('arbustomina'), pos(0, -28)],
  'f': () => [sprite('rocafondo'), scale(0.5), pos(0, -48)],
  'j': () => [sprite('rocagrandefondo'), scale(0.2), pos(0, -28)],
  'k': () => [sprite('plantas'), pos(0, 10)],
  ',': () => [sprite('piedraplat'), solid(), area(), pos(0, -15)],//plat3pequeña
  'p': () => [sprite('picos'), solid(), area(), 'wall', scale(1), pos(8.5, 10), "danger",],

  //Sprites compartidos Nivel 1 y 2
  '#': () => [sprite("tierra"), solid(), area()],
  'x': () => [sprite("tierra2"), solid(), area()],
  'e': () => [sprite("finaltierra2"), solid(), area()],
  '$': () => [sprite('puerta'), area(), scale(1), 'puerta', pos(0, -20)],
  '?': () => [sprite('señal'), scale(1.8)],
  '%': () => [sprite('lampara'), scale(1)],
  '&': () => [sprite('cerca'), scale(1.5)],
  '-': () => [sprite('flotante'), solid(), area(), scale(0.6), 'flotante', { dir: -1, timer: 0 }, layer('ui')],
  'c': () => [sprite("cofreabierto", { from: 0, to: 0 }), solid(), area(), scale(0.8), { opened: false }, "cofreabierto", pos(0, -4), layer('u0')],
  "D": () => [sprite("diamante", { anim: 'brillo' }), area(), "diamante", layer('ui'), solid()],
  "5": () => [sprite("cherry", { anim: 'mover' }), area(), "cherry", layer('ui')],//solid(), area(),
  's': () => [sprite("esqueleto", { anim: 'caminar' }),
  scale(1.1),
    'esqueleto',
  layer('obj1'),
  area(),
  solid(),
  body(),
  patrol(40),
  enemy(),],

  '4': () => [sprite("gato", { anim: 'moveG' }),//Enemigo nivel 1
    // scale(1.1),
    'gato',
  layer('obj1'),
  area(),
  solid(),
  body(),
  patrol(45),
  enemy(),
  ],
}

//------------------------ESCENA GAME ------------------------------------
scene("game", ({ levelId, score, lives, cereza, objetivo } = { levelId: 0, score: 0, lives: 4500, cereza: 0, objetivo: 0 }) => {
  var golpes = 0// Cantidad de golpes recibidos por el enemigo
  layers(["bg", "obj", "obj1", "u0", "ui",], "obj")//Capas de la interfaz

  const level = addLevel(LEVELS[levelId ?? 0], levelConf)// Añade un nivel a la escena

  //Cambio de Fondo Según el Nivel  
  if (levelId == 0) {
    add([sprite('bg'), layer('bg'), area(), { width: width(), height: height() }])//Fondo nivel1
    objetivo = 30 //Puntaje objetivo nivel 1
  }
  else if (levelId == 1) {
    add([sprite('bg2'), layer('bg'), area(), { width: width(), height: height() }])//Fondo nivel2
    objetivo = 65 //Puntaje objetivo nivel 2
  }
  else if (levelId == 2) {
    add([sprite('bg3'), layer('bg'), area(), { width: width(), height: height() }])//Fondo nivel3
    objetivo = 110 //Puntaje objetivo nivel 3
  }

  u0 = add([layer("u0")]) //Agregar capa para el letrero de vidas

  u0.on("draw", () => {//Dibujar sobre la capa
    drawSprite({ sprite: 'letrerovida', pos: vec2(5, 5), scale: 0.5 })//Agrega letrero de madera
    drawSprite({ sprite: 'letrerovida', pos: vec2(925, 460), scale: 0.3 })//Agrega letrero de madera
  })

  ui = add([layer("ui")])//Agrega capa para escribir sobre el letrero

  //Función para dibujar las vidas

  //Agrega a la capa 'ui' texto con puntaje y vidas del personaje
  ui.on("draw", () => {
    drawText({ text: "Score:" + score + " / " + objetivo, size: 10, font: "sink", color: WHITE, pos: vec2(17, 27) })
    drawText({ text: "Lives:", size: 10, font: "sink", color: WHITE, pos: vec2(17, 12) })

    for (let x = 75; x < 75 + (20 * lives / 1500); x += 20) { //Según la cantidad de vidas se agregan corazones
      // Corazón en pantalla 
      drawSprite({ sprite: "corazon", pos: vec2(x, 19), origin: "center", scale: 1 })//18
      //Cereza y su cantidad recolectada
      drawSprite({ sprite: "cherry", anim: 'mover', pos: vec2(948, 473), origin: "center", scale: 1 })
      drawText({ text: 'X ' + cereza, size: 12, font: "sink", color: WHITE, pos: vec2(960, 468) })
    }
    //death(lives)

  })

  //--------Declaracion de personajes/objetos/acciones------------
  gravity(2400);//Gravedad de los objetos

  //Define al objeto 'jugador'
  const player = add([
    sprite('Atlas_jugador'),//'Atlas_jugador'
    pos(240, 40),//95 20
    scale(1.3),
    area(),
    body(),
  ])
  player.play("quieto")//Animación de respiración del personaje
  //Define al enemigo 'esqueleto'

  player.onCollide("cherry", (c) => {//Recolección de cerezas 
    destroy(c)//Al tocar una cereza, se destruye
    play("recolectar")//Sonido de recolección
    cereza += 1//Se suma 1 cereza al usuario
    if (cereza == 20) {//Al recolectar 20 cerezas obtiene una vida
      lives += 1500//Equivale a 1 vida
      cereza = 0//se reinicializa 
    }

  })

  //action() // se corre en cada frame
  player.onUpdate(() => {
    // Verificar si el jugador se ha caido 
    if (player.pos.y >= FALL_DEATH) {//Caida del jugador o pierde todas las vidas
      music.pause()//pausa musica para no reproducirla dos veces
      go("lose") // Retorna la escena de GAME OVER 
    }
    else if (lives <= 0) {
      player.play('muerte')
      lifespan(2, { fade: 1 })
      music.pause()//pausa musica para no reproducirla dos veces
      go("lose")
    }
    player.onCollide("danger", () => {//Picos de la caverna matan al jugador
      go("lose")
      music.pause()//pausa musica para no reproducirla dos veces
    })
  })


  //Define la acción de la plataforma flotante del nivel 1 y 2
  action('flotante', (s) => {
    s.move(0, s.dir * FLOTANTE_SPEED)
    s.timer -= dt()
    if (s.timer <= 0) {
      s.dir = -s.dir
      s.timer = 4.5//Tiempo de espera/velocidad
    }
  })

  //Cambio de dirección de la plataforma al chocar contra 'plat1' o el piso
  onCollide('flotante', 'plat3', (s) => {
    s.dir = -s.dir
  })

  //Define la acción de la plataforma flotante del nivel 3
  action('flotante2', (s) => {
    s.move(s.dir * 70, 0)
    s.timer -= dt()
    if (s.timer <= 0) {
      s.dir = -s.dir
      s.timer = 4
    }
  })
  //Cambio de dirección plataforma al chocar contra un objeto de etiqueta 'wall'
  onCollide('flotante2', 'plat3', (s) => {
    s.dir = -s.dir
  })

  //Define el cambio de nivel al abrir la 'puerta'
  player.onCollide("puerta", () => {
    if (levelId == 0 && score >= 30 || levelId == 1 && score >= 65 || levelId == 2 && score >= 110) {

      play("puerta") // Sonido de la puerta abriendose 
      if (levelId + 1 < LEVELS.length) {
        go("game", { //Llamado al escenario para cambiar de nivel 
          levelId: levelId + 1,//La variable LevelId aumenta en 1 
          score: 0, // Se inicializa en 0 para cada nievl
          lives: lives,
          cereza: cereza,
          objetivo: objetivo
        })
        music.pause()//pausa musica para no reproducirla dos veces
      }
      else {
        music.pause()//pausa musica para no reproducirla dos veces
        go("win")//Retorna interfaz de fin del juego
      }
    }

  })

  let hasDiamante = false//Define si el jugador a tomado el diamante
  const objs = [5, 10, 15, 25]//Posibles puntos del diamante
  let num = 0 //Númerp de puntos ganados con el diamante

  //Define la interacción del jugador con el cofre 
  onKeyPress("z", () => {// Al pulsar 'z' en el teclado se abre el cofre/ recolecta el diamante
    every("cofreabierto", (c) => {
      if (player.isTouching(c)) { //Si el jugador toca el cofre 
        if (c.opened == false) {//Si el cofre está cerrado
          play('chest')//sonido cofre abierto
          c.play("abierto")//Animación cofre abierto 
          if (!hasDiamante) {//Si es la primera vez que entra al condicional 
            //Crear diamante
            const diamante1 = level.spawn("D", c.gridPos.sub(-0.5, -0.5))/// aparece en la misma posicion que el cofre
            hasDiamante = true//el diamante existe
            wait(0.5, () => { destroy(c) })//Esperar 0.5 segundos para destruir el cofre
          }
        }
      }
    })
    if (hasDiamante) {//Si ya está creado el diamante----Recolección de diamante
      every("diamante", (d) => {
        if (player.isTouching(d)) {//si el jugador toca el diamante y oprime 'z'
          play('recolectar')//Sonido de recolectar
          wait(0.3, () => {//Espera 0.5 segundos 
            destroy(d) //destruye el diamante
          })
          hasDiamante = false//Se inicializa en true para los siguientes cofres
          //la función 'Choose' escoge uno de los puntajes de forma aleatoria
          const num = choose([5, 10, 15, 25])//Posibles diamantes
          score += num// Se suma dicho puntaje al score general
        }
      })
    }
  })//Fin ONKeyPress Z 


  // El jugador reproduce la animacion 'quieto' cuando no realiza otra acción
  player.onGround(() => {
    if (!isKeyDown("left") && !isKeyDown("right")) {
      player.play("quieto")
    }
    else {
      player.play('correr')
      play('step')//sonido de caminata
    }
  })
  //Salto del personaje
  onKeyPress("space", () => {
    if (player.isGrounded()) {// Si el personaje está sobre un objeto
      player.play('salto')//Animación de salto
      play('jump')//Sonido de salto
      player.jump(600)
    }
  })
  let right = false
  //Movimiento a la izquierda 
  onKeyDown("left", () => {
    player.move(-145, 0)
    right = false
    player.flipX(true)//Voltear imagen en X al cambiar de dirección
    //La animación 'correr' se ejecuta siempre que el jugador esté sobre un objeto, y su animación actual no sea 'correr'
    if (player.isGrounded() && player.curAnim() !== "correr") {
      player.play("correr")
      play('step')//sonido de caminata
    }
  })

  //Movimiento a la derecha 
  onKeyDown("right", () => {
    player.move(145, 0)
    player.flipX(false)
    right = true
    //La animación 'correr' se ejecuta siempre que el jugador esté sobre un objeto, y su animación actual no sea 'correr'
    if (player.isGrounded() && player.curAnim() !== "correr") {
      play('step', { volume: 0.8 })//sonido caminata
      player.play("correr")
    }
  })

  //Animación 'quieto' se ejecuta si el jugador no tiene pulsado 'right' o 'left'
  onKeyRelease(["left", "right"], () => {
    if (player.isGrounded() && !isKeyDown("left") && !isKeyDown("right")) {
      player.play("quieto")
    }
  })
  //-------------------------ENEMIGOS------------------------------
  const SPEED = 320
  const ENEMY_SPEED = 160
  const BULLET_SPEED = 700
  let vivo = true// gusano está vivo
  if (levelId == 2) {//Enemigo final solo se ejecuta en dicho nivel
    const enemyfin = add([
      sprite("gusano"),//{ anim: 'idle' }
      pos(400, 400),
      origin("center"),
      body(),
      solid(),
      scale(1.5),
      area(),
      "gusano",
      // This enemy cycle between 3 states, and start from "idle" state
      state("walk", ["idle", "attack", "walk", "gethit", "death"]),
    ])
    enemyfin.onStateEnter("death", async () => {
      await wait(0.5)
      wait(1, () => {
        enemyfin.play("death") //Animación muerte
        destroy(enemyfin)//Se destruye al gusano
      })
      vivo = false//Se define como falso, el gusano ha muerto
      play('death')//Sonido muerte
      destroy(bullet)//Se destruye la bala 
      enemyfin.use(lifespan(2, { fade: 1 }));//se desvanece durante 1 segundo

    })
    enemyfin.onStateEnter("gethit", async () => {
      enemyfin.play("gethit") //Animación recibir daño
      await wait(0.5)
      enemyfin.enterState("idle")//Estado de respiración
    })
    enemyfin.onStateEnter("idle", async () => {
      enemyfin.play("idle") //Animación  respiración
      await wait(0.3)
      enemyfin.enterState("attack")
    })

    enemyfin.onStateEnter("attack", async () => {//Estado de ataque 
      // Don't do anything if player doesn't exist anymore
      if (player.exists() && vivo == true) {//Si el jugador existe y el gusano está vivo 
        enemyfin.play("attack") //Animación  ataque
        const dir = player.pos.sub(enemyfin.pos).unit()// Toma el valor de la dirección del gusano
        add([ //Se agrega una bola de fuego 
          pos(enemyfin.pos),//La posición de la bola de fuego es la misma del gusano 
          move(dir, BULLET_SPEED),//Su dirección es la del jugador 
          sprite('bolafuego', { anim: 'bola' }),//Sprite de la bola de fuego
          area(),
          cleanup(),
          origin("bot"),
          "bullet",
        ])
      }
      await wait(0.7)//espera antes de ejecutar la siguiente acción 
      enemyfin.enterState("walk")//Entra al estado caminata
    })

    enemyfin.onStateEnter("walk", async () => {
      enemyfin.play("walk")//Animación caminata
      await wait(2)
      enemyfin.enterState("idle")

    })

    // Like .onUpdate() which runs every frame, but only runs when the current state is "move"
    // Here we move towards the player every frame if the current state is "move"
    enemyfin.onStateUpdate("walk", () => {
      enemyfin.play("walk")//Animación caminata
      if (!player.exists()) return
      const dir = player.pos.sub(enemyfin.pos).unit()
      if (player.FlipX == true) {
        enemyfin.flipX(false)
      }
      else {
        enemyfin.flipX(true)
      }

      enemyfin.move(dir.scale(ENEMY_SPEED))
    })


    // Have to manually call enterState() to trigger the onStateEnter("move") event we defined above.
    enemyfin.enterState("walk")
    // Taking a bullet makes us disappear
    if (vivo == true) {//si el gusano está vivo
      player.onCollide("bullet", (bullet) => {//Si el fuego le pega a el jugador
        destroy(bullet)
        lives -= 750//Cada bala resta la mitad de 1 vida 
        add([pos(bullet.pos), sprite('bolafuego', { anim: 'explosion' })])//Añade explosión al chocar contra el jugador

      })
    }
    player.onCollide("gusano", (u) => {
      if (player.isTouching(u) && !(isKeyDown("x"))) {
        lives -= 50//0.1
      }
    })

    collides('espada', 'gusano', (k, u) => {//Si el enemigo es golpeado por la espada
      shake(2)//movimiento de la camara
      wait(1, () => {
        destroy(k)// destruye el efecto de golpe de la espada
      })
      golpes += 1//Aumenta la cantidad de golpes en cada toque

      enemyfin.enterState("gethit")//Cambio de estado del gusano/pasa a recibir daño
      if (golpes == 6) {//Al llegar a propiciarle 6 golpes
        enemyfin.enterState("death")// Cambio de estado a 'muerte'
        score += 50//aumenta el puntaje en 50 por cada gusano
      }

    })
  }//Fin if

  //////.-------Enemigos nivel 1 y 2-----------
  player.onUpdate(() => {
    action('esqueleto', (a) => {//Acción del jugador y  el esqueleto
      if (a.muerto == false) {//Si el enemigo está vivo
        //Si el jugador no está ejecutando la animación de 
        if (a.curAnim() !== "caminar" && a.curAnim() !== "daño" && a.curAnim() !== "ataque") {
          a.play("caminar")
        }
        //Condiciones para disminuir vida del jugador
        if (player.isTouching(a) && !(isKeyDown("x"))) {//Si el jugador y el esqueleto se tocan y jugador no ataca
          a.play('ataque')//Animación del esqueleto atacando al jugador
          lives -= 0.5//puntos de vida descontados en cada toque al jugador
          wait(0.9, () => {//Esperar 0.9 segundos para
            a.play('caminar')//reproducir animación caminar del esqueleto 
          })
        }
      }
    })
    action('gato', (g) => {//Acción del judador al tocar el gato
      if (g.muerto == false) {//Si el gato está vivo
        //Si el jugador toca el gato sin estar pulsando X (ataque)
        if (player.isTouching(g) && !(isKeyDown("x"))) {
          lives -= 2//Puntos de vida descontados por cada toque al jugador 
        }
      }
    })
  })

  function spawnKaboom(p) {//Aparece un efecto de golpe de espada en la posición 'p'
    const obj = add([sprite("espada", { anim: 'espadaG' }), area(), pos(p), 'espada',
    rotate(player.angle),
    origin("center")])
    wait(1, () => {//Espera 1 segundo
      destroy(obj)// Destruye el efecto
    })
  }

  onKeyDown("x", () => {// Acción de ataque
    if (player.curAnim() !== "ataque") { //Si la animación actual no es 'ataque'
      player.play("ataque")
      if (right == false) {//El jugador está volteado a la izquierda
        spawnKaboom(player.pos.sub(5, -17))//la posición del golpe de espada cambia
      }//cuando el jugador está volteado a la derecha
      else { spawnKaboom(player.pos.sub(-55, -17)) }
    }

  })
  collides('espada', 'esqueleto', (k, s) => {//Si el enemigo es golpeado por la espada
    if (s.muerto == true) return;//Si está muerto no debe ejecutar ninguna acción y retornar
    shake(2)//movimiento de la camara
    wait(1, () => {//Esperar 1 segundo para
      destroy(k)// destruye el efecto de golpe de la espada
    })
    golpes += 1//contador de veces que el jugador toca al esqueleto
    s.dañoE()//animación daño al esqueleto

    if (golpes == 6) {//Se necesitan 6 golpes al esqueleto para matarlo
      s.squash(); //muerte del esqueleto
      score += 25//aumenta el puntaje en 25 por cada esqueleto
      golpes = 0//se inicializa en 0 para el siguiente enemigo
    }
  })
  collides('espada', 'gato', (k, g) => {//Si el enemigo es golpeado por la espada
    if (g.muerto == true) return;
    shake(2)//movimiento de la camara
    wait(1, () => {
      destroy(k)// destruye el efecto de golpe de la espada
    })
    g.squash(); //muerte del gato
    score += 10//aumenta el puntaje en 10 por cada gato
  })

  //----------------Teclas de control-----------------------------------
  //Pantalla completa al oprimir  la tecla 'f'
  onKeyPress("f", () => {
    fullscreen(!fullscreen())
  })

  onKeyPress("p", () => {//Pausar musica al oprimir 'p'

    music.pause() // Pausar cancion 
  })

  onKeyPress("m", () => {//Reproducir musica al oprimir 'm'
    music.play() // Reproducir cancion 

  })
  const music = play("musicajuego", { volume: 0.2, loop: true })//Musica de fondo

})

//-----------------------------------Escena de GAME OVER -----------------
scene("lose", () => {
  add([sprite('fin'), layer('bg'), area(), { width: width(), height: height() }])
  onKeyPress(() => go("game"))//Al presionar cualquier tecla se reinicia el juego
})

//Escena de GANADOR --------------------------------
scene("win", () => {
  add([sprite('ganaste'), layer('bg'), area(), { width: width(), height: height() }])
  onKeyPress(() => go("creditos"))//Al presionar cualquier tecla se dirige a la interfaz de creditos
})

//Interfaz de creditos-----------------------------
scene("creditos", () => {
  add([sprite('creditos'), layer('bg'), { width: width(), height: height() }])//Fondo 

  keyDown("enter", () => { //Reiniciar el juego
    go("Inicio")
  })
})
//Interfaz de inicio------------------------
scene("Inicio", () => {
  add([sprite('inicio'), layer('bg'), { width: width(), height: height() }])//Fondo 
  keyDown("enter", () => {
    go("Controles")
  })
})
//Interfaz de Controles------------------------
scene("Controles", () => {
  add([sprite('Controles'), layer('bg'), { width: width(), height: height() }])//Fondo 
  onKeyPress(() => go("game"))
})

//-Función de definición de enemigos / contiene acción de muerte y daño al enemigo
function enemy() {
  return {
    id: "enemy",
    require: ["pos", "area", "sprite", "patrol"],
    muerto: false,
    update() { },
    squash() {
      console.log('squashing');
      this.muerto = true;//Se indica que el enemigo está muerto
      this.unuse("patrol");//Se deja de usar la función 'Patrol'-> Caminata
      this.stop();
      wait(0.6, () => {//Esperar 0.6 segundos para reproducir 
        this.play("muerte")//Animación de muerte del enemigo
      })
      play('death')//Sonido muerte
      this.use(lifespan(2, { fade: 1 }));//Tiempo de muerte del enemigo 2sec y se desvanece durante 1 sec 

      // destroy(this)
    },
    dañoE() { //daño al esqueleto
      this.stop()  //Se detiene la caminata 
      if (this.curAnim() !== 'daño') { //se cambia la animación actual por 'daño'
        this.play('daño');//Animación del enemigo recibiendo daño
      }
    }
  }
}
//_______________________Función de caminata del enemigo
function patrol(speed, dir = 1, timer = 0) {
  return {
    id: "patrol",
    require: ["pos", "area"],
    update() {

      if (dir > 0) {
        this.flipX(false)//No se voltea la imagen si va hacia la derecha
      }
      this.move(dir * speed, 0)//indica cuanto se mueve en X
      timer -= dt()//Disminuye el timer en cada movimiento

      if (timer <= 0) {//Al terminarse el timer, cambia de dirección
        dir = -dir//Cambio de dirección 
        timer = 4 //Re inicializa el timer 
        this.flipX(true)//Voltear la imagen al ir hacia la izquierda
      }
      this.on("collide", (obj, side) => {//Al colisionar con un objeto 
        if (side === "left" || side === "right") {//Segun el lado con el que colisione
          dir = -dir;//cambio de dirección 
        }
      })
    },
  };

}
go("Inicio")// Llamado a la escena del juego 

