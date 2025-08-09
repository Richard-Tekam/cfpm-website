import { Users, Target, Award, Heart } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AProposPage() {
  const valeurs = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description:
        "Nous visons l'excellence dans tous nos programmes de formation pour garantir l'employabilité de nos diplômés.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Learning by Doing",
      description: "Notre pédagogie innovante privilégie la pratique et l'apprentissage par l'action.",
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Reconnaissance",
      description: "Formations agréées par le MINEFOP et reconnues par les professionnels du secteur.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Engagement Social",
      description: "Contribuer à l'insertion socioprofessionnelle des jeunes camerounais.",
    },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">À propos du CFP-M</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Depuis 2022, le Centre de Formation Professionnelle aux Métiers accompagne les jeunes camerounais 
                vers l&apos;excellence professionnelle et l&apos;insertion durable sur le marché de l&apos;emploi.
            </p>
        </div>

        {/* Histoire */}
        <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Notre Histoire</h2>
                    <div className="space-y-4 text-gray-600 text-justify">
                        <p>
                            Le CFP-M a vu le jour en 2022 en réponse à une problématique socio-économique marquante au Cameroun : 
                            l&apos;insuffisance de professionnels qualifiés pour répondre aux exigences croissantes du marché du travail.
                        </p>
                        <p>
                            De 2022 à 2025, le centre portait la dénomination de Centre de Formation Professionnelle aux Métiers 
                            Informatiques, Linguistiques, Management et Agribusiness. En 2025, le centre a intégré le secteur 
                            du Bâtiment et Travaux Publics (BTP).
                        </p>
                        <p>
                            Officiellement agréé par le MINEFOP depuis le 18 juillet 2022, le CFP-M a conclu un partenariat 
                            stratégique avec le MINJEC le 13 mai 2024.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-8">
                    <div className="text-center mb-6">
                        <Image
                        height={40}
                        width={40}
                        src="/cfpm-logo.jpeg"
                        alt="Logo officiel CFP-M"
                        className="h-100 w-auto mx-auto mb-4"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Mission */}
        <section className="mb-16 bg-blue-50 rounded-lg p-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Notre Mission</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Former des professionnels compétents et opérationnels, capables de s&apos;adapter aux exigences 
                    du marché de l&apos;emploi, tout en favorisant l&apos;autonomisation économique des jeunes.
                </p>
            </div>
        </section>

        {/* Valeurs */}
        <section className="mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Nos Valeurs</h2>
                <p className="text-xl text-gray-600">Les principes qui guident notre action au quotidien</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {valeurs.map((valeur, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="flex justify-center mb-4">{valeur.icon}</div>
                        <CardTitle className="text-gray-500">{valeur.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-center text-gray-700">{valeur.description}</CardDescription>
                    </CardContent>
                </Card>
                ))}
            </div>
        </section>

        {/* Leadership */}
        <section className="mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Leadership</h2>
                <p className="text-xl text-gray-600">Un engagement constant pour la jeunesse camerounaise</p>
            </div>
            <Card className="max-w-4xl mx-auto">
                <CardHeader className="text-center">
                    <Image
                    height={80}
                    width={80} 
                    src="/directeur-cfpm.PNG" 
                    alt="Sénateur Gilbert FOUEPE NOUMEDEM" 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <CardTitle>Sénateur Gilbert FOUEPE NOUMEDEM</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Sénateur Jeune Gilbert FOUEPE NOUMEDEM
                        </h3>
                        <p className="text-blue-600 font-semibold mb-4">
                            Président du Conseil National de la Jeunesse du Cameroun
                        </p>
                        <p className="text-gray-600">
                            Initiateur et porteur du projet CFP-M, le Sénateur Gilbert FOUEPE NOUMEDEM 
                            est également Président du Conseil d&apos;Administration de l&apos;ACPEIE. Son engagement 
                            constant pour la jeunesse, l&apos;éducation inclusive et l&apos;entrepreneuriat positionne 
                            le CFP-M comme un levier puissant pour le développement humain et économique du Cameroun.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </section>

        {/* Partenaires */}
        <section>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Nos Partenaires</h2>
                <p className="text-xl text-gray-600">
                    Un réseau solide de partenaires nationaux et internationaux
                </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    <div className="text-center">
                        <Card className="max-w-xl mx-auto">
                            <CardHeader className="text-center">
                                <Image
                                height={10}
                                width={10} 
                                src="/logo-minefop.png" 
                                alt="logo du minefop" 
                                className="w-32 h-32 rounded-full mx-auto mb-2 object-cover"
                                />
                            </CardHeader>
                            <CardContent>
                                <h4 className="font-semibold text-sky-500">MINEFOP</h4>
                                <p className="text-sm text-gray-600">Ministère de l&apos;Emploi</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="text-center">
                        <Card className="max-w-xl mx-auto">
                            <CardHeader className="text-center">
                                <Image
                                height={10}
                                width={10} 
                                src="/logo-minjec.jpg" 
                                alt="logo du minefop" 
                                className="w-32 h-32 rounded-full mx-auto mb-2 object-cover"
                                />
                            </CardHeader>
                            <CardContent>
                                <h4 className="font-semibold text-sky-500">MINJEC</h4>
                                <p className="text-sm text-gray-600">Ministère de la Jeunesse</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="text-center">
                        <Card className="max-w-xl mx-auto">
                            <CardHeader className="text-center">
                                <Image
                                height={10}
                                width={10} 
                                src="/logo-acp.jpeg" 
                                alt="logo du minefop" 
                                className="w-32 h-32 rounded-full mx-auto mb-2 object-cover"
                                />
                            </CardHeader>
                            <CardContent>
                                <h4 className="font-semibold text-sky-500">ACPEIE</h4>
                                <p className="text-sm text-gray-600">Association Partenaire</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="text-center">
                        <Card className="max-w-xl mx-auto">
                            <CardHeader className="text-center">
                                <Image
                                height={10}
                                width={10} 
                                src="/logo-irex.jpeg" 
                                alt="logo de irex" 
                                className="w-32 h-32 rounded-full mx-auto mb-2 object-cover"
                                />
                            </CardHeader>
                            <CardContent>
                                <h4 className="font-semibold text-sky-500">IREX Canada</h4>
                                <p className="text-sm text-gray-600">Partenaire International</p>
                            </CardContent>
                        </Card>
                    </div>
                    
                </div>
            </div>
        </section>
      </div>
    </div>
  )
}
