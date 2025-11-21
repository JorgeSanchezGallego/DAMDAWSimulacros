"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle, RotateCcw, ChevronRight } from "lucide-react"

type Question = {
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    question: "Usuario y Roles: Para que un usuario pueda ser administrador, debe haber sido editor primero.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 3,
  },
  {
    question:
      "Empleados y Gerentes: Para que un empleado pueda ser gerente, debe haber asistido a un curso de liderazgo.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 3,
  },
  {
    question:
      "Un vehículo, al fabricarse y documentarse, puede ser clasificado como Automóvil o Camión, pero no a la vez.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 0,
  },
  {
    question:
      'Relaciones de los músicos con respecto a las orquestas: cada músico puede "tocar" o "dirigir", en función de la obra musical, pero no ambas a la vez.',
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 2,
  },
  {
    question:
      "Pedido y Artículos: Para que un pedido pueda incluir artículos de lujo, debe haber incluido artículos básicos primero.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 3,
  },
  {
    question:
      "Empleado y Proyecto: Para que un empleado pueda liderar un proyecto, debe haber trabajado antes en dicho proyecto.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 3,
  },
  {
    question:
      "Un estudiante, respecto a un curso concreto, debe escoger si se matricula en dicho curso en la modalidad presencial, o bien en la modalidad online. Una vez fijada, ya no podrá cambiar.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 0,
  },
  {
    question:
      "Profesor y Curso: Un profesor puede impartir un curso o recibirlo, dependiendo del año lectivo y de la asignación del claustro, pero no ambas cosas simultáneamente.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 2,
  },
  {
    question:
      "Usuario y Acceso: Para que un usuario tenga acceso a una sección avanzada del sistema, debe haber completado previamente los datos básicos de dicho acceso.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 3,
  },
  {
    question: "Matrimonio y Divorcio: Para que una pareja se divorcie, deben haberse casado primero.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 3,
  },
  {
    question:
      "Un producto que tras su compra se detecta defectuoso, se devuelve al fabricante o bien para reparación o bien para reemplazo, pero no ambos.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 2,
  },
  {
    question:
      "Cliente y Promociones: Un cliente puede aplicar en cada compra una promoción de descuento o una de envío gratuito, pero no ambas en la misma compra.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 2,
  },
  {
    question: "Un libro es editado por una Universidad o por una Editorial, pero no por los dos a la vez.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 2,
  },
  {
    question: "Contrato y Renovación: Para que un contrato se renueve, debe haber existido un contrato previo.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 3,
  },
  {
    question:
      "Obras de arte: para que un artista cree una obra de arte en mármol, debe haber creado antes un boceto en barro y otro antes en cartón-piedra.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 3,
  },
  {
    question:
      "Empleado y Turno: Un empleado puede escoger a lo largo del año, y en periodos de 6 meses, trabajar en el turno de mañana o en el de tarde, pero no en ambos simultáneamente.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 2,
  },
  {
    question: "Proyecto y Evaluación: Para que un proyecto sea evaluado, debe haber sido completado primero.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 3,
  },
  {
    question:
      "Un cliente de banco debe escoger entre abrirse una cuenta bancaria de Ahorro o Corriente, pero no de los dos tipos simultáneamente; dicha cuenta no cambiará nunca su modalidad.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 0,
  },
  {
    question:
      "Cliente y Descuento: Para que un cliente reciba un descuento por fidelidad, debe haber realizado al menos cinco compras previas. El descuento solo es posible si se cumplen las compras previas.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 3,
  },
  {
    question:
      "Un estudiante puede elegir entre dos clubes escolares: el de ciencias o el de arte. Si el estudiante se une al de ciencias, no puede unirse al de arte, ni simultáneamente ni en otro momento. La elección es exclusiva y definitiva.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 0,
  },
  {
    question:
      "Un jugador de fútbol puede jugar como delantero o como defensa, pero no ambas posiciones al mismo tiempo. Puede jugar como delantero en un partido y como defensa en otro partido, pero no en ambas posiciones simultáneamente.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 2,
  },
  {
    question:
      "Un empleado es contratado o bien a tiempo completo o bien a tiempo parcial, pero no ambos; y la empresa ya no puede cambiar esa modalidad.",
    options: ["Exclusividad", "Inclusividad", "Exclusión", "Inclusión"],
    correctAnswer: 0,
  },
  {
    question:
      "Roles de un Miembro en una Organización (voluntaria): Un miembro de una organización puede tener varios roles. Las categorías son tesorero, secretario, vocal, presidente. No todo miembro tiene un rol específico, y un miembro puede tener múltiples roles.",
    options: ["TOTAL y EXCLUSIVA", "TOTAL y SOLAPADA", "PARCIAL y EXCLUSIVA", "PARCIAL y SOLAPADA"],
    correctAnswer: 3,
  },
  {
    question:
      "Forma de Pago (en una transacción específica): Al pagar en una tienda, la forma de pago es efectivo, tarjeta de crédito, tarjeta de débito, transferencia bancaria, otro. Cada transacción individual utiliza una sola forma de pago principal.",
    options: ["TOTAL y EXCLUSIVA", "TOTAL y SOLAPADA", "PARCIAL y EXCLUSIVA", "PARCIAL y SOLAPADA"],
    correctAnswer: 0,
  },
  {
    question:
      "Habilidades de un Empleado: Todo empleado tiene ciertas habilidades. Las categorías son habilidades técnicas, habilidades de comunicación, habilidades de liderazgo, habilidades de gestión de proyectos, idiomas. Un gerente de proyectos con habilidades técnicas y de liderazgo pertenece a ambas.",
    options: ["TOTAL y EXCLUSIVA", "TOTAL y SOLAPADA", "PARCIAL y EXCLUSIVA", "PARCIAL y SOLAPADA"],
    correctAnswer: 1,
  },
  {
    question:
      "Tipo de Cliente (en un negocio específico): Un contacto-cliente de un negocio puede ser cliente activo, cliente potencial. No todos los contactos son clientes, y un contacto se clasifica en una de estas categorías dentro del contexto del negocio.",
    options: ["TOTAL y EXCLUSIVA", "TOTAL y SOLAPADA", "PARCIAL y EXCLUSIVA", "PARCIAL y SOLAPADA"],
    correctAnswer: 2,
  },
  {
    question:
      "Tipo de Animal de Compañía (principal): Una mascota puede ser perro, gato, pájaro, pez, otro. No todas las personas tienen mascotas, y una mascota principal se clasifica en una de estas categorías.",
    options: ["TOTAL y EXCLUSIVA", "TOTAL y SOLAPADA", "PARCIAL y EXCLUSIVA", "PARCIAL y SOLAPADA"],
    correctAnswer: 2,
  },
  {
    question:
      "Estado Laboral Actual: Una persona puede tener un estado laboral actual que sea empleado, desempleado, estudiante, jubilado. No toda persona entra en estas categorías (ej., un ama de casa a tiempo completo), y una persona sólo tiene un estado laboral principal.",
    options: ["TOTAL y EXCLUSIVA", "TOTAL y SOLAPADA", "PARCIAL y EXCLUSIVA", "PARCIAL and SOLAPADA"],
    correctAnswer: 2,
  },
  {
    question:
      'Alergias Alimentarias: Toda persona tiene ciertas alergias alimentarias (o posiblemente ninguna). Las categorías son frutos secos, lácteos, gluten, marisco, otros. Una persona alérgica al gluten y a los lácteos pertenecería a ambas subcategorías. Toda persona entra en alguna combinación de estas (incluyendo la combinación de "ninguna alergia").',
    options: ["TOTAL y EXCLUSIVA", "TOTAL y SOLAPADA", "PARCIAL y EXCLUSIVA", "PARCIAL and SOLAPADA"],
    correctAnswer: 1,
  },
  {
    question:
      "Nivel Educativo Alcanzado (máximo): El nivel educativo más alto completado por una persona es primaria, secundaria, formación profesional, o universitaria. Se quiere representar el nivel máximo alcanzado, y una persona solo tiene uno como máximo.",
    options: ["TOTAL y EXCLUSIVA", "TOTAL and SOLAPADA", "PARCIAL y EXCLUSIVA", "PARCIAL and SOLAPADA"],
    correctAnswer: 0,
  },
  {
    question:
      "Características de un Producto (opcionales): Un producto puede tener varias características opcionales. Las categorías son inalámbrico, resistente al agua, con pantalla táctil, con control por voz. No todos los productos tienen estas características, y un producto puede tener varias de ellas.",
    options: ["TOTAL y EXCLUSIVA", "TOTAL and SOLAPADA", "PARCIAL y EXCLUSIVA", "PARCIAL and SOLAPADA"],
    correctAnswer: 3,
  },
  {
    question:
      "Estado Civil: Toda persona tiene un estado civil que es soltero, casado, divorciado o viudo. No puede tener dos estados civiles simultáneamente (en el sentido legal primario), y toda persona adulta tiene uno de estos.",
    options: ["TOTAL y EXCLUSIVA", "TOTAL and SOLAPADA", "PARCIAL y EXCLUSIVA", "PARCIAL and SOLAPADA"],
    correctAnswer: 0,
  },
  {
    question:
      "Fase de un Proyecto: Un proyecto puede estar en fase de planificación, ejecución, prueba, finalizado. No todos los proyectos están siempre en una de estas fases (podría estar en pausa o cancelación), y un proyecto siempre está en una fase principal a la vez.",
    options: ["TOTAL y EXCLUSIVA", "TOTAL and SOLAPADA", "PARCIAL y EXCLUSIVA", "PARCIAL and SOLAPADA"],
    correctAnswer: 2,
  },
  {
    question:
      "Aficiones de una Persona: Una persona puede tener varias aficiones. Las categorías son deportes, música, lectura, jardinería, coleccionismo. No toda persona tiene aficiones específicas, y una persona puede tener múltiples aficiones.",
    options: ["TOTAL y EXCLUSIVA", "TOTAL and SOLAPADA", "PARCIAL y EXCLUSIVA", "PARCIAL and SOLAPADA"],
    correctAnswer: 3,
  },
  {
    question:
      "Síntomas de una Enfermedad (específica): Un paciente con una enfermedad puede presentar varios síntomas. Las categorías son fiebre, tos, dolor de cabeza, fatiga, erupción cutánea. No todo paciente presenta todos los síntomas, y un paciente puede tener múltiples síntomas.",
    options: ["TOTAL y EXCLUSIVA", "TOTAL and SOLAPADA", "PARCIAL y EXCLUSIVA", "PARCIAL and SOLAPADA"],
    correctAnswer: 3,
  },
  {
    question:
      "Medios de Transporte Utilizados (para ir al trabajo): Todo empleado utiliza al menos un medio de transporte para ir al trabajo (posiblemente una combinación). Las categorías son coche propio, transporte público, bicicleta, a pie, otro. Un empleado que usa el tren y luego camina pertenece a ambas categorías.",
    options: ["TOTAL y EXCLUSIVA", "TOTAL and SOLAPADA", "PARCIAL y EXCLUSIVA", "PARCIAL and SOLAPADA"],
    correctAnswer: 1,
  },
  {
    question:
      "Géneros Cinematográficos Favoritos: Toda persona tiene ciertos géneros de películas que le gustan (posiblemente ninguno). Las categorías son comedia, drama, acción, ciencia ficción, terror, documental. Una persona que disfruta de la ciencia ficción y el terror pertenece a ambas.",
    options: ["TOTAL y EXCLUSIVA", "TOTAL and SOLAPADA", "PARCIAL y EXCLUSIVA", "PARCIAL and SOLAPADA"],
    correctAnswer: 1,
  },
  {
    question:
      "Tipo de Vivienda (primaria): La residencia principal de una persona es casa, apartamento, otro tipo de vivienda. Se asume que toda persona tiene una residencia principal clasificada en una de estas categorías y solo una.",
    options: ["TOTAL y EXCLUSIVA", "TOTAL and SOLAPADA", "PARCIAL y EXCLUSIVA", "PARCIAL and SOLAPADA"],
    correctAnswer: 0,
  },
  {
    question:
      "Los empleados pueden estar asignados a distintos proyectos. Un empleado puede estar en varios proyectos y un proyecto puede tener varios empleados. Algunas de esas asignaciones son supervisadas por un gerente. Queremos registrar qué gerente supervisa qué asignación concreta de empleado a proyecto.",
    options: ["Agregación", "Ternaria"],
    correctAnswer: 0,
  },
  {
    question:
      "Un proveedor envía un producto a un cliente a través de una empresa de transporte. Un proveedor puede enviar muchos productos a distintos clientes, y cada envío se puede realizar con distintas empresas de transporte.",
    options: ["Agregación", "Ternaria"],
    correctAnswer: 1,
  },
  {
    question:
      "Los inquilinos alquilan inmuebles. Un inquilino puede alquilar varios inmuebles y un inmueble puede ser alquilado por distintos inquilinos (en el tiempo). En ciertos contratos concretos, interviene además una aseguradora que garantiza el contrato específico entre un inquilino y un inmueble.",
    options: ["Agregación", "Ternaria"],
    correctAnswer: 0,
  },
  {
    question:
      "Los alumnos se inscriben en eventos culturales. Un alumno puede asistir a muchos eventos y un evento puede tener muchos alumnos. En algunos casos, hay un patrocinador que financia la participación de un alumno en un evento concreto.",
    options: ["Agregación", "Ternaria"],
    correctAnswer: 0,
  },
  {
    question:
      "Un ciudadano vota en una elección sobre una propuesta específica. Los ciudadanos siempre participan en las elecciones, y pueden hacerlo en varias diferentes, y votar distintas propuestas, y una propuesta puede pertenecer a varias elecciones. Queremos registrar quién vota qué en qué elección.",
    options: ["Agregación", "Ternaria"],
    correctAnswer: 1,
  },
  {
    question:
      "Los médicos atienden a pacientes, y cada paciente puede ser atendido por varios médicos. A veces, en determinadas consultas, se asigna una habitación específica para ésta, pero no siempre. Queremos modelar esta asignación.",
    options: ["Agregación", "Ternaria"],
    correctAnswer: 0,
  },
  {
    question:
      "Un profesor realiza una tutoría con un estudiante sobre una asignatura concreta. Un profesor puede tutorizar a varios alumnos en distintas asignaturas, y un alumno puede tener tutorías con varios profesores para distintas asignaturas.",
    options: ["Agregación", "Ternaria"],
    correctAnswer: 1,
  },
  {
    question:
      "Los conductores pueden conducir distintos vehículos. Cada vehículo puede ser conducido por varios conductores (por turnos). En ciertos casos, un inspector realiza una evaluación concreta del uso de un vehículo por parte de un conductor.",
    options: ["Agregación", "Ternaria"],
    correctAnswer: 0,
  },
  {
    question:
      "Una organización dona una cantidad de dinero a un proyecto específico en una sede determinada. Un mismo proyecto puede recibir donaciones de varias organizaciones en distintas sedes, y las sedes pueden albergar varios proyectos.",
    options: ["Agregación", "Ternaria"],
    correctAnswer: 1,
  },
  {
    question:
      "Una empresa siempre contrata a alguna firma auditora para auditar cada uno de sus departamentos específicos. Queremos registrar qué empresa contrata qué firma auditora para qué departamento. La misma empresa puede contratar a varias firmas para distintos departamentos.",
    options: ["Agregación", "Ternaria"],
    correctAnswer: 1,
  },
]

export default function BaseDatosUnidad2Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null))
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(Array(questions.length).fill(false))
  const [showResults, setShowResults] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return

    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)

    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestion] = true
    setAnsweredQuestions(newAnswered)
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
    setShowResults(true)
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(Array(questions.length).fill(null))
    setAnsweredQuestions(Array(questions.length).fill(false))
    setShowResults(false)
  }

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      if (answer === questions[index].correctAnswer) {
        return score + 1
      }
      return score
    }, 0)
  }

  const getAnswerStatus = (questionIndex: number, answerIndex: number) => {
    if (!showResults) return null

    const isSelected = selectedAnswers[questionIndex] === answerIndex
    const isCorrect = questions[questionIndex].correctAnswer === answerIndex

    if (isSelected && isCorrect) return "correct"
    if (isSelected && !isCorrect) return "incorrect"
    if (isCorrect) return "correct-not-selected"
    return null
  }

  if (showResults) {
    const score = calculateScore()
    const percentage = ((score / questions.length) * 100).toFixed(1)

    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>

          <Card className="p-8 bg-card border-border">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Resultados del Test</h2>
              <div className="text-6xl font-bold mb-2">
                <span className={percentage >= 50 ? "text-green-500" : "text-red-500"}>{percentage}%</span>
              </div>
              <p className="text-xl text-muted-foreground">
                {score} de {questions.length} preguntas correctas
              </p>
            </div>

            <div className="space-y-6">
              {questions.map((q, qIndex) => {
                const userAnswer = selectedAnswers[qIndex]
                const isCorrect = userAnswer === q.correctAnswer

                return (
                  <Card key={qIndex} className="p-6 bg-muted/30">
                    <div className="flex items-start gap-3 mb-4">
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-foreground mb-3">
                          Pregunta {qIndex + 1}: {q.question}
                        </p>
                        <div className="space-y-2">
                          {q.options.map((option, oIndex) => {
                            const status = getAnswerStatus(qIndex, oIndex)
                            return (
                              <div
                                key={oIndex}
                                className={`p-3 rounded-lg border-2 ${
                                  status === "correct" || status === "correct-not-selected"
                                    ? "border-green-500 bg-green-500/10"
                                    : status === "incorrect"
                                      ? "border-red-500 bg-red-500/10"
                                      : "border-border"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  {status === "correct" || status === "correct-not-selected" ? (
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                  ) : status === "incorrect" ? (
                                    <XCircle className="w-5 h-5 text-red-500" />
                                  ) : null}
                                  <span className="text-foreground">{option}</span>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            <div className="mt-8 flex gap-4">
              <Button onClick={handleReset} size="lg" className="flex-1 bg-blue-600 hover:bg-blue-700">
                <RotateCcw className="mr-2 h-4 w-4" />
                Repetir Simulacro
              </Button>
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Volver al inicio
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const allQuestionsAnswered = answeredQuestions.every((answer) => answer)
  const currentQuestionAnswered = answeredQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </Link>

        <Card className="p-8 bg-card border-border">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold text-foreground">Bases de Datos - U2: Modelo E/R</h2>
              <span className="text-sm text-muted-foreground">
                {currentQuestion + 1} / {questions.length}
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-lg text-foreground mb-6">{currentQ.question}</p>
            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                const isAnswered = answeredQuestions[currentQuestion]
                const isSelected = selectedAnswers[currentQuestion] === index
                const isCorrect = index === currentQ.correctAnswer
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

          {!allQuestionsAnswered && (
            <div className="mb-6 p-4 bg-yellow-500/10 border-2 border-yellow-500/50 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">Debes responder todas las preguntas antes de enviar el test</p>
            </div>
          )}

          <div className="flex gap-4">
            <Button onClick={handlePrevious} disabled={currentQuestion === 0} variant="outline">
              Anterior
            </Button>

            {currentQuestion === questions.length - 1 ? (
              <Button
                onClick={handleSubmit}
                disabled={!allQuestionsAnswered}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                Finalizar Simulacro
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!currentQuestionAnswered}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
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
