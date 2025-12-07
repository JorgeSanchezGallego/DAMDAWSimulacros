"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question:
      "En el contexto de las propiedades ACID de una transacción, ¿qué garantiza la consistencia?",
    options: [
      "Que solo exista una transacción activa",
      "Que los datos respeten siempre las reglas y restricciones definidas",
      "Que la transacción se ejecute muy rápido",
      "Que los usuarios vean siempre la misma pantalla",
    ],
    correctAnswer: 1, // b) Que los datos respeten siempre las reglas y restricciones definidas
  },
  {
    question:
      "¿Qué tipo de relación se establece cuando un cliente puede realizar muchos pedidos pero cada pedido pertenece a un único cliente?",
    options: ["Uno a uno", "Muchos a muchos", "Muchos a uno", "Uno a muchos"],
    correctAnswer: 3, // d) Uno a muchos (1:N)
  },
  {
    question:
      "¿Qué comando DDL se utiliza para modificar la estructura de una tabla, como añadir una columna?",
    options: [
      "UPDATE TABLE",
      "CHANGE TABLE",
      "MODIFY TABLE",
      "ALTER TABLE",
    ],
    correctAnswer: 3, // d) ALTER TABLE
  },
  {
    question: "SELECT COUNT() FROM Pedidos",
    options: [
      "Devuelve la suma de los importes",
      "Devuelve el número total de pedidos",
      "Elimina todos los pedidos",
      "Devuelve el último pedido insertado",
    ],
    correctAnswer: 1, // b) Devuelve el número total de pedidos
  },
  {
    question:
      "ALTER TABLE Clientes ADD COLUMN Telefono VARCHAR(15)",
    options: [
      "Añade una nueva columna Telefono a la tabla Clientes",
      "Inserta un teléfono por defecto",
      "Elimina la columna Telefono",
      "Cambia el nombre de la tabla Clientes",
    ],
    correctAnswer: 0, // a) Añade una nueva columna Telefono a la tabla Clientes
  },
  {
    question:
      "¿Qué tipo de JOIN se utiliza para devolver solo las filas que tienen valores coincidentes en ambas tablas?",
    options: ["RIGHT JOIN", "FULL JOIN", "LEFT JOIN", "INNER JOIN"],
    correctAnswer: 3, // d) INNER JOIN
  },
  {
    question:
      "¿Qué comando se utiliza para seleccionar una base de datos específica para trabajar en ella?",
    options: [
      "SELECT DATABASE",
      "CHOOSE DATABASE",
      "USE",
      "SET DATABASE",
    ],
    correctAnswer: 2, // c) USE
  },
  {
    question:
      "SELECT C.Nombre, COUNT(P.IDPedido) FROM Clientes C LEFT JOIN Pedidos P ON C.IDCliente = P.IDCliente GROUP BY C.Nombre",
    options: [
      "Muestra solo clientes que han hecho pedidos",
      "Elimina clientes sin pedidos",
      "Muestra cada cliente y el número de pedidos que tiene",
      "Actualiza el número de pedidos",
    ],
    correctAnswer: 2, // c) Muestra cada cliente y el número de pedidos que tiene
  },
  {
    question:
      "Para que un Empleado Diseñe un Producto, ¿qué impone la restricción de Inclusividad (arco con flecha) del MERE?",
    options: [
      "Debe haber participado previamente en otra relación (ej. asistir a 2 cursos).",
      "Debe pertenecer simultáneamente a dos relaciones excluyentes.",
      "Crea tablas separadas por subclase como en Marvel.",
      "Usa discriminador en una sola tabla como Pitufos.",
    ],
    correctAnswer: 0, // a) Debe haber participado previamente en otra relación (ej. asistir a 2 cursos).
  },
  {
    question:
      "¿Qué ventaja principal aportan las vistas a nivel de seguridad en una base de datos?",
    options: [
      "Impiden cualquier acceso de lectura",
      "Eliminan automáticamente los datos antiguos",
      "Cifran físicamente todos los datos de la tabla",
      "Permiten mostrar solo algunas columnas o filas a cada usuario",
    ],
    correctAnswer: 3, // d) Permiten mostrar solo algunas columnas o filas a cada usuario
  },
  {
    question:
      "¿Qué comando se utiliza para mostrar la estructura de una tabla?",
    options: [
      "DISPLAY STRUCTURE",
      "VIEW STRUCTURE",
      "SHOW STRUCTURE",
      "DESCRIBE",
    ],
    correctAnswer: 3, // d) DESCRIBE (o DESC)
  },
  {
    question:
      "CREATE VIEW VistaProductosCaros AS SELECT NombreProducto, Precio FROM Productos WHERE Precio > 100",
    options: [
      "Inserta productos con precio > 100",
      "Elimina productos baratos",
      "Crea una tabla física nueva",
      "Crea una vista que muestra solo productos caros",
    ],
    correctAnswer: 3, // d) Crea una vista que muestra solo productos caros
  },
  {
    question:
      "En una jerarquía de generalización/especialización, ¿qué significa que sea exclusiva?",
    options: [
      "Las subclases comparten claves ajenas distintas",
      "No existe superclase",
      "Cada instancia de la superclase pertenece a una sola subclase",
      "Toda instancia pertenece a todas las subclases",
    ],
    correctAnswer: 2, // c) Cada instancia de la superclase pertenece a una sola subclase
  },
  {
    question:
      "SELECT P.NombreProducto, C.NombreCategoria FROM Productos P INNER JOIN Categorias C ON P.IDCategoria = C.IDCategoria WHERE C.NombreCategoria = 'Informática'",
    options: [
      "Devuelve productos de la categoría Informática",
      "Elimina productos de Informática",
      "Actualiza la categoría de los productos",
      "Devuelve todas las categorías",
    ],
    correctAnswer: 0, // a) Devuelve productos de la categoría Informática
  },
  {
    question:
      "¿Qué comando DML se utiliza para actualizar múltiples filas en una tabla?",
    options: [
      "MODIFY ALL",
      "UPDATE MULTIPLE",
      "UPDATE ALL",
      "UPDATE ... SET ... WHERE ...",
    ],
    correctAnswer: 3, // d) UPDATE ... SET ... WHERE ...
  },
  {
    question:
      "Si un usuario necesita volver a recuperar un permiso que se le retiró con REVOKE, ¿qué operación permite restaurarlo?",
    options: [
      "Ejecutar ROLLBACK",
      "Ejecutar DROP USER",
      "No es posible restaurarlo",
      "Volver a ejecutar GRANT",
    ],
    correctAnswer: 3, // d) Volver a ejecutar GRANT
  },
  {
    question:
      "En una relación binaria de cardinalidad N:M, ¿qué se crea al transformar el MER al modelo relacional?",
    options: [
      "Una única tabla fusionando las entidades",
      "No se crea ninguna tabla adicional",
      "Dos tablas nuevas sin claves",
      "Una tabla intermedia con las claves de ambas entidades",
    ],
    correctAnswer: 3, // d) Una tabla intermedia con las claves de ambas entidades
  },
  {
    question:
      "¿Cuál de las siguientes propiedades forma parte del acrónimo ACID de las transacciones?",
    options: [
      "Atomicidad",
      "Aleatoriedad",
      "Distribución",
      "Compresibilidad",
    ],
    correctAnswer: 0, // a) Atomicidad
  },
  {
    question:
      "¿Qué condición adicional exige la Segunda Forma Normal (2FN) respecto a 1FN?",
    options: [
      "Eliminar dependencias parciales respecto a claves compuestas",
      "Usar siempre claves artificiales",
      "Prohibir claves alternativas",
      "Eliminar todos los valores nulos",
    ],
    correctAnswer: 0, // a) Eliminar dependencias parciales respecto a claves compuestas
  },
  {
    question:
      "¿Qué principio de seguridad recomienda otorgar solo los permisos mínimos necesarios para que un usuario realice su trabajo?",
    options: [
      "Principio de menor privilegio",
      "Acceso total",
      "Seguridad por oscuridad",
      "Copia de seguridad diaria",
    ],
    correctAnswer: 0, // a) Principio de menor privilegio
  },
  {
    question:
      "En el ejemplo de un supermercado, ¿para qué se utiliza la base de datos?",
    options: [
      "Para registrar compras y actualizar automáticamente el stock",
      "Para almacenar productos pero sin actualizar existencias",
      "Solo para imprimir tickets",
      "Solo para guardar listas de precios",
    ],
    correctAnswer: 0, // a) Para registrar compras y actualizar automáticamente el stock
  },
  {
    question:
      "¿Qué característica diferencia principalmente a un procedimiento almacenado de una función en la base de datos?",
    options: [
      "El procedimiento puede realizar varias operaciones y modificar datos",
      "La función no puede utilizar parámetros",
      "El procedimiento solo devuelve un valor escalar",
      "La función siempre modifica datos",
    ],
    correctAnswer: 0, // a) El procedimiento puede realizar varias operaciones y modificar datos
  },
  {
    question:
      "¿Qué modelo se utiliza para el diseño conceptual en bases de datos relacionales?",
    options: [
      "Modelo orientado a objetos",
      "Modelo documental",
      "Modelo relacional",
      "Modelo entidad-relación",
    ],
    correctAnswer: 3, // d) Modelo entidad-relación
  },
  {
    question:
      "¿Qué diferencia clave hay entre un trigger BEFORE y un trigger AFTER?",
    options: [
      "BEFORE se ejecuta antes de la operación sobre los datos y AFTER después",
      "No existe diferencia entre ellos",
      "BEFORE se usa fuera de la base de datos y AFTER dentro",
      "BEFORE solo sirve para borrados y AFTER solo para inserciones",
    ],
    correctAnswer: 0, // a) BEFORE se ejecuta antes de la operación sobre los datos y AFTER después
  },
  {
    question:
      "En una relación 1:N entre tablas, ¿dónde se coloca la clave foránea al transformar el MER al modelo relacional?",
    options: [
      "En el lado 1 de la relación",
      "En el lado N de la relación",
      "En una nueva tabla intermedia",
      "En ambas tablas",
    ],
    correctAnswer: 1, // b) En el lado N de la relación
  },
  {
    question:
      "INSERT INTO Clientes (IDCliente, Nombre, Email) VALUES (1, 'Ana', 'ana@example.com')",
    options: [
      "Elimina al cliente con ID 1",
      "Crea la tabla Clientes",
      "Actualiza el email del cliente 1",
      "Inserta un nuevo registro en la tabla Clientes",
    ],
    correctAnswer: 3, // d) Inserta un nuevo registro en la tabla Clientes
  },
  {
    question:
      "¿Qué describe la cardinalidad en una relación entre entidades?",
    options: [
      "El número máximo de instancias que pueden participar en la relación",
      "El volumen de datos almacenados",
      "El tipo de dato de un atributo",
      "El orden de los atributos en la tabla",
    ],
    correctAnswer: 0, // a) El número máximo de instancias que pueden participar en la relación
  },
  {
    question:
      "¿Qué modelo de base de datos es el más utilizado actualmente?",
    options: [
      "Modelo documental",
      "Modelo en red",
      "Modelo jerárquico",
      "Modelo relacional",
    ],
    correctAnswer: 3, // d) Modelo relacional
  },
  {
    question:
      "¿Qué tipo de JOIN se utiliza para devolver todas las filas de la tabla derecha y las coincidencias de la izquierda?",
    options: ["FULL JOIN", "INNER JOIN", "LEFT JOIN", "RIGHT JOIN"],
    correctAnswer: 3, // d) RIGHT JOIN
  },
  {
    question:
      "¿Qué es un bloqueo en un sistema de bases de datos?",
    options: [
      "Una copia de seguridad completa de la base de datos",
      "Una restricción de integridad referencial",
      "Un mecanismo para controlar el acceso concurrente a los datos",
      "Un índice sobre una tabla muy grande",
    ],
    correctAnswer: 2, // c) Un mecanismo para controlar el acceso concurrente a los datos
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
