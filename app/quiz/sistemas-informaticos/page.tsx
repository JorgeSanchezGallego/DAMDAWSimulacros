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
    question: "¿Qué elementos forman un sistema informático?",
    options: [
      "Únicamente el hardware",
      "Solo el software del ordenador",
      "Hardware, software y usuarios que gestionan la información",
      "Programas de ofimática y sistemas operativos",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Cuando hablamos de la CPU, memoria RAM y disco duro, ¿a qué parte del sistema informático nos referimos?",
    options: ["Al software", "A la interfaz de usuario", "A la red local", "Al hardware"],
    correctAnswer: 3,
  },
  {
    question: "¿Cuál de los siguientes componentes pertenece al hardware físico de un ordenador?",
    options: ["El compilador", "El navegador web", "El sistema operativo", "El procesador"],
    correctAnswer: 3,
  },
  {
    question: "¿Cómo se denomina la parte del sistema operativo que controla directamente los recursos de hardware?",
    options: ["El gestor de red", "El sistema de archivos", "El compilador", "El núcleo (kernel)"],
    correctAnswer: 3,
  },
  {
    question:
      "¿Qué componente del ordenador se encarga de coordinar y controlar todas las operaciones que realiza la CPU?",
    options: ["La memoria RAM", "La unidad aritmético-lógica", "La unidad de control", "El bus de datos"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué tipo de software se encarga de gestionar los recursos del ordenador y coordinar el hardware?",
    options: ["Software de aplicación", "Software de red", "Software de sistema", "Software libre"],
    correctAnswer: 2,
  },
  {
    question: "¿Cómo se denomina un sistema operativo que puede ejecutar varios procesos de forma simultánea?",
    options: ["Monotarea", "Multitarea", "Monousuario", "Basado en texto"],
    correctAnswer: 1,
  },
  {
    question: "¿En qué unidad se mide la frecuencia de funcionamiento del procesador?",
    options: ["GHz", "GB", "RPM", "MB"],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál de los siguientes dispositivos se utiliza para introducir datos en un equipo informático?",
    options: ["Ratón", "Monitor", "Impresora", "Altavoces"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué parte del procesador realiza las operaciones matemáticas y lógicas?",
    options: ["Memoria caché", "Unidad aritmético-lógica (ALU)", "BIOS", "Unidad de control"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué diferencia existe entre la CPU y la memoria RAM?",
    options: [
      "La CPU ejecuta instrucciones, mientras que la RAM almacena datos temporalmente",
      "Ambas tienen la misma función",
      "La RAM controla los dispositivos externos",
      "La CPU solo almacena datos",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué tipo de memoria se borra al apagar el equipo y se utiliza para almacenar datos de trabajo de la CPU?",
    options: ["Memoria RAM", "Memoria ROM", "Disco SSD", "Memoria caché"],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál de los siguientes elementos se considera hardware externo?",
    options: ["Tarjeta gráfica", "Fuente de alimentación", "Teclado", "Placa base"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué tarea principal realiza un sistema operativo?",
    options: [
      "Traducir código fuente a binario",
      "Ejecutar programas y gestionar los recursos del sistema",
      "Controlar el flujo eléctrico de la placa base",
      "Crear aplicaciones de usuario",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué característica define a un sistema operativo multitarea?",
    options: [
      "Funciona únicamente sin interfaz gráfica",
      "Requiere hardware especializado",
      "Solo admite un usuario por sesión",
      "Permite ejecutar más de un proceso al mismo tiempo",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Qué comando de Linux se utiliza para crear archivos?",
    options: ["create", "cr", "touch", "touchfile"],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál de los siguientes sistemas operativos pertenece al grupo de los propietarios o cerrados?",
    options: ["Windows", "Ubuntu", "Debian", "Linux Mint"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué opción es un ejemplo de software libre?",
    options: ["Windows", "Linux", "macOS", "iOS"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué tipo de sistema operativo permite que varios usuarios trabajen simultáneamente en un mismo equipo?",
    options: ["Monotarea", "Multitarea", "Monousuario", "Multiusuario"],
    correctAnswer: 3,
  },
  {
    question:
      "Si formateas un disco desde Windows 11 con la configuración predeterminada, ¿qué sistema de archivos se aplica?",
    options: ["APFS", "EXT4", "NTFS", "exFAT"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué función realiza un hipervisor en un entorno virtualizado?",
    options: [
      "Supervisa las conexiones de red",
      "Administra usuarios y contraseñas",
      "Gestiona las máquinas virtuales y sus recursos",
      "Protege el sistema mediante cifrado",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué tipo de red conecta dispositivos dentro de un mismo edificio o espacio reducido?",
    options: ["WAN", "MAN", "LAN", "WLAN"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué protocolo se encarga de traducir los nombres de dominio a direcciones IP?",
    options: ["FTP", "DHCP", "HTTP", "DNS"],
    correctAnswer: 3,
  },
  {
    question:
      "¿Qué aplicación se utiliza en entornos formativos para simular varios sistemas operativos en un solo equipo?",
    options: ["Scratch", "VirtualBox", "NetBeans", "Notepad++"],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué beneficio ofrece una máquina virtual respecto a un sistema operativo instalado directamente en el hardware?",
    options: [
      "Permite probar configuraciones sin modificar el sistema principal",
      "Aumenta la velocidad de la CPU",
      "Consume menos energía eléctrica",
      "Mejora la resolución de pantalla",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué usuario en Linux tiene permisos absolutos para realizar cualquier acción en el sistema?",
    options: ["admin", "superuser", "root", "master"],
    correctAnswer: 2,
  },
  {
    question:
      'Si un usuario desea crear una carpeta llamada "documentos" en su directorio personal, ¿qué comando debe utilizar?',
    options: ["mkdir documentos", "newdir documentos", "touch documentos", "make documentos"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué comando de Linux tiene una función similar a ipconfig en Windows?",
    options: ["route", "ping", "ifconfig", "nslookup"],
    correctAnswer: 2,
  },
  {
    question:
      "Si un usuario quiere cambiar la configuración del sistema, como la red o los programas instalados, ¿dónde puede encontrar el Panel de control?",
    options: [
      "En el menú del antivirus",
      "En la BIOS del equipo",
      "En el explorador de archivos, dentro de C:\\Windows",
      "En el menú Inicio o buscador de Windows",
    ],
    correctAnswer: 3,
  },
  {
    question: "Si un administrador desea añadir un nuevo usuario en Windows 10, ¿qué apartado debe abrir?",
    options: [
      "Panel de control → Programas",
      "BIOS → Usuarios del sistema",
      "Configuración → Cuentas → Familia y otros usuarios",
      "Carpeta de sistema C:\\Windows",
    ],
    correctAnswer: 2,
  },
  {
    question:
      'Si un usuario quiere leer el contenido de un archivo llamado "notas.txt" desde la terminal, ¿qué comando debe usar?',
    options: ["read notas.txt", "open notas.txt", "cat notas.txt", "show notas.txt"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué comando de Linux sirve para eliminar un directorio vacío?",
    options: ["rmdir", "rm", "deldir", "removedir"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué instrucción de Linux permite cambiar los permisos asignados a archivos o directorios?",
    options: ["chperm", "chmod", "chusr", "modperm"],
    correctAnswer: 1,
  },
  {
    question:
      "Si un administrador necesita actualizar la contraseña de un usuario en Linux, ¿qué instrucción debe utilizar?",
    options: ["password", "passwd", "chpass", "sudoedit"],
    correctAnswer: 1,
  },
  {
    question:
      "Si un administrador necesita consultar las contraseñas cifradas de los usuarios del sistema, ¿en qué archivo debería buscarlas?",
    options: ["/etc/users", "/etc/shadow", "/etc/group", "/root/passwd"],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué fichero de configuración contiene los nombres de usuario, UID, GID y el directorio personal de cada cuenta?",
    options: ["/etc/passwd", "/etc/group", "/etc/shadow", "/root/passwd"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué comando de la consola de Windows se utiliza para acceder a otra carpeta o cambiar de directorio?",
    options: ["cd", "move", "mv", "dir"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué instrucción de Linux imprime en pantalla el directorio de trabajo actual (ruta absoluta)?",
    options: ["ls", "showdir", "pwd", "path"],
    correctAnswer: 2,
  },
  {
    question:
      "¿Qué comando del sistema Linux permite visualizar el contenido de un directorio, mostrando archivos y subcarpetas?",
    options: ["dir", "cat", "cd", "ls"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué tipo de programa convierte el código fuente en instrucciones que el procesador puede ejecutar?",
    options: ["Editor de texto", "Compilador o intérprete", "Sistema operativo", "Depurador"],
    correctAnswer: 1,
  },
  {
    question:
      "Si un usuario quiere comprobar qué programas están activos desde la línea de comandos de Windows, ¿qué instrucción debe escribir?",
    options: ["showproc", "tasklist", "services.msc", "netstat"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué herramienta de Linux permite obtener información sobre los procesos activos, como su PID y estado?",
    options: ["jobs", "task", "showproc", "ps"],
    correctAnswer: 3,
  },
  {
    question: "¿Cómo se denomina la red que conecta ordenadores situados en diferentes regiones o países?",
    options: ["LAN", "MAN", "WAN", "WLAN"],
    correctAnswer: 2,
  },
  {
    question: "¿Para qué se utiliza Docker Compose en el entorno de contenedores Docker?",
    options: [
      "Para crear imágenes del sistema operativo",
      "Para instalar Docker en diferentes sistemas",
      "Para editar el contenido de una imagen",
      "Para gestionar y orquestar varios contenedores definidos en un mismo archivo",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "¿Qué protocolo utiliza un servidor para ofrecer direcciones IP dinámicas a los clientes que las solicitan?",
    options: ["DHCP", "DNS", "TCP", "UDP"],
    correctAnswer: 0,
  },
  {
    question:
      '¿Cuál de los siguientes protocolos se encarga de traducir nombres de dominio como "www.google.com" a direcciones IP?',
    options: ["DHCP", "IP", "TCP", "DNS"],
    correctAnswer: 3,
  },
  {
    question:
      "Un contenedor Docker se detuvo tras su ejecución. ¿Qué instrucción debe usarse para volver a iniciarlo sin crear uno nuevo?",
    options: ["docker restart", "docker start", "docker run", "docker rerun"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando de Docker lista los contenedores en ejecución junto con su ID, nombre y estado?",
    options: ["docker ps", "docker show", "docker containers", "docker get"],
    correctAnswer: 0,
  },
  {
    question:
      "Si un usuario quiere consultar qué imágenes de Docker tiene descargadas en su equipo, ¿qué instrucción debe usar?",
    options: ["docker list", "docker ps -a", "docker info", "docker images"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué diferencia estructural hay entre Docker y una máquina virtual como las de VirtualBox o VMware?",
    options: [
      "Docker comparte el kernel del sistema base, mientras que las máquinas virtuales emulan un sistema completo.",
      "Docker ejecuta su propio kernel independiente.",
      "Las máquinas virtuales no utilizan recursos del hardware físico.",
      "No hay ninguna diferencia técnica.",
    ],
    correctAnswer: 0,
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

export default function SistemasInformaticosQuiz() {
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
              <span className="text-foreground">Sistemas Informáticos</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Comprueba tus conocimientos en sistemas operativos y arquitectura de ordenadores
            </p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">50 Preguntas</p>
                  <p className="text-sm text-muted-foreground">Linux, Windows, redes y virtualización</p>
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
              {percentage >= 90 && (
                <p className="text-lg text-foreground">Excelente. Dominas los sistemas informáticos.</p>
              )}
              {percentage >= 70 && percentage < 90 && (
                <p className="text-lg text-foreground">Muy bien. Buenos conocimientos de sistemas.</p>
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
                  className={`
                    w-full text-left p-4 rounded-lg border-2 transition-all
                    ${!showFeedback && "hover:border-blue-500 hover:bg-accent cursor-pointer"}
                    ${showFeedback && "cursor-not-allowed"}
                    ${isSelected && !showFeedback && "border-blue-500 bg-accent"}
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
              <Button onClick={handleNext} className="bg-blue-500 hover:bg-blue-600 text-white">
                {currentQuestionIndex < shuffledQuestions.length - 1 ? "Siguiente" : "Ver Resultados"}
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
