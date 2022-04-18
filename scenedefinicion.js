export class scenedefinicion extends Phaser.Scene {
    constructor() {
        super("scenedefinicion");
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
        this.house = this.add.image(100, 500, "house");
        this.house.setScale(0.05);
        this.house.setInteractive();
        this.button1 = this.add.image(400, 400, "button");
        this.btntexto1 = this.add.text(400, 400, "", {});
        this.btntexto1.setOrigin(0.5, 0.5);
        this.btntexto1.text =
            "Caracteristicas";
        this.button1.setScale(0.3);
        this.button1.setInteractive();
        this.button2 = this.add.image(600, 400, "button");
        this.btntexto2 = this.add.text(600, 400, "", {});
        this.btntexto2.setOrigin(0.5, 0.5);
        this.btntexto2.text =
            "Tipos";
        this.button2.setScale(0.3);
        this.button2.setInteractive();
        this.textomouse = this.add.text(500, 200, "", {});
        this.textomouse.text =
            "Las bibliotecas virtuales en educación brindan acceso instantáneo a una amplia gama de recursos \n intelectuales que no se limitan a los textos tradicionales. Es un recurso valioso que hace muchos \n aportes porque, en su uso, se determina satisfacer las necesidades de los usuarios obteniendo del \n documento o la información demandada (Magán, 2008).";
        this.textomouse2 = this.add.text(500, 200, "", {});
        this.textomouse.setOrigin(0.5, 0.5);
        this.textomouse.setStyle({
            fontSize: "22px",
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

        this.texto = this.add.text(500, 100, "", {});
        this.texto.setOrigin(0.5, 0.5);
        this.texto.text =
            "Definicion";
        this.texto.setStyle({
            fontSize: "32px",
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center',
        });
        this.return = this.add.image(500, 400, "return");
        this.return.setScale(0.05);
        this.return.setInteractive();
        this.return.visible = false;
        this.return2 = this.add.image(500, 550, "return");
        this.return2.visible = false;
        this.button1.on("pointerdown", () => {
            this.return.visible = true;

            this.btntexto1.visible = false;
            this.btntexto2.visible = false;

            this.textomouse.visible = false;
            this.textomouse2.visible = true;
            this.button1.visible = false;
            this.button2.visible = false;
            this.texto.text =
                "Caracteristicas de una biblioteca";

        });
        this.return.on("pointerdown", () => {
            this.return.visible = false;

            this.btntexto1.visible = true;
            this.btntexto2.visible = true;
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
        this.button2.on("pointerdown", () => {
            this.btntexto1.visible = false;
            this.btntexto2.visible = false;
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
        this.return2.on("pointerdown", () => {
            this.btntexto1.visible = true;
            this.btntexto2.visible = true;
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