import { Clock, Users, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function FormationsPage() {
  const formations = [
    {
      slug: "informatique-bureautique",
      title: "Informatique et Bureautique",
      description: "Formation complète aux métiers de l'informatique et de la bureautique moderne",
      duree: "6-12 mois",
      niveau: "Débutant à Confirmé",
      participants: "10 max",
      image: "/computer-training-cfpm.jpg",
      skills: ["Maintenance réseaux", "Développement d'applications", "Webmaster", "Comptabilité", "Graphisme"],
    },
    {
      slug: "langues-etrangeres",
      title: "Langues Étrangères",
      description: "Formation multilingue axée sur la communication professionnelle internationale",
      duree: "6-12 mois",
      niveau: "Débutant à Avancé",
      participants: "20 max",
      image: "/languages-training-cfpm.jpg",
      skills: ["Anglais", "Français", "Espagnol", "Allemand"],
    },
    {
      slug: "management-entrepreneuriat",
      title: "Management et Entrepreneuriat",
      description: "Formation aux métiers du management moderne et à l'entrepreneuriat innovant",
      duree: "6-12 mois",
      niveau: "Intermédiaire à Avancé",
      participants: "10 max",
      image: "/management-training-cfpm.jpg",
      skills: ["Marketing digital", "Gestion projets", "Communication", "Entrepreneuriat"],
    },
    {
      slug: "agribusiness",
      title: "Agribusiness",
      description: "Formation à l'agriculture moderne et à l'entrepreneuriat agricole sur sites réels",
      duree: "6-12 mois",
      niveau: "Débutant à Confirmé",
      participants: "10 max",
      image: "/agribusiness-training-cfpm.jpg",
      skills: ["Production animale", "Production végétale", "Transformation", "Entrepreneuriat agricole"],
    },
    {
      slug: "btp",
      title: "BTP - Bâtiment et Travaux Publics",
      description: "Formation aux métiers du bâtiment et des travaux publics, secteur en pleine expansion",
      duree: "8-15 mois",
      niveau: "Débutant à Confirmé",
      participants: "10 max",
      image: "/btp-training-cfpm.jpg",
      skills: ["Maçonnerie", "Plomberie", "Électricité", "Carrelage", "Peinture"],
    },
    {
      slug: "esthetique-technique",
      title: "Esthétique et Technique",
      description: "Formation aux métiers de l'esthétique, de la beauté et de la maintenance technique",
      duree: "6-12 mois",
      niveau: "Débutant à Confirmé",
      participants: "20 max",
      image: "/beauty-tech-training-cfpm.jpg",
      skills: ["Esthétique et cosmétique", "Coiffure professionnelle", "Stylisme et modélisme", "Maintenance électronique", "Froid et climatisation"],
    }, 
  ]

  return (
    <div className="py-16">
        <div className="container mx-auto px-4">
        
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Formations</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Découvrez notre catalogue de formations professionnelles conçues pour répondre aux besoins du marché du
                    travail
                </p>
            </div>

            {/* Liste des formations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {formations.map((formation) => (
                    <Card key={formation.slug} className="hover:shadow-lg transition-shadow">
                    <div className="relative">
                        <Image
                        width={600}
                        height={400}
                        src={formation.image || "/placeholder.svg"}
                        alt={formation.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <Badge className="absolute top-4 right-4 bg-blue-600">{formation.niveau}</Badge>
                    </div>

                <CardHeader>
                    <CardTitle className="text-xl">{formation.title}</CardTitle>
                    <CardDescription>{formation.description}</CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>Durée: {formation.duree}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="h-4 w-4" />
                            <span>{formation.participants} participants</span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h4 className="font-semibold mb-2">Compétences acquises:</h4>
                        <div className="flex flex-wrap gap-1">
                            {formation.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                                {skill}
                            </Badge>
                            ))}
                        </div>
                    </div>

                    <Button asChild className="w-full">
                    <Link href={`/formations/${formation.slug}`}>En savoir plus</Link>
                    </Button>
                </CardContent>
                </Card>
            ))}
            </div>

            {/* Section informations */}
            <section className="mt-16 bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Informations pratiques</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                        <p className="text-gray-600">
                            Toutes nos formations sont certifiantes et reconnues par les professionnels du secteur
                        </p>
                    </div>

                    <div className="text-center">
                        <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Accompagnement</h3>
                        <p className="text-gray-600">Suivi personnalisé et aide à la recherche d&apos;emploi ou de stage</p>
                    </div>

                    <div className="text-center">
                        <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Flexibilité</h3>
                        <p className="text-gray-600">Formations adaptées aux contraintes professionnelles et personnelles</p>
                    </div>
                </div>
            </section>
      </div>
    </div>
  )
}
