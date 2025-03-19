import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  BugOff,
  CheckCircle,
  Code,
  FileCode,
  GraduationCap,
  Linkedin,
  Mail,
  PlayCircle,
  Workflow,
} from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            QA<span className="text-primary">Engineer</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary transition-colors">
              Education
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#certifications" className="text-sm font-medium hover:text-primary transition-colors">
              Certifications
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button asChild size="sm">
              <Link href="#contact">Hire Me</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1" id="portfolio-content">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="space-y-4 max-w-3xl">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">José Negrão</h1>
                    <h2 className="text-xl font-medium text-muted-foreground sm:text-3xl mt-4">
                      Quality Assurance Engineer
                    </h2>
                    <p className="mx-auto text-muted-foreground md:text-xl max-w-2xl">
                      Quality Assurance Engineer with 10+ years of experience in test automation, API testing, and
                      software quality improvement. Passionate about optimizing testing processes to enhance product
                      reliability in e-commerce and fintech sectors.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <a href="#contact">
                        Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild size="lg" className="w-full sm:w-auto">
                      <a href="#experience">View Experience</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Based in Porto, Portugal with a passion for quality assurance and test automation
                  </p>
                </div>
                <div className="mx-auto max-w-[700px] space-y-4 text-left">
                  <p>
                    I'm a dedicated Quality Assurance Engineer with over 10 years of experience in ensuring software
                    quality across e-commerce and fintech sectors. My expertise spans test automation, API testing, and
                    implementing robust QA processes.
                  </p>
                  <p>
                    With a background in Information Systems and certifications in testing, I've helped numerous
                    companies deliver high-quality software products. I believe in a proactive approach to quality
                    assurance, focusing on preventing issues rather than just finding them.
                  </p>
                  <p>
                    I'm fluent in English (C1 Advanced) and Portuguese (Native), which allows me to communicate
                    effectively with international teams and clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    My technical toolkit and areas of expertise
                  </p>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="flex flex-col items-center space-y-4 p-6">
                      <BugOff className="h-12 w-12 text-primary" />
                      <div className="space-y-2 text-center">
                        <h3 className="font-bold">Manual Testing</h3>
                        <p className="text-sm text-muted-foreground">
                          Exploratory testing, regression testing, black-box and white-box testing, and test case
                          design.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center space-y-4 p-6">
                      <Code className="h-12 w-12 text-primary" />
                      <div className="space-y-2 text-center">
                        <h3 className="font-bold">Test Automation</h3>
                        <p className="text-sm text-muted-foreground">
                          Cypress, Playwright, Vitest, Gherkin, and custom automation frameworks using JavaScript.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center space-y-4 p-6">
                      <Workflow className="h-12 w-12 text-primary" />
                      <div className="space-y-2 text-center">
                        <h3 className="font-bold">API Testing</h3>
                        <p className="text-sm text-muted-foreground">
                          Manual and automated API testing, integration testing.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center space-y-4 p-6">
                      <PlayCircle className="h-12 w-12 text-primary" />
                      <div className="space-y-2 text-center">
                        <h3 className="font-bold">Programming</h3>
                        <p className="text-sm text-muted-foreground">
                          JavaScript, Java, C#, and test automation scripting.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center space-y-4 p-6">
                      <FileCode className="h-12 w-12 text-primary" />
                      <div className="space-y-2 text-center">
                        <h3 className="font-bold">Bug Management</h3>
                        <p className="text-sm text-muted-foreground">
                          Bug reporting, tracking, and verification using Jira, Mantis, and HP ALM Quality Center.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center space-y-4 p-6">
                      <CheckCircle className="h-12 w-12 text-primary" />
                      <div className="space-y-2 text-center">
                        <h3 className="font-bold">Team Management</h3>
                        <p className="text-sm text-muted-foreground">Team leadership and client communication.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex flex-wrap justify-center gap-2 pt-8">
                  <Badge className="px-3 py-1">Cypress</Badge>
                  <Badge className="px-3 py-1">Playwright</Badge>
                  <Badge className="px-3 py-1">Vitest</Badge>
                  <Badge className="px-3 py-1">Gherkin</Badge>
                  <Badge className="px-3 py-1">JavaScript</Badge>
                  <Badge className="px-3 py-1">Java</Badge>
                  <Badge className="px-3 py-1">C#</Badge>
                  <Badge className="px-3 py-1">API Testing</Badge>
                  <Badge className="px-3 py-1">GitHub</Badge>
                  <Badge className="px-3 py-1">Jira</Badge>
                  <Badge className="px-3 py-1">Mantis</Badge>
                  <Badge className="px-3 py-1">HP ALM</Badge>
                  <Badge className="px-3 py-1">Black-box Testing</Badge>
                  <Badge className="px-3 py-1">White-box Testing</Badge>
                  <Badge className="px-3 py-1">Regression Testing</Badge>
                  <Badge className="px-3 py-1">Performance Testing</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">My academic background</p>
                </div>
                <div className="mx-auto w-full max-w-3xl space-y-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Card className="overflow-hidden">
                      <div className="bg-primary p-4">
                        <GraduationCap className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold">Bachelor's Degree in Information Systems</h3>
                          <p className="text-muted-foreground">
                            Federal University of Bahia (UFBA) | Graduated 03/2019
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden">
                      <div className="bg-primary p-4">
                        <GraduationCap className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold">Technical Course in Information Technology</h3>
                          <p className="text-muted-foreground">Federal Institute of Bahia (IFBA) | 2008-2011</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Professional certifications in testing and quality assurance
                  </p>
                </div>
                <div className="mx-auto w-full max-w-3xl space-y-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <h3 className="font-bold">CTFL (Certified Tester Foundation Level)</h3>
                          <p className="text-muted-foreground">BSTQB nº 15-CTFL-04277-BR</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <h3 className="font-bold">CTAL (Certified Tester Test Automation Engineer)</h3>
                          <p className="text-muted-foreground">ISTQB nº 19-CTAL-TAE-00829-BR</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    My professional journey in quality assurance
                  </p>
                </div>
                <div className="mx-auto w-full max-w-3xl space-y-8">
                  <div className="relative pl-8 border-l-2 border-muted-foreground/20">
                    <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Quality Assurance Engineer</h3>
                      <p className="text-muted-foreground">Mindera | 11/2019 - Present</p>
                      <p className="text-sm font-medium">Key Projects: Harrods, Farfetch, 2K</p>
                      <ul className="list-disc pl-5 space-y-2 text-left">
                        <li>Writing and executing black-box and white-box tests</li>
                        <li>Performing API testing (manual and automated)</li>
                        <li>Creating exploratory, regression, acceptance, integration, and performance tests</li>
                        <li>Bug reporting and tracking</li>
                        <li>Developing and maintaining automated tests (frontend and backend)</li>
                        <li>Team management</li>
                        <li>Client communication and follow-ups</li>
                      </ul>
                      <p className="text-sm font-medium pt-2">
                        Tools Used: Cypress, Playwright, JavaScript, TypeScript, Jira
                      </p>
                    </div>
                  </div>
                  <div className="relative pl-8 border-l-2 border-muted-foreground/20">
                    <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Quality Analyst</h3>
                      <p className="text-muted-foreground">WEX | 09/2019 - 10/2019</p>
                      <ul className="list-disc pl-5 space-y-2 text-left">
                        <li>Executing black-box tests</li>
                        <li>Conducting exploratory and regression testing</li>
                        <li>Bug reporting</li>
                        <li>Creating manual and automated tests</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative pl-8 border-l-2 border-muted-foreground/20">
                    <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Quality Analyst</h3>
                      <p className="text-muted-foreground">
                        BRISA – Sociedade para o Desenvolvimento da Tecnologia da Informação | 08/2014 - 08/2019
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-left">
                        <li>Executing black-box tests on mobile devices (smartphones and wearables)</li>
                        <li>
                          Performing manual tests, including exploratory, regression, confirmation, and performance
                          tests
                        </li>
                        <li>Bug reporting and tracking</li>
                      </ul>
                      <p className="text-sm font-medium pt-2">Tools Used: Mantis, HP ALM Quality Center</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section id="languages" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Languages</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">Communication skills</p>
                </div>
                <div className="mx-auto w-full max-w-3xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <h3 className="font-bold">English</h3>
                          <Badge>C1 (Advanced)</Badge>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <h3 className="font-bold">Portuguese</h3>
                          <Badge>Native</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Let's discuss how I can help ensure quality in your software projects
                  </p>
                </div>
                <div className="mx-auto w-full max-w-3xl">
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Button asChild className="flex-1" size="lg">
                      <Link href="mailto:joseolimpionegrao@gmail.com">
                        <Mail className="mr-2 h-6 w-6" /> Email Me
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="flex-1" size="lg">
                      <Link href="tel:+351910928570">
                        <span role="img" aria-label="phone" className="mr-2 text-xl">
                          📱
                        </span>{" "}
                        +351 910 928 570
                      </Link>
                    </Button>
                    <Button variant="secondary" asChild className="flex-1" size="lg">
                      <Link
                        href="https://www.linkedin.com/in/jos%C3%A9-negr%C3%A3o-ctfl-ctal-tae-658074126/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="mr-2 h-6 w-6" /> LinkedIn
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} José Olimpio Mouzinho Negrão. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Porto, Portugal</p>
        </div>
      </footer>
    </div>
  )
}

