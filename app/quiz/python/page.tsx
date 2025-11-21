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
    question: "¿Qué palabra se usa para retornar un valor de una función en Python?",
    options: ["ret", "return", "append", "exit"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "¿Cuál es el índice del primer elemento de una lista?",
    options: ["1", "0", "-1", "Depende"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "¿Qué símbolo se usa para el operador de módulo (resto)?",
    options: ["%", "//", "/", "*"],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: "¿Qué palabra clave se usa para importar módulos?",
    options: ["include", "use", "import", "require"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "¿Qué se evalúa en una estructura condicional?",
    options: ["Un bucle", "Una expresión booleana", "Una función", "Una clase"],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "¿Qué operador devuelve la división entera?",
    options: ["//", "/", "%", "**"],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: "¿Qué tipo de estructura almacena elementos no ordenados con clave y valor?",
    options: ["Lista", "Tupla", "Diccionario", "Conjunto"],
    correctAnswer: 2,
  },
  {
    id: 8,
    question: "¿Qué tipo devuelve `input()` siempre?",
    options: ["int", "bool", "str", "float"],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: "¿Qué palabra clave permite salir anticipadamente de un bucle?",
    options: ["break", "exit", "return", "continue"],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: "¿Qué función convierte una cadena en número decimal?",
    options: ["str()", "int()", "eval()", "float()"],
    correctAnswer: 3,
  },
  {
    id: 11,
    question: "¿Cuál de los siguientes es un tipo de dato primitivo en Python?",
    options: ["list", "float", "dict", "module"],
    correctAnswer: 1,
  },
  {
    id: 12,
    question: "¿Cuál de estos métodos no existe en listas?",
    options: ["concat()", "extend()", "append()", "insert()"],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: "¿Cuál de estos operadores sirve para elevar un número a una potencia?",
    options: ["^", "**", "exp()", "*"],
    correctAnswer: 1,
  },
  {
    id: 14,
    question: "¿Qué función se utiliza para recibir datos desde el teclado en Python?",
    options: ["print()", "input()", "scanf()", "read()"],
    correctAnswer: 1,
  },
  {
    id: 15,
    question: "¿Qué estructura se utiliza para repetir un bloque de código un número conocido de veces?",
    options: ["if", "for", "while", "switch"],
    correctAnswer: 1,
  },
  {
    id: 16,
    question: "¿Qué significa que una función tiene 'alcance local'?",
    options: ["Se puede usar en todo el programa", "Solo dentro de donde se declara", "Es pública", "Es global"],
    correctAnswer: 1,
  },
  {
    id: 17,
    question: "¿Cuál es la manera correcta de declarar una lista en Python?",
    options: ["lista = (1, 2, 3)", "lista = {1, 2, 3}", "lista = [1, 2, 3]", "lista = <1, 2, 3>"],
    correctAnswer: 2,
  },
  {
    id: 18,
    question: "¿Cuál es el valor de 'not True' en Python?",
    options: ["True", "False", "None", "Error"],
    correctAnswer: 1,
  },
  {
    id: 19,
    question: "¿Qué clase de módulos no pueden ser importados a una aplicación de Python?",
    options: [
      "Módulos de la librería de Python",
      "Módulos hechos con otro lenguaje de programación",
      "Módulos creados por ti",
      "Módulos con extensiones .py",
    ],
    correctAnswer: 1,
  },
  {
    id: 20,
    question: "¿Qué estructura permite almacenar pares clave-valor?",
    options: ["Lista", "Tupla", "Set", "Diccionario"],
    correctAnswer: 3,
  },
  {
    id: 21,
    question: "¿Qué función convierte un valor a entero en Python?",
    options: ["float()", "int()", "str()", "bool()"],
    correctAnswer: 1,
  },
  {
    id: 22,
    question: "¿Qué operador se usa para asignar un valor a una variable?",
    options: [":=", "0", "->", "="],
    correctAnswer: 3,
  },
  {
    id: 23,
    question: "¿Cómo se accede al segundo elemento de una lista llamada 'datos'?",
    options: ["datos(1)", "datos[1]", "datos{1}", "datos<1>"],
    correctAnswer: 1,
  },
  {
    id: 24,
    question: "¿Qué operador lógico representa la conjunción?",
    options: ["and", "not", "or", "xor"],
    correctAnswer: 0,
  },
  {
    id: 25,
    question: "¿Cuál es la forma correcta de declarar una variable en Python?",
    options: ["variable := 10", "let variable = 10", "variable = 10", "int variable = 10"],
    correctAnswer: 2,
  },
  {
    id: 26,
    question: "¿Qué tipo de estructura mantiene el orden y permite duplicados?",
    options: ["Set", "Diccionario", "Tupla", "Lista"],
    correctAnswer: 3,
  },
  {
    id: 27,
    question: "¿Cómo se declara una tupla en Python?",
    options: ["(1, 2)", "[1, 2]", "{1, 2}", "<1, 2>"],
    correctAnswer: 0,
  },
  {
    id: 28,
    question: "¿Qué tipo de bucle es ideal cuando no se conoce el número de iteraciones?",
    options: ["for", "if", "while", "do-while"],
    correctAnswer: 2,
  },
  {
    id: 29,
    question: "¿Qué se usa para definir un valor por defecto en un parámetro?",
    options: ["default", "const", ":", "="],
    correctAnswer: 3,
  },
  {
    id: 30,
    question: "¿Cómo se llama la colección que no permite duplicados?",
    options: ["list", "set", "tuple", "dict"],
    correctAnswer: 1,
  },
  {
    id: 31,
    question: "¿Qué método elimina el último elemento de una lista?",
    options: ["remove()", "del()", "cut()", "pop()"],
    correctAnswer: 3,
  },
  {
    id: 32,
    question: "¿Qué módulo contiene funciones que permiten generar un número aleatorio?",
    options: ["random", "math", "rand", "randpy"],
    correctAnswer: 0,
  },
  {
    id: 33,
    question: "¿Qué palabra clave permite continuar con la siguiente iteración del bucle?",
    options: ["skip", "continue", "next", "pass"],
    correctAnswer: 1,
  },
  {
    id: 34,
    question: "¿Cómo se comprueba si una clave existe en un diccionario?",
    options: ["clave in dict", "has(dict, clave)", "dict.has(clave)", "dict.exists(clave)"],
    correctAnswer: 0,
  },
  {
    id: 35,
    question: "¿Cuál de estos no es un operador lógico en Python?",
    options: ["and", "or", "not", "xor"],
    correctAnswer: 3,
  },
  {
    id: 36,
    question: "¿Cómo se define una función en Python?",
    options: ["function nombre():", "def nombre():", "define nombre():", "func nombre():"],
    correctAnswer: 1,
  },
  {
    id: 37,
    question: "¿Qué estructura es más adecuada para repetir un bloque hasta que se cumpla una condición?",
    options: ["if", "while", "for", "match"],
    correctAnswer: 1,
  },
  {
    id: 38,
    question: "¿Qué módulo contiene funciones matemáticas estándar?",
    options: ["math", "random", "numpy", "cmath"],
    correctAnswer: 0,
  },
  {
    id: 39,
    question: "¿Cuál es el propósito de una función?",
    options: ["Ejecutar un programa", "Almacenar datos", "Agrupar código reutilizable", "Importar librerías"],
    correctAnswer: 2,
  },
  {
    id: 40,
    question: "¿Qué método se usa para añadir un elemento al final de una lista?",
    options: ["insert()", "append()", "add()", "push()"],
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
