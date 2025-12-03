"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"

interface Question {
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    question: "¿Qué ocurre si declaras una variable sin asignarle un valor y luego intentas usarla?",
    options: [
      "Toma automáticamente el valor 0",
      "El programa se detiene en tiempo de ejecución",
      "Produce un error de compilación",
      "Se inicializa con un valor aleatorio",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál es el resultado de evaluar la expresión 18 / 5 usando tipos int?",
    options: ["3.6", "3", "4", "5"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué valor se obtiene de la expresión true && false || true?",
    options: ["false", "true", "Depende del compilador", "Produce error"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué tipo de dato es el más adecuado para almacenar una letra individual?",
    options: ["String", "char", "boolean", "short"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué instrucción permite ejecutar un bloque solo cuando NO se cumple una condición?",
    options: ["if", "else", "switch", "case"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué salida produce este código: for (i = 1; i <= 3; i++) {} System.out.println(i);?",
    options: ["3", "1", "4", "0"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué tipo de bucle resulta ideal cuando conoces de antemano el número exacto de repeticiones?",
    options: ["while", "do-while", "for", "if"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué instrucción permite saltar parte del código dentro de un bucle sin abandonarlo?",
    options: ["jump", "skip", "continue", "break"],
    correctAnswer: 2,
  },
  {
    question: "Si una condición de switch no coincide con ningún case pero existe default, ¿qué ocurre?",
    options: ["No se ejecuta nada", "Se ejecuta default", "El programa finaliza", "Da error de compilación"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué palabra clave indica que un método puede aceptar un número variable de argumentos?",
    options: ["multi", "varargs", "...", "args"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué resultado produce calc(2,3,4) en return a + b * c?",
    options: ["20", "14", "24", "18"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál de las siguientes es una firma de método válida?",
    options: ["public metodo:int()", "void metodo[]()", "int metodo(int x)", "method int metodo()"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué característica NO puede tener un identificador de Java?",
    options: ["Contener guiones bajos", "Empezar por una letra", "Contener $, * o /", "Incluir mayúsculas"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué ocurre cuando una clase hereda de otra?",
    options: [
      "Copia métodos en tiempo de ejecución",
      "Adquiere atributos y métodos públicos o protegidos",
      "Debe implementar todos los métodos del padre",
      "No puede añadir métodos nuevos",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué elemento NO puede contener una interfaz en Java?",
    options: ["Métodos abstractos", "Constantes públicas", "Constructores", "Métodos estáticos"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué palabra clave evita que una clase sea heredada?",
    options: ["protected", "static", "final", "abstract"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué ocurre si una excepción no se captura ni se declara?",
    options: [
      "El programa continúa",
      "La excepción se ignora",
      "El programa termina abruptamente",
      "Se ejecuta una advertencia",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué excepción ocurre al acceder a un índice inexistente en un array?",
    options: ["IndexError", "ArrayException", "OutOfMemoryError", "ArrayIndexOutOfBoundsException"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué imprime un array creado como new int[4] al consultar length?",
    options: ["3", "4", "0", "Depende del contenido"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué colección garantiza que los elementos no se repitan?",
    options: ["ArrayList", "HashSet", "LinkedList", "Queue"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué estructura mantiene los elementos ordenados por clave?",
    options: ["HashMap", "HashSet", "TreeMap", "ArrayList"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué ocurre si una función recursiva no define un caso base?",
    options: ["Nada", "Devuelve null", "Crea recursión infinita", "Se detiene a las 10 llamadas"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué hace un método recursivo correctamente construido?",
    options: [
      "Se llama indefinidamente",
      "Reduce el problema hasta el caso base",
      "Solo suma valores",
      "Solo sirve para arrays",
    ],
    correctAnswer: 1,
  },
  {
    question: '¿Qué representa este JSON: {"edad":25,"nombre":"Sara"}?',
    options: ["Un vector", "Un objeto con dos propiedades", "Un archivo binario", "Un arreglo de enteros"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué hace gson.toJson(obj)?",
    options: [
      "Modifica el objeto",
      "Convierte obj en JSON",
      "Convierte JSON en objeto",
      "Escribe un fichero automáticamente",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué método convierte texto JSON en objeto Java?",
    options: ["readJson()", "importJson()", "fromJson()", "decodeJson()"],
    correctAnswer: 2,
  },
  {
    question: "En FXML, ¿qué atributo vincula un botón a un método del controlador?",
    options: ["onPress", "fx:method", "onAction", "fx:controller"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué significa fx:controller en un archivo FXML?",
    options: ["Define el CSS", "Indica la clase que gestiona eventos", "Establece la tabulación", "Conecta con BD"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué ocurre si un control FXML tiene fx:id pero no existe la variable en el controlador?",
    options: [
      "No pasa nada",
      "El programa ignora el control",
      "Se lanza excepción al cargar",
      "El valor se convierte null",
    ],
    correctAnswer: 2,
  },
  {
    question: '¿Qué hace JavaFX cuando un botón tiene onAction="#guardarInfo"?',
    options: ["Llama al método guardarInfo()", "Convierte el texto", "Muestra un mensaje", "Cierra la ventana"],
    correctAnswer: 0,
  },
]

export default function ProgramacionDiciembreIIQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([])

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(answerIndex)
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer

    if (isCorrect) {
      setScore(score + 1)
    } else {
      setWrongAnswers(wrongAnswers + 1)
    }

    setAnsweredQuestions([...answeredQuestions, currentQuestion])
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setWrongAnswers(0)
    setAnsweredQuestions([])
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100)
    const finalScore = Math.max(0, score - wrongAnswers / 3)
    const finalPercentage = Math.round((finalScore / questions.length) * 100)

    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-8 bg-card border-border">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Resultado Final</h2>
            <div className="space-y-4">
              <div>
                <div className="text-6xl font-bold text-primary">{percentage}%</div>
                <p className="text-xl text-muted-foreground">
                  Has acertado {score} de {questions.length} preguntas
                </p>
                <p className="text-lg text-muted-foreground">Respuestas incorrectas: {wrongAnswers}</p>
              </div>
              <div className="border-t border-border pt-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Fórmula de Corrección por Aciertos y Errores
                </h3>
                <p className="text-sm text-muted-foreground mb-2">Puntuación Final = Aciertos - (Errores / 3)</p>
                <div className="text-4xl font-bold text-blue-500">{finalScore.toFixed(2)}</div>
                <p className="text-lg text-muted-foreground mt-2">Nota Final: {finalPercentage}%</p>
                <p className="text-xs text-muted-foreground mt-1">
                  ({score} aciertos - {wrongAnswers} errores / 3 = {finalScore.toFixed(2)} puntos)
                </p>
              </div>
            </div>
            {finalPercentage >= 80 && <p className="text-lg text-green-500">Excelente trabajo</p>}
            {finalPercentage >= 60 && finalPercentage < 80 && (
              <p className="text-lg text-blue-500">Buen resultado, sigue practicando</p>
            )}
            {finalPercentage < 60 && <p className="text-lg text-orange-500">Necesitas repasar más</p>}
            <div className="flex gap-4 justify-center">
              <Button onClick={resetQuiz} size="lg">
                Reintentar
              </Button>
              <Link href="/">
                <Button variant="outline" size="lg">
                  Volver al inicio
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-foreground">Programación - Simulacro Diciembre II</h1>
            <span className="text-muted-foreground">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-right">
            <span className="text-sm text-muted-foreground">Puntuación: {score}</span>
          </div>
        </div>

        <Card className="p-6 bg-card border-border">
          <h2 className="text-xl font-semibold mb-6 text-foreground whitespace-pre-line">{question.question}</h2>
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === question.correctAnswer
              const showCorrect = selectedAnswer !== null && isCorrect
              const showIncorrect = selectedAnswer !== null && isSelected && !isCorrect

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    showCorrect
                      ? "border-green-500 bg-green-500/10"
                      : showIncorrect
                        ? "border-red-500 bg-red-500/10"
                        : isSelected
                          ? "border-purple-500 bg-purple-500/10"
                          : "border-border hover:border-purple-500/50 bg-card"
                  } ${selectedAnswer !== null ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">
                      <span className="font-semibold mr-2">{String.fromCharCode(65 + index)})</span>
                      {option}
                    </span>
                    {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                    {showIncorrect && <XCircle className="w-5 h-5 text-red-500" />}
                  </div>
                </button>
              )
            })}
          </div>

          {selectedAnswer !== null && (
            <div className="mt-6">
              <Button onClick={handleNext} size="lg" className="w-full">
                {currentQuestion < questions.length - 1 ? "Siguiente pregunta" : "Ver resultados"}
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
