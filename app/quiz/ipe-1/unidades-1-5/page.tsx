"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, X } from "lucide-react"
import Link from "next/link"

interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    id: 1,
    text: "¿Cuál de los siguientes elementos es clave en una cultura preventiva dentro de la empresa?",
    options: [
      "La sanción estricta de los trabajadores.",
      "La formación y capacitación continua.",
      "La reducción de los costos laborales.",
      "La eliminación de comités de seguridad.",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    text: "¿Qué elemento no es esencial en un contrato de trabajo?",
    options: ["Duración.", "Formación previa del trabajador.", "Consentimiento.", "Objeto."],
    correctAnswer: 1,
  },
  {
    id: 3,
    text: "¿Qué se considera una patología inespecífica en el trabajo?",
    options: [
      "Una enfermedad reconocida como profesional.",
      "Cualquier accidente ocurrido en el hogar.",
      "Problemas físicos, psicológicos o sociales no reconocidos oficialmente.",
      "Una dolencia genética.",
    ],
    correctAnswer: 2,
  },
  {
    id: 4,
    text: "¿Cuál es una de las obligaciones principales de la empresa en materia de prevención de riesgos laborales?",
    options: [
      "Permitir que cada trabajador establezca sus propias normas.",
      "Sancionar severamente cualquier incumplimiento sin previo aviso.",
      "Garantizar la seguridad y salud de los trabajadores proporcionando medidas.",
      "Transferir la responsabilidad a los trabajadores.",
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    text: "¿Cuál es la finalidad principal de un contrato de trabajo?",
    options: [
      "Establecer los horarios del empleado.",
      "Regular la relación laboral entre empleador y trabajador.",
      "Fomentar la competencia interna.",
      "Garantizar vacaciones ilimitadas.",
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    text: "¿Cuál de las siguientes modalidades permite que varias empresas compartan servicios de prevención?",
    options: ["Servicio propio.", "Servicio ajeno.", "Servicio Mancomunado.", "Designación Directa."],
    correctAnswer: 2,
  },
  {
    id: 7,
    text: "¿Qué tipo de sociedad exige un contrato privado entre los socios y tributa por IRPF?",
    options: ["Sociedad limitada.", "Sociedad civil.", "Sociedad anónima.", "Sociedad comanditaria."],
    correctAnswer: 1,
  },
  {
    id: 8,
    text: "¿Qué función tiene la Inspección de Trabajo?",
    options: [
      "Administrar pensiones.",
      "Supervisar el cumplimiento de la normativa laboral.",
      "Redactar leyes.",
      "Contratar trabajadores.",
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    text: "¿Qué elemento forma parte de la cadena de supervivencia en emergencias?",
    options: ["Llamar a un familiar.", "Activación de emergencias.", "Buscar un extintor.", "Administrar analgésicos."],
    correctAnswer: 1,
  },
  {
    id: 10,
    text: "¿Qué hacer ante un atragantamiento?",
    options: [
      "Colocar al afectado de espaldas.",
      "Aplicar hielo en el pecho.",
      "Dar golpes entre los omóplatos.",
      "Administrar aire comprimido.",
    ],
    correctAnswer: 2,
  },
  {
    id: 11,
    text: "¿Qué se entiende por “prevención” según la Ley de Prevención de Riesgos Laborales?",
    options: [
      "La corrección de problemas cuando ocurren.",
      "Un conjunto de actividades o medidas para reducir riesgos laborales.",
      "Una normativa de aplicación voluntaria.",
      "La responsabilidad exclusiva de los empleados.",
    ],
    correctAnswer: 1,
  },
  {
    id: 12,
    text: "¿Cuál fue una de las primeras leyes que reguló las condiciones laborales en Europa?",
    options: [
      "Estatuto de los trabajadores.",
      "Ley de Fábricas de 1833.",
      "Ley de Seguridad Social.",
      "Constitución Española.",
    ],
    correctAnswer: 1,
  },
  {
    id: 13,
    text: "¿Qué diferencia principal existe entre una ETT y la subcontratación?",
    options: [
      "En ambas el trabajador depende directamente del empleador.",
      "La ETT no gestiona la seguridad social.",
      "En la subcontratación, los empleados dependen de la empresa subcontratada.",
      "La ETT actúa como empleador principal.",
    ],
    correctAnswer: 2,
  },
  {
    id: 14,
    text: "¿Qué elemento es obligatorio en el contenido mínimo del contrato?",
    options: [
      "Certificado médico del trabajador.",
      "Identificación de las partes.",
      "Datos bancarios del empleador.",
      "Título académico del empleado.",
    ],
    correctAnswer: 1,
  },
  {
    id: 15,
    text: "¿Qué principio impide que los trabajadores renuncien a sus derechos?",
    options: ["Norma más favorable.", "Irrenunciabilidad.", "Voluntariedad.", "Dependencia."],
    correctAnswer: 1,
  },
  {
    id: 16,
    text: "¿Qué nivel asume la gestión global de la prevención en la empresa?",
    options: ["Nivel básico.", "Nivel intermedio.", "Nivel superior.", "Comité de Seguridad."],
    correctAnswer: 2,
  },
  {
    id: 17,
    text: "¿Cuál es un derecho del trabajador según el Estatuto?",
    options: [
      "Organizar el trabajo.",
      "Derecho a la sindicación.",
      "Establecer el salario de la empresa.",
      "Imponer sanciones disciplinarias.",
    ],
    correctAnswer: 1,
  },
  {
    id: 18,
    text: "¿Qué tipo de relación no se regula por el Estatuto de los Trabajadores?",
    options: [
      "Contrato indefinido.",
      "Contrato temporal.",
      "Trabajo por cuenta ajena.",
      "Actividades por benevolencia.",
    ],
    correctAnswer: 3,
  },
  {
    id: 19,
    text: "¿Qué entidad es responsable del salario en una ETT?",
    options: ["El trabajador.", "La empresa de Trabajo Temporal.", "El comité de empresa.", "La empresa usuaria."],
    correctAnswer: 1,
  },
  {
    id: 20,
    text: "¿Qué documento regula los derechos y deberes básicos del trabajador y del empleador?",
    options: ["Constitución.", "Convenio colectivo.", "Estatuto de los trabajadores.", "Ley de Procedimiento Laboral."],
    correctAnswer: 2,
  },
  {
    id: 21,
    text: "¿Qué deben contener las cláusulas de un contrato laboral para su validez?",
    options: ["Información sindical.", "Referencias personales.", "Claridad y especificidad.", "Firma del notario."],
    correctAnswer: 2,
  },
  {
    id: 22,
    text: "¿Qué tipo de contrato se utiliza para cubrir necesidades puntuales de la empresa?",
    options: ["Indefinido.", "Eventual.", "En prácticas.", "A tiempo parcial."],
    correctAnswer: 1,
  },
  {
    id: 23,
    text: "¿Cuál es la finalidad principal de un contrato de trabajo?",
    options: [
      "Establecer los horarios del empleado.",
      "Regular la relación laboral entre empleador y trabajador.",
      "Fomentar la competencia interna.",
      "Garantizar vacaciones ilimitadas.",
    ],
    correctAnswer: 1,
  },
  {
    id: 24,
    text: "¿Qué tipo de contrato es ideal para adquirir experiencia profesional tras obtener un título?",
    options: ["Contrato indefinido.", "Contrato de prácticas.", "Contrato eventual.", "Contrato a tiempo parcial."],
    correctAnswer: 1,
  },
  {
    id: 25,
    text: "¿Cuál de los siguientes contratos ofrece mayor estabilidad laboral?",
    options: ["Contrato eventual.", "Contrato indefinido.", "Contrato por obra.", "Contrato en prácticas."],
    correctAnswer: 1,
  },
  {
    id: 26,
    text: "¿Qué papel juegan los trabajadores en la prevención de riesgos laborales?",
    options: [
      "Ninguno, ya que es responsabilidad del empleador.",
      "Solo deben cumplir las normas sin involucrarse.",
      "Pueden identificar y reportar riesgos, participar en comités.",
      "Solo deben preocuparse por sus propias tareas.",
    ],
    correctAnswer: 2,
  },
  {
    id: 27,
    text: "¿Qué ventaja ofrece el convenio colectivo frente a las condiciones mínimas legales?",
    options: [
      "Reemplaza al Estatuto de los Trabajadores.",
      "Anula la ley orgánica.",
      "Mejora las condiciones laborales.",
      "Suprime los derechos sindicales.",
    ],
    correctAnswer: 2,
  },
  {
    id: 28,
    text: "¿Qué caracteriza una quemadura de tercer grado?",
    options: [
      "Solo afecta la epidermis.",
      "Afecta la dermis.",
      "Afecta a todas las capas de la piel.",
      "Solo genera enrojecimiento.",
    ],
    correctAnswer: 2,
  },
  {
    id: 29,
    text: "¿Cuál es una desventaja común del teletrabajo?",
    options: [
      "Menor acceso a internet.",
      "Dificultad para separar vida personal y laboral.",
      "Menor productividad.",
      "Reducción salarial.",
    ],
    correctAnswer: 1,
  },
  {
    id: 30,
    text: "¿Qué ley establece la normativa básica de prevención de riesgos laborales en España?",
    options: ["Ley 21/1995.", "Ley 31/1.", "Ley 19/1995.", "Ley 45/1995."],
    correctAnswer: 3,
  },
  {
    id: 31,
    text: "¿Quién tiene la responsabilidad de garantizar un ambiente de trabajo seguro?",
    options: ["El delegado sindical.", "El Estado.", "El empleador.", "El trabajador."],
    correctAnswer: 2,
  },
  {
    id: 32,
    text: "¿Cuál es la duración mínima del Nivel Intermedio en Prevención de Riesgos Laborales?",
    options: ["50 horas.", "300 horas.", "100 horas.", "600 horas."],
    correctAnswer: 3,
  },
  {
    id: 33,
    text: "¿Qué aspecto es esencial en la elaboración del Plan de Emergencia?",
    options: [
      "Sanciones disciplinarias.",
      "Control de acceso.",
      "Señalización clara de rutas de evacuación.",
      "Reducción de costes.",
    ],
    correctAnswer: 2,
  },
  {
    id: 34,
    text: "¿Qué caracteriza el teletrabajo según la normativa laboral española?",
    options: [
      "No se requiere acuerdo escrito.",
      "Solo aplica al sector público.",
      "Debe haber compensación de gastos.",
      "Esta prohibido para menores de edad.",
    ],
    correctAnswer: 2,
  },
  {
    id: 35,
    text: "¿Qué elemento de la relación laboral implica que el trabajador esté bajo la dirección del empleador?",
    options: ["Ajenidad.", "Dependencia.", "Voluntariedad.", "Remuneración."],
    correctAnswer: 1,
  },
  {
    id: 36,
    text: "¿Cuál es la norma suprema en la jerarquía normativa del Derecho Laboral en España?",
    options: ["Reglamentos.", "Convenios Colectivos.", "Leyes Orgánicas.", "Constitución Española."],
    correctAnswer: 3,
  },
  {
    id: 37,
    text: "¿Qué tipo de patología se considera específica dentro del entorno laboral?",
    options: [
      "Dolencias de origen desconocido.",
      "Enfermedades hereditarias.",
      "Accidentes de trabajo y enfermedades profesionales.",
      "Estrés causado por problemas personales.",
    ],
    correctAnswer: 2,
  },
  {
    id: 38,
    text: "¿Qué función realiza el Nivel Básico en prevención?",
    options: [
      "Desarrollo de planes de prevención.",
      "Asesoría legal.",
      "Tareas sencillas bajo supervisión.",
      "Coordinación de simulacros.",
    ],
    correctAnswer: 2,
  },
  {
    id: 39,
    text: "¿Qué principio básico de prevención indica que se deben evitar los riesgos?",
    options: [
      "Sustituir lo peligroso por lo que entrañe un poco o ningún peligro.",
      "Evitar los riesgos.",
      "Planificar la prevención.",
      "Adoptar medidas que antepongan la protección individual.",
    ],
    correctAnswer: 1,
  },
  {
    id: 40,
    text: "¿Qué hacer ante una hemorragia venosa?",
    options: ["Aplica frio.", "Lavar con agua.", "Aplicar presión con una compresa.", "Dejar que drene sola."],
    correctAnswer: 2,
  },
]

export default function QuizPage() {
  const [started, setStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [finished, setFinished] = useState(false)

  const startQuiz = () => {
    // Simple shuffle for now or just use questions as is if shuffleArray is not available
    // But better to include shuffleArray function
    const newArray = [...questions]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    setShuffledQuestions(newArray)

    setStarted(true)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setScore(0)
    setFinished(false)
  }

  const handleAnswerClick = (answerIndex: number) => {
    if (showFeedback) return

    setSelectedAnswer(answerIndex)
    setShowFeedback(true)

    if (answerIndex === shuffledQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      setFinished(true)
    }
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-lg p-8 bg-card border-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold">
              <span className="text-foreground">IPE I</span>
            </h1>
            <p className="text-muted-foreground text-lg">Test Unidades 1-5</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{questions.length} Preguntas</p>
                  <p className="text-sm text-muted-foreground">Prevención y legislación laboral</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesión es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentación Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold"
            >
              Comenzar Quiz
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  if (finished) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100)
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-lg p-8 bg-card border-border">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Quiz Completado</h2>
            <div className="py-8">
              <div className="text-6xl font-bold text-yellow-500 mb-2">{percentage}%</div>
              <p className="text-xl text-muted-foreground">
                {score} de {shuffledQuestions.length} correctas
              </p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={startQuiz}
                size="lg"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold"
              >
                Intentar de Nuevo
              </Button>
              <Link href="/" className="block">
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex]

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 bg-card border-border">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Salir del examen
        </Link>

        <div className="space-y-6">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>
              Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}
            </span>
            <span>Puntuación: {score}</span>
          </div>

          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-500 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
            />
          </div>

          <h2 className="text-2xl font-bold text-foreground text-balance">{currentQuestion.text}</h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === currentQuestion.correctAnswer
              const showCorrect = showFeedback && isCorrect
              const showIncorrect = showFeedback && isSelected && !isCorrect

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={showFeedback}
                  className={`
                    w-full text-left p-4 rounded-lg border-2 transition-all
                    ${!showFeedback && "hover:border-yellow-500 hover:bg-accent cursor-pointer"}
                    ${showFeedback && "cursor-not-allowed"}
                    ${isSelected && !showFeedback && "border-yellow-500 bg-accent"}
                    ${showCorrect && "border-green-500 bg-green-500/10"}
                    ${showIncorrect && "border-red-500 bg-red-500/10"}
                    ${!isSelected && !showCorrect && !showIncorrect && "border-border bg-card"}
                  `}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-foreground font-medium">{option}</span>
                    {showCorrect && <Check className="w-5 h-5 text-green-500 shrink-0" />}
                    {showIncorrect && <X className="w-5 h-5 text-red-500 shrink-0" />}
                  </div>
                </button>
              )
            })}
          </div>

          {showFeedback && (
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="text-sm">
                {selectedAnswer === currentQuestion.correctAnswer ? (
                  <span className="text-green-500 font-semibold">Correcto</span>
                ) : (
                  <span className="text-red-500 font-semibold">Incorrecto</span>
                )}
              </div>
              <Button onClick={handleNext} className="bg-yellow-500 hover:bg-yellow-600 text-white">
                {currentQuestionIndex < shuffledQuestions.length - 1 ? "Siguiente" : "Ver Resultados"}
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
