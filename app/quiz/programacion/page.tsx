'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, X, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface Question {
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    question: '¿Qué efecto tiene declarar una variable como final dentro de un método?',
    options: ['Solo se puede usar dentro de un bucle', 'No puede modificarse una vez asignada', 'Puede cambiarse pero con advertencia', 'Se borra automáticamente al final del método'],
    correctAnswer: 1
  },
  {
    question: '¿Cuál será el resultado de 20 % 6 en Java?',
    options: ['0', '2', '4', '6'],
    correctAnswer: 1
  },
  {
    question: 'Si int x = 3; x += 4 * 2; ¿qué valor final tiene x?',
    options: ['7', '11', '8', '12'],
    correctAnswer: 1
  },
  {
    question: '¿Qué operador se usa para comprobar si dos variables primitivas son distintas?',
    options: ['==', '!=', 'equals()', '<>'],
    correctAnswer: 1
  },
  {
    question: '¿Qué tipo de dato permite almacenar valores como 2.718281828?',
    options: ['int', 'double', 'long', 'short'],
    correctAnswer: 1
  },
  {
    question: '¿Qué instrucción se utiliza para ejecutar una alternativa u otra dependiendo de una condición?',
    options: ['if...else', 'break', 'switch', 'continue'],
    correctAnswer: 0
  },
  {
    question: '¿Qué imprime el siguiente código? int n = 4; while (n > 6) { n--; } System.out.println(n);',
    options: ['4', '5', '3', '2'],
    correctAnswer: 0
  },
  {
    question: '¿Qué bucle se ejecuta al menos una vez antes de comprobar la condición?',
    options: ['for', 'do-while', 'while', 'if'],
    correctAnswer: 1
  },
  {
    question: '¿Qué palabra se usa para detener por completo la ejecución de un bucle en curso?',
    options: ['stopLoop', 'continue', 'break', 'end'],
    correctAnswer: 2
  },
  {
    question: 'Si se omite break en un switch, ¿qué comportamiento se obtiene?',
    options: ['El programa se detiene', 'Se ejecutan los casos siguientes sin detenerse', 'Se lanza una excepción', 'No entra en ningún case'],
    correctAnswer: 1
  },
  {
    question: '¿Qué palabra clave indica que un método devolverá un valor al finalizar?',
    options: ['output', 'return', 'value', 'yield'],
    correctAnswer: 1
  },
  {
    question: '¿Qué muestra este fragmento? int sumar(int a, int b) { return a + b; } System.out.println(sumar(6, 9));',
    options: ['69', '15', '96', 'Error'],
    correctAnswer: 1
  },
  {
    question: '¿Cómo se declara un método que no devuelve ningún valor?',
    options: ['public method()', 'void metodo()', 'empty metodo()', 'metodo returnless'],
    correctAnswer: 1
  },
  {
    question: '¿Cuál de los siguientes identificadores NO es válido para un método en Java?',
    options: ['iniciarSesion', '_guardarDatos', 'total$ventas', 'calcularPromedio'],
    correctAnswer: 2
  },
  {
    question: '¿Qué palabra clave se usa para crear un nuevo objeto a partir de una clase?',
    options: ['build', 'new', 'class', 'instance'],
    correctAnswer: 1
  },
  {
    question: '¿Qué palabra se usa para indicar que una clase hereda de otra?',
    options: ['extends', 'inheritsFrom', 'superclass', 'import'],
    correctAnswer: 0
  },
  {
    question: '¿Qué beneficio ofrece la herencia?',
    options: ['Permite copiar métodos entre clases sin modificarlos', 'Permite reutilizar código y comportamientos comunes', 'Obliga a redefinir todos los métodos', 'Evita el uso de constructores'],
    correctAnswer: 1
  },
  {
    question: 'Si una clase implementa una interfaz, ¿qué ocurre?',
    options: ['Puede ignorar los métodos de la interfaz', 'Puede tener más de un constructor', 'Debe implementar los métodos definidos en ella', 'Se convierte en una clase abstracta'],
    correctAnswer: 2
  },
  {
    question: '¿Qué define la sobrecarga de métodos (overloading)?',
    options: ['Heredar métodos de una clase padre', 'Definir varios métodos con el mismo nombre y distintos parámetros', 'Reescribir métodos con la misma firma', 'Usar varios métodos a la vez'],
    correctAnswer: 1
  },
  {
    question: '¿Qué bloque se usa para capturar una excepción lanzada?',
    options: ['throw', 'catch', 'try', 'error'],
    correctAnswer: 1
  },
  {
    question: '¿Qué bloque de código se ejecuta siempre, ocurra o no una excepción?',
    options: ['try', 'catch', 'finally', 'default'],
    correctAnswer: 2
  },
  {
    question: '¿Qué tipo de colección evita duplicados y no garantiza orden?',
    options: ['List', 'Map', 'Set', 'ArrayList'],
    correctAnswer: 2
  },
  {
    question: '¿Cuál de las siguientes afirmaciones es cierta sobre HashMap y TreeMap?',
    options: ['Ambos ordenan las claves alfabéticamente', 'TreeMap mantiene las claves ordenadas, HashMap no', 'HashMap es siempre más lento', 'TreeMap permite claves duplicadas'],
    correctAnswer: 1
  }
]

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function ProgramacionQuiz() {
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
              <span className="text-foreground">Programación</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Pon a prueba tus conocimientos en Java y programación orientada a objetos
            </p>
            
            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">23 Preguntas</p>
                  <p className="text-sm text-muted-foreground">Conceptos esenciales de Java y POO</p>
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
              <div className="text-6xl font-bold text-blue-500 mb-2">
                {percentage}%
              </div>
              <p className="text-xl text-muted-foreground">
                {score} de {shuffledQuestions.length} correctas
              </p>
            </div>
            
            <div className="space-y-2">
              {percentage >= 90 && (
                <p className="text-lg text-foreground">Excelente. Dominas la programación en Java.</p>
              )}
              {percentage >= 70 && percentage < 90 && (
                <p className="text-lg text-foreground">Muy bien. Buen conocimiento de Java.</p>
              )}
              {percentage >= 50 && percentage < 70 && (
                <p className="text-lg text-foreground">Bien hecho. Sigue practicando.</p>
              )}
              {percentage < 50 && (
                <p className="text-lg text-foreground">Sigue aprendiendo. Tú puedes.</p>
              )}
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
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
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
            <span>Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}</span>
            <span>Puntuación: {score}</span>
          </div>

          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
            />
          </div>

          <h2 className="text-2xl font-bold text-foreground text-balance">
            {currentQuestion.question}
          </h2>

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
                    ${!showFeedback && 'hover:border-blue-500 hover:bg-accent cursor-pointer'}
                    ${showFeedback && 'cursor-not-allowed'}
                    ${isSelected && !showFeedback && 'border-blue-500 bg-accent'}
                    ${showCorrect && 'border-green-500 bg-green-500/10'}
                    ${showIncorrect && 'border-red-500 bg-red-500/10'}
                    ${!isSelected && !showCorrect && !showIncorrect && 'border-border bg-card'}
                  `}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-foreground font-medium">{option}</span>
                    {showCorrect && (
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                    )}
                    {showIncorrect && (
                      <X className="w-5 h-5 text-red-500 shrink-0" />
                    )}
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
              <Button 
                onClick={handleNext}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                {currentQuestionIndex < shuffledQuestions.length - 1 ? 'Siguiente' : 'Ver Resultados'}
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
