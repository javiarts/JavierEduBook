import { Game } from "./game.js";
import { Scene1 } from "./scene1.js";
import { sceneactividades } from "./sceneactividades.js";
import { scenecompletar } from "./scenecompletar.js";
import { scenedefinicion } from "./scenedefinicion.js";
import { scenemetodologiadeaprendizaje } from "./scenemetodologiadeaprendizaje.js";
import { scenenarracion } from "./scenenarracion.js";
import { scenetics } from "./scenetics.js";


const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    //change position
    autoCenter: 1,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            debug: false,
        },
    },
    scene: [Game, Scene1, scenecompletar, scenemetodologiadeaprendizaje, scenedefinicion, sceneactividades, scenenarracion, scenetics],
};
var game = new Phaser.Game(config);