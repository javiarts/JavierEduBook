export class scenecompletar extends Phaser.Scene {
    constructor() {
        super("scenecompletar");
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
        this.load.image("persona",
            "assets/image/persona.png");
        this.load.image("return",
            "assets/image/return.png");
    }

    create() {
        this.background = this.add.image(500, 300, "background");
        this.return = this.add.image(500, 400, "return");
        this.return.setScale(0.05);
        this.return.setInteractive();
        this.return.visible = false;
        this.return.angle = 180;
        this.house = this.add.image(100, 500, "house");
        this.house.setScale(0.05);
        this.house.setInteractive();
        this.metodologia = this.add.image(250, 250, "persona");
        this.metodologia.setScale(0.2);
        this.texto = this.add.text(740, 100, "", {});

        this.texto.setOrigin(0.5, 0.5);
        this.texto.text =
            "DEFINE EL SIGNIFICADO DE \nLAS SIGUIENTES PALABRAS";
        this.texto.setStyle({
            fontSize: "32px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'left',
        });
        this.textomouse = this.add.text(770, 170, "", {});
        this.textomouse.text =
            "-Abandonar:";
        this.textomouse.setOrigin(0.5, 0.5);
        this.textomouse.setStyle({
            fontSize: "34px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'left',

        });
        this.pre1 = false;
        this.op1 = this.add.text(700, 240, "", {});
        this.op1.text =
            "Dejar solo, sin atención, sin cuidados a una persona,\nun animal o una cosa";
        this.op1.setOrigin(0.5, 0.5);
        this.op1.setStyle({
            fontSize: "24px",
            fontFamily: 'Arial',
            color: '#222222',
            align: 'left',
            backgroundColor: '#ffffff'
        });
        this.op2 = this.add.text(570, 295, "", {});
        this.op2.text =
            "Objeto que sirve para dar aire";
        this.op2.setOrigin(0.5, 0.5);
        this.op2.setStyle({
            fontSize: "24px",
            fontFamily: 'Arial',
            color: '#222222',
            align: 'left',
            backgroundColor: '#ffffff'
        });
        this.op1.setInteractive();
        this.op2.setInteractive();
        this.valor = false;
        this.op1.on("pointerdown", () => {

            if (this.op2._text == "Conjunto de letras de un idioma ordenadas") {
                this.return.visible = false;
                this.op1.setStyle({
                    fontSize: "24px",
                    fontFamily: 'Arial',
                    color: '#222222',
                    align: 'left',
                    backgroundColor: '#7FFF00'
                });
                this.op2.visible = false;
            } else {
                if (this.valor == false) {
                    this.op1.setStyle({
                        fontSize: "24px",
                        fontFamily: 'Arial',
                        color: '#222222',
                        align: 'left',
                        backgroundColor: '#7FFF00'
                    });
                    this.valor = true;
                    this.return.visible = true;
                } else {
                    // this.op1.x = 648;
                    // this.op2.setStyle({
                    //     fontSize: "24px",
                    //     fontFamily: 'Arial',
                    //     color: '#222222',
                    //     align: 'left',
                    //     backgroundColor: '#ffffff'
                    // });
                    // this.op1.setStyle({
                    //     fontSize: "24px",
                    //     fontFamily: 'Arial',
                    //     color: '#222222',
                    //     align: 'left',
                    //     backgroundColor: '#ffffff'
                    // });
                    // this.textomouse.text =
                    //     "-Abeja:";
                    // this.op2.text =
                    //     "Conjunto de letras de un idioma ordenadas";
                    // this.op1.text =
                    //     "Insecto de color amarillo y negro.";
                    // this.return.visible = false;

                }
            }



        });
        this.op2.on("pointerdown", () => {

            if (this.op2._text == "Conjunto de letras de un idioma ordenadas") {
                this.return.visible = false;
                this.op2.setStyle({
                    fontSize: "24px",
                    fontFamily: 'Arial',
                    color: '#222222',
                    align: 'left',
                    backgroundColor: '#FF0000'
                });
            } else {
                if (this.valor == false) {
                    this.op2.setStyle({
                        fontSize: "24px",
                        fontFamily: 'Arial',
                        color: '#222222',
                        align: 'left',
                        backgroundColor: '#FF0000'
                    });
                    this.valor = true;
                    this.return.visible = true;
                } else {
                    // this.op1.x = 648;
                    // this.op2.setStyle({
                    //     fontSize: "24px",
                    //     fontFamily: 'Arial',
                    //     color: '#222222',
                    //     align: 'left',
                    //     backgroundColor: '#ffffff'
                    // });
                    // this.op1.setStyle({
                    //     fontSize: "24px",
                    //     fontFamily: 'Arial',
                    //     color: '#222222',
                    //     align: 'left',
                    //     backgroundColor: '#ffffff'
                    // });
                    // this.textomouse.text =
                    //     "-Abeja:";
                    // this.op2.text =
                    //     "Conjunto de letras de un idioma ordenadas";
                    // this.op1.text =
                    //     "Insecto de color amarillo y negro.";
                    // this.valor = false;
                    // this.return.visible = false;
                }
            }

        });
        this.house.on("pointerdown", () => {

            this.scene.start("sceneactividades");

        });
        this.return.on("pointerdown", () => {


            this.op2.setStyle({
                fontSize: "24px",
                fontFamily: 'Arial',
                color: '#222222',
                align: 'left',
                backgroundColor: '#ffffff'
            });
            this.op1.setStyle({
                fontSize: "24px",
                fontFamily: 'Arial',
                color: '#222222',
                align: 'left',
                backgroundColor: '#ffffff'
            });
            this.textomouse.text =
                "-Abeja:";
            this.op2.x = 700;
            this.op2.text =
                "Conjunto de letras de un idioma ordenadas";
            this.op1.text =
                "Insecto de color amarillo y negro.";
            this.valor = false;
            this.return.visible = false;


        });



    }
    update() {


    }
}