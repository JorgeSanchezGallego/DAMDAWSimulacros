"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Question {
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    question: "¿Cuál es uno de los principios básicos de la prevención?",
    options: [
      "Maximizar la rentabilidad empresarial",
      "Evitar los riesgos",
      "Aumentar la producción",
      "Contratar más personal",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué tipo de medida consiste en proporcionar equipos de protección individual?",
    options: ["Eliminación del riesgo", "Protección individual", "Sustitución", "Formación técnica"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué color identifica la señalización de prohibición?",
    options: ["Azul", "Rojo", "Verde", "Amarillo"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué riesgo está relacionado con la postura y los movimientos repetitivos?",
    options: ["Químico", "Biológico", "Ergonómico", "Medioambiental"],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál de los siguientes es un riesgo medioambiental?",
    options: ["Exposición a virus", "Ruido excesivo", "Carga física elevada", "Manipulación de productos químicos"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué objetivo tiene la señalización de seguridad?",
    options: [
      "Informar sobre el salario",
      "Publicitar normas",
      "Prevenir accidentes y riesgos",
      "Indicar la evacuación económica",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué riesgo es provocado por sustancias como disolventes o gases?",
    options: ["Biológico", "Eléctrico", "Químico", "Ergonómico"],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál es la duración mínima del nivel básico en prevención?",
    options: ["50 horas", "100 horas", "200 horas", "20 horas"],
    correctAnswer: 0,
  },
  {
    question: "¿Quién realiza tareas básicas de prevención bajo supervisión?",
    options: ["Comité de empresa", "Técnico de nivel básico", "Inspector laboral", "Médico del trabajo"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué función tiene el Comité de Seguridad y Salud?",
    options: ["Imponer sanciones", "Proponer medidas de prevención", "Organizar simulacros", "Asignar salarios"],
    correctAnswer: 1,
  },
  {
    question: "¿Quién designa a los Delegados de Prevención?",
    options: [
      "La Inspección de Trabajo",
      "Según el tamaño de la empresa",
      "El comité de empresa",
      "El nivel superior de prevención",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué técnica se aplica primero en caso de emergencia?",
    options: ["RCP", "Evaluación de la situación", "Inmovilización", "Llamada al director"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué maniobra se realiza en caso de atragantamiento?",
    options: ["Compresiones torácicas", "Maniobra de Heimlich", "Respiración boca a boca", "Vendaje abdominal"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es la prioridad en una quemadura de tercer grado?",
    options: [
      "Lavar con agua fría",
      "No retirar ropa adherida y buscar asistencia médica",
      "Aplicar crema hidratante",
      "Frotar con alcohol",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué tipo de hemorragia requiere presión directa con una compresa?",
    options: ["Interna", "Venosa", "Capilar", "Arterial profunda"],
    correctAnswer: 3,
  },
  {
    question: "¿Cuál es el orden correcto en la cadena de supervivencia?",
    options: [
      "Socorrer – Evaluar – Alertar",
      "Proteger – Alertar – Socorrer",
      "Alertar – Socorrer – Transportar",
      "Inmovilizar – Socorrer – Alertar",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué herramienta se puede usar para improvisar una camilla?",
    options: ["Silla", "Sábana fuerte", "Cinturón", "Alfombra"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál fue una de las primeras leyes laborales en la historia?",
    options: ["Estatuto de los Trabajadores", "Ley de Fábricas de 1833", "Constitución de 1978", "Reforma de 1980"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es un elemento esencial de la relación laboral?",
    options: ["Libertad de mercado", "Propiedad del capital", "Ajenidad", "Cotización"],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál de las siguientes no es una relación laboral?",
    options: ["Contrato por obra", "Trabajo familiar sin remuneración", "Contrato indefinido", "Contrato temporal"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué principio implica que, en caso de duda, se favorece al trabajador?",
    options: ["Condición más beneficiosa", "In dubio pro operario", "Norma más favorable", "Irrenunciabilidad"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué derecho fundamental permite al trabajador unirse a un sindicato?",
    options: ["Derecho al trabajo", "Derecho a la sindicación", "Derecho a la formación", "Derecho a vacaciones"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué norma tiene mayor jerarquía en el ordenamiento laboral español?",
    options: ["Convenio colectivo", "Constitución Española", "Ley ordinaria", "Reglamento"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué institución revisa los conflictos laborales individuales?",
    options: ["Juzgados de lo Social", "Tribunal Supremo", "Tribunal de Cuentas", "Comisión Nacional del Trabajo"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué tipo de contrato no tiene fecha de finalización?",
    options: ["Contrato indefinido", "Contrato eventual", "Contrato de formación", "Contrato por obra"],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál es un elemento esencial del contrato de trabajo?",
    options: ["Formación previa", "Consentimiento", "Bonificación salarial", "Vacaciones"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué ocurre si un contrato que debería estar por escrito no lo está?",
    options: ["Es nulo", "Se convierte en temporal", "Se presume indefinido", "No es válido"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué contrato combina formación teórica y práctica?",
    options: [
      "Contrato en prácticas",
      "Contrato de formación y aprendizaje",
      "Contrato por obra",
      "Contrato de alta dirección",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué entidad paga el salario en una relación triangular con ETT?",
    options: ["Empresa usuaria", "Empresa de Trabajo Temporal", "Delegación provincial", "Seguridad Social"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué ventaja ofrece el teletrabajo?",
    options: [
      "Reducción del salario",
      "Incremento de horas",
      "Conciliación personal y laboral",
      "Supervisión constante",
    ],
    correctAnswer: 2,
  },
]

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function IPEQuiz() {
  const [started, setStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [finished, setFinished] = useState(false)

  const startQuiz = () => {
    setShuffledQuestions(shuffleArray(questions))
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
            <p className="text-muted-foreground text-lg">SIMULACRO FINAL 1º TRIMESTRE: UNIDADES 1, 2, 3, 4 y 5</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">30 Preguntas</p>
                  <p className="text-sm text-muted-foreground">Prevención, legislación y relaciones laborales</p>
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

            <div className="space-y-2">
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas la materia.</p>}
              {percentage >= 70 && percentage < 90 && (
                <p className="text-lg text-foreground">Muy bien. Buen conocimiento.</p>
              )}
              {percentage >= 50 && percentage < 70 && (
                <p className="text-lg text-foreground">Bien hecho. Sigue repasando.</p>
              )}
              {percentage < 50 && <p className="text-lg text-foreground">Sigue estudiando. Tú puedes.</p>}
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

          <h2 className="text-2xl font-bold text-foreground text-balance">{currentQuestion.question}</h2>

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
