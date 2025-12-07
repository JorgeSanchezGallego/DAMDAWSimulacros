"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question:
      "¿Qué tipo de base de datos se caracteriza por usar tablas y claves primarias y foráneas?",
    options: [
      "Base de datos relacional",
      "Base de datos jerárquica",
      "Base de datos de red",
      "Base de datos documental",
    ],
    correctAnswer: 0, // a) Base de datos relacional
  },
  {
    question:
      "¿Qué cláusula se utiliza para filtrar los resultados de una consulta SELECT?",
    options: ["FILTER", "GROUP", "LIMIT", "WHERE"],
    correctAnswer: 3, // d) WHERE
  },
  {
    question:
      "¿Para qué se utilizan habitualmente los eventos programados en una base de datos?",
    options: [
      "Para definir claves primarias",
      "Para ejecutar tareas automáticas en momentos determinados",
      "Para aumentar la memoria del servidor",
      "Para crear nuevas tablas físicas",
    ],
    correctAnswer: 1, // b) Para ejecutar tareas automáticas en momentos determinados
  },
  {
    question:
      "¿Qué caracteriza a una generalización total en una jerarquía ISA?",
    options: [
      "Las subclases no heredan atributos",
      "Solo algunas instancias de la superclase pertenecen a subclases",
      "No puede haber relaciones adicionales con la superclase",
      "Toda instancia de la superclase pertenece al menos a una subclase",
    ],
    correctAnswer: 3, // d) Toda instancia de la superclase pertenece al menos a una subclase
  },
  {
    question:
      "¿Qué consecuencia habitual tiene desnormalizar parcialmente un diseño?",
    options: [
      "Se rompe siempre la integridad referencial",
      "Se impide usar claves primarias",
      "Se eliminan todas las redundancias sin impacto en el rendimiento",
      "Se gana rendimiento a costa de mayor redundancia",
    ],
    correctAnswer: 3, // d) Se gana rendimiento a costa de mayor redundancia
  },
  {
    question:
      "¿Para qué se utiliza la agregación en el modelo Entidad-Relación Extendido (MERE)?",
    options: [
      "Para tratar una relación como entidad de nivel superior",
      "Para eliminar entidades débiles",
      "Para convertir una entidad en atributo",
      "Para crear atributos derivados",
    ],
    correctAnswer: 0, // a) Para tratar una relación como entidad de nivel superior 
  },
  {
    question:
      "¿Qué nombre recibe la restricción que asegura que los valores de una clave ajena existan en la tabla referenciada?",
    options: [
      "Integridad referencial",
      "Integridad de dominio",
      "Integridad de entidad",
      "Integridad semántica",
    ],
    correctAnswer: 0, // a) Integridad referencial
  },
  {
    question:
      "¿Qué tipo de fichero contiene imágenes digitales como fotos o gráficos?",
    options: [
      "Fichero de imagen",
      "Fichero ejecutable",
      "Fichero de texto",
      "Fichero de audio",
    ],
    correctAnswer: 0, // a) Fichero de imagen
  },
  {
    question:
      "¿Qué tipo de restricción se define con la palabra clave CHECK en una tabla?",
    options: [
      "Restricción de integridad referencial",
      "Restricción de auto-incremento",
      "Restricción de dominio definida por el usuario",
      "Restricción inherente del modelo",
    ],
    correctAnswer: 2, // c) Restricción de dominio definida por el usuario
  },
  {
    question:
      "¿Qué cláusula se utiliza para agrupar los resultados de una consulta SELECT?",
    options: ["ORDER", "GROUP", "SORT", "GROUP BY"],
    correctAnswer: 3, // d) GROUP BY
  },
  {
    question:
      "SELECT E.Nombre, D.Nombre AS Departamento FROM Empleados E LEFT JOIN Departamentos D ON E.IDDepartamento = D.IDDepartamento",
    options: [
      "Devuelve solo empleados con departamento",
      "Elimina empleados sin departamento",
      "Crea nuevos departamentos vacíos",
      "Devuelve todos los empleados aunque no tengan departamento",
    ],
    correctAnswer: 3, // d) Devuelve todos los empleados aunque no tengan departamento
  },
  {
    question:
      "¿Qué cláusula se utiliza para ordenar los resultados de una consulta SELECT?",
    options: ["GROUP BY", "ORDER BY", "FILTER BY", "SORT BY"],
    correctAnswer: 1, // b) ORDER BY
  },
  {
    question:
      "¿Qué comando DML se utiliza para eliminar filas de una tabla basándose en una condición?",
    options: [
      "DELETE FROM ... WHERE ...",
      "DROP FROM ... WHERE ...",
      "REMOVE FROM ... WHERE ...",
      "ERASE FROM ... WHERE ...",
    ],
    correctAnswer: 0, // a) DELETE FROM ... WHERE ...
  },
  {
    question:
      "¿Qué tipo de restricción se utiliza para asegurar que un campo es único en una tabla?",
    options: ["NOT NULL", "PRIMARY KEY", "UNIQUE", "FOREIGN KEY"],
    correctAnswer: 2, // c) UNIQUE
  },
  {
    question: "¿Qué es un fichero en un sistema informático?",
    options: [
      "Una unidad de almacenamiento organizada de datos identificada por un nombre y extensión",
      "Una carpeta que contiene otros elementos",
      "Un tipo de base de datos relacional",
      "Un dispositivo de entrada",
    ],
    correctAnswer: 0, // a) Una unidad de almacenamiento organizada de datos identificada por un nombre y extensión
  },
  {
    question:
      "¿Qué término describe las características o propiedades que describen una entidad?",
    options: ["Consultas", "Atributos", "Índices", "Relaciones"],
    correctAnswer: 1, // b) Atributos
  },
  {
    question: "¿Qué implica que una jerarquía ISA sea solapada?",
    options: [
      "La superclase no tiene atributos propios",
      "Las subclases son siempre mutuamente excluyentes",
      "Una misma instancia de la superclase puede pertenecer a varias subclases",
      "Las subclases no pueden tener relaciones",
    ],
    correctAnswer: 2, // c) Una misma instancia de la superclase puede pertenecer a varias subclases
  },
  {
    question:
      "En el ejemplo de Po y Maestra Grulla del pergamino de Kung Fu Panda, ¿qué impone la restricción de Inclusión (flecha discontinua) para que trabajen juntos en una misión avanzada?",
    options: [
      "Cada uno debe participar individualmente en relaciones previas separadas.",
      "Requiere un triángulo ISA para herencia de atributos.",
      "Permite simultaneidad pero prohíbe cambios futuros.",
      "La pareja debe haber estado asociada previamente a través de otra relación (ej. equipo de élite).",
    ],
    correctAnswer: 3, // d) La pareja debe haber estado asociada previamente a través de otra relación (ej. equipo de élite).
  },
  {
    question:
      "¿Qué comando se utiliza para crear una vista en una base de datos?",
    options: [
      "CREATE VIEW",
      "NEW VIEW",
      "BUILD VIEW",
      "MAKE VIEW",
    ],
    correctAnswer: 0, // a) CREATE VIEW
  },
  {
    question:
      "INSERT INTO Productos (NombreProducto, Precio, Stock) VALUES ('Teclado', 25.99, 50)",
    options: [
      "Elimina productos sin stock",
      "Actualiza el stock de todos los productos",
      "Inserta un nuevo producto con su precio y stock",
      "Crea una vista de productos",
    ],
    correctAnswer: 2, // c) Inserta un nuevo producto con su precio y stock
  },
  {
    question:
      "¿Qué caracteriza a una restricción de exclusión entre relaciones?",
    options: [
      "Una entidad solo puede participar en una de varias relaciones alternativas en un momento dado",
      "Una entidad debe participar en todas las relaciones posibles",
      "Las relaciones deben ser siempre de cardinalidad N:M",
      "Las entidades implicadas no pueden tener atributos propios",
    ],
    correctAnswer: 0, // a) Una entidad solo puede participar en una de varias relaciones alternativas en un momento dado
  },
  {
    question:
      "¿Qué herramienta se utiliza para instalar y gestionar PostgreSQL en macOS según la guía?",
    options: ["Docker", "Git", "Homebrew", "VirtualBox"],
    correctAnswer: 2, // c) Homebrew
  },
  {
    question:
      "INSERT INTO Productos (IDProducto, Nombre, Stock) VALUES (1, 'Ratón', 10) ON DUPLICATE KEY UPDATE Stock = Stock + 10",
    options: [
      "Ignora la sentencia si la clave ya existe",
      "Siempre inserta un producto nuevo aunque exista",
      "Elimina el producto si la clave ya existe",
      "Inserta un nuevo producto o aumenta el stock si ya existe",
    ],
    correctAnswer: 3, // d) Inserta un nuevo producto o aumenta el stock si ya existe
  },
  {
    question:
      "¿Qué comando DCL se utiliza para eliminar un usuario de una base de datos?",
    options: ["ERASE USER", "DELETE USER", "DROP USER", "REMOVE USER"],
    correctAnswer: 2, // c) DROP USER
  },
  {
    question:
      "¿Cuál de los siguientes es un lenguaje estándar para interactuar con bases de datos relacionales?",
    options: ["SQL", "HTML", "JSON", "CSS"],
    correctAnswer: 0, // a) SQL
  },
  {
    question:
      "GRANT SELECT, INSERT ON BBDD.Clienes TO 'usuario1'@'localhost'",
    options: [
      "Concede permisos solo de administración",
      "Concede permisos de lectura e inserción sobre la tabla Clientes",
      "Crea el usuario usuario1",
      "Elimina todos los permisos del usuario1",
    ],
    correctAnswer: 1, // b) Concede permisos de lectura e inserción sobre la tabla Clientes
  },
  {
    question:
      "¿Qué comando se utiliza para combinar verticalmente los resultados de dos consultas?",
    options: ["MERGE", "COMBINE", "UNION", "JOIN"],
    correctAnswer: 2, // c) UNION
  },
  {
    question: "DROP TABLE LineasPedido",
    options: [
      "Vacía la tabla pero mantiene su estructura",
      "Crea una copia de la tabla",
      "Solo elimina algunas filas",
      "Elimina por completo la tabla LineasPedido y sus datos",
    ],
    correctAnswer: 3, // d) Elimina por completo la tabla LineasPedido y sus datos
  },
  {
    question:
      "¿Cuál es el objetivo principal del diseño lógico de una base de datos?",
    options: [
      "Definir la estructura conceptual sin detalles físicos",
      "Definir consultas SQL específicas",
      "Definir la interfaz gráfica del sistema",
      "Definir cómo se almacenan físicamente los datos",
    ],
    correctAnswer: 0, // a) Definir la estructura conceptual sin detalles físicos
  },
  {
    question:
      "¿Qué comando DML se utiliza para insertar múltiples filas en una tabla en una sola sentencia?",
    options: [
      "ADD MULTIPLE",
      "INSERT INTO ... VALUES (...), (...), ...",
      "INSERT ALL",
      "INSERT MULTIPLE",
    ],
    correctAnswer: 1, // b) INSERT INTO ... VALUES (...), (...), ...
  },
];

export default function KahootBBDD0212Part1() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(Array(questions.length).fill(false))
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)

  const handleAnswer = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return

    setSelectedAnswer(answerIndex)

    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestion] = true
    setAnsweredQuestions(newAnswered)

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    } else {
      setIncorrectCount(incorrectCount + 1)
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(null)
    }
  }

  const nextQuestion = () => {
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
    setIncorrectCount(0)
    setAnsweredQuestions(Array(questions.length).fill(false))
  }

  if (showResult) {
    const correctedScore = score - incorrectCount / 3
    const maxScore = questions.length
    const percentage = ((correctedScore / maxScore) * 100).toFixed(1)

    return (
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Resultados del Simulacro</h2>
              <div className="text-6xl font-bold text-blue-600">{percentage}%</div>
              <p className="text-xl text-muted-foreground">
                Has acertado {score} de {questions.length} preguntas
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Aciertos: <span className="text-green-500 font-semibold">{score}</span> | Fallos:{" "}
                  <span className="text-red-500 font-semibold">{incorrectCount}</span>
                </p>
                <p className="text-xs italic">
                  Puntuación con fórmula de corrección: {correctedScore.toFixed(2)} / {maxScore}
                </p>
                <p className="text-xs text-muted-foreground/70">(Fórmula: Aciertos - Fallos/3)</p>
              </div>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button onClick={resetQuiz} size="lg" className="bg-blue-600 hover:bg-blue-700">
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
      </div>
    )
  }

  const question = questions[currentQuestion]
  const isAnswered = answeredQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-medium text-blue-600">
              {answeredQuestions.filter((a) => a).length} respondidas
            </span>
          </div>
        </div>

        <Card className="p-6 md:p-8 bg-card border-border">
          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground flex-1">{question.question}</h2>
              <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {score}/{questions.length}
              </div>
            </div>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === question.correctAnswer
                const showCorrect = isAnswered && isCorrect
                const showIncorrect = isAnswered && isSelected && !isCorrect

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
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

            <div className="flex gap-3 pt-4">
              <Button
                onClick={previousQuestion}
                disabled={currentQuestion === 0}
                variant="outline"
                className="flex-1 bg-transparent"
              >
                Anterior
              </Button>
              <Button onClick={nextQuestion} disabled={!isAnswered} className="flex-1 bg-blue-600 hover:bg-blue-700">
                {currentQuestion === questions.length - 1 ? "Ver Resultados" : "Siguiente"}
              </Button>
            </div>
          </div>
        </Card>

        <div className="w-full bg-muted rounded-full h-2 mt-4">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
