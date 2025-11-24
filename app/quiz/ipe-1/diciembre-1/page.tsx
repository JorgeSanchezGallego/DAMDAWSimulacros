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
    question: "¿Qué ley establece la base de la Prevención de Riesgos Laborales en España?",
    options: ["Ley 31/1995", "Ley 10/2012", "Ley 14/1986", "Ley 5/2000"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué define la OMS como salud?",
    options: [
      "Ausencia de enfermedad",
      "Estado completo de bienestar físico, mental y social",
      "Equilibrio emocional",
      "Adaptación al entorno laboral",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es un ejemplo de enfermedad profesional según el Real Decreto 1299/2006?",
    options: ["Migraña", "Fractura ósea", "Dermatitis por sustancias químicas", "Estrés por carga laboral"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué aspecto fomenta una cultura preventiva eficaz?",
    options: [
      "El control de los costes empresariales",
      "La participación activa de los trabajadores",
      "El aumento de la productividad",
      "La ausencia de supervisión",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué se entiende por prevención de riesgos laborales?",
    options: [
      "Conjunto de actividades para evitar o reducir riesgos laborales",
      "Proceso de contratación de trabajadores",
      "Plan de evaluación económica",
      "Control de absentismo",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál de los siguientes es un riesgo derivado de las condiciones medioambientales?",
    options: ["Exposición al ruido", "Estrés laboral", "Caídas al mismo nivel", "Falta de comunicación"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué color identifica las señales de obligación en seguridad laboral?",
    options: ["Azul", "Verde", "Rojo", "Amarillo"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué tipo de medida consiste en aislar la fuente del riesgo?",
    options: ["Medida administrativa", "Medida de protección colectiva", "Medida individual", "Medida informativa"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué función corresponde al nivel básico de prevención?",
    options: [
      "Elaborar el plan de emergencia",
      "Colaborar en la evaluación de riesgos",
      "Dirigir la política preventiva de la empresa",
      "Diseñar planes de prevención",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Quién forma parte del Comité de Seguridad y Salud?",
    options: [
      "Solo los delegados sindicales",
      "Representantes de la empresa y de los trabajadores",
      "Solo el empresario",
      "Técnicos de prevención externos",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué es el plan de prevención?",
    options: [
      "Documento que integra la prevención en la gestión de la empresa",
      "Manual de primeros auxilios",
      "Registro de accidentes",
      "Programa de formación",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué debe incluir un plan de emergencia y evacuación?",
    options: [
      "Rutas señalizadas y simulacros",
      "Sanciones disciplinarias",
      "Contratos laborales",
      "Horarios flexibles",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál es el principal objetivo del Derecho del Trabajo?",
    options: [
      "Regular las relaciones entre empresa y clientes",
      "Regular las relaciones laborales",
      "Regular el mercado de productos",
      "Regular las subvenciones estatales",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué elemento caracteriza la relación laboral?",
    options: ["Ajenidad y dependencia", "Autonomía y riesgo propio", "Carácter mercantil", "Libre competencia"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué norma es la base del ordenamiento jurídico laboral?",
    options: [
      "El Estatuto de los Trabajadores",
      "El Código Civil",
      "El Convenio de Viena",
      "La Ley General Tributaria",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué principio indica que se debe aplicar la norma más favorable al trabajador?",
    options: [
      "Irrenunciabilidad de derechos",
      "Condición más beneficiosa",
      "Norma más favorable",
      "In dubio pro operario",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué es un contrato de trabajo?",
    options: [
      "Un acuerdo entre empresario y trabajador",
      "Una norma fiscal",
      "Un documento de compraventa",
      "Una carta de despido",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué elemento es esencial en todo contrato?",
    options: ["Consentimiento, objeto y causa", "Firma notarial", "Aval bancario", "Inscripción en el SEPE"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué contrato ofrece mayor estabilidad laboral?",
    options: ["Temporal", "De obra", "Indefinido", "En prácticas"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué organismo regula los contratos laborales?",
    options: ["El Estatuto de los Trabajadores", "El Código Penal", "El Ministerio de Hacienda", "El Banco de España"],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál es la duración máxima de la jornada laboral en España?",
    options: ["35 horas", "38 horas", "40 horas", "45 horas"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué derecho tiene todo trabajador en relación a las vacaciones?",
    options: ["15 días naturales", "30 días naturales", "10 días hábiles", "20 días laborables"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué documento refleja las percepciones salariales de un trabajador?",
    options: ["Nómina", "Contrato", "Convenio", "Factura"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué organismo garantiza el pago de salarios ante insolvencia empresarial?",
    options: ["INEM", "FOGASA", "INSS", "SEPE"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué es una modificación sustancial de las condiciones laborales?",
    options: [
      "Un cambio importante en salario, horario o funciones",
      "Una falta disciplinaria",
      "Una sanción económica",
      "Un despido colectivo",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué implica la suspensión del contrato?",
    options: [
      "Interrupción temporal sin extinguir el vínculo laboral",
      "Extinción definitiva del contrato",
      "Reducción del salario",
      "Cambio de empresa",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué tipo de despido requiere preaviso de 15 días?",
    options: ["Disciplinario", "Objetivo", "Colectivo", "Nulo"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué documento liquida las cantidades pendientes al finalizar la relación laboral?",
    options: ["Convenio", "Finiquito", "Nómina", "Contrato"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es el principal objetivo de la Seguridad Social?",
    options: [
      "Garantizar la protección económica ante contingencias",
      "Recaudar impuestos",
      "Regular los contratos",
      "Controlar la formación profesional",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué tipo de prestación se otorga sin haber cotizado previamente?",
    options: ["Contributiva", "No contributiva", "Parcial", "Temporal"],
    correctAnswer: 1,
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

export default function IPEDiciembreQuiz() {
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
            <p className="text-muted-foreground text-lg">SIMULACRO FINAL IPE I - NOVIEMBRE 2025</p>

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
