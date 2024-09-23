document.querySelector('input[value="Inicio"]').addEventListener('click', function() {
    window.location.href = "../inicio/sipnosis.html";
});

document.querySelector('input[value="Personajes"]').addEventListener('click', function() {
    window.location.href = "../personajes/personajes.html";
});

document.querySelector('input[value="Episodios"]').addEventListener('click', function() {
    window.location.href = "../episodios/episodios.html";
});

document.querySelector('input[value="Extras"]').addEventListener('click', function() {
    window.location.href = "../extras/extras.html";
});

document.querySelector('input[value="Merchandising"]').addEventListener('click', function() {
    window.location.href = "../tienda/tienda.html";
});

document.querySelector('input[value="Estadisticas"]').addEventListener('click', function() {
    window.location.href = "../estadisticas/estadisticas.html";
});

// Personajes

const gravityFallsCharacters = [ 
    {
     name: 'Dipper Pines',
    age: 12,
    role: 'Protagonista',
    description:'Mason Pines, mejor conocido como Dipper Pines. Es un niño de Piedmont, California que fue enviado por sus padres a pasar las vacaciones en la cabaña de su Tío abuelo, junto a su hermana Mabel. Es un chico aventuro, inteligente y curioso de trece años siempre dispuesto a ir de aventura solo o con sus amigos en busca de resolver misterios.',
    img: '../img/dipper.png'
},
{
    name: 'Mabel Pines',
    age: 12,
    role: 'Protagonista',
    description:'Mabel Pines es un personaje principal de Gravity Falls: Un verano de misterios. Es una niña enérgica y alegre que junto a su hermano mellizo llamado Dipper va de vacaciones a un misterioso pueblo llamado Gravity Falls.',
    img: '../img/mabel.png'
},
{
    name: 'Stanley Pines',
    age: 60,
    role: 'Tío Abuelo',
    description:'Stanley Pines, también conocido como Tío Stan, anteriormente como Stanford Pines o simplemente Stan, es el dueño de La Cabaña del Misterio y tío abuelo de Dipper y Mabel Pines, los protagonistas de la historia.',
    img: '../img/stanley.png'

},
 {
    name:'Soos Ramirez',
    age: 22 ,
    role: 'Asistente en la Cabaña del Misterio',
    description:'Jesús Alzamirano Ramírez, mejor conocido como Soos, es un personaje principal de Gravity Falls: Un verano de misterios. Soos es un empleado de la Cabaña del Misterio y el compañero de Dipper, Mabel y Wendy en sus aventuras',
    img: '../img/soos.png'},
    {
        name: 'Wendy Corduroy',
        age: 15,
        role: 'Trabajadora a medio tiempo en la Cabaña del Misterio',
        description: 'Wendy es una adolescente relajada y valiente. Le gusta la aventura y suele acompañar a Dipper y Mabel en sus travesuras. Es el interés amoroso de Dipper durante gran parte de la serie.',
        img: '../img/wendy.png'
    },
    {
        name: 'Pacifica Northwest',
        age: 12,
        role: 'Antagonista menor y amiga ocasional',
        description: 'Hija de una familia rica en Gravity Falls, Pacifica es inicialmente una rival de Mabel, pero con el tiempo se muestra más amable y amistosa. Tiene una relación complicada con sus padres y los ideales de riqueza.',
        img: '../img/pacifica.png'
    },
    {
        name: 'Gideon Gleeful',
        age: 10,
        role: 'Antagonista',
        description: 'Gideon es un niño psíquico falso que busca el control de la Cabaña del Misterio. Tiene una obsesión con Mabel y ve a Dipper como su rival. Aunque parece encantador, tiene un lado muy oscuro.',
        img: '../img/gydeon.png'
    },
    {
        name: 'Stanford "Ford" Pines',
        age: 60,
        role: 'Tío Abuelo',
        description: 'Conocido como el hermano gemelo de Grunkle Stan, Ford es un científico brillante que escribió los diarios de Gravity Falls. Pasó muchos años en una dimensión alternativa antes de regresar para ayudar a luchar contra Bill Cipher.',
        img: '../img/image15.png'
    },
    {
        name: 'Pato',
        age: 'Desconocida',
        role: 'Mascota de Mabel',
        description: 'Un cerdo que Mabel gana en una feria. Waddles es un compañero leal y a menudo es parte de las aventuras de Mabel, aportando un toque de humor y ternura.',
        img: '../img/pato.png'
    },
    {
        name: 'Old Man McGucket',
        age: 60,
        role: 'Habitante de Gravity Falls',
        description: 'Un hombre mayor conocido por su locura aparente y su barba larga. En realidad, McGucket es un genio que construyó muchos de los dispositivos en Gravity Falls, incluyendo la computadora para borrar la memoria.',
        img: '../img/mcgucket.png'
    },
    {
        name: 'Robbie Valentino',
        age: 15,
        role: 'Adolescente local',
        description: 'Robbie es un adolescente gótico que toca la guitarra y tiene una actitud cínica. Inicialmente es el novio de Wendy, lo que genera celos en Dipper. Aunque actúa con frialdad, tiene un lado más vulnerable.',
        img: '../img/Rooby.png'
    },
    {
        name: 'Tambry',
        age: 15,
        role: 'Amiga de Wendy',
        description: 'Parte del grupo de amigos de Wendy, Tambry es conocida por estar siempre en su teléfono móvil y tener una actitud desinteresada. A pesar de su aparente desinterés, es una amiga leal.',
        img: '../img/tambry1.jpg'
    },
    {
        name: 'Candy Chiu',
        age: 12,
        role: 'Amiga de Mabel',
        description: 'Candy es una de las mejores amigas de Mabel. Es excéntrica, creativa y tiene un gran sentido del humor. Le encanta divertirse y a menudo se une a Mabel en sus aventuras.',
        img: '../img/candy.png'
    },
    {
        name: 'Grenda',
        age: 12,
        role: 'Amiga de Mabel',
        description: 'Grenda es una niña fuerte y de gran personalidad. Su voz grave es característica, y aunque puede parecer intimidante, es muy amable y leal. Es una de las mejores amigas de Mabel.',
        img: '../img/grenda.png'
    },
 
    {
        name: 'Daryl Blubs',
        role: 'Comisario Blubs',
        description: 'Daryl Blubs es el comisario de Gravity Falls, conocido por su incompetencia y su tendencia a meterse en problemas. A menudo está acompañado por su compañero Edwin Durland.',
        img: '../img/blubs.png'
    },
    {
        name: 'Edwin Durland',
        role: 'Oficial Durland',
        description: 'Edwin Durland es el oficial de policía de Gravity Falls, a menudo visto junto a Daryl Blubs. Aunque no es muy eficiente, su lealtad a su trabajo es inquebrantable.',
        img: '../img/image3.png'
    },
    {
        name: 'Susan Wentworth',
        role: 'Linda Susan',
        description: 'Linda Susan es una persona amable y la madre de Wendy. Es conocida por su actitud comprensiva y su apoyo hacia su hija.',
        img: '../img/lindasusan.png'
    },
    {
        name: 'Daniel Corduroy',
        role: 'Varonil Dan',
        description: 'Daniel Corduroy, también conocido como Varonil Dan, es el padre de Wendy y uno de los habitantes de Gravity Falls. Su carácter es fuerte y protector con su familia.',
        img: '../img/image28.png'
    },
    {
        name: 'Toby Vehemente',
        role: 'Toby',
        description: 'Toby Vehemente es un personaje peculiar y parte del grupo de amigos de Wendy. Tiene una personalidad entusiasta y suele ser bastante enérgico.',
        img: '../img/tobby.png'
    },
  
    {
        name: 'Lee',
        role: 'Lee',
        description: 'Lee es un personaje menor en Gravity Falls, conocido por su participación en eventos cómicos y situaciones extravagantes.',
        img: '../img/image11.png'
    },
    {
        name: 'Nate',
        role: 'Nate',
        description: 'Nate es un joven que aparece en Gravity Falls, a menudo participando en las aventuras de los personajes principales.',
        img: '../img/image13.png'
    },
    {
        name: 'Thompson',
        role: 'Thompson',
        description: 'Thompson es un personaje secundario en Gravity Falls, conocido por su actitud y participación en varios episodios.',
        img: '../img/image20.png'
    },
    {
        name:'Patotective',
        age: 'Desconocido',
        role:'Animal Detective de Londres',
    description: 'Es un personaje menor y el protagonista principal de su propia serie televisiva que lleva su mismo nombre.',
    img:'../img/Patotective.webp'
},
    {
        name: 'Preston y Priscilla Northwest',
        role: 'Preston y Priscilla Northwest',
        description: 'Preston y Priscilla Northwest son miembros de la rica familia Northwest. Son conocidos por su actitud elitista y su influencia en la ciudad.',
        img: '../img/preston_priscilla_northwest.png'
    },
    {
        name: 'Shandra Jiménez',
        role: 'Shandra Jiménez',
        description: 'Shandra Jiménez es una residente de Gravity Falls, conocida por su participación en la comunidad local.',
        img: '../img/sandra.png'
    },
    {
        name: 'Filbrick Pines',
        role: 'Abuelo de Dipper y Mabbel',
        description: 'Abuelo de Dipper y Mabbel,Padre de Stanley y Ford Pinnes Solo aparece en 1 episodio .',
        img: '../img/filbrick.webp'
    },
    {
        name: 'Sir Lord Quentin Trembley III Escudero',
        role: 'Sir Lord Quentin Trembley III',
        description: 'Sir Lord Quentin Trembley III Escudero es un personaje de alto estatus, conocido por su elegancia y posición en la sociedad de Gravity Falls.',
        img: '../img/image25.png'
    },
    {
        name: 'Señor Aguaclara',
        role: 'Señor Aguaclara',
        description: 'Señor Aguaclara es un personaje secundario en Gravity Falls, conocido por su actitud amable y su participación en la comunidad.',
        img: '../img/aguaclara.webp'
    },
    {
        name: 'Abuelita',
        role: 'Abuelita',
        description: 'La Abuelita es una figura maternal en Gravity Falls, conocida por su sabiduría y su papel en la vida de los personajes principales.',
        img: '../img/abuelita.webp'
    },
    {
        name: 'Agente Powers',
        role: 'Agente Powers',
        description: 'Agente Powers es un miembro de una agencia secreta que aparece en Gravity Falls, conocido por su habilidad para manejar situaciones complejas.',
        img: '../img/agentepowers.webp'
    },
    {
        name: 'Agente Trigger',
        role: 'Agente Trigger',
        description: 'Agente Trigger es un compañero del Agente Powers, conocido por su eficiencia y profesionalismo en el trabajo.',
        img: '../img/agente-trigger.webp'
    },
    {
        name: 'Alcalde Eustace "Huckabone" Befufftlefumpter',
        role: 'Alcalde',
        description: 'El Alcalde Eustace "Huckabone" Befufftlefumpter es el alcalde de Gravity Falls, conocido por su actitud excéntrica y sus decisiones cuestionables.',
        img: '../img/alcalde_eustace.jfif'
    },
    {
        name: 'Gabriel Gabe Benson',
        role: 'Gabe',
        description: 'Gabriel Gabe Benson es un personaje menor en Gravity Falls, conocido por su actitud y participación en las actividades de la ciudad.',
        img: '../img/gabe_benson.webp'
    },
    {
        name: 'Iván Cegado',
        role: 'Iván Cegado',
        description: 'Iván Cegado es un personaje menor conocido por sus apariciones en la serie y su rol dentro de la comunidad.',
        img: '../img/ivan_cegado.webp'
    },
    {
        name: 'Marcus, Kevin y Gus Corduroy',
        role: 'Marcus, Kevin y Gus Corduroy',
        description: 'Marcus, Kevin y Gus Corduroy son miembros de la familia Corduroy. Aparecen como personajes secundarios con roles variados.',
        img: '../img/hermanos_corduroy.webp'
    },
    {
        name: 'Melody',
        role: 'Melody',
        description: 'Melody es un personaje secundario en Gravity Falls, conocida por su actitud alegre y participación en las historias.',
        img: '../img/melody.webp'
    },
    {
        name: 'Sergei',
        role: 'Sergei',
        description: 'Sergei es un personaje menor conocido por sus apariciones en episodios específicos y su participación en las tramas secundarias.',
        img: '../img/sergei.webp'
    },
    {
        name: 'Tyler Ruedabueno',
        role: 'Tyler Ruedabueno',
        description: 'Tyler Ruedabueno es un personaje menor que aparece en Gravity Falls con una participación destacada en algunos episodios.',
        img: '../img/tyler_ruedabueno.webp'
    },
    {
        name: 'Varias Veces',
        role: 'Varias Veces',
        description: 'Varias Veces es un personaje con habilidades especiales relacionadas con la repetición y la temporalidad.',
        img: '../img/varias_veces.webp'
    },
    {
        name: 'MARIUS VON FUNDSHAUSER',
        age: 'Desconocido',
        role:'  Príncipe',
    description: '  Baron Marius von Fundshauser es un adolescente rico proveniente de Austria. Pertenece a una rica familia y es el heredero de esta. Obtuvo este cargo tan solo a los 7 años, cuando su padre falleció y actualmente es la pareja amorosa de Grenda.',
    img:'../img/von.jpeg'
    },
    {
        name: 'Príncipa del Colchon',
        age: 'Desconocido',
        role:'Vendedor de colchones y empleado en Mini-Golf Descuento Real de Gravity Falls',
    description: ' El Príncipe del Colchón es un joven que tiene varios trabajos en Gravity Falls, Oregón, pero éstos siempre tienen una temática medieval.',
    img:'../img/principedelcolchon.webp'
    },
    {
        name: 'Amigas de Pacifica',
        age: 'Desconocida',
        role:' Pinkis de Pacífica',
    description: ' Son las amigas de Pacífica Noroeste, a quien acompañan la mayor parte del tiempo, sirviendo como cómplices.',
    img:'../img/amigasdepacifica.webp'
},
     {
        name: 'Guerreros de los autos usados',
        age: 'Desconocida',
        role:' Aliados de Gideon',
    description: 'Son un grupo de prisioneros guardaespaldas de Gideon Alegría, que escaparon de la Prisión de Máxima Seguridad de Gravity Falls.',
    img:'../img/autosusados.webp'
 },
     {
        name:'Sprott',
        age: 'Desconocido',
        role:'Comerciante',
    description: ' Es un personaje menor de la serie que debutó en el capítulo "El Cerdito del Viajero del Tiempo".',
    img:'../img/Sprott.webp'
 },
    ];
    const armagedonCharacters = [
        {
            name: 'Bill Cipher',
            age: 'Desconocida',
            role: 'Antagonista principal',
            description: 'Bill Cipher es un demonio triangular que puede entrar en los sueños de las personas y manipular la realidad. Es astuto, manipulador y tiene grandes planes para Gravity Falls.',
            img: '../img/bill.png'
        },
        {
            name: 'Bola 8',
            age: 'Millones de años',
            role:'Demonio dimencional',
      description: 'Es uno de los secuaces de Bill Clave. Se trata de un demonio que logra entrar al pueblo Gravity Falls, Oregón gracias a un portal creado por la ruptura dimensional junto a sus otros amigos, quiénes vienen a provocar el caos en la Tierra.',
    img:'../img/bola8.webp'
    },
    {
        name: 'Pyronica',
        age: 'Desconocida',
        role:'Demonio ',
    description: 'Es una demonio proveniente de la Dimensión De la Tabla Periódica . Es una criminal y aliada de Bill Clave, al cual acompaña en el Raromagedón junto a los demás demonios.',
    img:'../img/pyronica.webp'
    },
    {
        name: 'Dientes',
        age: 'Millones',
        role:'Demonio',
    description: 'Es un criminal de la "Dimensión Desconocida". Aparece junto con los demás amigos de Bill Clave después de ser liberado tras abrirse el portal por la ruptura de esta, participando en el Raromagedón.',
    img:'../img/dientes.webp'
    },
    {
        name: 'Forma Amorfa',
        age: 'Millones',
        role:'Demonio raro',
    description: 'Es un tipo de demonio que es traído al mundo gracias al portal creado por la ruptura. Es un aliado de Bill Clave y le acompaña en el Raromagedón junto a los demás monstruos.',
    img:'../img/formaamorfa.webp'
    },
    {
        name: 'Hectorgon',
        age: 'Millones',
        role:'Demonio raro',
    description: 'Es un demonio de la "Dimensión Desconocida". Es un criminal interdimensional que fue aliado de Bill Clave y sus Demonios en el Raromagedón.',
    img:'../img/hectorgon.webp'
    },
    {
        name: 'Kryptos',
        age: 'Millones',
        role:'Demonio raro',
    description: 'Es uno de los demonios provenientes de la dimensión provocada por la ruptura destruida. Junto con los demás amigos de Bill Clave, es traído al mundo con el propósito de causar desastre en el Raromagedón.',
    img:'../img/Kryptos.jpg'
    },

    {
        name: 'Demonio lampara de Lava',
        age: 'Millones',
        role:'Demonio',
    description: ' Es uno de los secuaces de Bill Clave quién apareció por primera vez en el episodio Raromagedón: Parte 1. Se trata de un demonio que logra entrar al mundo gracias al portal creado por la Fisura Dimensional, junto a otros amigos quiénes vienen a provocar el caos en la Tierra.',
    img:'../img/demoniolava.webp'
    },
    {
        name: 'Xanthar',
        age: 'Desconocida',
        role:'Demonio ',
    description: ' Es un misterioso ser originario de la dimensión en la que proviene Bill Clave, tal y como se ve en el capítulo semifinal.',
    img:'../img/xanthar.webp'
    },
    {
        name: 'La horrible moustrosidad sudorosa de un solo brazo',
        age: 'Desconocido',
        role:'Personaje gigante creado por Bill',
    description: 'Es una criatura que apareció por primera vez en el episodio "Raromagedón: Parte 1",  se alimenta de los humanos, ya que mostró un desesperado apetito por intentar de atrapar a Dipper, exigiéndole que entre a su boca.',
    img:'../img/unsolobrazo.webp'
    },
    {
        name: 'Ojociélagos',
        age: 'Desconocido',
        role:'Demonio',
    description: 'Son personajes de Gravity Falls que aparecen en el episodio Un cuento de dos Stans como un flashback. Aunque también se les ha visto descritos en el Diario 3 y en el Opening.',
    img:'../img/ojocielagos.webp'
    },
    {
        name: 'Mounstro de 88 caras',
        age: 'Desconocido',
        role:'Desconocido',
    description: 'Es un personaje de Gravity Falls que aparece en el episodio Escape from Reality. Es uno de los amigos de Bill Clave que es liberada tras la ruptura del portal destruido.',
    img:'../img/88caras.png'
    },
    {
        name: 'Mago Invisible',
        age: 'Desconocido',
        role:'Hechicero Paranormal',
    description: 'Es un hechicero paranormal que es completamente invisible ante el ojo humano.',
    img:'../img/magoinvisible.jpg'
    },
    {
        name: 'Mounstro de brazos humanos de un ojo',
        age: 'Desconocido',
        role:'Demonio',
    description: 'Es una criatura que hizo aparicion en el capitulo Xpcveaoqfoxso. Este monstruo surgio desde el portal , en los eventos del Raromagedón , donde comienza a causar desastres en el pueblo de Gravity Falls , junto con los secuazes de Bill Clave y el resto de los monstruos.',
    img:'../img/mounstrounsoloojo.webp'
    },
    {
        name: 'AXOLOTL',
        age: 'Desconocido',
        role:'Poderoso entidad extra-dimensional',
  description: 'Es una ancestral y poderosa entidad extra-dimensional cuyas fuerzas son superiores en relevancia que las del mismo Bebé del Tiempo y Bill Clave.',
img:'../img/axolotl.png'
},
    {
        name: 'Cerradura',
        age: 'Desconocida',
        role:'Demonio dimencional',
  description: 'Es uno de los secuaces de Bill Clave. Se trata de un demonio que logra entrar al pueblo Gravity Falls, Oregón gracias a un portal creado por la ruptura dimensional junto a sus otros amigos, quiénes vienen a provocar el caos en la Tierra.',
img:'../img/cerradura.webp'
},
 {
    name: 'C-3-IHU',
    age: 'Desconocida',
    role:'Demonio ',
description: 'Es una criatura que fue traída desde la Reino de las Pesadillas, tras la destrucción de la Fisura Dimensional.',
img:'../img/C-3-IHU.webp'

},
{
    name: 'AOSHIMA',
    age: 'Desconocida',
    role:'Delfin',
description: 'Es una criatura creada por la mente de Mabel bajo el efecto del Sonrisa Dulce que consumió en "La Tienda Embrujada".',
img:'../img/aoshima.webp'

},
{
    name: 'Caidas del Terror',
    age: 'Desconocida',
    role:'Cabina',
description: 'Es una máquina de pinball que apareció en una historia narrada por Soos del capitulo El Pozo sin Fondo.',
img:'../img/caidasdelterror.webp'
},

       {
        name: 'PACIFIER',
        age: 'Desconocido',
        role:'Criminal y secuaz de Bill',
  description: 'Es uno de los amigos demoníacos de Bill Clave que apareció por primera vez en el capítulo Xpcveaoqfoxso. Luego de que la ruptura se hiciera trizas y el mundo de oscuridad de Bill Clave surgiera a Gravity Falls, los amigos de Bill estarían listos para traer la destrucción al mundo.',
img:'../img/pacifier.webp'
},
{
    name: 'Cicloreloj',
    age: 'Desconocido',
    role:'Ciclope',
description: ' Aparece por primera vez en este episodio, en donde es visto combatiendo con otros luchadores del futuro en busca del Deseo del Tiempo, en uno de los eventos del Bebé del Tiempo, Mabel y Dipper logran encerrar al Cicloreloj dentro de una bodega.',
img:'../img/Cicloreloj.webp'
},
{
    name: 'GIFfany',
    age: 'Desconocido',
    role:'Interés amoroso de Soos (Digital)',
description: ' Giffany es la protagonista de "Academia del Romance 7", una estudiante que se vuelve obsesiva y celosa cuando el jugador se aleja de ella, a pesar de su inicial dulzura.',
img:'../img/gifany.png'
},
{
    name: '????',
    age: 'Desconocido',
    role:' Criatura Malformada',
description: ' Es el apodo de una criatura malformada y con múltiples extremidades, colocada como una de las exhibiciones dentro de la Cabaña del Misterio en el episodio "La Tiendita de Regalos del Horror.',
img:'../img/rareza.png'
},
{
    name: 'Xyler y Craz',
    age: 'Desconocido',
    role:' Personajes ficticios amorosos creados por Mabel',
description: ' Son personajes que aparecen en la película ficticia Dream Boy High. Ellos fueron llevados temporalmente a la vida de la imaginación de Mabel por Bill Clave mientras estaban en el interior de la mente de Stan.',
img:'../img/xylerycraz.webp'
},

        {
            name: 'Bebé del Tiempo',
            role: 'Bebé del Tiempo',
            description: 'El Bebé del Tiempo es una criatura mágica en Gravity Falls con habilidades relacionadas con el tiempo.',
            img: '../img/bebe_tiempo.jfif'
        },
        {
            name: 'Tyrone',
            role: 'Tyrone',
            description: 'Tyrone es un personaje secundario con un rol específico en la serie, conocido por su participación en eventos clave.',
            img: '../img/clondipper.webp'
        },
        {
            name: 'Dipper de Papel Atascado',
            role: 'Dipper de Papel Atascado',
            description: 'Dipper de Papel Atascado es una versión de papel del personaje principal, involucrado en situaciones cómicas y problemáticas.',
            img: '../img/papel_atascado.webp'
        },
        {
            name: 'Bromista de Veranoween',
            role: 'Bromista de Veranoween',
            description: 'El Bromista de Veranoween es una criatura que aparece durante la celebración de Veranoween, conocida por sus bromas y travesuras.',
            img: '../img/bromista.webp'
        },
        {
            name: 'Bruja Manos',
            role: 'Bruja',
            description: 'Bruja Manos es una personaje no-canónico de Gravity Falls, aparece en el episodio "La Tiendita de Regalos del Horror" y es mencionada en el libro "Gravity Falls: Diario 3". Tiene el poder de robar y controlar las manos.',
            img:'../img/brujamanos.webp'
        },
        {
            name: 'Cambia-Formas',
            role: 'Cambia-Formas',
            description: 'El Cambia-Formas es una criatura que puede cambiar de forma a voluntad, causando confusión y problemas a los personajes.',
            img: '../img/cambia_formas.webp'
        },
        {
            name: 'Darlene',
            role: 'Darlene',
            description: 'Darlene es un personaje menor con una personalidad única y participación en eventos específicos de la serie.Es una mujer araña y puede transformarce en araña cuando quiera',
            img: '../img/darlene.webp'
        },
        {
            name: 'Gremnomo',
            role: 'Gremnomo',
            description: 'El Gremnomo es un pequeño ser mágico en Gravity Falls con habilidades y características especiales.',
            img: '../img/gremnomo.webp'
        },
        {
            name:'Hombre perro inglés',
            age: 'Desconocido',
            role:'El peor miedo de Soos',
        description: ' Es un ser que Bill Clave hizo aparecer dentro de la mente de Stan Pines en el episodio "Fuga de ensueño", manifestándose como el peor miedo de Soos, pero al aparecerse Dipper lo elimina con su mirada láser.',
        img:'../img/hombreperro.webp'
         },
    
         {
            name:'Imposibestia',
            age: 'Desconocido',
            role:'Criatura de un juego',
        description: 'Es un criatura que forma parte del juego Dungeons, Dungeons & More Dungeons, aunque fue invocada por Probabilitor durante el episodio Dungeons, Dungeons & More Dungeons, ya que existe dentro de otra dimensión.',
        img:'../img/Imposibestia.webp'
         },
        {
            name: 'Hombretauros',
            role: 'Hombretauros',
            description: 'El Hombretauros es una criatura mítica con una apariencia imponente y habilidades únicas.',
            img: '../img/hombretauros.webp'
        },
        {
            name: 'Leñador Fantasma',
            role: 'Leñador Fantasma',
            description: 'El Leñador Fantasma es una entidad espectral con una historia misteriosa, involucrado en eventos sobrenaturales.',
            img: '../img/lenador_fantasma.webp'
        },
        {
            name: 'Liderán',
            role: 'Liderán',
            description: 'Liderán es una criatura mítica con un papel significativo en las historias de Gravity Falls.',
            img: '../img/lideran.webp'
        },
        {
            name: 'Liliputienses',
            role: 'Liliputienses',
            description: 'Los Liliputienses son pequeños seres que habitan en Gravity Falls, conocidos por su tamaño y comportamiento distintivo.',
            img: '../img/liliputieneses.webp'
        },
        {
            name: 'Marmando',
            role: 'Marmando',
            description: 'Marmando es un personaje menor conocido por sus apariciones en situaciones cómicas o dramáticas.',
            img: '../img/marmando.webp'
        },
        {
            name: 'Multi-Oso',
            role: 'Multi-Oso',
            description: 'El Multi-Oso es una criatura con la habilidad de dividirse en múltiples formas, causando caos y confusión.',
            img: '../img/multi_oso.webp'
        },
        {
            name: 'Pa y Ma Duskerton',
            role: 'Pa y Ma Duskerton',
            description: 'Pa y Ma Duskerton son personajes secundarios conocidos por su participación en la vida de Gravity Falls y sus historias.',
            img: '../img/pa_ma_duskerton.webp'
        },
        {
            name: 'Rudo McGolpes',
            role: 'Rudo McGolpes',
            description: 'Rudo McGolpes es un personaje conocido por su actitud ruda y su participación en eventos conflictivos.',
            img: '../img/rudo_mcgolpes.webp'
        },

        {
            name: 'Lolph',
            age: 'No nacido',
            role:' Miembro del escuadrón',
        description: ' El es un miembro del Escuadrón contra paradojas temporales en el año 207̃012.',
        img:'../img/Lolph.webp'
         },
         {
            name: 'Figuras de Cera',
            age: 'Desconocido',
            role:' Figuras',
        description: ' Fueron los antagonistas del episodio "Cazadores de Cabezas". Su debilidad son los objetos muy calientes como el fuego o el sol debido a que son de cera y se derriten rápidamente dejando un pequeño charco de cera derretida.',
        img:'../img/cera.webp'
     },
         {
            name:'Grifo',
            age: 'Desconocido',
            role:' Grifo',
        description: ' Es una criatura mitológica híbrida, es una combinación de un león y un águila.',
        img:'../img/grifo.webp'
    },

        {
            name: 'Unicornios',
            role: 'Unicornios',
            description: 'Los Unicornios son criaturas mágicas conocidas por su apariencia y habilidades encantadoras.',
            img: '../img/unicornios.webp'
        },
        {
            name: 'Zombis',
            role: 'Zombis',
            description: 'Los Zombis en Gravity Falls son seres reanimados que aparecen en episodios relacionados con lo sobrenatural.',
            img: '../img/zombies.webp'
        },
        {
            name: 'Probabilitor el Insufrible',
            role: 'Probabilitor el Insufrible',
            description: 'Probabilitor el Insufrible es una criatura mágica con la habilidad de manipular probabilidades y causar caos.',
            img: '../img/probabilitor.webp'
        },
        {
            name: 'Cupido',
            role: 'Cupido',
            description: 'Cupido es una figura mítica conocida por sus habilidades para influir en los sentimientos amorosos de los personajes.',
            img: '../img/cupido.jpg'
        }
        
    ];

// Referencia al contenedor donde se mostrarán los personajes
const characterContainer = document.getElementById("character-container");

// Variable para saber qué lista está siendo mostrada
let showingGravityFalls = true;

// Función para ordenar los personajes de A a Z
function sortCharactersAZ(characters) {
    return characters.slice().sort((a, b) => a.name.localeCompare(b.name));
}

// Función para ordenar los personajes de Z a A
function sortCharactersZA(characters) {
    return characters.slice().sort((a, b) => b.name.localeCompare(a.name));
}

// Evento para el botón "Ordenar de A a Z"
document.getElementById("sort-az-button").addEventListener("click", () => {
    const sortedCharacters = showingGravityFalls ? 
        sortCharactersAZ(gravityFallsCharacters) : 
        sortCharactersAZ(armagedonCharacters);
    displayCharacters(sortedCharacters);
});

// Evento para el botón "Ordenar de Z a A"
document.getElementById("sort-za-button").addEventListener("click", () => {
    const sortedCharacters = showingGravityFalls ? 
        sortCharactersZA(gravityFallsCharacters) : 
        sortCharactersZA(armagedonCharacters);
    displayCharacters(sortedCharacters);
});

// Función para mostrar los personajes
function displayCharacters(characters) {
    // Limpiamos el contenedor
    characterContainer.innerHTML = '';

    // Recorremos la lista de personajes y creamos las tarjetas
    characters.forEach(character => {
        const characterCard = document.createElement("div");
        characterCard.className = "character-card";

        characterCard.innerHTML = `
            <h2>${character.name}</h2>
            <img src="${character.img}" alt="${character.name}">
            <p><strong>Age:</strong> ${character.age || 'Desconocida'}</p>
            <p><strong>Role:</strong> ${character.role}</p>
            <p>${character.description}</p>
        `;

        characterContainer.appendChild(characterCard);
    });
}

// Función para alternar entre las dos listas y cambiar el fondo
function toggleCharacters() {
    const body = document.body;

    if (showingGravityFalls) {
        // Mostrar personajes del Armagedón y cambiar fondo
        displayCharacters(armagedonCharacters);
        document.getElementById("toggle-button").innerText = "Mostrar Personajes de Gravity Falls";
        body.classList.remove("gravity-falls");
        body.classList.add("armagedon");
    } else {
        // Mostrar personajes de Gravity Falls y cambiar fondo
        displayCharacters(gravityFallsCharacters);
        document.getElementById("toggle-button").innerText = "Mostrar Personajes de Armagedón";
        body.classList.remove("armagedon");
        body.classList.add("gravity-falls");
    }
    showingGravityFalls = !showingGravityFalls;
}

// Evento al hacer clic en el botón de alternar
document.getElementById("toggle-button").addEventListener("click", toggleCharacters);

// Mostrar personajes de Gravity Falls por defecto y establecer el fondo por defecto
document.addEventListener("DOMContentLoaded", () => {
    // Establecer el fondo por defecto
    document.body.classList.add("gravity-falls");
    
    // Mostrar personajes de Gravity Falls
    displayCharacters(gravityFallsCharacters);
});