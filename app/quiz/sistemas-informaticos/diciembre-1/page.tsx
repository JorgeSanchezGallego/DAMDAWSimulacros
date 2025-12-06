"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"

interface Question {
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    question: "¿Qué componente del ordenador se considera hardware interno?",
    options: ["Navegador web", "Tarjeta gráfica", "Antivirus", "Aplicación ofimática"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué se clasifica como software de aplicación?",
    options: ["BIOS", "Kernel", "Controladores", "Procesador de textos"],
    correctAnswer: 3,
  },
  {
    question: "¿Unidad habitual para medir la velocidad del procesador?",
    options: ["MB/s", "RPM", "GHz", "mAh"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué periférico es de salida de información?",
    options: ["Monitor", "Micrófono", "Escáner", "Teclado"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué ejecuta operaciones lógicas en la CPU?",
    options: ["Unidad de control", "Memoria caché", "ALU", "Puertos USB"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué elemento NO es hardware?",
    options: ["Disco SSD", "Router", "RAM", "Compilador"],
    correctAnswer: 3,
  },
  {
    question: "¿Función esencial del sistema operativo?",
    options: ["Gestionar recursos", "Editar documentos", "Diseñar circuitos", "Generar ejecutables"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué define a un SO multitarea?",
    options: ["Solo usa un núcleo", "No usa redes", "Solo un usuario", "Ejecuta varios procesos"],
    correctAnswer: 3,
  },
  {
    question: "¿Comando Linux para eliminar un archivo?",
    options: ["delete", "erase", "rm", "purge"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué SO es propietario?",
    options: ["Debian", "FreeDOS", "CentOS", "Windows"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué opción es software libre?",
    options: ["Ubuntu", "Windows 11", "macOS", "iOS"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué significa sistema multiusuario?",
    options: ["Ejecutar apps móviles", "Varios usuarios diferentes", "Solo un proceso", "Sin interfaz gráfica"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué es un hipervisor?",
    options: ["Plugin navegador", "Administra máquinas virtuales", "Protocolo red", "Servidor web"],
    correctAnswer: 1,
  },
  {
    question: "Protocolo que traduce dominios a IP",
    options: ["SMTP", "SSH", "DNS", "NTP"],
    correctAnswer: 2,
  },
  {
    question: "Herramienta de virtualización",
    options: ["Node.js", "Android Studio", "VMware Workstation", "Inkscape"],
    correctAnswer: 2,
  },
  {
    question: "Ventaja de virtualización",
    options: ["Elimina consumo CPU", "Reduce puertos físicos", "Sustituye SO real", "Entornos aislados"],
    correctAnswer: 3,
  },
  {
    question: "Crear directorio en Linux",
    options: ["new", "makedir", "mkdir", "build"],
    correctAnswer: 2,
  },
  {
    question: "Ver contenido de archivo en Linux",
    options: ["viewfile", "cat", "macro", "cdshow"],
    correctAnswer: 1,
  },
  {
    question: "Cambiar permisos en Linux",
    options: ["chmod", "passwd", "configperm", "chperm"],
    correctAnswer: 0,
  },
  {
    question: "Archivo de contraseñas cifradas",
    options: ["/etc/passwd", "/etc/config", "/etc/shadow", "/etc/userdata"],
    correctAnswer: 2,
  },
  {
    question: "Cambiar directorio en Windows",
    options: ["cd", "ls", "show", "switchdir"],
    correctAnswer: 0,
  },
  {
    question: "Mostrar ruta actual en Linux",
    options: ["showdir", "path", "pwd", "cd /root"],
    correctAnswer: 2,
  },
  {
    question: "Tipo de software que traduce código fuente",
    options: ["Motor búsqueda", "Navegador", "Compilador/intérprete", "Editor imágenes"],
    correctAnswer: 2,
  },
  {
    question: "Mostrar procesos activos en Windows",
    options: ["pstatus", "tasklist", "jobs", "psrun"],
    correctAnswer: 1,
  },
  {
    question: "Red de mayor extensión geográfica",
    options: ["WLAN", "LAN", "MAN", "WAN"],
    correctAnswer: 3,
  },
  {
    question: "Función de Docker Compose",
    options: ["Compilar imágenes", "Gestionar versiones", "Lanzar varios contenedores", "Monitorizar logs"],
    correctAnswer: 2,
  },
  {
    question: "Protocolo para asignar una IP automática",
    options: ["ARP", "DHCP", "TCP", "IMAP"],
    correctAnswer: 1,
  },
  {
    question: "Dirección del host local",
    options: ["10.1.1.1", "192.168.1.10", "127.0.0.1", "255.255.255.0"],
    correctAnswer: 2,
  },
  {
    question: "Arrancar contenedor detenido",
    options: ["docker open", "docker start", "docker run-new", "docker resume"],
    correctAnswer: 1,
  },
  {
    question: "Ver imágenes disponibles en Docker",
    options: ["docker images", "docker view", "docker list-img", "docker inspect-all"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué diferencia existe entre hardware y software?",
    options: [
      "El hardware son las instrucciones y el software los dispositivos físicos",
      "El hardware son los componentes físicos y el software los programas que los controlan",
      "No hay diferencia, ambos son materiales informáticos",
      "El software incluye solo el SO",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál de los siguientes NO es un SO?",
    options: ["Linux", "Windows", "Python", "macOS"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué comando permite configurar manualmente una interfaz de red?",
    options: ["ifconfig", "netconfig", "ipconfig", "setupnet"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué sistema de archivos utiliza por defecto Windows 10 y 11?",
    options: ["ext4", "FAT", "FAT32", "NTFS"],
    correctAnswer: 3,
  },
  {
    question: "¿Cómo se denomina al usuario con control total del sistema?",
    options: ["admin", "super", "master", "root"],
    correctAnswer: 3,
  },
]

export default function SistemasInformaticosQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([])

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(answerIndex)
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer

    if (isCorrect) {
      setScore(score + 1)
    } else {
      setWrongAnswers(wrongAnswers + 1)
    }

    setAnsweredQuestions([...answeredQuestions, currentQuestion])
  }

  const handleNext = () => {
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
    setWrongAnswers(0)
    setAnsweredQuestions([])
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100)
    const finalScore = Math.max(0, score - wrongAnswers / 3)
    const finalPercentage = Math.round((finalScore / questions.length) * 100)

    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-8 bg-card border-border">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Resultado Final</h2>
            <div className="space-y-4">
              <div>
                <div className="text-6xl font-bold text-primary">{percentage}%</div>
                <p className="text-xl text-muted-foreground">
                  Has acertado {score} de {questions.length} preguntas
                </p>
                <p className="text-lg text-muted-foreground">Respuestas incorrectas: {wrongAnswers}</p>
              </div>
              <div className="border-t border-border pt-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Fórmula de Corrección por Aciertos y Errores
                </h3>
                <p className="text-sm text-muted-foreground mb-2">Puntuación Final = Aciertos - (Errores / 3)</p>
                <div className="text-4xl font-bold text-blue-500">{finalScore.toFixed(2)}</div>
                <p className="text-lg text-muted-foreground mt-2">Nota Final: {finalPercentage}%</p>
                <p className="text-xs text-muted-foreground mt-1">
                  ({score} aciertos - {wrongAnswers} errores / 3 = {finalScore.toFixed(2)} puntos)
                </p>
              </div>
            </div>
            {finalPercentage >= 80 && <p className="text-lg text-green-500">Excelente trabajo</p>}
            {finalPercentage >= 60 && finalPercentage < 80 && (
              <p className="text-lg text-blue-500">Buen resultado, sigue practicando</p>
            )}
            {finalPercentage < 60 && <p className="text-lg text-orange-500">Necesitas repasar más</p>}
            <div className="flex gap-4 justify-center">
              <Button onClick={resetQuiz} size="lg">
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
    )
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-foreground">Sistemas Informáticos - Simulacro Diciembre I</h1>
            <span className="text-muted-foreground">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-right">
            <span className="text-sm text-muted-foreground">Puntuación: {score}</span>
          </div>
        </div>

        <Card className="p-6 bg-card border-border">
          <h2 className="text-xl font-semibold mb-6 text-foreground whitespace-pre-line">{question.question}</h2>
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === question.correctAnswer
              const showCorrect = selectedAnswer !== null && isCorrect
              const showIncorrect = selectedAnswer !== null && isSelected && !isCorrect

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    showCorrect
                      ? "border-green-500 bg-green-500/10"
                      : showIncorrect
                        ? "border-red-500 bg-red-500/10"
                        : isSelected
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border hover:border-blue-500/50 bg-card"
                  } ${selectedAnswer !== null ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">
                      <span className="font-semibold mr-2">{String.fromCharCode(65 + index)})</span>
                      {option}
                    </span>
                    {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                    {showIncorrect && <XCircle className="w-5 h-5 text-red-500" />}
                  </div>
                </button>
              )
            })}
          </div>

          {selectedAnswer !== null && (
            <div className="mt-6">
              <Button onClick={handleNext} size="lg" className="w-full">
                {currentQuestion < questions.length - 1 ? "Siguiente pregunta" : "Ver resultados"}
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
