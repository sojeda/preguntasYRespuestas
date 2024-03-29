var trivia = document.getElementById("trivia");
var results = document.getElementById("results");
var submit = document.getElementById("submit");
var mensaje = document.getElementById("mensaje")
var cantidadDePreguntas = 3;

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
        pregunta: "¿Qué comen los Koalas?",
        opciones: {
            a: "Papas Fritas",
            b: "Torta",
            c: "Caramelos",
            d: "Hojas de Eucalipto"
        },
        correcta: "d"
    },
    {
        pregunta: "¿En que país se encuentra la torre de pizza?",
        opciones: {
            a: "Francia",
            b: "Italia",
            c: "Estados Unidos",
            d: "Alemania"
        },
        correcta: "b"
    },
    {
        pregunta: "¿En que país se ecuentra la torre Eiffel?",
        opciones: {
            a: "Francia",
            b: "Alemania",
            c: "Argentina",
            d: "Inglaterra"
        },
        correcta: "a"
    },
    {
        pregunta: "¿Cuanto es 10 por 10?",
        opciones: {
            a: "1000",
            b: "50",
            c: "100",
            d: "32"
        },
        correcta: "c"
    },
    {
        pregunta: "¿Cúal es el presidente de estados unidos en 2019?",
        opciones: {
            a: "José Mujica",
            b: "Emmanuel Macron",
            c: "Cristina Fernandez",
            d: "Donald Trump"
        },
        correcta: "d"
    },
    {
        pregunta: "¿Cúal de estos es un color?",
        opciones: {
            a: "Azul",
            b: "Torta",
            c: "Caramelos",
            d: "Campera"
        },
        correcta: "a"
    },
    {
        pregunta: "¿Cúal de estos es una etiqueta de HTML?",
        opciones: {
            a: "Pepsi",
            b: "Torta",
            c: "Div",
            d: "Function"
        },
        correcta: "c"
    },
    {
        pregunta: "¿En que país se encuentra el obelisco en Av. 9 de Julio?",
        opciones: {
            a: "Alemania",
            b: "Francia",
            c: "Italia",
            d: "Argentina"
        },
        correcta: "d"
    },
    {
        pregunta: "¿Cómo se llaman los profesores de Acamica DWFS BUE-10?",
        opciones: {
            a: "Armando y Saul",
            b: "Sergio y Gabriel",
            c: "Lorenzo y Sofia",
            d: "Eustaquio y Arturo"
        },
        correcta: "b"
    },
    {
        pregunta: "¿Quíen es el presidente de Francia en 2019?",
        opciones: {
            a: "Emmanuel Macron",
            b: "José Mujica",
            c: "Donald Trump",
            d: "Mauricio Macri"
        },
        correcta: "a"
    },
    {

        pregunta : "¿En qué día se llevó a cabo la Revolución de mayo?",
        opciones: {
        a : "10 de mayo",
        b : "9 de julio",
        c : "20 de junio",
        d : '25 de mayo',
        },
        correcta: 'd',
    },
    {
        pregunta : "¿En qué día se firmó el acta de la Independencia?",
        opciones: {
        a : "10 de mayo",
        b : "9 de julio",
        c : "20 de junio",
        d : '25 de mayo',
        },
        correcta: 'd',
    },
    {
        pregunta : "¿En qué año se prohibieron las corridas de toros en Buenos Aires",
        opciones: {
        a : "1810",
        b : "1565",
        c : "1954",
        d : '1822',
        },
        correcta: 'd',
    },
    {
        pregunta : "¿En qué año Sarmiento fue nombrado presidente?",
        opciones: {
        a : "1810",
        b : "1868",
        c : "1860",
        d : '1915',
        },
        correcta: 'b',
    },
    {
        pregunta: "¿Cuándo se prohibió la esclavitud en la Argentina?",
        opciones: {
        a : "1813",
        b : "1822",
        c : "1545",
        d : '1860',
        },
        correcta: 'a',
    },
    {
        pregunta: "¿Quién fundó el primer asentamiento en Buenos Aires?",
        opciones: {
        a : "Pedro de Mendoza",
        b : "Juan de Garay",
        c : "Manuel Belgrano",
        d : 'Perón',
        },
        correcta: 'a',
    },
    {
        pregunta: "¿En qué año se publicó El Aleph de Jorge Luis Borges?",
        opciones: {
            a: "1944",
            b: "1956",
            c: "1949",
        },
        correcta: 'c',
    },

    {
        pregunta: "¿Quién es el autor del Martín Fierro?",
        opciones: {
            a: "Ricardo Güiraldes",
            b: "Hilario Ascasubi",
            c: "José Hernández",
        },
        correcta: 'c',
    },

    {
        pregunta: "¿De qué nacionalidad era el escritor César Vallejo?",
        opciones: {
            a: "argentino",
            b: "peruano",
            c: "colombiano",
        },
        correcta: 'b',
    },
    {
        pregunta: "¿Cuál es el título completo de la siguiente novela de Gabriel García Márquez: El amor en los tiempos del...?",
        opciones: {
            a: "cólera",
            b: "hambre",
            c: "vicio",
        },
        correcta: 'a',
    },
    {
        pregunta: "¿Quién fundó la revista Sur?",
        opciones: {
            a: "Adolfo Bioy Casares",
            b: "Victoria Ocampo",
            c: "Julio Blanco",
        },
        correcta: 'b',
    },
    {
        pregunta: "¿Qué personaje del Martín Fierro muere en el cuento de Borges, El fin?",
        opciones: {
            a: "La china",
            b: "Isidoro Cruz",
            c: "Martín Fierro",
        },
        correcta: 'c',
    },
    {
        pregunta: "Los beatles fueron:",
        opciones: {
          a: "Banda de rock, nativa de Liverpool",
          b: "Banda de pop, nativa de Canada",
          c: "Banda de cuarteto, nativa de Argentina",
          d: "Banda de cumbia, nativa de Colombia"
        },
        correcta: "a"
    },

    {
        pregunta: "¿Qué instrumento musical toca Lisa Simpson?",
        opciones: {
          a: "Bateria",
          b: "Saxofon",
          c: "Trompeta",
          d: "flauta"
        },
        correcta: "b"
    },

    {
        pregunta: "La comida favorita de Homero Simpson es:",
        opciones: {
          a: "Carne asada",
          b: "Cachapa",
          c: "Donas",
          d: "Pizza"
        },
        correcta: "c"
    },

    {
        pregunta: "¿Cual fue la empresa creadora del iphone?",
        opciones: {
          a: "Google",
          b: "Samsung",
          c: "Facebook",
          d: "Apple"
        },
        correcta: "d"
    },
    {
      pregunta: '¿Cuánto es 3 x 5?',
          opciones: {
            a: 6,
            b: 43,
            c: 15,
            d: 2,
          },
          correcta: 'c',
        },
      {
        pregunta: '¿Quién pintó la "Última Cena"',
        opciones: {
          a: 'Leonardo Da Vinci',
          b: 'Picasso',
          c: 'Maradonna',
          d: 'Stephen Hawking',
        },
        correcta: 'a',
      },
      {
      pregunta: '¿Cuántas patas tienen las arañas?',
      opciones: {
        a: 6,
        b: 8,
        c: 4,
        d: 2,
      },
      correcta: 'b',
      },
      {
      pregunta: '¿Cuántos corazones tienen los pulpos?',
      opciones: {
        a: 2,
        b: 6,
        c: 15,
        d: 3,
      },
      correcta: 'd',
      },
      {
      pregunta: '¿En qué país está ubicado el Taj Mahal?',
      opciones: {
        a: 'Arabia Saudita',
        b: 'India',
        c: 'Argentina',
        d: 'Nueva Zelanda',
      },
      correcta: 'b',
      },
];

function buildTrivia () {
    // 2. Desordenar las preguntas
    preguntas.sort(function () {
        return Math.random() - 0.5
    })
    console.log('Desordenar las preguntas')

    // 3. Tomar los primeros tres
    let misPreguntas = preguntas.slice(0, cantidadDePreguntas)
    console.log('Agarro las primeras tres')

    // 4. Mostrar las preguntas
    var salida = []
    misPreguntas.forEach(function (pregunta, numeroPregunta) {
        // Imprimir las preguntas
        var respuestas = []
        for (opcion in pregunta.opciones) {
            var respuesta = pregunta.opciones[opcion]
            respuestas.push(
                `<label>
                    <input type="radio" name="opcion-${numeroPregunta}" value="${opcion}">
                    <span>${opcion}: ${respuesta}</span>
                </label>`
            )
        }

        // Imprimir la pregunta
        salida.push(
            `<div class="question">
                ${pregunta.pregunta}
                <div class="answers">
                    ${respuestas.join('')}
                </div>
            </div>`
        )
    })
    trivia.innerHTML = salida.join('')
}
buildTrivia()

function showResults ()
{
    const contenedoresDePreguntas = trivia.querySelectorAll('.question')
    let cantidadRespuestasCorrectas = 0
    let cantidadPreguntasContestadas = 0

    // Tanto {contenedoresDePreguntas} como {preguntas}
    // comparten el mismo indice. La primera de una,
    // corresponde a la primera la otra.
    preguntas.slice(0, cantidadDePreguntas).forEach(function (pregunta, numeroPregunta) {
        const contenedorDePregunta = contenedoresDePreguntas[numeroPregunta]
        const selector = `input[name=opcion-${numeroPregunta}]:checked`
        const inputSeleccionado = contenedorDePregunta.querySelector(selector)

        if (inputSeleccionado) {
            cantidadPreguntasContestadas++
            if(inputSeleccionado.value == pregunta.correcta) {
                contenedorDePregunta.style.color = 'rgb(61, 116, 55)'
                // Sumamos uno al contador de respuestas correctas
                cantidadRespuestasCorrectas++
            } else {
                contenedorDePregunta.style.color = 'red'
            }
        }
    })

    if (cantidadPreguntasContestadas === cantidadDePreguntas) {
        if (cantidadRespuestasCorrectas === cantidadDePreguntas) {

            mensaje.innerHTML = 'Todas las respuestas son correctas'
            let contador = 6
            setInterval(function () {
            	contador--
            	mensaje.innerHTML = `Recargando en ${contador} segundos`
            	if (contador === 0)
            		window.location.reload()
            }, 1000)
        } else {
            mensaje.innerHTML = 'No todas las respuestas son correctas'
        }
    } else {
        mensaje.innerHTML = 'Debe contestar todas las preguntas'
    }
}

submit.addEventListener('click', showResults)
