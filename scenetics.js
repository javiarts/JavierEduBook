export class scenetics extends Phaser.Scene {
    constructor() {
        super("scenetics");
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
        this.load.image("house",
            "assets/image/house.png")
        this.load.image("tics",
            "assets/image/tics.png");
    }

    create() {
        this.background = this.add.image(500, 300, "background");
        this.house = this.add.image(100, 500, "house");
        this.house.setScale(0.05);
        this.house.setInteractive();
        this.metodologia = this.add.image(250, 250, "tics");
        this.metodologia.setScale(0.3);
        this.textomouse = this.add.text(770, 260, "", {});
        this.textomouse.text =
            "-Aplica técnicas activas para el aprendizaje. \n-Promueve las relaciones entre docente y \nestudiantes. \n-Desarrolla dinámicas de cooperación \nentre los estudiantes.  \n-Permite procesos de retroalimentación. \n-Respeta la diversidad de formas de aprender. \n-Enfatiza el tiempo de dedicación a la tarea. \n-Comunica altas expectativas. ";
        this.textomouse.setOrigin(0.5, 0.5);
        this.textomouse.setStyle({
            fontSize: "22px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'left',

        });


        this.texto = this.add.text(740, 100, "", {});

        this.texto.setOrigin(0.5, 0.5);
        this.texto.text =
            "RECOMENDACIONES DEL \nUSO DE LOS TICS";
        this.texto.setStyle({
            fontSize: "32px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'left',
        });
        this.house.on("pointerdown", () => {

            this.scene.start("scene1");

        });




    }
    update() {


    }
}