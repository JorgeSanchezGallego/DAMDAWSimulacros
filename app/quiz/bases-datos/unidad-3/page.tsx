"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle, RotateCcw, Home, ArrowLeft } from "lucide-react"

type Question = {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuál de las siguientes es una restricción inherente del modelo relacional?",
    options: ["CHECK", "Integridad referencial", "TRIGGER", "ASSERTION"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Una restricción de unicidad (UNIQUE) en SQL permite:",
    options: [
      "Que un atributo no pueda ser nulo",
      "Que no haya valores duplicados en una columna (excepto NULL)",
      "Que un atributo sea autoincremental",
      "Que un atributo sea clave primaria obligatoriamente",
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    question:
      "¿Qué tipo de restricción se utiliza para validar que un atributo cumpla una condición lógica (ej: edad >= 18)?",
    options: ["PRIMARY KEY", "FOREIGN KEY", "CHECK", "UNIQUE"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "¿Cuál de las siguientes restricciones garantiza que un atributo no acepte valores nulos?",
    options: ["UNIQUE", "NOT NULL", "DEFAULT", "AUTO_INCREMENT"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "¿Qué restricción se utiliza para definir que un atributo es la clave principal de una tabla?",
    options: ["UNIQUE", "FOREIGN KEY", "PRIMARY KEY", "CHECK"],
    correctAnswer: 2,
  },
  {
    id: 6,
    question: "¿Cuál de las siguientes NO es una restricción semántica?",
    options: ["NOT NULL", "CHECK", "Integridad Referencial", "AUTO_INCREMENT"],
    correctAnswer: 3,
  },
  {
    id: 7,
    question:
      "¿Qué tipo de restricción permite definir reglas complejas que involucran varias tablas y deben cumplirse siempre?",
    options: ["TRIGGER", "ASSERTION", "FOREIGN KEY", "DEFAULT"],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: "Los disparadores (TRIGGERS) se utilizan para:",
    options: [
      "Definir claves primarias compuestas",
      "Ejecutar acciones automáticas al ocurrir un evento (INSERT, UPDATE, DELETE)",
      "Garantizar que un atributo sea único",
      "Establecer valores por defecto",
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: "¿Qué palabra clave se usa en SQL para definir un valor autoincremental en un campo?",
    options: ["AUTO_INCREMENT (MySQL)/SERIAL (PostgreSQL)", "UNIQUE_AUTO", "DEFAULT INCREMENT", "PRIMARY_AUTO"],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: "¿Cuál es la principal diferencia entre UNIQUE y PRIMARY KEY?",
    options: [
      "UNIQUE permite valores nulos, PRIMARY KEY no",
      "PRIMARY KEY permite duplicados, UNIQUE no",
      "UNIQUE solo se aplica a números enteros",
      "PRIMARY KEY puede ser nula",
    ],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: "¿Qué tipo de restricción garantiza que una columna no puede contener valores nulos?",
    options: ["CHECK", "UNIQUE", "NOT NULL", "TRIGGER"],
    correctAnswer: 2,
  },
  {
    id: 12,
    question:
      "Si quiero actualizar el valor medio de los salarios que paga mi empresa: ¿Cuándo debería activar el trigger que re-calcula ese valor en mi BBDD?",
    options: ["BEFORE UPDATE", "BEFORE DELETE", "AFTER UPDATE/INSERT/DELETE", "BEFORE INSERT"],
    correctAnswer: 2,
  },
  {
    id: 13,
    question:
      "¿Qué restricción impide que existan dos filas con el mismo valor en una columna o conjunto de columnas, y que no sean nulos?",
    options: ["PRIMARY KEY", "NOT NULL", "FOREIGN KEY", "UNIQUE"],
    correctAnswer: 0,
  },
  {
    id: 14,
    question:
      "Tengo que tener precaución con el orden en el que defino los atributos de mi tabla, para cumplir con dicha restricción inherente.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: 1,
  },
  {
    id: 15,
    question: "¿Cuál de las siguientes afirmaciones sobre los triggers es correcta?",
    options: [
      "Son restricciones inherentes",
      "Solo pueden ejecutarse al crear una tabla",
      "Permiten ejecutar acciones automáticas al modificar datos",
      "Sustituyen completamente a los CHECK",
    ],
    correctAnswer: 2,
  },
  {
    id: 16,
    question: "¿Qué tipo de restricción usarías para asegurar que un campo se autocompleta de forma secuencial?",
    options: ["PRIMARY KEY", "AUTO_INCREMENT", "CHECK", "ASSERTION"],
    correctAnswer: 1,
  },
  {
    id: 17,
    question: "¿Cuál de los siguientes no es un tipo de restricción semántica?",
    options: ["Clave primaria", "Integridad referencial", "Los atributos multivaluados no están permitidos", "CHECK"],
    correctAnswer: 2,
  },
  {
    id: 18,
    question: "¿Qué ocurre si se intenta insertar una fila que viola una restricción UNIQUE?",
    options: [
      "Se inserta sin problema",
      "Se genera un aviso pero se permite",
      "Se lanza un error y se cancela la inserción",
      "El valor se convierte en NULL automáticamente",
    ],
    correctAnswer: 2,
  },
  {
    id: 19,
    question: "¿Cuál de estas afirmaciones sobre la restricción PRIMARY KEY es correcta?",
    options: [
      "Puede haber varias claves primarias en una misma tabla",
      "Permite valores repetidos",
      "No permite valores nulos ni repetidos",
      "Solo puede aplicarse sobre una única columna",
    ],
    correctAnswer: 2,
  },
  {
    id: 20,
    question: "El orden en el que introducimos las filas en una tabla es una restricción inherente.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 1,
  },
  {
    id: 21,
    question: "¿Cuál es el objetivo principal de la normalización de bases de datos?",
    options: [
      "Eliminar la redundancia y las anomalías de actualización.",
      "Aumentar el espacio de almacenamiento.",
      "Mejorar la velocidad de las consultas.",
      "Hacer el esquema más complejo.",
    ],
    correctAnswer: 0,
  },
  {
    id: 22,
    question: "¿Qué es una clave primaria?",
    options: [
      "Un campo con valores duplicados",
      "Un campo que puede tener valores nulos.",
      "Un campo que enlaza dos tablas.",
      "Un identificador único para cada registro en una tabla.",
    ],
    correctAnswer: 3,
  },
  {
    id: 23,
    question: "¿Qué establece la Primera Forma Normal (1FN)?",
    options: [
      "Que no hay dependencias parciales.",
      "Que la tabla tiene una clave primaria.",
      "Que no hay dependencias transitivas.",
      "Que todos los atributos son atómicos.",
    ],
    correctAnswer: 3,
  },
  {
    id: 24,
    question: "¿Qué significa que un atributo es atómico?",
    options: [
      "Que no se puede dividir en partes más pequeñas.",
      "Que es un número entero.",
      "Que está encriptado.",
      "Que es una clave foránea",
    ],
    correctAnswer: 0,
  },
  {
    id: 25,
    question: "¿Qué tipo de anomalía puede ocurrir en una base de datos no normalizada?",
    options: [
      "Anomalía de redundancia.",
      "Anomalía de consulta.",
      "Anomalía de seguridad.",
      "Anomalía de actualización, inserción y eliminación.",
    ],
    correctAnswer: 3,
  },
  {
    id: 26,
    question: "¿Qué es una tabla en el contexto de bases de datos relacionales?",
    options: [
      "Una vista de datos.",
      "Un conjunto de filas y columnas.",
      "Un objeto de la base de datos que contiene macros.",
      "Un tipo de archivo.",
    ],
    correctAnswer: 1,
  },
  {
    id: 27,
    question: "¿Cuál de las siguientes afirmaciones es correcta sobre 1FN?",
    options: [
      "Una tabla debe tener valores no atómicos para estar en 1FN.",
      "Cada celda en la tabla contiene un solo valor.",
      "Una tabla debe tener dependencias parciales para estar en 1FN.",
      "1FN se refiere a la eliminación de dependencias transitivas.",
    ],
    correctAnswer: 1,
  },
  {
    id: 28,
    question: '¿Qué significa la "redundancia de datos"?',
    options: [
      "Los datos no se pueden leer.",
      "La información no es segura.",
      "La misma información se almacena en varios lugares.",
      "Los datos están incompletos.",
    ],
    correctAnswer: 2,
  },
  {
    id: 29,
    question: "¿Qué problema resuelve la Segunda Forma Normal (2FN)?",
    options: [
      "Los valores atómicos.",
      "La redundancia causada por dependencias parciales.",
      "La redundancia causada por dependencias transitivas.",
      "La existencia de una clave primaria.",
    ],
    correctAnswer: 1,
  },
  {
    id: 30,
    question: "Para estar en 2FN, una tabla debe estar en 1FN y...",
    options: [
      "Todos los atributos no clave deben depender de la clave primaria completa.",
      "Todos los atributos deben ser atómicos.",
      "No contener dependencias transitivas.",
      "Tener al menos 10 filas.",
    ],
    correctAnswer: 0,
  },
  {
    id: 31,
    question: "¿En qué consiste una dependencia parcial?",
    options: [
      "Un atributo depende de otro atributo no clave.",
      "Un atributo no clave depende solo de una parte de la clave primaria.",
      "Un atributo depende de la clave primaria completa.",
      "Una tabla depende de otra tabla.",
    ],
    correctAnswer: 1,
  },
  {
    id: 32,
    question: "Una tabla con una clave primaria compuesta (compuesta por dos o más campos) puede tener dependencias...",
    options: ["Transitivas.", "Atómicas.", "De solo lectura.", "Parciales."],
    correctAnswer: 3,
  },
  {
    id: 33,
    question:
      "Si un atributo A es funcionalmente dependiente de una clave primaria compuesta (B, C), ¿qué se requiere para 2FN?",
    options: [
      "Que A dependa de B y C.",
      "Que A dependa solo de C.",
      "Que A dependa solo de B.",
      "Que A no dependa ni de B ni de C.",
    ],
    correctAnswer: 0,
  },
  {
    id: 34,
    question: "¿Cuál de los siguientes no es un objetivo de la normalización?",
    options: [
      "Mejorar la integridad de los datos.",
      "Prevenir anomalías.",
      "Reducir el tamaño de la base de datos.",
      "Eliminar redundancias.",
    ],
    correctAnswer: 2,
  },
  {
    id: 35,
    question: "¿Qué forma normal es más estricta, 1FN o 2FN?",
    options: [
      "Son igual de estrictas.",
      "1FN es más estricta que 2FN.",
      "La relación entre ellas depende del tipo de datos.",
      "2FN es más estricta que 1FN.",
    ],
    correctAnswer: 3,
  },
  {
    id: 36,
    question: "¿Qué anomalías de datos previene principalmente la Tercera Forma Normal (3FN)?",
    options: [
      "Anomalías de actualización en dependencias transitivas.",
      "Anomalías de inserción de datos atómicos.",
      "Anomalías de eliminación de claves primarias.",
      "Anomalías de actualización en dependencias parciales.",
    ],
    correctAnswer: 0,
  },
  {
    id: 37,
    question: "Para que una tabla esté en 3FN, debe estar en 2FN y...",
    options: [
      "Tener al menos 50 filas.",
      "Tener una clave primaria compuesta.",
      "No tener ninguna dependencia funcional.",
      "No contener dependencias funcionales entre atributos no clave.",
    ],
    correctAnswer: 3,
  },
  {
    id: 38,
    question: "¿Qué es una dependencia transitiva?",
    options: [
      "Un atributo no clave depende de una clave foránea.",
      "Un atributo no clave depende de otro atributo no clave.",
      "Una clave primaria depende de un atributo no clave.",
      "Un atributo no clave depende directamente de la clave primaria.",
    ],
    correctAnswer: 1,
  },
  {
    id: 39,
    question:
      "Tabla Libros (ID_Libro, Tít, Aut, Nacionalidad), y Nacionalidad depende de Autor, ¿qué forma normal no se cumple?",
    options: ["BCNF.", "3FN.", "2FN.", "1FN"],
    correctAnswer: 1,
  },
  {
    id: 40,
    question:
      "En el ejemplo anterior, ¿cómo normalizarías la tabla para alcanzar 3FN? (Tabla Libros (ID_Libro, Tít, Aut, Nacionalidad), y Nacionalidad depende de Autor)",
    options: [
      "Eliminar la columna Autor.",
      "Agregar la columna Editorial.",
      "Crea Autores (Aut, Nacionalidad) y deja tabla Libros (ID_Libro, Tít, Aut).",
      "No se puede normalizar.",
    ],
    correctAnswer: 2,
  },
]

export default function BasesDatosUnidad3Page() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null))
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false))

  useEffect(() => {
    if (showResults) {
      const correctCount = selectedAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length
      setScore(correctCount)
    }
  }, [showResults, selectedAnswers])

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
    const allAnswered = selectedAnswers.every((answer) => answer !== null)
    if (!allAnswered) {
      alert("Por favor responde todas las preguntas antes de enviar")
      return
    }
    setShowResults(true)
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(new Array(questions.length).fill(null))
    setShowResults(false)
    setScore(0)
    setAnsweredQuestions(new Array(questions.length).fill(false))
  }

  const question = questions[currentQuestion]
  const isAnswered = answeredQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/">
            <Button variant="outline" size="sm">
              <Home className="w-4 h-4 mr-2" />
              Inicio
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Bases de Datos - U3: Modelo Relacional y Normalización</h1>
          <div className="w-20"></div>
        </div>

        {!showResults ? (
          <Card className="p-8 bg-card border-border">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Pregunta {currentQuestion + 1} de {questions.length}
                </span>
                <span className="text-sm font-medium text-blue-600">
                  {answeredQuestions.filter((a) => a).length} respondidas
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

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">{question.question}</h2>

              <div className="space-y-3">
                {question.options.map((option, index) => {
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
                              : "border-border hover:border-blue-600/50 bg-card"
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

            <div className="flex justify-between items-center pt-6 border-t border-border">
              <Button onClick={handlePrevious} disabled={currentQuestion === 0} variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Anterior
              </Button>

              <div className="flex gap-2">
                {currentQuestion === questions.length - 1 ? (
                  <Button onClick={handleSubmit} disabled={!isAnswered} className="bg-blue-600 hover:bg-blue-700">
                    Enviar Test
                  </Button>
                ) : (
                  <Button onClick={handleNext} disabled={!isAnswered} className="bg-blue-600 hover:bg-blue-700">
                    Siguiente
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
            <Card className="p-8 bg-card border-border">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Resultados del Test</h2>
                <div className="inline-block">
                  <div className="text-6xl font-bold text-blue-600 mb-2">
                    {score}/{questions.length}
                  </div>
                  <div className="text-muted-foreground">
                    {((score / questions.length) * 100).toFixed(1)}% de aciertos
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={handleReset} className="bg-blue-600 hover:bg-blue-700">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reintentar Test
                </Button>
                <Link href="/">
                  <Button variant="outline">
                    <Home className="w-4 h-4 mr-2" />
                    Volver al Inicio
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Revisión de Respuestas</h3>
              <div className="space-y-6">
                {questions.map((q, qIndex) => {
                  const userAnswer = selectedAnswers[qIndex]
                  const isCorrect = userAnswer === q.correctAnswer

                  return (
                    <div
                      key={q.id}
                      className="border-l-4 pl-4 py-2"
                      style={{
                        borderColor: isCorrect ? "#22c55e" : "#ef4444",
                      }}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        {isCorrect ? (
                          <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        )}
                        <div className="flex-1">
                          <p className="font-semibold text-foreground mb-2">
                            {qIndex + 1}. {q.question}
                          </p>
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="text-muted-foreground">Tu respuesta: </span>
                              <span className={isCorrect ? "text-green-500 font-medium" : "text-red-500 font-medium"}>
                                {userAnswer !== null ? q.options[userAnswer] : "No respondida"}
                              </span>
                            </div>
                            {!isCorrect && (
                              <div>
                                <span className="text-muted-foreground">Respuesta correcta: </span>
                                <span className="text-green-500 font-medium">{q.options[q.correctAnswer]}</span>
                              </div>
                            )}
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
