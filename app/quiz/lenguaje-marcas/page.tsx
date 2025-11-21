"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Question {
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    question: "¿Qué propiedad CSS establece espacio entre elementos?",
    options: ["padding", "gap", "margin-spacing", "margin"],
    correctAnswer: 3,
  },
  {
    question: "¿Cómo defines un ancho máximo para un elemento en CSS?",
    options: ["width-limit", "max-size", "max-width", "width"],
    correctAnswer: 2,
  },
  {
    question: "¿Cómo haces un sitio web responsive?",
    options: ["Usando layout fijo", "Usando JavaScript", "Usando media queries", "Usando estilos en línea"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué significa HTML?",
    options: [
      "Lenguaje de Marcado de Hipertexto",
      "Lenguaje de Markdown de Hipertexto",
      "Lenguaje de Marcado de Herramientas para el Hogar",
      "Lenguaje de Marcado de Transferencia de Hipertexto",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Cómo haces que un enlace se abra en una nueva pestaña?",
    options: ['target="_new"', 'target="_blank"', 'newtab="true"', 'window="_blank"'],
    correctAnswer: 1,
  },
  {
    question: "¿Qué etiqueta define un elemento de lista?",
    options: ["<item>", "<li>", "<list>", "<entry>"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué hace la etiqueta `<title>`?",
    options: [
      "Muestra un encabezado",
      "Añade un tooltip",
      "Establece el título de la pestaña",
      "Define el título de una tabla",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué propiedad CSS controla el tamaño del texto?",
    options: ["font-style", "font-size", "text-size", "size"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué selector apunta a todos los elementos `<p>` en CSS?",
    options: ["p", "#p", ".p", "p*"],
    correctAnswer: 0,
  },
  {
    question: "¿Cómo se comenta en HTML?",
    options: ["/* comentario */", "// comentario", "<!-- comentario -->", "## comentario"],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál es el valor de visualización por defecto para `<div>`?",
    options: ["inline", "block", "inline-block", "flex"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué propiedad CSS pone el texto en cursiva?",
    options: ["font-style", "font-variant", "font-italic", "text-style"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué significa CSS?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál de los siguientes es un elemento de tipo bloque?",
    options: ["<span>", "<strong>", "<div>", "<em>"],
    correctAnswer: 2,
  },
  {
    question: "¿Cómo haces que el texto esté en negrita en HTML?",
    options: ["<bold>", "<em>", "<strong>", "<text-bold>"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué representa la etiqueta `<footer>`?",
    options: ["Fin de página", "Bloque de copyright", "Parte inferior del contenido", "Todas las anteriores"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué propiedad en CSS se usa para cambiar el color del texto?",
    options: ["font-color", "color", "text-color", "foreground-color"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es la sintaxis correcta para establecer un color de fondo en CSS?",
    options: ["background-color: blue;", "bg-color: blue;", "color-background: blue;", "bg:blue;"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué etiqueta se usa para crear un enlace en HTML?",
    options: ["<a>", "<link>", "<url>", "<href>"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué unidad se usa comúnmente en media queries?",
    options: ["px", "em", "rem", "percent"],
    correctAnswer: 0,
  },
  {
    question: "¿Cómo enlazas un archivo CSS externo en HTML?",
    options: [
      '<link rel="stylesheet" href="style.css">',
      "<stylesheet>style.css</stylesheet>",
      '<style src="style.css">',
      '<css link="style.css">',
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál es el propósito de la etiqueta `<meta viewport>`?",
    options: ["Para SEO", "Para tema de color", "Para diseño responsive", "Para analítica"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué etiqueta crea un menú desplegable?",
    options: ["<select>", "<dropdown>", "<option>", "<list>"],
    correctAnswer: 0,
  },
  {
    question: "¿Cómo puedes centrar un elemento de bloque en CSS?",
    options: ["text-align: center;", "margin: auto;", "position: center;", "padding: center;"],
    correctAnswer: 1,
  },
  {
    question: "¿Cómo se comenta en CSS?",
    options: ["<!-- comentario -->", "# comentario", "// comentario", "/* comentario */"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué atributo se usa para definir estilos en línea en HTML?",
    options: ["class", "style", "css", "styles"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué regla CSS se aplica a todos los elementos de una página?",
    options: ["body", "*", "html", "all"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué etiqueta HTML se usa para el encabezado más grande en HTML?",
    options: ["<h6>", "<h1>", "<h4>", "<h3>"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es la sintaxis correcta de una media query?",
    options: [
      "@media screen and (max-width: 600px)",
      "@screen media(max-width:600px)",
      "@media(max-width=600px)",
      "@media[max-width=600px]",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué etiqueta crea una lista numerada?",
    options: ["<ul>", "<ol>", "<list>", "<nl>"],
    correctAnswer: 1,
  },
  {
    question: "¿Cómo seleccionas todos los elementos dentro de un `<div>`?",
    options: ["div.all", "div *", "* div", "div > all"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué etiqueta HTML se utiliza para definir una fila de tabla?",
    options: ["<column>", "<row>", "<tr>", "<td>"],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál es la forma correcta de incluir Google Fonts en HTML?",
    options: [
      '<link href="https://fonts.googleapis.com/...">',
      '<font link="https://...">',
      '<style src="google.com">',
      '<font style="google">',
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué hace la etiqueta `<br>`?",
    options: ["Salta una línea", "Inserta un espacio", "Pone el texto en negrita", "Define un nuevo párrafo"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué atributo HTML especifica un texto alternativo para una imagen?",
    options: ["title", "alt", "text", "description"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es la HTML correcta para crear una casilla de verificación (checkbox)?",
    options: ["<checkbox>", '<input type="checkbox">', "<input checkbox>", "<check>"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué media query apunta solo a dispositivos con un ancho máximo de 768px?",
    options: [
      "@media screen and (max-width:768px)",
      "@media(max-device:768px)",
      "@screen and max-width:768px",
      "@media[max-width:768px]",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Cómo aplicas un estilo a un elemento con id 'main'?",
    options: ["#main", ".main", "main", "$id-main"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué etiqueta de HTML5 es semántica?",
    options: ["<div>", "<section>", "<span>", "<bold>"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué elemento HTML se utiliza para insertar una imagen?",
    options: ["<image>", "<pic>", "<img>", "<media>"],
    correctAnswer: 2,
  },
]

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function LenguajeMarcasQuiz() {
  const [started, setStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [finished, setFinished] = useState(false)

  const startQuiz = () => {
    setShuffledQuestions(shuffleArray(questions))
    setStarted(true)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setScore(0)
    setFinished(false)
  }

  const handleAnswerClick = (answerIndex: number) => {
    if (showFeedback) return

    setSelectedAnswer(answerIndex)
    setShowFeedback(true)

    if (answerIndex === shuffledQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      setFinished(true)
    }
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-lg p-8 bg-card border-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold">
              <span className="text-foreground">Lenguaje de Marcas</span>
            </h1>
            <p className="text-muted-foreground text-lg">Domina los conceptos fundamentales de HTML y CSS</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">40 Preguntas</p>
                  <p className="text-sm text-muted-foreground">Cubriendo todos los temas de HTML y CSS</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesión es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentación Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
            >
              Comenzar Quiz
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  if (finished) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100)
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-lg p-8 bg-card border-border">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Quiz Completado</h2>
            <div className="py-8">
              <div className="text-6xl font-bold text-blue-500 mb-2">{percentage}%</div>
              <p className="text-xl text-muted-foreground">
                {score} de {shuffledQuestions.length} correctas
              </p>
            </div>

            <div className="space-y-2">
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas HTML y CSS.</p>}
              {percentage >= 70 && percentage < 90 && (
                <p className="text-lg text-foreground">Muy bien. Buen conocimiento de HTML y CSS.</p>
              )}
              {percentage >= 50 && percentage < 70 && (
                <p className="text-lg text-foreground">Bien hecho. Sigue practicando.</p>
              )}
              {percentage < 50 && <p className="text-lg text-foreground">Sigue aprendiendo. Tú puedes.</p>}
            </div>

            <div className="space-y-3">
              <Button
                onClick={startQuiz}
                size="lg"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
              >
                Intentar de Nuevo
              </Button>
              <Link href="/" className="block">
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex]

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 bg-card border-border">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Salir del examen
        </Link>

        <div className="space-y-6">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>
              Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}
            </span>
            <span>Puntuación: {score}</span>
          </div>

          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
            />
          </div>

          <h2 className="text-2xl font-bold text-foreground text-balance">{currentQuestion.question}</h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === currentQuestion.correctAnswer
              const showCorrect = showFeedback && isCorrect
              const showIncorrect = showFeedback && isSelected && !isCorrect

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={showFeedback}
                  className={`
                    w-full text-left p-4 rounded-lg border-2 transition-all
                    ${!showFeedback && "hover:border-orange-500 hover:bg-accent cursor-pointer"}
                    ${showFeedback && "cursor-not-allowed"}
                    ${isSelected && !showFeedback && "border-orange-500 bg-accent"}
                    ${showCorrect && "border-green-500 bg-green-500/10"}
                    ${showIncorrect && "border-red-500 bg-red-500/10"}
                    ${!isSelected && !showCorrect && !showIncorrect && "border-border bg-card"}
                  `}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-foreground font-medium">{option}</span>
                    {showCorrect && <Check className="w-5 h-5 text-green-500 shrink-0" />}
                    {showIncorrect && <X className="w-5 h-5 text-red-500 shrink-0" />}
                  </div>
                </button>
              )
            })}
          </div>

          {showFeedback && (
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="text-sm">
                {selectedAnswer === currentQuestion.correctAnswer ? (
                  <span className="text-green-500 font-semibold">Correcto</span>
                ) : (
                  <span className="text-red-500 font-semibold">Incorrecto</span>
                )}
              </div>
              <Button onClick={handleNext} className="bg-orange-500 hover:bg-orange-600 text-white">
                {currentQuestionIndex < shuffledQuestions.length - 1 ? "Siguiente" : "Ver Resultados"}
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
