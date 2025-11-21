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
    question: "¿Cuál de estas NO es una fase típica del ciclo de vida del software?",
    options: ["Pruebas", "Implementación", "Depuración", "Diseño"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué comando se usa para inicializar un repositorio Git?",
    options: ["git start", "git init", "git create", "git setup"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué es un gestor de dependencias?",
    options: [
      "Un entorno gráfico",
      "Un compilador de proyectos web",
      "Un programa que elimina errores",
      "Una herramienta que gestiona librerías y versiones del software",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Qué gestor de dependencias se usa con Java?",
    options: ["pip", "cargo", "gradle/maven", "npm"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué hace `git merge`?",
    options: ["Combina ramas", "Elimina commits", "Reinicia el historial", "Sube cambios al remoto"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué es un conflicto en Git?",
    options: [
      "Cuando dos ramas modifican la misma parte del archivo",
      "Cuando se cancela un push",
      "Cuando se mezclan dos ramas sin diferencias y los commit avanzan sin problema",
      "Cuando no hay commits e intentas hacer git commit",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué librería de Java se usa comúnmente para pruebas unitarias?",
    options: ["Log4j", "Swing", "JUnit", "React"],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál es la finalidad de las pruebas unitarias?",
    options: [
      "Validar código fuente en bruto",
      "Verificar el correcto funcionamiento de componentes aislados",
      "Probar todo el sistema completo",
      "Verificar que todas las operaciones de input/output funcionan correctamente",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál de estas etiquetas se usa para documentar el valor devuelto por un método?",
    options: ["@ret", "@output", "@return", "@value"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué ventaja tienen los lenguajes interpretados frente a los compilados?",
    options: [
      "Ocupan menos memoria",
      "No requieren precompilación",
      "No necesitan entorno de ejecución",
      "Se ejecutan más rápido",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué es un lenguaje de programación?",
    options: [
      "Una máquina que ejecuta programas",
      "Un medio para escribir algoritmos que una máquina puede interpretar",
      "Un conjunto de herramientas de depuración",
      "Un tipo de compilador",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando descarta los últimos commits de forma destructiva?",
    options: ["git reset --hard", "git revert", "git reset --soft", "git refactor"],
    correctAnswer: 0,
  },
  {
    question: "¿Para qué sirve la documentación del código?",
    options: [
      "Para tener trabajo para los alumnos de ciclos que van de prácticas a la empresa",
      "Para ralentizar el desarrollo pero mejorar el rendimiento",
      "Para facilitar mantenimiento y comprensión",
      "Para que el software se vea bonito",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál es la diferencia entre git reset y git revert?",
    options: [
      "Reset elimina el archivo; revert renombra",
      "Reset cambia ramas; revert borra ramas",
      "Reset modifica el historial; revert crea un commit inverso",
      "No la hay, ambos comandos realizan la misma operación, pero reset es más moderno",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué tipo de error es más difícil de detectar?",
    options: ["Error lógico", "Error de sintaxis", "Error de compilación", "Error ortográfico"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué prueba se realiza al integrar varios módulos?",
    options: ["Prueba de aceptación", "Prueba de modulación", "Prueba de integración", "Prueba de regresión"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué es Git?",
    options: [
      "Una plataforma que permite hospedar repositorios en la nube",
      "Un gestor de dependencias",
      "Un sistema operativo en la nube",
      "Un sistema de control de versiones",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Cuál de estas opciones es una sintaxis de Markdown válida?",
    options: ["**negrita**", "bold()", "@bold", "<negrita>"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué artefacto de SCRUM contiene la lista priorizada de requisitos?",
    options: ["Sprint Log", "Gantt Chart", "Product Backlog", "User Flow"],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál de los siguientes NO es un lenguaje de alto nivel?",
    options: ["Python", "Java", "Ensamblador", "C++"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué ventaja tiene documentar el código?",
    options: [
      "Reduce errores de compilación",
      "Hace que el programa se ejecute más rápido",
      "Facilita la comprensión por parte de otros desarrolladores",
      "Hace que se necesiten menos pruebas",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué caracteriza a las metodologías ágiles?",
    options: [
      "Enfoque exclusivamente técnico",
      "Desarrollo en cascada",
      "Documentación extensiva",
      "Iteraciones cortas y entregas frecuentes",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Qué comando permite ver el historial de commits?",
    options: ["git timeline", "git info", "git log", "git status"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué es Markdown?",
    options: [
      "Un lenguaje de programación",
      "Un lenguaje de marcado ligero",
      "Una librería de Java",
      "Un depurador que se usa en Python",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál de estos es un rol dentro de SCRUM?",
    options: ["Tester", "CEO", "Product Owner", "Analista de mercado"],
    correctAnswer: 2,
  },
  {
    question: "¿Dónde se puede visualizar la documentación generada con Javadoc?",
    options: ["En un PDF", "En consola", "En el correo electrónico", "En un navegador web"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué es un IDE?",
    options: [
      "Un entorno para programar con herramientas integradas",
      "Un sistema operativo",
      "Un depurador de errores",
      "Un compilador",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué herramienta se suele incluir en un IDE?",
    options: [
      "Reproductor multimedia",
      "Editor de código, compilador, debugger",
      "Analizador de virus",
      "Planificador de tareas escolares",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál de estas acciones realiza `git clone`?",
    options: [
      "Descarga un repositorio remoto",
      "Crea un conflicto",
      "Sube un archivo",
      "Clona el historial de commits de un repositorio a otro",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué etiqueta Javadoc se usa para describir parámetros?",
    options: ["@param", "@arg", "@parametro", "@entrada"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué fase del ciclo de vida del software implica la identificación de requisitos?",
    options: ["Mantenimiento", "Verificación", "Codificación", "Análisis"],
    correctAnswer: 3,
  },
  {
    question: "¿Para qué sirve `git branch`?",
    options: [
      "Para eliminar repositorios",
      "Para renombrar archivos",
      "Para crear o listar ramas",
      "Para mezclar cambios",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál de estos comandos se usa para subir cambios al repositorio remoto?",
    options: ["git save", "git update", "git push", "git export"],
    correctAnswer: 2,
  },
  {
    question: '¿Qué es "debugging"?',
    options: [
      "Automatizar instalaciones",
      "Escribir documentación",
      "Localizar y corregir errores en el código",
      "Traducir código",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué se necesita incluir en un comentario para que Javadoc lo reconozca?",
    options: ["# comentario", "// comentario", "/** comentario */", "/* comentario */"],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál de estas opciones es un IDE popular?",
    options: ["Mozilla Firefox", "Adobe Photoshop", "VirtualBox", "Visual Studio Code"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué se necesita para colaborar en un repositorio de GitHub?",
    options: [
      "Crear una máquina virtual",
      "Usar Javadoc",
      "Tener permisos de colaborador o hacer pull request",
      "Necesitar ser propietario de Git para poder así colaborar en Github",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué hace git rebase?",
    options: [
      "Borra commits antiguos",
      "Reinicia el repositorio",
      "Fusiona ramas de forma lineal",
      "Crea ramas automáticamente",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué herramienta genera documentación a partir del código Java?",
    options: ["Javadoc", "Swagger", "Eclipse", "Pandoc"],
    correctAnswer: 0,
  },
  {
    question: "¿Para qué sirve git stash?",
    options: [
      "Para ver el historial de commits de forma dinámica",
      "Para modificar conflictos",
      "Para guardar cambios sin hacer commit",
      "Para eliminar ramas",
    ],
    correctAnswer: 2,
  },
]

export default function EntornosJunioQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([])
  const [shuffledQuestions] = useState(() => {
    const shuffled = [...questions]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  })

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(answerIndex)
    const isCorrect = answerIndex === shuffledQuestions[currentQuestion].correctAnswer

    if (isCorrect) {
      setScore(score + 1)
    }

    setAnsweredQuestions([...answeredQuestions, currentQuestion])
  }

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
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
    setAnsweredQuestions([])
    window.location.reload()
  }

  if (showResult) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100)
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-8 bg-card border-border">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Resultado Final</h2>
            <div className="text-6xl font-bold text-primary">{percentage}%</div>
            <p className="text-xl text-muted-foreground">
              Has acertado {score} de {shuffledQuestions.length} preguntas
            </p>
            {percentage >= 80 && <p className="text-lg text-green-500">Excelente trabajo</p>}
            {percentage >= 60 && percentage < 80 && (
              <p className="text-lg text-blue-500">Buen resultado, sigue practicando</p>
            )}
            {percentage < 60 && <p className="text-lg text-orange-500">Necesitas repasar más</p>}
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

  const question = shuffledQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100

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
            <h1 className="text-2xl font-bold text-foreground">Entornos de Desarrollo - Simulacro Junio</h1>
            <span className="text-muted-foreground">
              Pregunta {currentQuestion + 1} de {shuffledQuestions.length}
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-red-500 h-2 rounded-full transition-all duration-300"
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
                          ? "border-red-500 bg-red-500/10"
                          : "border-border hover:border-red-500/50 bg-card"
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
                {currentQuestion < shuffledQuestions.length - 1 ? "Siguiente pregunta" : "Ver resultados"}
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
