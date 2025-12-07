"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question:
      "¿Qué representa gráficamente un atributo multivaluado en un diagrama MER?",
    options: [
      "Un rombo con doble trazo",
      "Una elipse con doble trazo",
      "Una elipse discontinua",
      "Un rectángulo con doble trazo",
    ],
    correctAnswer: 1, // b) Una elipse con doble trazo 
  },
  {
    question:
      "¿Qué tipo de base de datos distribuye la información en varios servidores interconectados?",
    options: ["Relacional local", "Centralizada", "Documental", "Distribuida"],
    correctAnswer: 3, // d) Distribuida
  },
  {
    question:
      "UPDATE Clientes SET Email = 'nuevo@example.com' WHERE IDCliente = 1",
    options: [
      "Actualiza el email de todos los clientes",
      "Actualiza el email del cliente con ID 1",
      "Inserta un nuevo cliente",
      "Elimina el cliente 1",
    ],
    correctAnswer: 1, // b) Actualiza el email del cliente con ID 1
  },
  {
    question: "¿Qué representa una entidad en el Modelo Entidad‐Relación?",
    options: [
      "Un objeto o concepto del mundo real que se desea almacenar",
      "Una consulta SQL",
      "Un usuario del SGBD",
      "Un índice físico",
    ],
    correctAnswer: 0, // a) Un objeto o concepto del mundo real que se desea almacenar
  },
  {
    question:
      "¿Qué comando DDL se utiliza para mostrar todas las bases de datos disponibles?",
    options: [
      "SHOW DATABASES",
      "LIST DATABASES",
      "DISPLAY DATABASES",
      "VIEW DATABASES",
    ],
    correctAnswer: 0, // a) SHOW DATABASES
  },
  {
    question: "SELECT Nombre FROM Productos WHERE Nombre LIKE 'A%'",
    options: [
      "Devuelve productos cuyo nombre contiene una A en cualquier posición",
      "Devuelve productos cuyo nombre termina en A",
      "Devuelve productos cuyo nombre empieza por A",
      "Devuelve todos los productos",
    ],
    correctAnswer: 2, // c) Devuelve productos cuyo nombre empieza por A
  },
  {
    question: "¿Qué es un atributo derivado?",
    options: [
      "Un atributo calculado a partir de otros atributos",
      "Un atributo que admite múltiples valores",
      "Un atributo que no tiene valor",
      "Un atributo que actúa como clave primaria",
    ],
    correctAnswer: 0, // a) Un atributo calculado a partir de otros atributos 
  },
  {
    question:
      "¿Qué comando DDL se utiliza para eliminar una base de datos completa?",
    options: [
      "DELETE DATABASE",
      "DROP DATABASE",
      "ERASE DATABASE",
      "REMOVE DATABASE",
    ],
    correctAnswer: 1, // b) DROP DATABASE
  },
  {
    question:
      "¿Qué objetivo principal tiene la normalización en el diseño de bases de datos?",
    options: [
      "Eliminar todas las claves ajenas",
      "Impedir el uso de vistas e índices",
      "Reducir redundancias y anomalías de actualización",
      "Aumentar el tamaño de las tablas",
    ],
    correctAnswer: 2, // c) Reducir redundancias y anomalías de actualización
  },
  {
    question:
      "GRANT SELECT ON BBDD.* TO 'report'@'%' WITH GRANT OPTION",
    options: [
      "Permite al usuario report leer todas las tablas y delegar ese permiso a otros",
      "Concede permisos de escritura completos",
      "Impide que report ceda sus permisos a otros",
      "Revoca permisos de lectura",
    ],
    correctAnswer: 0, // a) Permite al usuario report leer todas las tablas y delegar ese permiso a otros
  },
  {
    question:
      "¿Qué comando DCL se utiliza para revocar permisos de un usuario en una base de datos?",
    options: ["DENY", "DELETE", "REMOVE", "REVOKE"],
    correctAnswer: 3, // d) REVOKE
  },
  {
    question:
      "SELECT Pr.Nombre, SUM(L.Cantidad) FROM Productos Pr JOIN LineasPedido L ON Pr.IDProducto = L.IDProducto GROUP BY Pr.Nombre",
    options: [
      "Devuelve cada producto con la cantidad total vendida",
      "Devuelve solo la última venta de cada producto",
      "Elimina líneas de pedido duplicadas",
      "Actualiza el stock de productos",
    ],
    correctAnswer: 0, // a) Devuelve cada producto con la cantidad total vendida
  },
  {
    question:
      "¿Qué se entiende por especialización en el Modelo Entidad‐Relación Extendido (MERE)?",
    options: [
      "Convertir relaciones ternarias en binarias",
      "Unir varias entidades específicas en una más general",
      "Partir de una entidad general y crear subentidades más específicas que heredan sus atributos",
      "Eliminar entidades redundantes",
    ],
    correctAnswer: 2, // c) Partir de una entidad general y crear subentidades más específicas que heredan sus atributos
  },
  {
    question: "¿Qué convierte a los datos en información útil?",
    options: [
      "Organizarlos y darles contexto",
      "Cambiar su formato a binario",
      "Aplicar compresión",
      "Aumentar la cantidad de datos",
    ],
    correctAnswer: 0, // a) Organizarlos y darles contexto
  },
  {
    question:
      "SELECT F.NumFactura, Cl.NombreCliente FROM Facturas F LEFT JOIN Clientes Cl ON F.IDCliente = Cl.IDCliente WHERE Cl.IDCliente IS NULL",
    options: [
      "Actualiza el cliente de las facturas",
      "Elimina facturas antiguas",
      "Devuelve facturas sin cliente asociado",
      "Devuelve clientes sin facturas",
    ],
    correctAnswer: 2, // c) Devuelve facturas sin cliente asociado
  },
  {
    question:
      "¿Cuál es el objetivo principal de usar procedimientos almacenados en lugar de enviar muchas sentencias individuales desde la aplicación?",
    options: [
      "Reemplazar completamente a las vistas",
      "Mejorar rendimiento y centralizar la lógica de negocio",
      "Aumentar el tamaño de la base de datos",
      "Evitar el uso de transacciones",
    ],
    correctAnswer: 1, // b) Mejorar rendimiento y centralizar la lógica de negocio
  },
  {
    question: "UPDATE Empleados SET Sueldo = Sueldo * 1.05",
    options: [
      "Solo actualiza el sueldo del último empleado",
      "Crea una nueva tabla de sueldos",
      "Elimina empleados con sueldo bajo",
      "Incrementa el sueldo de todos los empleados un 5 por ciento",
    ],
    correctAnswer: 3, // d) Incrementa el sueldo de todos los empleados un 5 por ciento
  },
  {
    question:
      "¿Cuál de las siguientes NO es una parte del modelo de datos relacional?",
    options: [
      "Parte semántica",
      "Parte gráfica",
      "Parte estructural",
      "Parte manipulativa",
    ],
    correctAnswer: 1, // b) Parte gráfica
  },
  {
    question: "¿Cuál es el elemento básico del modelo relacional?",
    options: ["El índice", "El registro", "La tabla", "La columna"],
    correctAnswer: 2, // c) La tabla
  },
  {
    question: "SELECT Ciudad, COUNT() FROM Clientes GROUP BY Ciudad",
    options: [
      "Devuelve cuántos clientes hay en cada ciudad",
      "Elimina ciudades sin clientes",
      "Actualiza la ciudad de todos los clientes",
      "Devuelve solo la ciudad con más clientes",
    ],
    correctAnswer: 0, // a) Devuelve cuántos clientes hay en cada ciudad
  },
  {
    question:
      "CREATE TABLE Pedidos (IDPedido INT PRIMARY KEY, Fecha DATE, IDCliente INT, FOREIGN KEY (IDCliente) REFERENCES Clientes(IDCliente))",
    options: [
      "Crea solo la clave primaria sin columnas",
      "Elimina la tabla Pedidos y su relación",
      "Crea una tabla Pedidos relacionada con Clientes mediante clave ajena",
      "Crea una vista de Pedidos",
    ],
    correctAnswer: 2, // c) Crea una tabla Pedidos relacionada con Clientes mediante clave ajena
  },
  {
    question:
      "¿Qué diferencia hay entre exclusividad y exclusión según el MERE?",
    options: [
      "La exclusividad solo aplica a relaciones ternarias",
      "La exclusión solo se usa en generalizaciones",
      "La exclusión es más restrictiva que la exclusividad",
      "La exclusividad prohíbe participar en las otras relaciones siempre, la exclusión solo simultáneamente",
    ],
    correctAnswer: 3, // d) La exclusividad prohíbe participar en las otras relaciones siempre, la exclusión solo simultáneamente
  },
  {
    question:
      "SELECT Nombre, Stock FROM Productos WHERE Stock BETWEEN 10 AND 50",
    options: [
      "Devuelve solo productos con stock menor que 10",
      "Devuelve productos con stock entre 10 y 50 inclusive",
      "Devuelve productos con stock mayor que 50",
      "Actualiza el stock a 10 o 50",
    ],
    correctAnswer: 1, // b) Devuelve productos con stock entre 10 y 50 inclusive
  },
  {
    question:
      "¿Qué es una base de datos en el contexto de la era digital?",
    options: [
      "Un conjunto de archivos independientes sin relación",
      "Un dispositivo físico de almacenamiento",
      "Un programa que solo muestra información en pantalla",
      "Un sistema que permite almacenar, organizar y recuperar datos de forma estructurada",
    ],
    correctAnswer: 3, // d) Un sistema que permite almacenar, organizar y recuperar datos de forma estructurada
  },
  {
    question:
      "¿Qué tipo de entidad depende de otra para existir y suele tener clave primaria compuesta?",
    options: [
      "Entidad asociativa",
      "Entidad fuerte",
      "Entidad de unión",
      "Entidad débil",
    ],
    correctAnswer: 3, // d) Entidad débil 
  },
  {
    question:
      "¿Qué tipo de JOIN se utiliza para devolver todas las filas de la tabla izquierda y las coincidencias de la derecha?",
    options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "FULL JOIN"],
    correctAnswer: 0, // a) LEFT JOIN
  },
  {
    question:
      "SELECT Nombre, Precio FROM Productos WHERE Precio > 100",
    options: [
      "Devuelve solo un producto cualquiera",
      "Modifica el precio de todos los productos",
      "Elimina los productos con precio mayor que 100",
      "Devuelve todos los productos con precio mayor que 100",
    ],
    correctAnswer: 3, // d) Devuelve todos los productos con precio mayor que 100
  },
  {
    question:
      "¿Qué ventaja ofrece una base de datos NoSQL frente a una relacional?",
    options: [
      "Ofrece mayor flexibilidad para datos no estructurados o semiestructurados",
      "Solo sirve para datos numéricos",
      "Obliga a usar siempre el mismo esquema rígido",
      "No permite escalar horizontalmente",
    ],
    correctAnswer: 0, // a) Ofrece mayor flexibilidad para datos no estructurados o semiestructurados
  },
  {
    question:
      "¿Cuál de las siguientes opciones describe una propiedad esencial de las transacciones conocida por el acrónimo ACID?",
    options: [
      "Acumulación: las operaciones se agrupan sin control",
      "Anonimato: oculta la identidad de los usuarios",
      "Aleatoriedad: el orden de ejecución no importa",
      "Atomicidad: se completan todas las operaciones o se deshacen",
    ],
    correctAnswer: 3, // d) Atomicidad: se completan todas las operaciones o se deshacen
  },
  {
    question:
      "¿Qué define una restricción de inclusión entre asociaciones de entidades?",
    options: [
      "Que dos entidades solo pueden asociarse mediante una relación si ya están asociadas por otra",
      "Que siempre debe existir una relación ternaria",
      "Que las entidades comparten la misma clave primaria",
      "Que ninguna de las dos entidades puede asociarse nunca",
    ],
    correctAnswer: 0, // a) Que dos entidades solo pueden asociarse mediante una relación si ya están asociadas por otra
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
