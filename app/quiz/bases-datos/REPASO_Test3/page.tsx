"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question:
      "INSERT INTO Clientes (IDCliente, Nombre, Email) VALUES (5, 'Luis', 'luis@example.com') ON DUPLICATE KEY UPDATE Email = VALUES(Email)",
    options: [
      "No realiza ninguna operación si el ID existe",
      "Actualiza el email del cliente si el ID ya existe",
      "Inserta siempre un nuevo cliente con ID diferente",
      "Elimina el cliente si el email es duplicado",
    ],
    correctAnswer: 1,
  },
  {
    question: "SELECT Nombre FROM Clientes ORDER BY Nombre ASC",
    options: [
      "Devuelve los nombres de clientes ordenados alfabéticamente ascendente",
      "Devuelve los nombres en orden descendente",
      "Agrupa los clientes por nombre",
      "Elimina los clientes duplicados",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Para qué tipo de tareas resulta especialmente adecuado definir eventos recurrentes en la base de datos?",
    options: [
      "Crear tablas temporales puntuales",
      "Rutinas periódicas como backups, limpieza de datos o generación de informes",
      "Definir nuevas claves primarias",
      "Cambiar la versión del motor de la base de datos",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué regla de integridad impide que un atributo de la clave primaria tome el valor NULL?",
    options: [
      "Integridad referencial",
      "Regla UNIQUE",
      "Integridad de entidad",
      "Regla CHECK",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "¿Qué característica destaca en una base de datos frente a un conjunto de ficheros independientes?",
    options: [
      "Mayor redundancia de datos",
      "Imposibilidad de acceso concurrente",
      "Uso exclusivo de texto plano",
      "Relaciones entre datos que mejoran coherencia e integración",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "¿Qué comando DML se utiliza para cargar datos desde un archivo externo a una tabla?",
    options: [
      "LOAD DATA INFILE",
      "INSERT DATA",
      "UPLOAD DATA",
      "IMPORT DATA",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "SELECT A.NombreAlumno, C.NombreCurso FROM Alumnos A JOIN Matriculas M ON A.IDAlumno = M.IDAlumno JOIN Cursos C ON M.IDCurso = C.IDCurso",
    options: [
      "Muestra qué cursos está matriculado cada alumno",
      "Elimina cursos sin alumnos",
      "Crea nuevas matrículas",
      "Muestra solo los alumnos sin matrícula",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué efecto tiene la sentencia REVOKE sobre los privilegios de un usuario en la base de datos?",
    options: [
      "Retira solo los permisos indicados, manteniendo el resto",
      "Concede todos los permisos posibles",
      "No tiene ningún efecto",
      "Elimina totalmente al usuario",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "SELECT P.NombreProducto, Pro.NombreProveedor FROM Productos P RIGHT JOIN Proveedores Pro ON P.IDProveedor = Pro.IDProveedor",
    options: [
      "Devuelve todos los proveedores aunque no tengan productos",
      "Crea proveedores nuevos",
      "Actualiza productos sin proveedor",
      "Devuelve solo productos con proveedor",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué tipo de clave garantiza que no haya dos filas iguales respecto a ese conjunto de atributos y que además sea irreducible?",
    options: [
      "Clave secundaria",
      "Clave primaria",
      "Clave ajena",
      "Clave candidata",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "¿Qué comando se utiliza para eliminar todos los registros de una tabla rápidamente?",
    options: ["TRUNCATE", "CLEAR", "DELETE", "DROP"],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué comando DQL se utiliza para seleccionar columnas específicas de una tabla?",
    options: ["QUERY", "GET", "SELECT", "FETCH"],
    correctAnswer: 2,
  },
  {
    question:
      "¿Qué representa una relación ISA en un diagrama MER/MERE?",
    options: [
      "Una jerarquía de generalización/especialización entre superclase y subclases",
      "Una agregación entre relaciones",
      "Un atributo multivaluado",
      "Una relación N:M estándar",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "CREATE TABLE Clientes (IDCliente INT PRIMARY KEY, Nombre VARCHAR(100) NOT NULL, Email VARCHAR(100) UNIQUE)",
    options: [
      "Elimina la tabla Clientes",
      "Crea una tabla base llamada Clientes",
      "Modifica la tabla Clientes existente",
      "Inserta datos en la tabla Clientes",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "SELECT E.NombreEmpleado, D.NombreDepartamento, S.Sueldo FROM Empleados E JOIN Departamentos D ON E.IDDepartamento = D.IDDepartamento JOIN Salarios S ON E.IDEmpleado = S.IDEmpleado",
    options: [
      "Cuenta empleados por departamento",
      "Elimina empleados sin sueldo",
      "Devuelve empleados con su departamento y sueldo",
      "Crea nuevos salarios para cada empleado",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "¿Qué comando DML se utiliza para combinar INSERT y UPDATE en una sola operación en MySQL?",
    options: [
      "MERGE",
      "FUSE",
      "INSERT ... ON DUPLICATE KEY UPDATE",
      "INSERT OR UPDATE",
    ],
    correctAnswer: 2,
  },
  {
    question: "SELECT MAX(Precio) FROM Productos",
    options: [
      "Devuelve el precio mínimo",
      "Cuenta cuántos productos hay",
      "Devuelve el producto más vendido",
      "Devuelve el precio máximo de la tabla Productos",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "¿Qué describe una restricción de inclusividad en el MERE?",
    options: [
      "Que para participar en una relación una entidad debe haber participado antes en otra",
      "Que una entidad puede estar en varias subclases simultáneamente",
      "Que dos relaciones nunca pueden cumplirse a la vez",
      "Que una entidad solo puede pertenecer a una subclase",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué requisito caracteriza a la Primera Forma Normal (1FN)?",
    options: [
      "Debe existir una clave ajena en cada tabla",
      "Cada atributo debe depender solo de la clave",
      "No debe haber dependencias transitivas",
      "Todos los atributos deben ser atómicos sin valores multivaluados",
    ],
    correctAnswer: 3,
  },
  {
    question: "SELECT * FROM Clientes WHERE Ciudad = 'Madrid'",
    options: [
      "Actualiza la ciudad de los clientes a Madrid",
      "Devuelve todos los clientes de Madrid",
      "Crea un nuevo cliente en Madrid",
      "Elimina los clientes que no son de Madrid",
    ],
    correctAnswer: 1,
  },
  {
    question: "CREATE INDEX idx_clientes_email ON Clientes(Email)",
    options: [
      "Crea un índice para acelerar búsquedas por Email",
      "Elimina duplicados en Email",
      "Convierte Email en NOT NULL",
      "Crea una clave primaria nueva",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué indica la participación total de una entidad en una relación en el MER/MERE?",
    options: [
      "Que la relación es siempre N:M",
      "Que ninguna instancia puede participar en la relación",
      "Que solo algunas instancias pueden participar opcionalmente",
      "Que cada instancia debe aparecer en al menos una relación",
    ],
    correctAnswer: 3,
  },
  {
    question: "SELECT DISTINCT Categoria FROM Productos",
    options: [
      "Elimina categorías duplicadas de la tabla",
      "Cuenta cuántas categorías hay",
      "Devuelve cada categoría una sola vez",
      "Ordena las categorías alfabéticamente",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "¿Qué tipo de bloqueo permite que varias transacciones puedan leer al mismo tiempo una misma fila o tabla, pero sin modificarla?",
    options: [
      "Bloqueo compartido",
      "Bloqueo intencional",
      "Bloqueo de escalada",
      "Bloqueo exclusivo",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "UPDATE Productos SET Stock = Stock - 1 WHERE IDProducto = 10",
    options: [
      "Duplica el stock del producto 10",
      "Elimina el producto 10",
      "Establece el stock de todos los productos a 1",
      "Resta una unidad al stock del producto 10",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "¿Cuál es la función principal de un Sistema de Gestión de Bases de Datos (SGBD)?",
    options: [
      "Fabricar hardware de almacenamiento",
      "Diseñar interfaces gráficas",
      "Gestionar, almacenar y permitir el acceso seguro a los datos",
      "Traducir código de programación",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "¿Qué restricción se utiliza para impedir que una columna acepte valores repetidos, salvo posibles nulos?",
    options: ["CHECK", "NOT NULL", "UNIQUE", "PRIMARY KEY"],
    correctAnswer: 2,
  },
  {
    question:
      "¿Qué opción ON DELETE elimina también las filas relacionadas en la tabla secundaria cuando se borra una fila de la tabla principal?",
    options: [
      "ON DELETE NO ACTION",
      "ON DELETE SET DEFAULT",
      "ON DELETE SET NULL",
      "ON DELETE CASCADE",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "¿Qué es una tabla base en una base de datos relacional?",
    options: [
      "Una tabla que solo almacena el resultado de una consulta",
      "Una tabla temporal que crea el sistema",
      "Una vista sin definición",
      "Una tabla persistente que guarda datos y metadatos",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "En el ejemplo de (Empleado que Diseña o Fabrica Productos), ¿cuál es la diferencia clave entre Exclusión (línea discontinua) y Exclusividad?",
    options: [
      "Exclusión es permanente y Exclusividad permite cambios futuros.",
      "Exclusión usa triángulo ISA y Exclusividad no.",
      "Exclusividad es 'nunca ambas' y Exclusión es 'no al mismo tiempo, pero sí en secuencia'.",
      "Ambas requieren flecha con cardinalidad mínima.",
    ],
    correctAnswer: 2,
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
