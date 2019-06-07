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
    }

    {
        pregunta: "¿En qué año se publicó El Aleph de Jorge Luis Borges?"
        opciones: {
            a: "1944",
            b: "1956",
            c: "1949",
        },
        correcta: "c",
    },

    {
        pregunta: "¿Quién es el autor del Martín Fierro?"
        opciones: {
            a: "Ricardo Güiraldes",
            b: "Hilario Ascasubi",
            c: "José Hernández",
        },
        correcta: "c",
    },

    {
        pregunta: "¿De qué nacionalidad era el escritor César Vallejo?"
        opciones: {
            a: "argentino",
            b: "peruano",
            c: "colombiano",
        },
        correcta: "b",
    },

    {
        pregunta: "¿Cuál es el título completo de la siguiente novela de Gabriel García Márquez: El amor en los tiempos del...?"
        opciones: {
            a: "cólera",
            b: "hambre",
            c: "vicio",
        },
        correcta: "a",
    },

    {
        pregunta: "¿Quién fundó la revista Sur?"
        opciones: {
            a: "Adolfo Bioy Casares",
            b: "Victoria Ocampo",
            c: "Julio Blanco",
        },
        correcta: "b",
    },
    
    {
        pregunta: "¿Qué personaje del Martín Fierro muere en el cuento de Borges, "El fin"?"
        opciones: {
            a: "La china",
            b: "Isidoro Cruz",
            c: "Martín Fierro",
        },
        correcta: "c",
    }

];


