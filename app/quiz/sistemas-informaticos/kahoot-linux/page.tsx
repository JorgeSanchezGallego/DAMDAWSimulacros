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
    question: "¿Qué símbolo representa el directorio raíz en Linux?",
    options: ["~", "Home", "\\", "/"],
    correctAnswer: 3,
  },
  {
    question: "¿Dónde se guardan los archivos personales de los usuarios?",
    options: ["/bin", "/home", "/usr", "/etc"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué directorio contiene los archivos de configuración del sistema?",
    options: ["/etc", "/opt", "/dev", "/tmp"],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál de los siguientes directorios contiene archivos de registro y datos variables?",
    options: ["/var", "/usr", "/lib", "/boot"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué comando muestra la ruta completa del directorio actual?",
    options: ["ls", "pwd", "cd", "path"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando se usa para cambiar de directorio en Linux?",
    options: ["pwd", "cd", "mv", "dir"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué opción del comando ls muestra archivos ocultos?",
    options: ["-l", "-R", "-a", "-h"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué comando sirve para crear un nuevo directorio?",
    options: ["mkdir", "rmdir", "touch", "rm"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué hace el comando rm -r carpeta?",
    options: [
      "Elimina solo archivos",
      "Crea una carpeta nueva",
      "Elimina la carpeta y todo su contenido",
      "Mueve la carpeta a otra ubicación",
    ],
    correctAnswer: 2,
  },
  {
    question: "En Linux, el sistema distingue entre mayúsculas y minúsculas. Esto significa que:",
    options: [
      "archivo.txt y Archivo.txt son el mismo archivo",
      "archivo.txt y Archivo.txt son distintos",
      "Los nombres no pueden contener mayúsculas",
      "Los archivos se ordenan ignorando mayúsculas",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué significa la palabra Bash?",
    options: ["Basic Shell", "Base Advanced System Handler", "Binary Access Shell", "Bourne Again SHell"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué hace el intérprete Bash?",
    options: [
      "Ejecuta solo programas gráficos",
      "Solo muestra texto en pantalla",
      "Traduce comandos al lenguaje del sistema operativo",
      "Inicia el sistema operativo",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué es un script en Bash?",
    options: [
      "Un archivo de texto con comandos para automatizar tareas",
      "Un programa en Java",
      "Un archivo comprimido",
      "Un documento de configuración",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué línea debe ir al principio de un script Bash?",
    options: ["#:/usr/bin/python", "#!/bash", "#!/bin/bash", "#!bash.sh"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué comando se usa para dar permisos de ejecución a un script?",
    options: ["sudo", "chown +x", "execute", "chmod +x"],
    correctAnswer: 3,
  },
  {
    question: "¿Cuál de las siguientes formas ejecuta un script en el directorio actual?",
    options: ["./mi_script.sh", "/mi_script.sh", "bashrun mi_script.sh", "run ./mi_script"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué comando muestra un mensaje en pantalla dentro de un script?",
    options: ["msg", "print", "echo", "text"],
    correctAnswer: 2,
  },
  {
    question: "En un script, ¿qué significa $(date) o $(whoami)?",
    options: [
      "Un error de sintaxis",
      "El resultado de ejecutar un comando dentro del script",
      "Un comentario",
      "Una variable vacía",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué extensión se recomienda usar para los scripts Bash?",
    options: [".exe", ".bash", ".run", ".sh"],
    correctAnswer: 3,
  },
  {
    question: "¿Por qué es útil usar scripts en Bash?",
    options: [
      "Permiten hacer tareas manuales más lentas",
      "Permiten automatizar y repetir tareas rápidamente",
      "Solo sirven para expertos",
      "No tienen utilidad práctica",
    ],
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

export default function KahootLinuxQuiz() {
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
              <span className="text-foreground">Kahoot Linux</span>
            </h1>
            <p className="text-muted-foreground text-lg">Comprueba tus conocimientos sobre Linux y Bash</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">20 Preguntas</p>
                  <p className="text-sm text-muted-foreground">Directorios, comandos y scripts Bash</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesión es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentación Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
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
              <div className="text-6xl font-bold text-blue-500 mb-2">{percentage}%</div>
              <p className="text-xl text-muted-foreground">
                {score} de {shuffledQuestions.length} correctas
              </p>
            </div>

            <div className="space-y-2">
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas Linux y Bash.</p>}
              {percentage >= 70 && percentage < 90 && (
                <p className="text-lg text-foreground">Muy bien. Buenos conocimientos de Linux.</p>
              )}
              {percentage >= 50 && percentage < 70 && (
                <p className="text-lg text-foreground">Bien hecho. Sigue practicando.</p>
              )}
              {percentage < 50 && <p className="text-lg text-foreground">Sigue aprendiendo. Tú puedes.</p>}
            </div>

            <div className="space-y-3">
              <Button
                onClick={startQuiz}
                size="lg"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
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
              className="h-full bg-blue-500 transition-all duration-300"
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
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    showCorrect
                      ? "border-green-500 bg-green-500/10"
                      : showIncorrect
                        ? "border-red-500 bg-red-500/10"
                        : isSelected
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border hover:border-blue-500/50 bg-card"
                  } ${showFeedback ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium">{option}</span>
                    {showCorrect && <Check className="w-5 h-5 text-green-500 shrink-0" />}
                    {showIncorrect && <X className="w-5 h-5 text-red-500 shrink-0" />}
                  </div>
                </button>
              )
            })}
          </div>

          {showFeedback && (
            <div className="space-y-4">
              {selectedAnswer === currentQuestion.correctAnswer ? (
                <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg">
                  <p className="text-green-600 dark:text-green-400 font-semibold">Correcto</p>
                </div>
              ) : (
                <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg">
                  <p className="text-red-600 dark:text-red-400 font-semibold">Incorrecto</p>
                </div>
              )}

              <Button
                onClick={handleNext}
                size="lg"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
              >
                {currentQuestionIndex < shuffledQuestions.length - 1 ? "Siguiente" : "Ver Resultados"}
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
