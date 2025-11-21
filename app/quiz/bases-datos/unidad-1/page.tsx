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
  type?: "truefalse" // For the first question
  statements?: string[] // For true/false statements
}

const questions: Question[] = [
  {
    question: "Indica si estas características relevantes de los ficheros secuenciales son VERDADERAS o FALSAS:",
    type: "truefalse",
    statements: [
      "La lectura siempre se puede realizar hacia delante o atrás.",
      "Son ficheros multiusuario, y permiten el acceso simultáneo de varios usuarios.",
      "Tienen una estructura rígida de campos. Todos los registros deben aparecer en orden, es decir, la posición de los campos de cada registro siempre ha de ser la misma.",
      "El modo de apertura del fichero, condiciona la lectura o escritura.",
      "No aprovechan al máximo el soporte de almacenamiento, al dejar huecos vacíos entre bloques de ficheros.",
      "Se pueden grabar en cualquier tipo de soporte, tanto en secuenciales como direccionables.",
      "Todos los lenguajes de programación disponen de instrucciones para trabajar con este tipo de ficheros.",
      "Siempre se pueden insertar registros entre los que ya están grabados.",
    ],
    options: ["FALSO", "FALSO", "VERDADERO", "VERDADERO", "FALSO", "VERDADERO", "VERDADERO", "FALSO"],
    correctAnswer: 0, // Not used for this type
  },
  {
    question: "¿Cuál es el objetivo principal de una base de datos en términos de datos?",
    options: [
      "Máxima redundancia.",
      "Mínima integridad.",
      "Máxima integridad y mínima redundancia.",
      "Máximo desorden.",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué son las entidades, registros y atributos en una base de datos?",
    options: [
      "Tipos de datos.",
      "Componentes básicos de una base de datos.",
      "Lenguajes de consulta.",
      "Niveles de abstracción.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál de los siguientes es un tipo de base de datos según su modelo de datos?",
    options: ["Centralizada.", "Distribuida.", "Relacional.", "En la nube."],
    correctAnswer: 2,
  },
  {
    question: "¿Qué significa SQL en el contexto de las bases de datos?",
    options: [
      "Sistema de Gestión de Lenguajes.",
      "Lenguaje de Consulta Estructurado.",
      "Sistema Global de Localización.",
      "Lenguaje de Programación Orientado a Objetos.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es la función principal de un Sistema Gestor de Bases de Datos (SGBD)?",
    options: [
      "Almacenar archivos multimedia.",
      "Gestionar las tablas y sus relaciones.",
      "Diseñar interfaces de usuario.",
      "Crear aplicaciones web.",
    ],
    correctAnswer: 1,
  },
  {
    question: "Explica la diferencia entre una base de datos jerárquica y una base de datos en red.",
    options: [
      "Ambas son iguales.",
      "La jerárquica tiene un padre y varios hijos, la de red varios padres y varios hijos.",
      "La jerárquica usa SQL, la de red NoSQL.",
      "La jerárquica es distribuida, la de red centralizada.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué ventajas ofrece una base de datos documental en comparación con una base de datos relacional?",
    options: [
      "Mayor integridad referencial.",
      "Estructura fija y predefinida.",
      "Flexibilidad y capacidad para manejar datos semiestructurados.",
      "Menor escalabilidad.",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué sublenguajes de SQL se utilizan para la manipulación de datos y la definición de tablas?",
    options: ["DCL y TCL.", "DML y DDL.", "API y GUI.", "JSON y XML."],
    correctAnswer: 1,
  },
  {
    question: "Describe los niveles de abstracción de una base de datos y explica la función de cada uno.",
    options: [
      "Físico, lógico y de usuario.",
      "Conceptual, físico y de visión.",
      "DML, DDL y DCL.",
      "Centralizado, distribuido y en la nube.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Cuáles son las características clave de una base de datos descentralizada como Blockchain y qué ventajas ofrece?",
    options: [
      "Centralizada, rápida y económica.",
      "Inmutable, transparente y segura.",
      "Relacional, escalable y flexible.",
      "Jerárquica, redundante y compleja.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es el objetivo principal del Reglamento General de Protección de Datos (GDPR)?",
    options: [
      "Regular el uso de cookies.",
      "Proteger la privacidad del individuo.",
      "Fomentar el uso de Big Data.",
      "Establecer técnicas de análisis predictivo.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué derechos garantiza la Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD) a los usuarios?",
    options: [
      "Acceso, rectificación, supresión y oposición.",
      "Uso ilimitado de datos sensibles.",
      "Almacenamiento masivo de datos sin consentimiento.",
      "Análisis prescriptivo de datos personales.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué implicaciones tienen el GDPR y la LOPDGDD para los diseñadores y administradores de bases de datos?",
    options: [
      "Solo la implementación de seguridad física.",
      "Asesoramiento legal e implementación de seguridad.",
      "Exclusivamente la gestión de cookies.",
      "Ninguna, ya que son leyes para usuarios finales.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué características definen el concepto de Big Data?",
    options: [
      "Pequeño volumen de datos, variedad limitada y procesamiento lento.",
      "Gran volumen de datos, variedad de fuentes y velocidad de procesamiento.",
      "Datos estructurados y análisis descriptivo exclusivamente.",
      "Datos centralizados y control total del administrador.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Explica las diferencias entre las técnicas de análisis de datos predictivo, descriptivo y prescriptivo, y proporciona un ejemplo de aplicación para cada una.",
    options: [
      "Todas son iguales y se aplican indistintamente.",
      "Predictivo predice, descriptivo analiza el pasado, prescriptivo recomienda acciones.",
      "Descriptivo predice, prescriptivo describe, predictivo recomienda.",
      "Solo el análisis descriptivo es relevante para la toma de decisiones.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es la diferencia fundamental entre datos e información?",
    options: [
      "Los datos son siempre numéricos, la información es textual.",
      "La información tiene contexto y organización, los datos no.",
      "Los datos son más valiosos que la información.",
      "No hay diferencia, son términos intercambiables.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué funciones clave desempeña un Sistema Gestor de Bases de Datos (SGBD)?",
    options: [
      "Solo el almacenamiento de datos.",
      "Almacenamiento, acceso y actualización eficiente de datos.",
      "Únicamente la creación de informes.",
      "La gestión de redes informáticas.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué caracteriza a un fichero de acceso secuencial?",
    options: [
      "El acceso directo a cualquier registro.",
      "El uso de índices para acceder a los datos.",
      "La lectura de datos de manera consecutiva.",
      "El acceso mediante una fórmula matemática.",
    ],
    correctAnswer: 2,
  },
  {
    question: '¿Cuáles son las tres "V" del Big Data?',
    options: [
      "Veracidad, valor y volumen.",
      "Variedad, velocidad y valor.",
      "Volumen, variedad y velocidad.",
      "Visualización, veracidad y volumen.",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué objetivo principal tiene el Reglamento General de Protección de Datos (GDPR)?",
    options: [
      "Regular el uso de cookies.",
      "Proteger la privacidad y dar control a los individuos sobre sus datos personales.",
      "Fomentar el uso de Big Data.",
      "Establecer normas para la fragmentación de bases de datos.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es el objetivo principal de la fragmentación de bases de datos?",
    options: [
      "Reducir el tamaño total de la base de datos.",
      "Mejorar la seguridad de los datos.",
      "Escalar la base de datos y mejorar el rendimiento.",
      "Simplificar la administración de la base de datos.",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿En qué consiste la fragmentación basada en rangos?",
    options: [
      "Aplicar una función hash a una clave de fragmento.",
      "Dividir los datos en función de rangos de valores especificados.",
      "Especificar explícitamente qué fragmento almacenará ciertos datos.",
      "Almacenar todos los datos en un único servidor.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cómo funciona la fragmentación basada en hash?",
    options: [
      "Dividiendo los datos por rangos de valores.",
      "Asignando datos a fragmentos basados en una lista predefinida.",
      "Aplicando una función hash a una clave de fragmento para determinar el fragmento.",
      "Distribuyendo los datos aleatoriamente entre los fragmentos.",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué caracteriza a la fragmentación basada en listas?",
    options: [
      "Utiliza rangos de valores para distribuir los datos.",
      "Asigna datos a fragmentos mediante una función hash.",
      "Especifica qué fragmento almacena datos basados en una lista de valores.",
      "Divide la base de datos en fragmentos de igual tamaño.",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué ventajas ofrece la fragmentación de bases de datos en términos de rendimiento?",
    options: [
      "Reduce la necesidad de copias de seguridad.",
      "Permite el procesamiento paralelo y reduce los cuellos de botella.",
      "Aumenta la complejidad de las consultas SQL.",
      "Simplifica la gestión de permisos de usuario.",
    ],
    correctAnswer: 1,
  },
  {
    question: "Caso 1: Netflix - Plataforma de Streaming Global. Selecciona el SGBD más adecuado.",
    options: [
      "Amazon DynamoDB (NoSQL): DynamoDB es ideal para manejar grandes volúmenes de datos no estructurados y semiestructurados. Su alta escalabilidad y rendimiento garantizan una experiencia de usuario fluida, incluso con millones de usuarios simultáneos.",
      "Google Cloud Spanner (NewSQL): Ofrece una alta escalabilidad. Es poco rentable para casos de uso con datos altamente variables.",
      "PostgreSQL (SQL): Muy robusto. Poco escalable horizontalmente. No está diseñado para datos no estructurados.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Caso 2: La Liga de Fútbol - Plataforma de Datos Deportivos en Tiempo Real. Selecciona el SGBD más adecuado.",
    options: [
      "MongoDB (NoSQL): Muy bueno para grandes volúmenes de datos. Capacidad media para escalar en clústeres grandes.",
      "Oracle Database (SQL): Oracle Database, muy potente, muy costoso. Óptimo para implementar una aplicación que no precise tiempo real.",
      "Apache Cassandra (NoSQL): Arquitectura distribuida que garantiza alta disponibilidad y tolerancia a fallos. Excelente para manejar grandes volúmenes de datos en tiempo real.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Caso 3: Censo de Ciudadanos - Sistema de Gestión de Datos Nacional (Hacienda). Selecciona el SGBD más adecuado.",
    options: [
      "Microsoft SQL Server (SQL): Ofrece sólidas características de seguridad, integridad referencial. Gran madurez y amplio soporte. Confiable para aplicaciones críticas.",
      "IBM Db2 (SQL): Características similares al producto de Microsoft, pero con una menor implantación.",
      "MariaDB (SQL): Con menor capacidad de seguridad y robustez que las otras opciones. Pero una opción muy recomendable para reducir costes.",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué significa SGBD?",
    options: [
      "Sistema General de Base de Datos",
      "Sistema Gestor de Base de Datos",
      "Sistema de Gestión de Bases de Datos",
      "Sistema General de Gestión de Datos",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué lenguaje se utiliza para definir la estructura de la base de datos?",
    options: ["DML", "DQL", "DDL", "DCL"],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál es la finalidad del DML?",
    options: ["Gestionar permisos de usuario", "Manipular datos", "Consultar datos", "Definir la estructura de datos"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando se utiliza para crear una nueva tabla?",
    options: ["INSERT", "CREATE", "UPDATE", "DELETE"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué función cumple el Lenguaje de Control de Transacciones (TCL)?",
    options: ["Consultar datos", "Definir la estructura de datos", "Gestionar transacciones", "Manipular datos"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué significa DCL?",
    options: [
      "Lenguaje de Control de Datos",
      "Lenguaje de Compilación de Datos",
      "Lenguaje de Coordinación de Datos",
      "Lenguaje de Construcción de Datos",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué componente gestiona la organización del almacenamiento de datos en el disco?",
    options: ["Gestor de Transacciones", "Gestor de Almacenamiento", "Motor de Base de Datos", "Interfaz de Usuario"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué significa ACID en el contexto de la gestión de transacciones?",
    options: [
      "Atomicidad, Consistencia, Aislamiento, Durabilidad",
      "Acción, Control, Aislamiento, Durabilidad",
      "Atomicidad, Compatibilidad, Aislamiento, Durabilidad",
      "Atomicidad, Consistencia, Integridad, Durabilidad",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué componente interpreta y ejecuta las consultas del usuario?",
    options: [
      "Motor de Evaluación de Consultas",
      "Gestor de Seguridad",
      "Procesador de Consultas",
      "Interfaz de Usuario",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál es el propósito principal del Diccionario de Datos?",
    options: [
      "Almacenar datos del usuario",
      "Proporcionar metadatos sobre la estructura de la base de datos",
      "Gestionar la seguridad de los datos",
      "Optimizar la recuperación de datos",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es una de las funciones de un SGBD?",
    options: ["Definición de datos", "Creación de gráficos", "Programación de aplicaciones", "Diseño de interfaces"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué componente proporciona la interfaz entre los datos de bajo nivel y los programas de aplicación?",
    options: ["Gestor de almacenamiento", "Procesador de Consultas", "Gestor de Seguridad", "Gestor de Transacciones"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué lenguaje se utiliza para gestionar permisos y control de acceso a la base de datos?",
    options: ["DML", "DCL", "DQL", "SDL"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es la función del Gestor de Transacciones?",
    options: [
      "Asegurar que las transacciones se realicen de manera segura",
      "Crear tablas en la base de datos",
      "Eliminar registros de la base de datos",
      "Optimizar consultas",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué comando se utiliza para agregar nuevos registros a una tabla?",
    options: ["UPDATE", "INSERT", "DELETE", "SELECT"],
    correctAnswer: 1,
  },
  {
    question:
      "¿Cuál es el propósito principal del Lenguaje de Definición de Datos (DDL) en un Sistema de Gestión de Bases de Datos (SGBD)?",
    options: [
      "Manipular datos existentes",
      "Definir la estructura de la base de datos",
      "Consultar datos eficientemente",
      "Controlar el acceso y los permisos",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué componente de un SGBD es responsable de garantizar que las transacciones de la base de datos cumplan con las propiedades ACID?",
    options: ["Procesador de consultas", "Gestor de transacciones", "Gestor de almacenamiento", "Interfaz de usuario"],
    correctAnswer: 1,
  },
  {
    question: "En un SGBD, ¿a qué se refiere el término «metadatos»?",
    options: [
      "Los datos almacenados en tablas",
      "Datos sobre estructuras de datos y restricciones",
      "Permisos de usuario y niveles de acceso",
      "Índices creados para una recuperación de datos más rápida",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué lenguaje permite a un usuario gestionar los permisos de la base de datos dentro de un SGBD?",
    options: [
      "Lenguaje de Consulta de Datos (DQL)",
      "Lenguaje de Control de Datos (DCL)",
      "Lenguaje de Definición de Datos (DDL)",
      "Lenguaje de Manipulación de Datos (DML)",
    ],
    correctAnswer: 1,
  },
]

export default function BasesDatosUnidad1() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false))
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null))
  const [tfAnswers, setTfAnswers] = useState<string[]>([]) // For true/false question

  const handleAnswer = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return

    setSelectedAnswer(answerIndex)
    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQuestion] = answerIndex
    setUserAnswers(newUserAnswers)

    const newAnsweredQuestions = [...answeredQuestions]
    newAnsweredQuestions[currentQuestion] = true
    setAnsweredQuestions(newAnsweredQuestions)

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleTrueFalseAnswer = (index: number, value: string) => {
    const newAnswers = [...tfAnswers]
    newAnswers[index] = value
    setTfAnswers(newAnswers)
  }

  const submitTrueFalse = () => {
    if (tfAnswers.length !== 8 || answeredQuestions[0]) return

    const correctAnswers = questions[0].options
    let correct = 0
    tfAnswers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) correct++
    })

    const newAnsweredQuestions = [...answeredQuestions]
    newAnsweredQuestions[0] = true
    setAnsweredQuestions(newAnsweredQuestions)

    if (correct === 8) {
      setScore(score + 1)
      setSelectedAnswer(0)
    } else {
      setSelectedAnswer(-1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(userAnswers[currentQuestion + 1])
      if (currentQuestion + 1 === 0) {
        // Reset TF answers when going back to first question
        setTfAnswers([])
      }
    } else {
      setShowResult(true)
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(userAnswers[currentQuestion - 1])
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions(new Array(questions.length).fill(false))
    setUserAnswers(new Array(questions.length).fill(null))
    setTfAnswers([])
  }

  if (showResult) {
    const percentage = ((score / questions.length) * 100).toFixed(1)
    return (
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Resultados del Simulacro</h2>
              <div className="text-6xl font-bold text-blue-600">{percentage}%</div>
              <p className="text-xl text-muted-foreground">
                Has acertado {score} de {questions.length} preguntas
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button onClick={resetQuiz} size="lg" className="bg-blue-600 hover:bg-blue-700">
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
      </div>
    )
  }

  const question = questions[currentQuestion]
  const isAnswered = answeredQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-medium text-blue-600">
              {answeredQuestions.filter((a) => a).length} respondidas
            </span>
          </div>
        </div>

        <Card className="p-6 md:p-8 bg-card border-border">
          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground flex-1">{question.question}</h2>
              <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {score}/{questions.length}
              </div>
            </div>

            {question.type === "truefalse" ? (
              <div className="space-y-4">
                {question.statements?.map((statement, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/30 space-y-2">
                    <p className="text-sm text-foreground">{statement}</p>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleTrueFalseAnswer(index, "VERDADERO")}
                        disabled={isAnswered}
                        variant={tfAnswers[index] === "VERDADERO" ? "default" : "outline"}
                        size="sm"
                        className={
                          isAnswered && question.options[index] === "VERDADERO"
                            ? "bg-green-500 hover:bg-green-600"
                            : isAnswered && tfAnswers[index] === "VERDADERO" && question.options[index] === "FALSO"
                              ? "bg-red-500 hover:bg-red-600"
                              : ""
                        }
                      >
                        Verdadero
                      </Button>
                      <Button
                        onClick={() => handleTrueFalseAnswer(index, "FALSO")}
                        disabled={isAnswered}
                        variant={tfAnswers[index] === "FALSO" ? "default" : "outline"}
                        size="sm"
                        className={
                          isAnswered && question.options[index] === "FALSO"
                            ? "bg-green-500 hover:bg-green-600"
                            : isAnswered && tfAnswers[index] === "FALSO" && question.options[index] === "VERDADERO"
                              ? "bg-red-500 hover:bg-red-600"
                              : ""
                        }
                      >
                        Falso
                      </Button>
                    </div>
                  </div>
                ))}
                {!isAnswered && (
                  <Button
                    onClick={submitTrueFalse}
                    disabled={tfAnswers.length !== 8 || answeredQuestions[0]}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Comprobar
                  </Button>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index
                  const isCorrect = index === question.correctAnswer
                  const showCorrect = isAnswered && isCorrect
                  const showIncorrect = isAnswered && isSelected && !isCorrect

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        showCorrect
                          ? "border-green-500 bg-green-500/10"
                          : showIncorrect
                            ? "border-red-500 bg-red-500/10"
                            : isSelected
                              ? "border-blue-600 bg-blue-600/10"
                              : "border-border hover:border-blue-600/50 bg-card"
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
            )}

            <div className="flex gap-3 pt-4">
              <Button
                onClick={previousQuestion}
                disabled={currentQuestion === 0}
                variant="outline"
                className="flex-1 bg-transparent"
              >
                Anterior
              </Button>
              <Button onClick={nextQuestion} disabled={!isAnswered} className="flex-1 bg-blue-600 hover:bg-blue-700">
                {currentQuestion === questions.length - 1 ? "Ver Resultados" : "Siguiente"}
              </Button>
            </div>
          </div>
        </Card>

        <div className="w-full bg-muted rounded-full h-2 mt-4">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
