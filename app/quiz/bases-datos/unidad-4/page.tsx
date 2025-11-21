"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw, CheckCircle2, XCircle } from "lucide-react"

type Question = {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Qué significa DDL en el contexto de SQL?",
    options: [
      "Data Definition Language",
      "Data Deletion Language",
      "Data Distribution Language",
      "Data Duplication Language",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "¿Qué comando DDL se utiliza para crear una nueva tabla en la base de datos?",
    options: ["ADD TABLE", "NEW TABLE", "CREATE TABLE", "MAKE TABLE"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "¿Qué comando se utiliza para eliminar por completo una tabla y su estructura?",
    options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "ERASE TABLE"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "¿Cuál es el comando DDL para modificar la estructura de una tabla existente?",
    options: ["ALTER TABLE", "UPDATE TABLE", "CHANGE TABLE", "MODIFY TABLE"],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "¿Para qué se utiliza la restricción PRIMARY KEY?",
    options: [
      "Para ordenar los datos",
      "Para identificar de forma única cada fila en una tabla",
      "Para permitir valores duplicados",
      "Para crear un índice secundario",
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "¿Qué tipo de dato es más adecuado para almacenar un número de teléfono como texto?",
    options: ["BOOLEAN", "VARCHAR", "DATE", "INT"],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "¿Qué hace la restricción NOT NULL en una columna?",
    options: [
      "Asegura que la columna siempre debe tener un valor",
      "Permite que la columna tenga valores nulos",
      "Establece un valor por defecto",
      "Limita la longitud de los datos",
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    question:
      "¿Qué comando se usa para eliminar todos los datos de una tabla rápidamente, pero manteniendo su estructura?",
    options: ["DELETE * FROM", "DROP TABLE", "TRUNCATE TABLE", "CLEAR TABLE"],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: "¿Qué acción realiza `TRUNCATE TABLE` en una tabla con un auto-incremento de clave primaria?",
    options: [
      "Elimina la tabla por completo junto con su estructura.",
      "Borra los datos y mantiene el contador de auto-incremento tal como estaba.",
      "Lanza un error porque no se puede usar en tablas con auto-incremento.",
      "Borra los datos y reinicia el contador de auto-incremento.",
    ],
    correctAnswer: 3,
  },
  {
    id: 10,
    question: '¿Cómo se añade una nueva columna llamada "email" de tipo VARCHAR(100) a una tabla "usuarios"?',
    options: [
      "UPDATE TABLE usuarios ADD email VARCHAR(100)",
      "MODIFY TABLE usuarios ADD COLUMN email VARCHAR(100)",
      "CREATE COLUMN email ON usuarios",
      "ALTER TABLE usuarios ADD email VARCHAR(100)",
    ],
    correctAnswer: 3,
  },
  {
    id: 11,
    question: "¿Qué es una FOREIGN KEY (clave foránea)?",
    options: [
      "Una clave que no puede contener valores nulos",
      "Una clave que enlaza dos tablas entre sí",
      "Una clave principal compuesta por varias columnas",
      "Una clave que es única en toda la base de datos",
    ],
    correctAnswer: 1,
  },
  {
    id: 12,
    question: "¿Cuál es el propósito de la restricción UNIQUE?",
    options: [
      "Permitir valores duplicados",
      "Idéntico a PRIMARY KEY",
      "Establecer un valor por defecto si no se proporciona uno",
      "Asegurar que todos los valores en una columna sean únicos",
    ],
    correctAnswer: 3,
  },
  {
    id: 13,
    question: '¿Cómo se puede renombrar una tabla llamada "clientes" a "compradores"?',
    options: [
      "ALTER TABLE clientes RENAME TO compradores",
      "UPDATE TABLE clientes SET NAME = compradores",
      "RENAME TABLE clientes TO compradores",
      "Ambas 1 y 3 son correctas dependiendo del SGBD",
    ],
    correctAnswer: 3,
  },
  {
    id: 14,
    question: "¿Cuál es la diferencia fundamental entre los tipos de datos CHAR y VARCHAR?",
    options: [
      "No hay diferencia, son sinónimos",
      "VARCHAR es más rápido para consultas",
      "CHAR es para números, VARCHAR para texto",
      "CHAR tiene una longitud fija, VARCHAR tiene una longitud variable",
    ],
    correctAnswer: 3,
  },
  {
    id: 15,
    question: "¿Para qué sirve añadir DEFAULT 'valor' a la definición de una columna?",
    options: [
      "Para insertar 'valor' si no se especifica uno en un INSERT",
      "Para indicar que la columna es obligatoria",
      "Para que la columna no acepte otro valor",
      "Para validar que el valor introducido sea 'valor'",
    ],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: "¿Qué función cumple la restricción CHECK?",
    options: [
      "Valida que los valores de una columna cumplan una condición específica",
      "Asegura que una clave foránea es válida",
      "Verifica la sintaxis del comando SQL",
      "Comprueba si la tabla existe",
    ],
    correctAnswer: 0,
  },
  {
    id: 17,
    question: '¿Cómo se define una clave primaria compuesta por las columnas "id_pedido" e "id_producto"?',
    options: [
      "COMPOSITE KEY (id_pedido, id_producto)",
      "PRIMARY KEY (id_pedido), PRIMARY KEY (id_producto)",
      "UNIQUE KEY (id_pedido, id_producto)",
      "PRIMARY KEY (id_pedido, id_producto)",
    ],
    correctAnswer: 3,
  },
  {
    id: 18,
    question: "En una FOREIGN KEY, ¿qué efecto tiene la opción ON DELETE CASCADE?",
    options: [
      "Evita que se borren filas en la tabla padre",
      "Borra automáticamente las filas coincidentes en la tabla hija al borrar en la tabla padre",
      "Establece a NULL las claves foráneas en la tabla hija",
      "Muestra una advertencia al intentar borrar",
    ],
    correctAnswer: 1,
  },
  {
    id: 19,
    question:
      '¿Qué comando se utiliza para añadir una restricción UNIQUE a la columna "dni" de una tabla "empleados" que ya existe?',
    options: [
      "ALTER TABLE empleados ADD CONSTRAINT UQ_dni UNIQUE (dni)",
      "ALTER TABLE empleados MODIFY COLUMN dni UNIQUE",
      "UPDATE TABLE empleados SET UNIQUE (dni)",
      "CREATE UNIQUE INDEX UQ_dni ON empleados(dni)",
    ],
    correctAnswer: 0,
  },
  {
    id: 20,
    question: "¿Cuál es la diferencia entre una vista (VIEW) y una tabla?",
    options: [
      "Una vista almacena datos físicamente, una tabla no",
      "No se pueden hacer INSERT en una vista",
      "Las vistas son siempre más rápidas que las tablas",
      "Una vista es el resultado de una consulta que se almacena como un objeto virtual, una tabla almacena los datos",
    ],
    correctAnswer: 3,
  },
]

export default function BDUnidad4Page() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null))
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false))

  const handleAnswerSelect = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return

    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)

    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestion] = true
    setAnsweredQuestions(newAnswered)

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    const calculatedScore = selectedAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc
    }, 0)
    setScore(calculatedScore)
    setShowResults(true)
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(new Array(questions.length).fill(null))
    setShowResults(false)
    setScore(0)
    setAnsweredQuestions(new Array(questions.length).fill(false))
  }

  const allQuestionsAnswered = selectedAnswers.every((answer) => answer !== null)
  const currentQuestionAnswered = selectedAnswers[currentQuestion] !== null

  if (showResults) {
    const percentage = ((score / questions.length) * 100).toFixed(1)
    const passed = Number.parseFloat(percentage) >= 50

    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>

          <Card className="p-8 bg-card border-border">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Resultados del Simulacro</h2>

              <div className={`text-6xl font-bold ${passed ? "text-green-500" : "text-red-500"}`}>{percentage}%</div>

              <p className="text-xl text-muted-foreground">
                Has acertado {score} de {questions.length} preguntas
              </p>

              <div className="pt-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Desglose de respuestas:</h3>
                <div className="space-y-3 text-left max-h-96 overflow-y-auto">
                  {questions.map((q, index) => {
                    const userAnswer = selectedAnswers[index]
                    const isCorrect = userAnswer === q.correctAnswer

                    return (
                      <div
                        key={q.id}
                        className={`p-4 rounded-lg border ${isCorrect ? "bg-green-500/10 border-green-500/30" : "bg-red-500/10 border-red-500/30"}`}
                      >
                        <p className="font-semibold text-sm mb-2">
                          Pregunta {index + 1}: {isCorrect ? "✓" : "✗"}
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">{q.question}</p>
                        {!isCorrect && (
                          <div className="text-sm space-y-1">
                            <p className="text-red-500">Tu respuesta: {q.options[userAnswer!]}</p>
                            <p className="text-green-500">Correcta: {q.options[q.correctAnswer]}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              <Button onClick={handleReset} size="lg" className="mt-6">
                <RotateCcw className="mr-2 h-4 w-4" />
                Repetir Simulacro
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>

        <Card className="p-8 bg-card border-border">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-foreground">U4: Introducción a SQL: DDL</h1>
              <span className="text-sm text-muted-foreground">
                Pregunta {currentQuestion + 1} de {questions.length}
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">{question.question}</h2>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isAnswered = answeredQuestions[currentQuestion]
                const isSelected = selectedAnswers[currentQuestion] === index
                const isCorrect = index === question.correctAnswer
                const showCorrect = isAnswered && isCorrect
                const showIncorrect = isAnswered && isSelected && !isCorrect

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      showCorrect
                        ? "border-green-500 bg-green-500/10"
                        : showIncorrect
                          ? "border-red-500 bg-red-500/10"
                          : isSelected
                            ? "border-blue-600 bg-blue-600/10"
                            : "border-border hover:border-blue-600/50"
                    } ${isAnswered ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">{option}</span>
                      {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 ml-2" />}
                      {showIncorrect && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 ml-2" />}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <Button onClick={handlePreviousQuestion} disabled={currentQuestion === 0} variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Anterior
            </Button>

            {currentQuestion === questions.length - 1 ? (
              <Button
                onClick={handleSubmit}
                disabled={!allQuestionsAnswered}
                className="bg-green-600 hover:bg-green-700"
              >
                Finalizar Simulacro
              </Button>
            ) : (
              <Button
                onClick={handleNextQuestion}
                disabled={!currentQuestionAnswered}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Siguiente
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                  index === currentQuestion
                    ? "bg-blue-600 text-white"
                    : selectedAnswers[index] !== null
                      ? "bg-green-500/20 text-green-500 hover:bg-green-500/30"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
