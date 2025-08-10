import Image from "next/image"
import { ArrowLeft, Clock, Users, Award, CheckCircle, Globe, MapPin } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Formation } from "@/lib/formation-data"

interface FormationDetailsProps {
  formation: Formation
}

export function FormationDetails({ formation }: FormationDetailsProps) {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Bouton de retour */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/formations">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux formations
            </Link>
          </Button>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{formation.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{formation.detailedDescription}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-sm">Durée: {formation.duree}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-sm">{formation.participants} participants max</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600" />
                <span className="text-sm">Niveau: {formation.niveau}</span>
              </div>
              
            </div>

          </div>

          <div className="relative">
            <Image 
              width={800}
              height={500}
              src={formation.image || "/placeholder.svg"} 
              alt={formation.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
              {formation.niveau}
            </Badge>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="options" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="debouches">Débouchés</TabsTrigger>
            <TabsTrigger value="prerequis">Prérequis</TabsTrigger>
            <TabsTrigger value="certification">Certification</TabsTrigger>
          </TabsList>

          <TabsContent value="debouches" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Débouchés au Cameroun
                  </CardTitle>
                  <CardDescription>
                    Opportunités d&apos;emploi et d&apos;entrepreneuriat sur le marché national
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {formation.debouchesNational.map((debouche, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{debouche}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    Débouchés Internationaux
                  </CardTitle>
                  <CardDescription>
                    Opportunités sur les marchés régionaux et internationaux
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {formation.debouchesInternational.map((debouche, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{debouche}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="prerequis" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Conditions d&apos;admission</CardTitle>
                <CardDescription>
                  Prérequis nécessaires pour intégrer cette formation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {formation.prerequisites.map((prerequis, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{prerequis}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Méthodologie pédagogique</h4>
                  <p className="text-gray-700">{formation.methodology}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certification" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Certification et reconnaissance</CardTitle>
                <CardDescription>
                  Diplômes et certifications délivrés à l&apos;issue de la formation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Certification principale</h4>
                      <p className="text-gray-700">{formation.certification}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Reconnaissance nationale</h5>
                      <p className="text-sm text-gray-600">
                        Certificats reconnus par le MINEFOP et les entreprises camerounaises
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Reconnaissance internationale</h5>
                      <p className="text-sm text-gray-600">
                        Formations alignées sur les standards internationaux du secteur
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer cette formation ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Rejoignez-nous et développez vos compétences avec les meilleurs formateurs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">S&apos;inscrire maintenant</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
