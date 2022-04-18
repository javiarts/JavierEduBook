export class Scene1 extends Phaser.Scene {
    constructor() {
        super("scene1");
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
            "assets/image/button.png");
        this.load.image("mouse",
            "assets/image/mousehand.png");

    }

    create() {
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.background = this.add.image(500, 300, "background");
        this.mouse = this.add.image(100, 500, "mouse");
        this.mouse.setScale(0.05);
        this.textomouse = this.add.text(220, 500, "", {});
        this.textomouse.text =
            "Presione el Boton";
        this.textomouse.setOrigin(0.5, 0.5);
        this.textomouse.setStyle({
            fontSize: "22px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center',
        });
        this.logo = this.add.image(200, 250, "logo");

        this.button2 = this.add.image(800, 400, "button");
        this.button2.setScale(0.3);
        this.button4 = this.add.image(800, 500, "button");
        this.button4.setScale(0.3);
        this.btntexto4 = this.add.text(800, 500, "", {});
        this.btntexto4.setOrigin(0.5, 0.5);
        this.btntexto4.text =
            "Actividades";
        this.button3 = this.add.image(600, 500, "button");
        this.button3.setScale(0.3);
        this.btntexto3 = this.add.text(600, 500, "", {});
        this.btntexto3.setOrigin(0.5, 0.5);
        this.btntexto3.text =
            "Tics";
        this.button1 = this.add.image(600, 400, "button");
        this.button1.setScale(0.3);
        this.button1.setInteractive();
        this.btntexto1 = this.add.text(600, 400, "", {});
        this.btntexto1.setOrigin(0.5, 0.5);
        this.btntexto1.text =
            "Metodologia de \nAprendizaje";
        this.button2.setInteractive();
        this.btntexto2 = this.add.text(800, 400, "", {});
        this.btntexto2.setOrigin(0.5, 0.5);
        this.btntexto2.text =
            "Guia";
        this.button3.setInteractive();
        this.button4.setInteractive();
        this.texto = this.add.text(680, 130, "", {});
        this.texto.setOrigin(0.5, 0.5);
        this.texto.text =
            "Biblioteca virtual";
        this.texto.setStyle({
            fontSize: "32px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center',
        });
        this.texto2 = this.add.text(680, 160, "", {});
        this.texto2.setOrigin(0.5, 0.5);
        this.texto2.text =
            "De Saberes Intectuales";

        this.texto2.setStyle({
            fontSize: "32px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center',

        });
        this.logo.setScale(0.05);
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
        this.player = this.add.sprite(400, 300, "player").play("down");
        // this.player = this.add.image(400, 300, "player");
        this.player.visible = false;
        this.flechaizquierda = this.add.image(100, 300, "flechaizquierda");
        this.flechaderecha = this.add.image(900, 300, "flechaderecha");
        this.flechaizquierda.setInteractive();
        this.flechaderecha.setInteractive();
        // change size of the flechaizquierda
        this.flechaizquierda.setScale(0.1);
        this.flechaderecha.setScale(0.1);
        // change orientation of the flechaderecha
        this.flechaderecha.angle = 180;
        this.flechaderecha.visible = false;
        this.flechaizquierda.visible = false;
        this.input.keyboard.on("keydown-B", function(event) {
            //this player move left

            this.player = this.add
                .sprite(this.player.x, this.player.y, "player")
                .play("down");
            //  this.player.x += 4;
        });
        this.button1.on("pointerdown", () => {

            this.scene.start("scenemetodologiadeaprendizaje");

        });
        this.button2.on("pointerdown", () => {

            this.scene.start("scenedefinicion");

        });
        this.button3.on("pointerdown", () => {

            this.scene.start("scenetics");

        });
        this.button4.on("pointerdown", () => {

            this.scene.start("sceneactividades");

        });
    }
    update() {
        if (this.keyD.isDown && this.player.x < 1000) {
            console.log(this.player.x);
            this.player.anims.play("rigth", true);
            this.player.x += 1;
        }
        if (this.keyA.isDown && this.player.x > 0) {
            console.log(this.player.x);
            this.player.anims.play("left", true);
            this.player.x -= 1;
        }
        this.flechaizquierda.on("pointerdown", () => {
            this.flechaizquierda.visible = false;
            this.flechaderecha.visible = true;
        });
        this.flechaderecha.on("pointerdown", () => {
            this.flechaizquierda.visible = true;
            this.flechaderecha.visible = false;
            this.logo.visible = false;
            this.player.visible = true;
            this.texto.visible = true;
        });

    }
}