var trivia = document.getElementById("trivia");
var results = document.getElementById("results");
var submit = document.getElementById("submit");
var preguntas = [
    {
        pregunta: '¿Cuantas copas Libertadores tiene el equipo Boca juniors?',
        opciones:{
            a: '2',
            b: '3',
            c: '6',
            d: '7',
        },
        correcta: 'd',
    },
    {
        pregunta: '¿Cuantos penales atajo Sergio Romero en la Semi Final de la Copa del Mundo 2014?',
        opciones:{
            a: '2',
            b: '4',
            c: '0',
            d: '1',
        },
        correcta: 'a',
    },
    {
        pregunta: '¿Cual es el apodo del famoso jugador de basquet Andres Nocioni?',
        opciones:{
            a: 'Pocho',
            b: 'Chapo',
            c: 'Pepo',
            d: 'Chapu',
        },
        correcta: 'd',
    },
    {
        pregunta: '¿En que año ganó la Copa Libertadores el equipo de Estudiantes de La Plata?',
        opciones:{
            a: '2001',
            b: '2005',
            c: '2009',
            d: '2015',
        },
        correcta: 'c',
    },
    {
        pregunta: '¿En que País se encuentra el Wembley Arena?',
        opciones:{
            a: 'Reino Unido',
            b: 'Arabia Saudita',
            c: 'Egipto',
            d: 'Pakistan',
        },
        correcta: 'a',
    },
    {
        pregunta: '¿En que país se originó el Kung Fu?',
        opciones:{
            a: 'Japón',
            b: 'Argentina',
            c: 'China',
            d: 'Korea',
        },
        correcta: 'c',
    },
    {
        pregunta: '¿Cuando finalizó la segunda Guerra Mundial?',
        opciones:{
            a: '1945',
            b: '1946',
            c: '1938',
            d: '1948',
        },
        correcta: 'a',
    },
    {
        pregunta: '¿En que historica Capital se encuentra la Torre Eiffel?',
        opciones:{
            a: 'Berlín',
            b: 'Madrid',
            c: 'París',
            d: 'Roma',
        },
        correcta: 'c',
    },
    {
        pregunta: '¿Cual es el resultado de (20*10+8/4)*2?',
        opciones:{
            a: '210',
            b: '200',
            c: '101',
            d: '112',
        },
        correcta: 'c',
    },
    {
        pregunta: '¿Cuales es la lengua más hablada del Mundo?',
        opciones:{
            a: 'Inglés',
            b: 'Mandarín',
            c: 'Español',
            d: 'Francés',
        },
        correcta: 'b',
    },
    {
        pregunta: '¿Donde se encuentra la famosa Casa Blanca?',
        opciones:{
            a: 'Washington DC',
            b: 'Los Angeles',
            c: 'Otawa',
            d: 'Toronto',
        },
        correcta: 'a',
    },
    {
        pregunta: '¿Cual es el 3er Planeta del sistema solar?',
        opciones:{
            a: 'Mercurio',
            b: 'Saturno',
            c: 'Marte',
            d: 'Tierra',
        },
        correcta: 'd',
    },
    {
        pregunta: '¿A quien le crecia la nariz cuando mentía?',
        opciones:{
            a: 'Homero',
            b: 'Pinocho',
            c: 'Pingocho',
            d: 'Mario Bross',
        },
        correcta: 'b',
    },
    {
        question = "¿En qué día se llevó a cabo la Revolución de mayo?",
        answers: {
        a = "10 de mayo",
        b = "9 de julio",
        c = "20 de junio",
        d = '25 de mayo',
        },
        wright: 'd',
    },
    {
        question = "¿En qué día se firmó el acta de la Independencia?",
        answers: {
        a = "10 de mayo",
        b = "9 de julio",
        c = "20 de junio",
        d = '25 de mayo',
        },
        wright: 'd',
    },
    {
        question = "¿En qué año se prohibieron las corridas de toros en Buenos Aires",
        answers: {
        a = "1810",
        b = "1565",
        c = "1954",
        d = '1822',
        },
        wright: 'd',
    },
    {
        question = "¿En qué año Sarmiento fue nombrado presidente?",
        answers: {
        a = "1810",
        b = "1880",
        c = "1860",
        d = '1915',
        },
        wright: 'b',
    },
    {
        question = "¿Cuándo se prohibió la esclavitud en la Argentina?",
        answers: {
        a = "1813",
        b = "1822",
        c = "1545",
        d = '1860',
        },
        wright: 'a',
    },
    {
        question = "¿Quién fundó el primer asentamiento en Buenos Aires?",
        answers: {
        a = "Pedro de Mendoza",
        b = "Juan de Garay",
        c = "Manuel Belgrano",
        d = 'Perón',
        },
        wright: 'a',
    }
];
