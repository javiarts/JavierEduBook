export class scenemetodologiadeaprendizaje extends Phaser.Scene {
    constructor() {
        super("scenemetodologiadeaprendizaje");
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
        this.load.image("metodologia",
            "assets/image/scenemetodologia.jpg");
    }

    create() {
        this.background = this.add.image(500, 300, "background");
        this.house = this.add.image(100, 500, "house");
        this.house.setScale(0.05);
        this.house.setInteractive();
        this.metodologia = this.add.image(500, 400, "metodologia");
        this.metodologia.setScale(0.5);
        this.textomouse = this.add.text(500, 200, "", {});
        this.textomouse.text =
            "Las metodologías de aprendizaje son un camino para el aprendizaje, que incluyen un \n conjunto de pasos que ayudan a los alumnos a aprender de forma activa, logrando así un \n aprendizaje significativo. Éstas son la forma en la que nuestros profesores planean sus \n clases para lograr el propósito educativo, son las técnicas, actividades, estrategias \n y formas de evaluar que logran sacar el máximo potencial de nuestros alumnos.";
        this.textomouse.setOrigin(0.5, 0.5);
        this.textomouse.setStyle({
            fontSize: "22px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center',
        });


        this.texto = this.add.text(500, 100, "", {});
        this.texto.setOrigin(0.5, 0.5);
        this.texto.text =
            "Metodologia de Aprendizaje";
        this.texto.setStyle({
            fontSize: "32px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center',
        });
        this.house.on("pointerdown", () => {

            this.scene.start("scene1");

        });




    }
    update() {


    }
}