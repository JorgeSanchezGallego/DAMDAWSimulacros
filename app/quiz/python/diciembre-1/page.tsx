"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Qué tipo de dato devuelve la función input() al leer desde teclado?",
    options: ["int", "float", "str", "bool"],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "¿Qué operador obtiene el resto de una división?",
    options: ["%", "/", "//", "**"],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: "¿Cuál de los siguientes identificadores es válido en Python?",
    options: ["nombre.apellido", "4variable", "nombre_apellido", "nombre-apellido"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "¿Qué muestra este código: print(12//5)?",
    options: ["12", "5", "2.4", "2"],
    correctAnswer: 3,
  },
  {
    id: 5,
    question: "¿Cuál de estas llamadas imprime sin salto de línea?",
    options: ["echo()", "print(…, end=””)", "display()", "write()"],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "¿Cuál es el resultado de 3**4?",
    options: ["81", "64", "7", "12"],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: "¿Qué comparación devuelve True?",
    options: ["4 == “4”", "2 > 10", "“b” in “a”", "7 != 5"],
    correctAnswer: 3,
  },
  {
    id: 8,
    question: "¿Qué imprime este código? if 1: print(“Hola”) else: print(“Adiós”)",
    options: ["Error", "Hola", "Adiós", "1"],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: "¿Qué imprime este bucle? for x in [5,7,9]: if x == 7: break; print(x)",
    options: ["5 7", "5", "7 9", "5 7 9"],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "¿Qué función devuelve el número de elementos de una tupla?",
    options: ["size()", "count()", "len()", "length()"],
    correctAnswer: 2,
  },
  {
    id: 11,
    question: "¿Qué imprime print(“ABC”[1])?",
    options: ["A", "B", "C", "BC"],
    correctAnswer: 1,
  },
  {
    id: 12,
    question: "¿Qué genera range(4)?",
    options: ["0,1,2,3", "[1,2,3,4]", "[4]", "(1,2,3,4)"],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: "¿Qué ocurre al modificar una posición de una lista?",
    options: ["Se crea una copia nueva", "La lista original cambia", "Se produce un error", "Solo cambia una vista temporal"],
    correctAnswer: 1,
  },
  {
    id: 14,
    question: "¿Qué método elimina el último elemento de una lista?",
    options: ["erase()", "remove()", "delete()", "pop()"],
    correctAnswer: 3,
  },
  {
    id: 15,
    question: "¿Qué produce “Python”[1:4]?",
    options: ["Pyth", "hon", "yth", "thon"],
    correctAnswer: 2,
  },
  {
    id: 16,
    question: "¿Qué tipo devuelve type([1,2,3])?",
    options: ["list", "tuple", "dict", "array"],
    correctAnswer: 0,
  },
  {
    id: 17,
    question: "¿Qué palabra clave define una función?",
    options: ["fn", "define", "def", "make"],
    correctAnswer: 2,
  },
  {
    id: 18,
    question: "¿Qué ocurre si llamo una función sin argumentos obligatorios?",
    options: ["Genera un error", "Ignora los argumentos", "Retorna None", "Usa valores aleatorios"],
    correctAnswer: 0,
  },
  {
    id: 19,
    question: "¿Qué significa variable global?",
    options: ["Solo en una función", "Se borra sola", "Usable en todo el programa", "Es numérica por defecto"],
    correctAnswer: 2,
  },
  {
    id: 20,
    question: "¿Cómo se importa una función concreta?",
    options: ["import todo", "from modulo import funcion", "import funcion", "using modulo.funcion"],
    correctAnswer: 1,
  },
  {
    id: 21,
    question: "¿Qué instrucción devuelve un valor?",
    options: ["stop", "break", "pass", "return"],
    correctAnswer: 3,
  },
  {
    id: 22,
    question: "Si una función no tiene return, ¿Qué devuelve?",
    options: ["0", "“”", "False", "None"],
    correctAnswer: 3,
  },
  {
    id: 23,
    question: "¿Qué hace with open(“datos.txt”,”r”) as f:?",
    options: ["Abre y cierra automáticamente un archivo", "Borra un archivo", "Lee y duplica un archivo", "Crea un archivo"],
    correctAnswer: 0,
  },
  {
    id: 24,
    question: "¿Qué modo de la función open() permite añadir contenido a un fichero?",
    options: ["r", "w", "a", "rw"],
    correctAnswer: 2,
  },
  {
    id: 25,
    question: "¿Qué imprime “Hola!” * 2?",
    options: ["Error", "Hola! Hola!", "Hola!2", "Hola!Hola!"],
    correctAnswer: 3,
  },
  {
    id: 26,
    question: "¿Qué muestra este código? try: x = 5 / 0 except: print(“Error matemático”)",
    options: ["No muestra nada", "Error matemático", "0", "5 / 0"],
    correctAnswer: 1,
  },
  {
    id: 27,
    question: "¿Qué módulo maneja directorios y rutas?",
    options: ["sys", "pathlib2", "os", "io"],
    correctAnswer: 2,
  },
  {
    id: 28,
    question: "¿Qué función de math calcula raíces?",
    options: ["math.sqrt()", "math.power()", "math.square()", "math.root()"],
    correctAnswer: 0,
  },
  {
    id: 29,
    question: "¿Qué función de random da un número entre 0 y 1?",
    options: ["random.number()", "random.randint()", "random.choice()", "random.random()"],
    correctAnswer: 3,
  },
  {
    id: 30,
    question: "¿Qué método inserta en posición concreta?",
    options: ["push()", "insert()", "append()", "extend()"],
    correctAnswer: 1,
  },
]

export default function PythonQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [quizFinished, setQuizFinished] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])

  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled)
  }, [])

  if (shuffledQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Cargando...</p>
      </div>
    )
  }

  const handleAnswer = (answerIndex: number) => {
    if (isAnswered) return

    setSelectedAnswer(answerIndex)
    setIsAnswered(true)

    if (answerIndex === shuffledQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setQuizFinished(true)
    }
  }

  const resetQuiz = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled)
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setQuizFinished(false)
  }

  if (quizFinished) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100)
    let message = ""
    if (percentage >= 90) message = "Excelente! Dominas Python"
    else if (percentage >= 70) message = "Muy bien! Buen conocimiento de Python"
    else if (percentage >= 50) message = "Bien! Sigue practicando"
    else message = "Necesitas repasar más Python"

    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>

          <Card className="p-8 bg-card border-border text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quiz Completado</h2>
            <div className="my-8">
              <div className="text-6xl font-bold text-green-500 mb-2">{percentage}%</div>
              <p className="text-xl text-foreground mb-2">
                {score} de {shuffledQuestions.length} correctas
              </p>
              <p className="text-lg text-muted-foreground">{message}</p>
            </div>
            <div className="flex gap-4 justify-center">
              <Button onClick={resetQuiz} size="lg" className="bg-green-500 hover:bg-green-600">
                Reintentar
              </Button>
              <Link href="/">
                <Button variant="outline" size="lg">
                  Volver al inicio
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  const question = shuffledQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-foreground">Quiz de Python</h1>
            <div className="text-lg font-semibold text-green-500">
              Puntuación: {score}/{shuffledQuestions.length}
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Pregunta {currentQuestion + 1} de {shuffledQuestions.length}
          </p>
        </div>

        <Card className="p-6 bg-card border-border mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">{question.question}</h2>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isCorrect = index === question.correctAnswer
              const isSelected = index === selectedAnswer
              let buttonClass = "w-full justify-start text-left h-auto py-4 px-6 "

              if (isAnswered) {
                if (isCorrect) {
                  buttonClass += "bg-green-500/20 border-green-500 text-green-500 hover:bg-green-500/20"
                } else if (isSelected) {
                  buttonClass += "bg-red-500/20 border-red-500 text-red-500 hover:bg-red-500/20"
                } else {
                  buttonClass += "opacity-50"
                }
              } else {
                buttonClass += "hover:bg-green-500/10 hover:border-green-500"
              }

              return (
                <Button
                  key={index}
                  variant="outline"
                  className={buttonClass}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                >
                  <span className="flex items-center gap-3 w-full">
                    <span className="font-bold">{String.fromCharCode(65 + index)}.</span>
                    <span className="flex-1">{option}</span>
                    {isAnswered && isCorrect && <CheckCircle2 className="h-5 w-5" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="h-5 w-5" />}
                  </span>
                </Button>
              )
            })}
          </div>
        </Card>

        {isAnswered && (
          <Button onClick={handleNext} size="lg" className="w-full bg-green-500 hover:bg-green-600">
            {currentQuestion < shuffledQuestions.length - 1 ? "Siguiente pregunta" : "Ver resultados"}
          </Button>
        )}
      </div>
    </div>
  )
}
