"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle, ArrowLeft, RotateCcw } from "lucide-react"
import Link from "next/link"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Qué comando se utiliza para crear una nueva base de datos llamada 'EmpresaDB'?",
    options: ["MAKE DATABASE EmpresaDB;", "NEW DATABASE EmpresaDB;", "CREATE DATABASE EmpresaDB;"],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "¿Cómo se elimina completamente una base de datos llamada 'TestDB'?",
    options: ["DELETE DATABASE TestDB;", "REMOVE DATABASE TestDB;", "DROP DATABASE TestDB;"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "¿Qué comando crea una tabla 'Clientes' con una columna 'id' como clave primaria?",
    options: [
      "MAKE TABLE Clientes (id INT KEY);",
      "NEW TABLE Clientes (id INT PRIMARY);",
      "CREATE TABLE Clientes (id INT PRIMARY KEY);",
    ],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "¿Cómo se añade una columna 'email' a la tabla 'Usuarios'?",
    options: [
      "ALTER TABLE Usuarios ADD COLUMN email VARCHAR(100);",
      "MODIFY TABLE Usuarios ADD email VARCHAR(100);",
      "UPDATE TABLE Usuarios ADD email VARCHAR(100);",
    ],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "¿Qué comando elimina la tabla 'Ventas' y su estructura?",
    options: ["REMOVE TABLE Ventas;", "DELETE TABLE Ventas;", "DROP TABLE Ventas;"],
    correctAnswer: 2,
  },
  {
    id: 6,
    question: "¿Cómo se eliminan todos los datos de la tabla 'Logs' sin borrar su estructura?",
    options: ["TRUNCATE TABLE Logs;", "CLEAR TABLE Logs;", "DELETE TABLE Logs;"],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: "¿Qué restricción se usa para asegurar que una columna no tenga valores nulos?",
    options: ["NOT NULL", "UNIQUE", "REQUIRED"],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "¿Qué restricción garantiza que los valores de una columna sean únicos?",
    options: ["UNIQUE", "NOT NULL", "PRIMARY KEY"],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: "¿Qué comando se usa para cambiar el nombre de una tabla?",
    options: [
      "ALTER TABLE nombre RENAME TO nuevo_nombre;",
      "CHANGE TABLE nombre TO nuevo_nombre;",
      "RENAME TABLE nombre TO nuevo_nombre;",
    ],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: "¿Cómo se define una clave foránea en una tabla?",
    options: [
      "LINK KEY TO otra_tabla;",
      "FOREIGN KEY (columna) REFERENCES otra_tabla(columna);",
      "RELATE KEY otra_tabla;",
    ],
    correctAnswer: 1,
  },
  {
    id: 11,
    question: "¿Qué comando actualiza el campo 'estado' de la tabla 'Pedidos' a 'Enviado' para el id=10?",
    options: [
      "MODIFY Pedidos estado='Enviado' WHERE id=10;",
      "CHANGE Pedidos SET estado='Enviado' WHERE id=10;",
      "UPDATE Pedidos SET estado='Enviado' WHERE id=10;",
    ],
    correctAnswer: 2,
  },
  {
    id: 12,
    question: "¿Cómo se elimina una fila específica de la tabla 'Clientes'?",
    options: [
      "DELETE FROM Clientes WHERE id=5;",
      "REMOVE FROM Clientes WHERE id=5;",
      "DROP ROW FROM Clientes WHERE id=5;",
    ],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: "¿Qué comando crea un trigger que se ejecuta antes de insertar en 'Logs'?",
    options: [
      "NEW TRIGGER log_before BEFORE INSERT ON Logs...",
      "CREATE TRIGGER log_before BEFORE INSERT ON Logs FOR EACH ROW...",
      "MAKE TRIGGER log_before BEFORE INSERT ON Logs...",
    ],
    correctAnswer: 1,
  },
  {
    id: 14,
    question: "¿Qué palabra clave indica que un trigger se ejecuta después de una acción?",
    options: ["FOLLOW", "AFTER", "BEFORE"],
    correctAnswer: 1,
  },
  {
    id: 15,
    question: "¿Qué comando se usa para modificar el tipo de dato de una columna?",
    options: [
      "ALTER TABLE tabla MODIFY COLUMN columna NUEVO_TIPO;",
      "SET COLUMN tipo IN tabla;",
      "CHANGE COLUMN tipo IN tabla;",
    ],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: "¿Qué comando permite insertar una nueva fila en la tabla 'Usuarios'?",
    options: [
      "ADD ROW TO Usuarios ('Ana', 25);",
      "INSERT INTO Usuarios VALUES ('Ana', 25);",
      "NEW ROW Usuarios ('Ana', 25);",
    ],
    correctAnswer: 1,
  },
  {
    id: 17,
    question: "¿Qué cláusula se usa para aplicar condiciones en una sentencia UPDATE?",
    options: ["IF", "WHERE", "CONDITION"],
    correctAnswer: 1,
  },
  {
    id: 18,
    question: "¿Qué sucede si se ejecuta DELETE sin cláusula WHERE?",
    options: [
      "Se elimina solo la primera fila.",
      "No se elimina ninguna fila.",
      "Se eliminan todas las filas de la tabla.",
    ],
    correctAnswer: 2,
  },
  {
    id: 19,
    question: "¿Qué comando permite copiar datos de una tabla a otra?",
    options: ["COPY T2 TO T1;", "MOVE T2 INTO T1;", "INSERT INTO T1 SELECT * FROM T2;"],
    correctAnswer: 2,
  },
  {
    id: 20,
    question: "¿Qué sucede si se intenta borrar una fila referenciada por una clave foránea con ON DELETE RESTRICT?",
    options: [
      "La fila se borra y se eliminan las dependencias.",
      "La fila se borra y la clave foránea se vuelve nula.",
      "La operación de borrado falla.",
    ],
    correctAnswer: 2,
  },
]

export default function QuizPage() {
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

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    const finalScore = selectedAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc
    }, 0)
    setScore(finalScore)
    setShowResults(true)
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(new Array(questions.length).fill(null))
    setShowResults(false)
    setScore(0)
    setAnsweredQuestions(new Array(questions.length).fill(false))
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const totalAnsweredQuestions = answeredQuestions.filter((a) => a).length

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-2">Bases de Datos - U5: Lenguaje SQL: DML</h1>
          <p className="text-muted-foreground">
            {questions.length} preguntas sobre lenguaje SQL DML (Data Manipulation Language)
          </p>
        </div>

        {!showResults ? (
          <>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Pregunta {currentQuestion + 1} de {questions.length}
                </span>
                <span className="text-sm text-muted-foreground">
                  {totalAnsweredQuestions} de {questions.length} respondidas
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <Card className="p-8 mb-6 bg-card border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">{questions[currentQuestion].question}</h2>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => {
                  const isAnswered = answeredQuestions[currentQuestion]
                  const isSelected = selectedAnswers[currentQuestion] === index
                  const isCorrect = index === questions[currentQuestion].correctAnswer
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
                              : "border-border hover:border-blue-600/50 bg-card"
                      } ${isAnswered ? "cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center mt-0.5 ${
                            isSelected ? "border-blue-600 bg-blue-600" : "border-muted-foreground"
                          }`}
                        >
                          {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                        </div>
                        <div className="flex-1 flex items-center justify-between">
                          <span className="text-foreground">{option}</span>
                          {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 ml-2" />}
                          {showIncorrect && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 ml-2" />}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </Card>

            <div className="flex justify-between items-center">
              <Button onClick={handlePrevious} disabled={currentQuestion === 0} variant="outline">
                Anterior
              </Button>

              <div className="flex gap-2">
                {currentQuestion === questions.length - 1 ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={totalAnsweredQuestions < questions.length}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Finalizar Test
                  </Button>
                ) : (
                  <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700">
                    Siguiente
                  </Button>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-6">
            <Card className="p-8 bg-card border-border">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Resultados del Test</h2>
                <div className="text-6xl font-bold text-blue-600 mb-2">
                  {score}/{questions.length}
                </div>
                <p className="text-xl text-muted-foreground">
                  Has acertado {((score / questions.length) * 100).toFixed(0)}% de las preguntas
                </p>
              </div>

              <Button onClick={handleReset} className="w-full bg-blue-600 hover:bg-blue-700">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reintentar Test
              </Button>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Revisión de Respuestas</h3>

              <div className="space-y-6">
                {questions.map((question, qIndex) => {
                  const userAnswer = selectedAnswers[qIndex]
                  const isCorrect = userAnswer === question.correctAnswer

                  return (
                    <div key={question.id} className="border-b border-border pb-6 last:border-0">
                      <div className="flex items-start gap-3 mb-4">
                        {isCorrect ? (
                          <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        )}
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-3">
                            {qIndex + 1}. {question.question}
                          </h4>

                          <div className="space-y-2">
                            {question.options.map((option, oIndex) => {
                              const isUserAnswer = userAnswer === oIndex
                              const isCorrectAnswer = question.correctAnswer === oIndex

                              return (
                                <div
                                  key={oIndex}
                                  className={`p-3 rounded-lg ${
                                    isCorrectAnswer
                                      ? "bg-green-500/10 border border-green-500"
                                      : isUserAnswer
                                        ? "bg-red-500/10 border border-red-500"
                                        : "bg-muted/50"
                                  }`}
                                >
                                  <span className="text-sm text-foreground">{option}</span>
                                  {isCorrectAnswer && (
                                    <span className="ml-2 text-xs text-green-500 font-semibold">✓ Correcta</span>
                                  )}
                                  {isUserAnswer && !isCorrectAnswer && (
                                    <span className="ml-2 text-xs text-red-500 font-semibold">✗ Tu respuesta</span>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
