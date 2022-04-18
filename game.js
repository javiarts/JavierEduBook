export class Game extends Phaser.Scene {
    constructor() {
        super("game");
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
    }

    create() {
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.background = this.add.image(500, 300, "background");
        this.logo = this.add.image(500, 300, "logo");
        this.texto = this.add.text(500, 100, "", {});
        this.texto.setOrigin(0.5, 0.5);
        this.texto.text =
            "Biblioteca Virtual";
        this.texto.setStyle({ fontSize: "38px" });

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
        setTimeout(() => {
            this.scene.start("scene1");
        }, 1000);
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
            // this.flechaizquierda.visible = true;
            // this.flechaderecha.visible = false;
            // this.logo.visible = false;
            // this.player.visible = true;
            // this.texto.visible = true;
            //this.scene.start("scene1");
        });
    }
}