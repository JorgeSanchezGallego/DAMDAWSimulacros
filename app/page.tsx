import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { BookOpen, Code, Database, Hammer, Server, Terminal } from 'lucide-react'

const subjects = [
  {
    id: 'lenguaje-marcas',
    title: 'Lenguaje de Marcas',
    description: 'HTML, CSS y fundamentos del desarrollo web',
    icon: Code,
    available: true, // Already available
  },
  {
    id: 'programacion',
    title: 'Programación',
    description: 'Conceptos de programación y algoritmos',
    icon: Terminal,
    available: true, // Set to available
  },
  {
    id: 'entornos-desarrollo',
    title: 'Entornos de Desarrollo',
    description: 'IDEs, control de versiones y herramientas',
    icon: Hammer,
    available: false,
  },
  {
    id: 'bases-datos',
    title: 'Bases de Datos',
    description: 'SQL, diseño y gestión de bases de datos',
    icon: Database,
    available: false,
  },
  {
    id: 'python',
    title: 'Python',
    description: 'Programación en Python y sus librerías',
    icon: BookOpen,
    available: false,
  },
  {
    id: 'sistemas-informaticos',
    title: 'Sistemas Informáticos',
    description: 'Sistemas operativos y arquitectura',
    icon: Server,
    available: true, // Set to available
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
            Pon a prueba tus conocimientos con exámenes interactivos de todas las asignaturas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => {
            const Icon = subject.icon
            const content = (
              <Card className="h-full p-6 bg-card border-border hover:border-blue-500 transition-all group">
                <div className="flex flex-col h-full space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    {!subject.available && (
                      <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        Próximamente
                      </span>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {subject.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {subject.description}
                    </p>
                  </div>

                  {subject.available && (
                    <div className="pt-2">
                      <span className="text-blue-500 font-semibold group-hover:underline">
                        Iniciar examen →
                      </span>
                    </div>
                  )}
                </div>
              </Card>
            )

            if (subject.available) {
              return (
                <Link key={subject.id} href={`/quiz/${subject.id}`}>
                  {content}
                </Link>
              )
            }

            return (
              <div key={subject.id} className="cursor-not-allowed opacity-60">
                {content}
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-card border-border">
            <p className="text-sm text-muted-foreground">
              Más asignaturas y contenido se añadirán próximamente
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
