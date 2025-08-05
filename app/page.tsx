"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">Portfolio</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              Sobre mí
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Proyectos
            </Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80">
              Habilidades
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contacto
            </Link>
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container py-24 md:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative">
              <Image
                src="/avatar.png?height=150&width=150"
                alt="Foto de perfil"
                width={150}
                height={150}
                className="rounded-full border-4 border-accent-400/30"
                priority
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hola, soy{" "}
                <span className="bg-gradient-to-r from-accent-400 to-secondary-300 bg-clip-text text-transparent">
                  Alex Desarrollador
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Desarrollador Full Stack especializado en crear experiencias web modernas y escalables. Apasionado por
                la tecnología y el código limpio.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white" asChild>
                <Link href="#projects">Ver mis proyectos</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent-400 text-accent-300 hover:bg-accent-900/20 bg-transparent"
                asChild
              >
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contactar
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Sobre mí</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy un desarrollador Full Stack con más de 3 años de experiencia creando aplicaciones web y móviles. Me
                especializo en tecnologías modernas como React, Next.js, Node.js y bases de datos tanto SQL como NoSQL.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Mi enfoque se centra en escribir código limpio, mantenible y escalable. Disfruto trabajando en equipo y
                siempre estoy buscando aprender nuevas tecnologías para mejorar mis habilidades y entregar mejores
                soluciones.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-24 bg-secondary-50/50 dark:bg-primary-900/20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">Proyectos destacados</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/avatar.png?height=200&width=400"
                    alt="E-commerce Platform"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2">E-commerce Platform</CardTitle>
                  <CardDescription className="mb-4">
                    Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de
                    administración.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-secondary-200 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-200 hover:bg-secondary-300 dark:hover:bg-secondary-700">
                      Next.js
                    </Badge>
                    <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200">TypeScript</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                    <Badge>PostgreSQL</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="#" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="#" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">Habilidades técnicas</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 mx-auto mb-4 text-accent-500" />
                  <CardTitle>Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-accent-100 text-accent-800 hover:bg-accent-200">React</Badge>
                    <Badge className="bg-secondary-200 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-200 hover:bg-secondary-300 dark:hover:bg-secondary-700">
                      Next.js
                    </Badge>
                    <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200">TypeScript</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>HTML5</Badge>
                    <Badge>CSS3</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Code className="h-12 w-12 mx-auto mb-4 text-accent-500" />
                  <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Node.js</Badge>
                    <Badge>Express</Badge>
                    <Badge>Python</Badge>
                    <Badge>FastAPI</Badge>
                    <Badge>REST APIs</Badge>
                    <Badge>GraphQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Database className="h-12 w-12 mx-auto mb-4 text-accent-500" />
                  <CardTitle>Bases de datos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>PostgreSQL</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>MySQL</Badge>
                    <Badge>Redis</Badge>
                    <Badge>Supabase</Badge>
                    <Badge>Prisma</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Smartphone className="h-12 w-12 mx-auto mb-4 text-accent-500" />
                  <CardTitle>Móvil & Otros</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React Native</Badge>
                    <Badge>Expo</Badge>
                    <Badge>Docker</Badge>
                    <Badge>AWS</Badge>
                    <Badge>Git</Badge>
                    <Badge>Vercel</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-24 bg-primary-50/30 dark:bg-secondary-900/20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-8">¿Trabajamos juntos?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. Si tienes una idea o necesitas
              ayuda con tu proyecto, ¡hablemos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="mailto:alex@ejemplo.com">
                  <Mail className="mr-2 h-4 w-4" />
                  alex@ejemplo.com
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="h-5 w-5" />
              <span className="font-semibold">Alex Desarrollador</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Todos los derechos reservados. Hecho con ❤️ y Next.js</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
