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
    question: "¿Qué método se usa para ordenar un array de enteros en Java?",
    options: ["Collections.sort()", "Arrays.sort()", "List.sort()", "Array.sort()"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es el rango válido para el tipo byte en Java?",
    options: ["0 a 255", "-128 a 127", "-256 a 255", "0 a 127"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué ocurre si se accede al carácter 10 de un String de 3 caracteres?",
    options: ["Imprime espacio", "Da null", "Excepción", "Retorna carácter vacío"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué estructura de datos permite listas dinámicas que crecen automáticamente?",
    options: ["Array", "ArrayList", "LinkedList", "Set"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué sucede si se accede a un índice inexistente en un array?",
    options: ["Devuelve null", "Devuelve -1", "Lanza ArrayIndexOutOfBoundsException", "Termina silenciosamente"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué palabra clave define una clase en Java?",
    options: ["define", "object", "new", "class"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué estructura de control garantiza al menos una ejecución del bloque?",
    options: ["while", "do-while", "for", "if"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué método se usa para insertar pares clave-valor en un HashMap?",
    options: ["insert()", "add()", "put()", "push()"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué palabra se usa para definir una función que no retorna nada?",
    options: ["int", "return", "void", "null"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué operador se usa para comparar si dos arrays tienen el mismo contenido?",
    options: [".equals()", "Arrays.equals()", ".compareTo()"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué ocurre si se convierte un int grande (por encima de 127) a byte?",
    options: ["Se redondea", "Se lanza excepción", "Se ajusta a 127", "Hay desbordamiento"],
    correctAnswer: 3,
  },
  {
    question: "¿Cuál es el resultado de 10 % 3?",
    options: ["1", "3", "0", "2"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué estructura se usa para evaluar múltiples valores de una variable?",
    options: ["if", "switch", "while", "for"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál de estos tipos puede almacenar true o false?",
    options: ["boolean", "int", "String", "char"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué clase se utiliza para leer entrada del usuario?",
    options: ["Input", "Scanner", "Reader", "Console"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué ocurre si se intenta añadir un elemento a un array de tamaño fijo y ya está completo?",
    options: ["Se ajusta automáticamente", "Lanza una excepción", "Se sobrescribe el último elemento", "No compila"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué ocurre si se omite el bloque `break` en un `switch`?",
    options: ["No compila", "Solo se ejecuta el caso actual", "Se ejecutan los siguientes casos", "Lanza excepción"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué método permite agregar un elemento al final de una ArrayList?",
    options: ["addElement()", "insert()", "append()", "add()"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué instrucción se usa para salir de un bucle inmediatamente?",
    options: ["exit", "break", "continue", "return"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué método se usa para mostrar por pantalla en Java?",
    options: ["print()", "show()", "System.out.print()", "System.out.println()"],
    correctAnswer: 3,
  },
  {
    question: "¿Cuál de estas es una estructura de selección en Java?",
    options: ["switch", "array", "method", "loop"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué operador lógico representa una conjunción (AND)?",
    options: ["||", "&&", "!", "&"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué estructura permite asociar un nombre de país con su capital?",
    options: ["Array", "ArrayList", "HashMap", "Stack"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué clase usas para almacenar múltiples objetos del mismo tipo?",
    options: ["ArrayList", "int", "char", "if"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué método se utiliza para convertir un String en int?",
    options: ["String.parseInt()", "Integer.valueOf()", "Integer.parseInt()", "parse()"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué estructura permite eliminar fácilmente elementos duplicados en una lista?",
    options: ["Array", "ArrayList", "HashSet", "LinkedList"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué hace el método equals() con Strings?",
    options: ["Los concatena", "Los imprime", "Compara contenido", "Compara longitud"],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál es el resultado de !(true && false)?",
    options: ["false", "true", "error", "null"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es la forma correcta de convertir un array de enteros a ArrayList?",
    options: [
      "new ArrayList<>(Arrays.asList(array))",
      "Arrays.toArrayList(array)",
      "new ArrayList(array)",
      "Arrays.asList(array)",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué tipo de bucle se usa cuando no se sabe cuántas veces se repetirá?",
    options: ["for", "while", "do-while", "switch"],
    correctAnswer: 1,
  },
  {
    question: "¿Cómo se llama el código que relaciona caracteres con un valor binario?",
    options: ["ASCII", "ASCI", "SSH", "HEXADECIMAL"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué tipo de dato usarías para almacenar 3.14?",
    options: ["int", "double", "char", "boolean"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué hace el siguiente código?\nint[] arr = {1, 2, 3};\nSystem.out.println(arr[2]);",
    options: ["Imprime 2", "Imprime 3", "Error en compilación", "Excepción"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué ocurre al convertir el valor 8.75 a int usando (int)?",
    options: ["Se redondea a 9", "Se convierte en 8", "Lanza excepción", "Se convierte en 8.75"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál de estas opciones lanza una NumberFormatException?",
    options: ['Integer.parseInt("123")', 'Integer.parseInt("abc")', 'Integer.parseInt("12")', 'Integer.parseInt("0")'],
    correctAnswer: 1,
  },
  {
    question: "¿Qué palabra clave se usa para declarar una constante en Java?",
    options: ["const", "final", "constant", "static"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué clase representa un mapa ordenado por clave?",
    options: ["HashMap", "ArrayList", "TreeMap", "Set"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué operador permite obtener el resto de una división?",
    options: ["*", "/", "%", "&&"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué valor imprime este código? int resultado = 5 / 2;",
    options: ["2.5", "3", "2", "0"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué hace el operador lógico || en Java?",
    options: ["Y lógico", "O lógico", "Negación", "Comparación"],
    correctAnswer: 1,
  },
]

export default function ProgramacionJunioQuiz() {
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
            <h1 className="text-2xl font-bold text-foreground">Programación - Simulacro Junio</h1>
            <span className="text-muted-foreground">
              Pregunta {currentQuestion + 1} de {shuffledQuestions.length}
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-purple-500 h-2 rounded-full transition-all duration-300"
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
                          ? "border-purple-500 bg-purple-500/10"
                          : "border-border hover:border-purple-500/50 bg-card"
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
