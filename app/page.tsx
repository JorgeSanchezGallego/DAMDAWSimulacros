import Link from "next/link"
import { Card } from "@/components/ui/card"
import { BookOpen, Code, Database, Hammer, Server, Terminal, Briefcase } from "lucide-react"

const subjects = [
  {
    id: "lenguaje-marcas",
    title: "Lenguaje de Marcas",
    description: "HTML, CSS y fundamentos del desarrollo web",
    icon: Code,
    color: "bg-orange-500",
    hoverBorder: "hover:border-orange-500/50",
    simulacros: {
      junio: "/quiz/lenguaje-marcas",
      diciembreI: null,
      diciembreII: null,
    },
  },
  {
    id: "programacion",
    title: "Programación",
    description: "Conceptos de programación y algoritmos",
    icon: Terminal,
    color: "bg-purple-500",
    hoverBorder: "hover:border-purple-500/50",
    simulacros: {
      junio: "/quiz/programacion/junio",
      diciembreI: "/quiz/programacion/diciembre-1",
      diciembreII: null,
    },
  },
  {
    id: "entornos-desarrollo",
    title: "Entornos de Desarrollo",
    description: "IDEs, control de versiones y herramientas",
    icon: Hammer,
    color: "bg-red-500",
    hoverBorder: "hover:border-red-500/50",
    simulacros: {
      junio: "/quiz/entornos-desarrollo/junio",
      diciembreI: null,
      diciembreII: null,
    },
  },
  {
    id: "bases-datos",
    title: "Bases de Datos",
    description: "SQL, diseño y gestión de bases de datos",
    icon: Database,
    color: "bg-blue-600",
    hoverBorder: "hover:border-blue-600/50",
    simulacros: {
      junio: "/quiz/bases-datos/unidad-1",
      diciembreI: "/quiz/bases-datos/unidad-2",
      diciembreII: "/quiz/bases-datos/unidad-3",
    },
    customLabels: {
      junio: "U1: Sistemas de almacenamiento",
      diciembreI: "U2: Modelo E/R",
      diciembreII: "U3: Modelo Relacional y Normalización",
    },
    extraSimulacros: [
      { label: "U4: Introducción a SQL: DDL", link: "/quiz/bases-datos/unidad-4" },
      { label: "U5: Lenguaje SQL: DML", link: "/quiz/bases-datos/unidad-5" },
    ],
  },
  {
    id: "python",
    title: "Python",
    description: "Programación en Python y sus librerías",
    icon: BookOpen,
    color: "bg-green-500",
    hoverBorder: "hover:border-green-500/50",
    simulacros: {
      junio: "/quiz/python",
      diciembreI: null,
      diciembreII: null,
    },
  },
  {
    id: "sistemas-informaticos",
    title: "Sistemas Informáticos",
    description: "Sistemas operativos y arquitectura",
    icon: Server,
    color: "bg-blue-500",
    hoverBorder: "hover:border-blue-500/50",
    simulacros: {
      junio: "/quiz/sistemas-informaticos",
      diciembreI: null,
      diciembreII: null,
    },
    specialLabel: "Proyecto II",
  },
  {
    id: "ipe-1",
    title: "IPE I: Itinerario para la empleabilidad",
    description: "Desarrollo profesional y competencias laborales",
    icon: Briefcase,
    color: "bg-yellow-500",
    hoverBorder: "hover:border-yellow-500/50",
    simulacros: {
      junio: "/quiz/ipe-1/junio",
      diciembreI: null,
      diciembreII: null,
    },
    customLabels: {
      diciembreI: "Test Unidades 1-5",
    },
    extraSimulacros: [{ label: "Test Unidades 1-5", link: "/quiz/ipe-1/unidades-1-5" }],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-bold text-foreground">
            DAM/DAW <span className="text-blue-500">SIMULACROS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exámenes interactivos de todas las asignaturas | 1er curso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => {
            const Icon = subject.icon
            const hasAnySimulacro = Object.values(subject.simulacros).some((link) => link !== null)

            return (
              <Card
                key={subject.id}
                className={`h-full p-6 bg-card border-border ${subject.hoverBorder} transition-all`}
              >
                <div className="flex flex-col h-full space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${subject.color} text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {!hasAnySimulacro && (
                      <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        Próximamente
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{subject.title}</h3>
                    <p className="text-sm text-muted-foreground">{subject.description}</p>
                  </div>

                  <div className="pt-2 space-y-2 border-t border-border">
                    {/* Simulacro Junio */}
                    {subject.simulacros.junio ? (
                      <Link
                        href={subject.simulacros.junio}
                        className="block text-sm text-blue-500 hover:text-blue-400 hover:underline transition-colors"
                      >
                        →{" "}
                        {subject.customLabels?.junio ||
                          `Simulacro Junio${subject.specialLabel ? ` (${subject.specialLabel})` : ""}`}
                      </Link>
                    ) : (
                      <div className="text-sm text-muted-foreground/50">
                        → {subject.customLabels?.junio || "Simulacro Junio"}: Próximamente
                      </div>
                    )}

                    {/* Simulacro Diciembre I */}
                    {subject.simulacros.diciembreI ? (
                      <Link
                        href={subject.simulacros.diciembreI}
                        className="block text-sm text-blue-500 hover:text-blue-400 hover:underline transition-colors"
                      >
                        →{" "}
                        {subject.customLabels?.diciembreI ||
                          `Simulacro Diciembre I${subject.specialLabel ? ` (${subject.specialLabel})` : ""}`}
                      </Link>
                    ) : (
                      <div className="text-sm text-muted-foreground/50">
                        → {subject.customLabels?.diciembreI || "Simulacro Diciembre I"}: Próximamente
                      </div>
                    )}

                    {/* Simulacro Diciembre II */}
                    {subject.simulacros.diciembreII ? (
                      <Link
                        href={subject.simulacros.diciembreII}
                        className="block text-sm text-blue-500 hover:text-blue-400 hover:underline transition-colors"
                      >
                        → {subject.customLabels?.diciembreII || "Simulacro Diciembre II"}
                      </Link>
                    ) : (
                      <div className="text-sm text-muted-foreground/50">
                        → {subject.customLabels?.diciembreII || "Simulacro Diciembre II"}: Próximamente
                      </div>
                    )}

                    {/* Extra Simulacros */}
                    {subject.extraSimulacros &&
                      subject.extraSimulacros.map((extraSimulacro, index) => (
                        <Link
                          key={index}
                          href={extraSimulacro.link}
                          className="block text-sm text-blue-500 hover:text-blue-400 hover:underline transition-colors"
                        >
                          → {extraSimulacro.label}
                        </Link>
                      ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-card border-border">
            <p className="text-sm text-muted-foreground">Más simulacros se añadirán próximamente</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
