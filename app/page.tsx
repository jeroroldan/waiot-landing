import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Truck, Leaf, DollarSign, Clock, Star, ArrowRight, Zap, Smartphone } from "lucide-react"

export default function WasteLogisticsLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-800">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="/waiot-logo.jpg" alt="waiot logo" className="h-10 w-auto" />
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">
                Características
              </a>
              <a href="#benefits" className="text-slate-300 hover:text-white transition-colors">
                Beneficios
              </a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                Nosotros
              </a>
              <a href="#blog" className="text-slate-300 hover:text-white transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                Contacto
              </a>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 text-white">Demo Gratis</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-red-500/20 text-red-300 border-red-500/30">
              Tecnología Inteligente de Gestión de Residuos
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Transforma tu Recolección de Residuos con
              <span className="text-red-400"> waiot</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 text-pretty max-w-3xl mx-auto">
              Reduce costos en un 30%, optimiza rutas en tiempo real y toma decisiones basadas en datos con nuestros
              sensores IoT integrados y plataforma logística impulsada por IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
                Solicitar Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              >
                Ver Video
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">30%</div>
                <div className="text-slate-300">Reducción de Costos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-slate-300">Ciudades Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">25%</div>
                <div className="text-slate-300">Ahorro de Combustible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-slate-800/50" id="features">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                  El Desafío: <span className="text-red-400">Recolección Ineficiente de Residuos</span>
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-300">
                      Los camiones recolectan de contenedores vacíos, desperdiciando combustible y tiempo
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-300">Sin visibilidad en tiempo real del estado de recolección</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-300">La planificación manual de rutas genera trayectos ineficientes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-300">Mayores costos operativos e impacto ambiental</p>
                  </div>
                </div>
              </div>
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                  Nuestra Solución: <span className="text-green-400">Sistema de Recolección Inteligente</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">Sensores IoT monitorean niveles de llenado en tiempo real</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">Optimización de rutas impulsada por IA reduce tiempo de viaje</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">Análisis predictivo previene incidentes de desbordamiento</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">Panel integral para decisiones basadas en datos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                Solución Completa de Hardware y Software
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto text-pretty">
                Nuestra plataforma integrada combina hardware IoT de vanguardia con software inteligente para
                revolucionar las operaciones de gestión de residuos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-red-500/20 rounded-lg">
                      <Zap className="w-6 h-6 text-red-400" />
                    </div>
                    <CardTitle className="text-white">Hardware Inteligente</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Sensores Ultrasónicos de Llenado</h4>
                      <p className="text-slate-400 text-sm">
                        Monitoreo preciso del nivel de llenado con 99% de precisión
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Conectividad de Largo Alcance</h4>
                      <p className="text-slate-400 text-sm">Opciones de conectividad LoRaWAN y celular</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Diseño Resistente al Clima</h4>
                      <p className="text-slate-400 text-sm">Clasificación IP67 para todas las condiciones climáticas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Batería de 5 Años</h4>
                      <p className="text-slate-400 text-sm">Diseño de bajo consumo con mantenimiento mínimo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">Software Inteligente</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Panel en Tiempo Real</h4>
                      <p className="text-slate-400 text-sm">Monitoreo en vivo de todos los puntos de recolección</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Optimización de Rutas con IA</h4>
                      <p className="text-slate-400 text-sm">
                        Enrutamiento dinámico basado en niveles de llenado y tráfico
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Análisis Predictivo</h4>
                      <p className="text-slate-400 text-sm">
                        Pronostica necesidades de recolección y previene desbordamientos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Aplicaciones Móviles</h4>
                      <p className="text-slate-400 text-sm">
                        Apps para conductores y gerentes para operaciones de campo
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50" id="benefits">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                Impacto Empresarial Medible
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto text-pretty">
                Nuestros clientes ven mejoras inmediatas en eficiencia, ahorro de costos e impacto ambiental.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-green-700/50">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 bg-green-500/20 rounded-full w-fit mb-4">
                    <Leaf className="w-8 h-8 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Impacto Ambiental</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">25%</div>
                    <div className="text-slate-300 text-sm">Reducción en consumo de combustible</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">40%</div>
                    <div className="text-slate-300 text-sm">Menores emisiones de CO2</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">60%</div>
                    <div className="text-slate-300 text-sm">Menos viajes innecesarios</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-red-700/50">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 bg-red-500/20 rounded-full w-fit mb-4">
                    <DollarSign className="w-8 h-8 text-red-400" />
                  </div>
                  <CardTitle className="text-white">Ahorro de Costos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">30%</div>
                    <div className="text-slate-300 text-sm">Reducción de costos operativos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">$50K</div>
                    <div className="text-slate-300 text-sm">Ahorro anual promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">6 meses</div>
                    <div className="text-slate-300 text-sm">Recuperación típica de ROI</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 bg-white/20 rounded-full w-fit mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white">Eficiencia Operacional</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">45%</div>
                    <div className="text-slate-300 text-sm">Finalización más rápida de rutas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">90%</div>
                    <div className="text-slate-300 text-sm">Reducción en incidentes de desbordamiento</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-slate-300 text-sm">Monitoreo en tiempo real</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                Confiado por Organizaciones Líderes
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto text-pretty">
                Descubre cómo nuestra tecnología está transformando las operaciones de gestión de residuos en ciudades y
                empresas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                      AM
                    </div>
                    <div>
                      <CardTitle className="text-white">Ayuntamiento Metro</CardTitle>
                      <CardDescription className="text-slate-400">Población: 500,000+</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-slate-300 mb-4">
                    "Desde la implementación del sistema inteligente de recolección de residuos, hemos reducido nuestros
                    costos operativos en un 35% y mejorado significativamente la satisfacción ciudadana. El monitoreo en
                    tiempo real ha eliminado completamente las quejas por desbordamiento."
                  </blockquote>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">35%</div>
                      <div className="text-xs text-slate-400">Reducción de Costos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-400">100%</div>
                      <div className="text-xs text-slate-400">Prevención de Desbordamientos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">2,500</div>
                      <div className="text-xs text-slate-400">Contenedores Monitoreados</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      RV
                    </div>
                    <div>
                      <CardTitle className="text-white">Residuos Verdes SA</CardTitle>
                      <CardDescription className="text-slate-400">Gestión de Residuos Comerciales</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-slate-300 mb-4">
                    "La optimización de rutas impulsada por IA ha transformado nuestras operaciones. Estamos atendiendo
                    40% más clientes con el mismo tamaño de flota, y nuestros conductores aman las mejoras de
                    eficiencia."
                  </blockquote>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">40%</div>
                      <div className="text-xs text-slate-400">Más Clientes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-400">28%</div>
                      <div className="text-xs text-slate-400">Ahorro de Combustible</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">150</div>
                      <div className="text-xs text-slate-400">Camiones Optimizados</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-slate-800/50" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">Sobre Nosotros</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto text-pretty">
                Somos pioneros en tecnología de gestión de residuos, comprometidos con crear ciudades más inteligentes y
                sostenibles.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-6 text-red-400">Nuestra Misión</h3>
                <p className="text-slate-300 mb-6 text-pretty">
                  Revolucionar la industria de gestión de residuos mediante tecnología IoT avanzada y análisis de datos
                  inteligentes. Creemos que cada ciudad merece un sistema de recolección eficiente, sostenible y basado
                  en datos.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">Más de 10 años de experiencia en tecnología IoT</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">Equipo de 50+ ingenieros especializados</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">Presencia en 15 países a nivel mundial</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-red-700/50 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-red-400 mb-2">500M+</div>
                    <div className="text-slate-300 text-sm">Toneladas de Residuos Optimizadas</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-green-700/50 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-green-400 mb-2">200+</div>
                    <div className="text-slate-300 text-sm">Ciudades Transformadas</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-white mb-2">1M+</div>
                    <div className="text-slate-300 text-sm">Sensores Desplegados</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-red-700/50 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                    <div className="text-slate-300 text-sm">Soporte Técnico</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What They Say About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">Qué Dicen de Nosotros</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto text-pretty">
                Las opiniones de nuestros clientes y socios hablan por sí solas sobre el impacto de nuestra tecnología.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-slate-300 mb-4 text-sm">
                    "La implementación fue perfecta y el soporte técnico es excepcional. Hemos visto mejoras inmediatas
                    en nuestras operaciones."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      MR
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">María Rodríguez</div>
                      <div className="text-slate-400 text-xs">Directora de Operaciones, EcoLimpia</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-slate-300 mb-4 text-sm">
                    "ROI increíble en menos de 6 meses. La tecnología es robusta y fácil de usar para nuestros equipos."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      CL
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">Carlos López</div>
                      <div className="text-slate-400 text-xs">Gerente General, Residuos del Norte</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-slate-300 mb-4 text-sm">
                    "Nuestros ciudadanos están más satisfechos que nunca. Cero quejas por desbordamientos desde la
                    implementación."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      AG
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">Ana García</div>
                      <div className="text-slate-400 text-xs">Alcaldesa, Ciudad Progreso</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">4.9/5</div>
                  <div className="text-slate-300 text-sm">Calificación Promedio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-slate-300 text-sm">Satisfacción del Cliente</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">150+</div>
                  <div className="text-slate-300 text-sm">Reseñas Positivas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">24h</div>
                  <div className="text-slate-300 text-sm">Tiempo de Respuesta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-slate-800/50" id="blog">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">Blog y Recursos</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto text-pretty">
                Mantente actualizado con las últimas tendencias en gestión de residuos, tecnología IoT y sostenibilidad
                urbana.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-red-500/50 transition-colors group">
                <div className="aspect-video bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-t-lg flex items-center justify-center">
                  <div className="text-red-400 text-4xl font-bold">IoT</div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-red-500/20 text-red-300 border-red-500/30 text-xs">Tecnología</Badge>
                    <span className="text-slate-400 text-xs">15 Dic 2024</span>
                  </div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-red-400 transition-colors">
                    El Futuro de los Sensores IoT en Gestión de Residuos
                  </h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Descubre cómo la próxima generación de sensores IoT está revolucionando la eficiencia en la
                    recolección de residuos urbanos.
                  </p>
                  <Button variant="ghost" className="text-red-400 hover:text-red-300 p-0 h-auto">
                    Leer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-red-500/50 transition-colors group">
                <div className="aspect-video bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-t-lg flex items-center justify-center">
                  <div className="text-green-400 text-4xl font-bold">♻️</div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">Sostenibilidad</Badge>
                    <span className="text-slate-400 text-xs">12 Dic 2024</span>
                  </div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-red-400 transition-colors">
                    Cómo Reducir la Huella de Carbono en Recolección
                  </h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Estrategias comprobadas para minimizar las emisiones de CO2 mientras optimizas las rutas de
                    recolección de residuos.
                  </p>
                  <Button variant="ghost" className="text-red-400 hover:text-red-300 p-0 h-auto">
                    Leer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-red-500/50 transition-colors group">
                <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-t-lg flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">📊</div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-white/20 text-white border-white/30 text-xs">Caso de Estudio</Badge>
                    <span className="text-slate-400 text-xs">10 Dic 2024</span>
                  </div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-red-400 transition-colors">
                    Caso de Éxito: Ciudad Barcelona Ahorra 40%
                  </h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Análisis detallado de cómo Barcelona implementó nuestra solución y logró ahorros operativos del 40%
                    en un año.
                  </p>
                  <Button variant="ghost" className="text-red-400 hover:text-red-300 p-0 h-auto">
                    Leer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-red-500 text-red-400 hover:bg-red-500/10 px-8 py-4 bg-transparent"
              >
                Ver Todos los Artículos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                ¿Listo para Transformar tu Recolección de Residuos?
              </h2>
              <p className="text-xl text-slate-300 text-pretty">
                Programa una demostración personalizada y descubre cómo nuestra tecnología puede optimizar tus
                operaciones.
              </p>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Nombre Completo *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Juan Pérez"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Correo Electrónico *</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="juan@empresa.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Organización</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Ayuntamiento / Empresa de Residuos"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Tamaño de Flota</label>
                      <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                        <option value="">Seleccionar tamaño de flota</option>
                        <option value="1-10">1-10 vehículos</option>
                        <option value="11-50">11-50 vehículos</option>
                        <option value="51-100">51-100 vehículos</option>
                        <option value="100+">100+ vehículos</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Cuéntanos sobre tus desafíos actuales
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Describe tus desafíos actuales de recolección de residuos y qué te gustaría mejorar..."
                    ></textarea>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg flex-1"
                    >
                      Programar Demo <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
                    >
                      Descargar Folleto
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-red-500/20 rounded-xl">
                <Truck className="w-8 h-8 text-red-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">waiot</div>
                <div className="text-sm text-slate-400">Smart Waste Solutions</div>
              </div>
            </div>
            <p className="text-slate-400 mb-6">
              Transformando la recolección de residuos con soluciones tecnológicas inteligentes.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Soporte de Contacto
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Documentación
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-700 text-slate-500 text-sm">
              © 2024 waiot. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
