"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question: "GRANT ALL PRIVILEGES ON BBDD.* TO 'adminapp'@'%'",
    options: [
      "Concede todos los privilegios sobre todas las tablas de la base de datos BBDD",
      "Concede solo privilegios de lectura",
      "Elimina la base de datos BBDD",
      "Revoca todos los privilegios de adminapp"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué valor especial se utiliza en el modelo relacional para representar información desconocida, ausente o no aplicable?",
    options: [
      "Cero",
      "NULL",
      "Cadena vacía",
      "DEFAULT"
    ],
    correctAnswer: 1
  },
  {
    question: "REVOKE INSERT, UPDATE ON BBDD.Productos FROM 'usuario2'@'localhost'",
    options: [
      "Revoca los permisos de inserción y actualización sobre Productos al usuario2",
      "Concede nuevos permisos de inserción y actualización",
      "Elimina al usuario2",
      "Revoca todos los permisos del usuario2 sobre todas las bases"
    ],
    correctAnswer: 0
  },
  {
    question: "SELECT P.NombreProducto, C.NombreCategoria FROM Productos P JOIN Categorias C ON P.IDCategoria = C.IDCategoria",
    options: [
      "Cuenta productos por categoría",
      "Elimina productos sin categoría",
      "Crea nuevas categorías para cada producto",
      "Muestra cada producto junto con el nombre de su categoría"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Cómo se llama la fila de una tabla relacional?",
    options: [
      "Atributo",
      "Índice",
      "Registro o tupla",
      "Clave"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué cláusula se utiliza para limitar el número de filas devueltas en una consulta SELECT?",
    options: [
      "FIRST",
      "LIMIT",
      "TOP",
      "TAKE"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué modo de acceso a ficheros utiliza un índice similar al de un libro?",
    options: [
      "Acceso directo",
      "Acceso indexado",
      "Acceso secuencial",
      "Acceso en memoria caché"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cómo se representa gráficamente la relación ISA entre una superclase (como \"Maestro\" o \"Personaje\") y sus subclases (como \"Maestro Kung Fu/Mutantes\")?",
    options: [
      "Con un arco prohibido entre relaciones.",
      "Con una flecha de dependencia temporal.",
      "Con una línea discontinua entre entidades débiles.",
      "Con un triángulo conectando superclase a subclases."
    ],
    correctAnswer: 3
  },
  {
    question: "ALTER TABLE Productos MODIFY COLUMN Precio DECIMAL(10,2) NOT NULL",
    options: [
      "Cambia el nombre de la columna Precio",
      "Cambia el tipo y restricciones de la columna Precio",
      "Crea un índice sobre Precio",
      "Elimina la columna Precio"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué tipo de tabla almacena una “fotografía” de los datos de una consulta y se refresca solo cada cierto tiempo?",
    options: [
      "Vista simple",
      "Tabla instantánea",
      "Tabla temporal interna",
      "Tabla base"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál de las siguientes es una aplicación práctica habitual de las bases de datos?",
    options: [
      "Compilación de código fuente",
      "Edición de vídeo profesional",
      "Gestión de redes sociales y perfiles de usuarios",
      "Dibujo vectorial"
    ],
    correctAnswer: 2
  },
  {
    question: "DELETE FROM Pedidos WHERE IDPedido = 5",
    options: [
      "Crea un nuevo pedido",
      "Elimina todos los pedidos",
      "Actualiza el estado del pedido",
      "Elimina el pedido con identificador 5"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué diferencia principal hay entre un bloqueo de lectura y uno de escritura?",
    options: [
      "El de escritura permite más concurrencia que el de lectura",
      "El de lectura permite accesos compartidos y el de escritura requiere exclusividad",
      "Ambos siempre bloquean toda la base de datos",
      "El de lectura solo se usa en tablas temporales"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué es una transacción en el contexto de bases de datos relacionales?",
    options: [
      "Un procedimiento almacenado sin efectos sobre los datos",
      "Un único comando SELECT",
      "Una copia de una tabla en otra base de datos",
      "Una unidad lógica de trabajo que agrupa varias operaciones"
    ],
    correctAnswer: 3
  },
  {
    question: "SELECT AVG(Precio) FROM Productos",
    options: [
      "Devuelve el número de productos",
      "Devuelve el precio mínimo",
      "Devuelve el precio medio de todos los productos",
      "Devuelve el producto más caro"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué problema pretende evitar la Tercera Forma Normal (3FN)?",
    options: [
      "La creación de índices secundarios",
      "Las dependencias funcionales transitivas de atributos no clave",
      "El uso de tipos de datos numéricos",
      "La existencia de claves primarias compuestas"
    ],
    correctAnswer: 1
  },
  {
    question: "ALTER TABLE Pedidos ADD CONSTRAINT fk_cliente FOREIGN KEY (IDCliente) REFERENCES Clientes(IDCliente)",
    options: [
      "Convierte IDCliente en clave primaria",
      "Añade una nueva clave ajena a la tabla Pedidos",
      "Crea una tabla intermedia",
      "Elimina la clave primaria de Pedidos"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál de las siguientes sentencias elimina completamente una cuenta de usuario de la base de datos, impidiendo que vuelva a acceder?",
    options: [
      "DROP USER",
      "REVOKE ALL",
      "REMOVE ACCOUNT",
      "DELETE USER"
    ],
    correctAnswer: 0
  },
  {
    question: "En el modelo entidad-relación extendido, ¿qué es la herencia entre entidades?",
    options: [
      "La capacidad de que una entidad especializada comparta atributos y relaciones de una entidad más general",
      "La creación de índices sobre claves primarias",
      "La relación N:M entre dos entidades",
      "La copia física de una tabla en otra base de datos"
    ],
    correctAnswer: 0
  },
  {
    question: "DROP VIEW VistaProductosCaros",
    options: [
      "Convierte la vista en tabla base",
      "Vacía la vista pero la mantiene",
      "Elimina la vista VistaProductosCaros",
      "Elimina la tabla Productos"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué ventaja principal aporta la especialización en un esquema con herencia?",
    options: [
      "Mayor precisión al modelar subconjuntos con atributos propios",
      "Reducción forzosa del número de tablas",
      "Imposibilidad de usar restricciones de integridad",
      "Eliminación completa de claves foráneas"
    ],
    correctAnswer: 0
  },
  {
    question: "DROP USER 'usuario3'@'localhost'",
    options: [
      "Revoca solo permisos de lectura a usuario3",
      "Elimina la cuenta de usuario3 del servidor",
      "Elimina solo la tabla de usuario3",
      "Desconecta temporalmente a usuario3 pero no borra la cuenta"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué comando DCL se utiliza para otorgar permisos a un usuario en una base de datos?",
    options: [
      "GRANT",
      "PERMIT",
      "ALLOW",
      "AUTHORIZE"
    ],
    correctAnswer: 0
  },
  {
    question: "INSERT INTO Pedidos (IDPedido, Fecha, IDCliente) VALUES (10, CURRENT_DATE, 1)",
    options: [
      "Elimina el pedido 10",
      "Inserta un nuevo pedido del cliente 1 con la fecha actual",
      "Crea la tabla Pedidos",
      "Actualiza la fecha del pedido 10"
    ],
    correctAnswer: 1
  },
  {
    question: "SELECT C.Nombre, P.Total FROM Clientes C INNER JOIN Pedidos P ON C.IDCliente = P.IDCliente",
    options: [
      "Actualiza los nombres de clientes",
      "Elimina los pedidos sin cliente",
      "Devuelve cada pedido con el nombre de su cliente",
      "Devuelve solo clientes sin pedidos"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la diferencia principal entre una entidad fuerte y una entidad débil en el modelo Entidad-Relación?",
    options: [
      "La entidad débil nunca tiene atributos",
      "La entidad fuerte no depende de otra para existir",
      "La entidad fuerte siempre es multivaluada",
      "La entidad débil siempre es ternaria"
    ],
    correctAnswer: 1
  },
  {
    question: "Una vista en una base de datos se describe mejor como:",
    options: [
      "Un archivo externo de respaldo",
      "Una tabla física que almacena datos",
      "Un índice sobre una tabla",
      "Una tabla virtual basada en una consulta"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué significa la restricción de Exclusividad con arco sólido (ej. asignado a Grupo de Prácticas o Departamento de Suministros)?",
    options: [
      "Puede cambiar de uno a otro en el tiempo.",
      "Requiere participar primero en una para la otra.",
      "Permite ambas simultáneamente si hay jefe.",
      "Nunca puede participar en ambas relaciones, siempre una sola."
    ],
    correctAnswer: 3
  },
  {
    question: "DELETE FROM LineasPedido WHERE IDPedido = 5",
    options: [
      "Actualiza cantidades del pedido 5",
      "Crea nuevas líneas de pedido",
      "Elimina la tabla LineasPedido",
      "Elimina las líneas asociadas al pedido 5"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué comando DDL se utiliza para crear una tabla en una base de datos?",
    options: [
      "BUILD TABLE",
      "CREATE TABLE",
      "MAKE TABLE",
      "NEW TABLE"
    ],
    correctAnswer: 1
  },
]

export default function KahootBBDD0212Part2() {
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