export class scenenarracion extends Phaser.Scene {
    constructor() {
        super("scenenarracion");
    }
    preload() {
        this.load.image("background", "assets/image/background.jpg");
        this.load.image("logo", "assets/image/logo.png");
        this.load.image("flechaizquierda", "assets/image/flecha.png");
        this.load.image("flechaderecha", "assets/image/flecha.png");
        this.load.text;
        this.load.spritesheet("player", "assets/image/sprite.png", {
            frameWidth: 64,
            frameHeight: 64,
            endFrame: 16,
        });
        this.load.image("button",
            "assets/image/button.png")
        this.load.image("oak",
            "assets/image/oak.png")
        this.load.image("return",
            "assets/image/return.png")
        this.load.image("house",
            "assets/image/house.png")
        this.load.image("poke1",
            "assets/image/poke1.png")
        this.load.image("poke2",
            "assets/image/poke2.png")

    }

    create() {
        this.background = this.add.image(500, 300, "background");
        this.oak = this.add.image(500, 300, "oak");
        this.oak.setScale(0.5);
        this.oak.visible = false;
        this.house = this.add.image(100, 500, "house");
        this.house.setScale(0.05);
        this.house.setInteractive();
        this.button1 = this.add.image(400, 500, "button");
        this.button1.setScale(0.3);
        this.button1.setInteractive();
        this.button2 = this.add.image(600, 500, "button");
        this.button2.setScale(0.3);
        this.button2.setInteractive();
        var config = {
            key: "down",
            frames: this.anims.generateFrameNumbers("player", {
                start: 0,
                end: 3,
            }),
            frameRate: 8,
            repeat: -1,
        };
        var config2 = {
            key: "left",
            frames: this.anims.generateFrameNumbers("player", {
                start: 4,
                end: 7,
            }),
            frameRate: 8,
            repeat: -1,
        };
        var config3 = {
            key: "rigth",
            frames: this.anims.generateFrameNumbers("player", {
                start: 8,
                end: 11,
            }),
            frameRate: 8,
            repeat: -1,
        };
        var config4 = {
            key: "up",
            frames: this.anims.generateFrameNumbers("player", {
                start: 12,
                end: 16,
            }),
            frameRate: 8,
            repeat: -1,
        };

        this.anims.create(config);
        this.anims.create(config2);
        this.anims.create(config3);
        this.anims.create(config4);
        this.player = this.add.sprite(400, 300, "player").play("rigth");
        this.textomouse = this.add.text(500, 75, "", {});
        this.textomouse.text =
            "Narracion";

        this.textomouse2 = this.add.text(500, 200, "", {});
        this.textomouse.setOrigin(0.5, 0.5);
        this.textomouse.setStyle({
            fontSize: "42px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center',
        });
        this.textomouse2.text =
            "Había una vez un entrenador pokemon que quería combatir\n El profesor Oak le iba a dar\n su primer pokemon.";
        this.textomouse2.setOrigin(0.5, 0.5);
        this.textomouse2.setStyle({
            fontSize: "22px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center',
        });
        this.textomouse2.visible = true;
        this.button1.visible = false;
        this.button2.visible = false;

        this.return = this.add.image(500, 400, "return");
        this.return.setScale(0.05);
        this.return.setInteractive();
        this.return.visible = true;
        this.return.angle = 180;
        this.return2 = this.add.image(500, 400, "return");
        this.return2.visible = false;
        this.return2.setScale(0.05);
        this.return2.setInteractive();
        this.return2.angle = 180;
        this.button1.on("pointerdown", () => {
            this.return.visible = true;


            this.textomouse.visible = false;
            this.textomouse2.visible = true;
            this.button1.visible = false;
            this.button2.visible = false;


        });
        this.return.on("pointerdown", () => {
            this.return.visible = false;
            this.return2.visible = true;
            this.textomouse2.text =
                "Bienvenido, escoge tu Pokemon.";
            this.oak.visible = true;
            this.textomouse.visible = true;
            this.textomouse2.visible = true;



        });

        this.textomouse3 = this.add.text(500, 300, "", {});
        this.textomouse4 = this.add.text(500, 400, "", {});
        this.textomouse3.text =
            "  Permite entre sus beneficios, armar y publicar en línea Revistas Electrónicas; también enlazar \n con otras direcciones que permitan complementar lecturas, visitar páginas de autores,\n significados, notas y ampliaciones sobre las distintas temáticas a investigar.";
        this.textomouse3.setOrigin(0.5, 0.5);
        this.textomouse3.setStyle({
            fontSize: "22px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center',
        });

        this.textomouse4.text =
            "En ocasiones se pueden encontrar libros electrónicos  que no tienen su versión impresa,\n puesto que es más  accesible y a mucho menor costo dicha edición. Y es\n un medio ideal para ir conociendo autores noveles";
        this.textomouse4.setOrigin(0.5, 0.5);
        this.textomouse4.setStyle({
            fontSize: "22px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center',
        });
        this.textomouse3.visible = false;
        this.textomouse4.visible = false;
        this.button2.on("pointerdown", () => {

            this.textomouse.visible = false;
            this.textomouse2.text =
                "Las Organizaciones Gubernamentales relacionadas con la Educación y las Universidades están \n sumándose a la formación de Bibliotecas Virtuales y archivos de documentación para investigación. \n Se forman consorcios para lograr un mayor  aprovechamiento de los recursos y del trabajo en \n común y cooperativo. Así van armándose diversos tipos de bibliotecas, de acceso libre, privadas, \n especializadas, con abonos, escolares y otras.";
            this.textomouse2.visible = true;

            this.textomouse3.visible = true;
            this.textomouse4.visible = true;
            this.button1.visible = false;
            this.button2.visible = false;
            this.return2.visible = true;
            this.return2.setScale(0.05);
            this.return2.setInteractive();

            this.texto.text =
                "Tipos de Biblioteca Virtuales";

        });
        this.poke1 = this.add.image(450, 300, "poke1");
        this.poke1.setScale(0.2);
        this.poke1.visible = false;
        this.poke1.setInteractive();

        this.poke2 = this.add.image(570, 300, "poke2");
        this.poke2.setScale(0.2);
        this.poke2.visible = false;
        this.poke2.setInteractive();
        this.textomousep = this.add.text(500, 150, "", {});
        this.textomousep.text =
            "Squirtle ";
        this.textomousep.setOrigin(0.5, 0.5);
        this.textomousep.setStyle({
            fontSize: "40px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center',
        });
        this.textomousep.visible = false;
        this.return2.on("pointerdown", () => {
            this.player.visible = false;
            this.poke1.visible = true;
            this.poke2.visible = true;

            this.return2.visible = false;

            this.oak.visible = false;
            this.textomouse.visible = true;
            this.textomouse2.visible = false;
            this.textomouse3.visible = false;
            this.textomouse4.visible = false;



        });
        this.poke1.on("pointerdown", () => {
            this.poke2.visible = false;
            this.textomousep.text =
                "Squirtle ";
            this.textomousep.visible = true;
        })
        this.poke2.on("pointerdown", () => {
            this.poke1.visible = false;
            this.textomousep.text =
                "Charmander ";
            this.textomousep.visible = true;
        })
        this.house.on("pointerdown", () => {

            this.scene.start("sceneactividades");

        });

    }
    update() {


    }
}