export class sceneactividades extends Phaser.Scene {
    constructor() {
        super("sceneactividades");
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
        this.load.image("return",
            "assets/image/return.png")
        this.load.image("house",
            "assets/image/house.png")


    }

    create() {
        this.background = this.add.image(500, 300, "background");
        this.logo = this.add.image(500, 275, "logo");
        this.logo.setScale(0.05);
        this.house = this.add.image(100, 500, "house");
        this.house.setScale(0.05);
        this.house.setInteractive();
        this.button1 = this.add.image(400, 500, "button");
        this.button1.setScale(0.3);
        this.btntexto1 = this.add.text(400, 500, "", {});
        this.btntexto1.setOrigin(0.5, 0.5);
        this.btntexto1.text =
            "Narracion";
        this.button1.setInteractive();
        this.button2 = this.add.image(600, 500, "button");
        this.button2.setScale(0.3);
        this.button2.setInteractive();
        this.btntexto2 = this.add.text(600, 500, "", {});
        this.btntexto2.setOrigin(0.5, 0.5);
        this.btntexto2.text =
            "Completar";
        this.textomouse = this.add.text(500, 75, "", {});
        this.textomouse.text =
            "Completa las Actividades";
        this.textomouse2 = this.add.text(500, 200, "", {});
        this.textomouse.setOrigin(0.5, 0.5);
        this.textomouse.setStyle({
            fontSize: "42px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center',
        });
        this.textomouse2.text =
            "La biblioteca virtual se caracteriza por una interfaz gráfica que simula una biblioteca real, es \n decir, podemos encontrar todo lo que existe en una biblioteca pública real, pero a diferencia de esta, \n está conectada a la red y brinda a los usuarios otros servicios como chat, foros, correo \n electrónico, la capacidad de ver las últimas noticias y más. ";
        this.textomouse2.setOrigin(0.5, 0.5);
        this.textomouse2.setStyle({
            fontSize: "22px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center',
        });
        this.textomouse2.visible = false;


        this.return = this.add.image(500, 400, "return");
        this.return.setScale(0.05);
        this.return.setInteractive();
        this.return.visible = false;
        this.return2 = this.add.image(500, 550, "return");
        this.return2.visible = false;
        this.button1.on("pointerdown", () => {
            //      this.return.visible = true;




            this.scene.start("scenenarracion");

        });
        this.button2.on("pointerdown", () => {
            //      this.return.visible = true;




            this.scene.start("scenecompletar");

        });
        this.return.on("pointerdown", () => {
            this.return.visible = false;


            this.textomouse.visible = true;
            this.textomouse2.visible = false;
            this.button1.visible = true;
            this.button2.visible = true;
            this.texto.text =
                "Definicion";

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

        this.return2.on("pointerdown", () => {
            this.return2.visible = false;
            this.textomouse2.text =
                "La biblioteca virtual se caracteriza por una interfaz gráfica que simula una biblioteca real, es \n decir, podemos encontrar todo lo que existe en una biblioteca pública real, pero a diferencia de esta, \n está conectada a la red y brinda a los usuarios otros servicios como chat, foros, correo \n electrónico, la capacidad de ver las últimas noticias y más. ";

            this.textomouse.visible = true;
            this.textomouse2.visible = false;
            this.textomouse3.visible = false;
            this.textomouse4.visible = false;
            this.button1.visible = true;
            this.button2.visible = true;
            this.texto.text =
                "Definicion";

        });
        this.house.on("pointerdown", () => {

            this.scene.start("scene1");

        });


    }
    update() {


    }
}