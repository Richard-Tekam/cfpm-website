"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image";

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  const categories = ["Toutes", "Ateliers", "Formations", "Événements", "Équipements"]

  const images = [
    {
      id: 1,
      src: "/cfpm-propos.jpeg",
      title: "Semaine de la jeunesse",
      category: "Événements",
      description: "Nos jeunes celebre la fete de la jeunesse"
    },
    {
      id: 2,
      src: "/fevrier2.jpeg",
      title: "Semaine de la jeunesse",
      category: "Événements",
      description: "Nos jeunes participent au défilé"
    },
    {
      id: 3,
      src: "/cfpm-accueil.jpeg",
      title: "Semaine de la jeunesse",
      category: "Événements",
      description: ""
    },
    {
      id: 4,
      src: "/fevrier1.jpeg",
      title: "Semaine de la jeunesse",
      category: "Événements",
      description: ""
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      title: "Équipements Modernes",
      category: "Équipements",
      description: "Nos machines et outils de dernière génération"
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600",
      title: "Formation Plomberie",
      category: "Formations",
      description: "Installation et maintenance sanitaire"
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600",
      title: "Journée Portes Ouvertes",
      category: "Événements",
      description: "Visite de nos installations"
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=600",
      title: "Atelier Menuiserie",
      category: "Ateliers",
      description: "Travail du bois et assemblage"
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=600",
      title: "Formation Maçonnerie",
      category: "Formations",
      description: "Techniques de construction et rénovation"
    },
    {
      id: 10,
      src: "/placeholder.svg?height=400&width=600",
      title: "Salle Informatique",
      category: "Équipements",
      description: "Espace numérique pour la formation théorique"
    },
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=600",
      title: "Formation Sécurité",
      category: "Formations",
      description: "Sensibilisation aux règles de sécurité"
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=600",
      title: "Présentation de Projets",
      category: "Événements",
      description: "Nos apprenants présentent leurs réalisations"
    }
  ]

  const filteredImages = selectedCategory === "Toutes" 
    ? images 
    : images.filter(image => image.category === selectedCategory)


  return (
    <div className="py-16">
        <div className="container mx-auto px-4">
        
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Galerie</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Découvrez en images la vie de notre centre de formation : nos ateliers, nos équipements, nos formations et nos événements
                </p>
            </div>

            {/* Filtres */}
            <div className="mb-12">
                <div className="flex flex-wrap gap-4 justify-center">
                    {categories.map((category) => (
                    <Badge 
                        key={category}
                        variant={category === selectedCategory ? "default" : "outline"}
                        className="cursor-pointer hover:bg-blue-600 hover:text-white transition-colors"
                        onClick={() => {
                            setSelectedCategory(category)
                        }}
                    >
                        {category}
                    </Badge>
                    ))}
                </div>
            </div>

            {/* Galerie d'images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((image) => (
                    <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="relative group">
                            {image.src &&(
                              <Image 
                              width={20}
                              height={20}
                              src={image.src || "/placeholder.svg"}
                              alt={image.title}
                              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                              />
                            )}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                                    <p className="text-sm">{image.description}</p>
                                </div>
                            </div>
                            <Badge className="absolute top-4 right-4 bg-blue-600">
                            {image.category}
                            </Badge>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Call to action */}
            <section className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Visitez notre centre</h2>
                <p className="text-gray-600 mb-6">
                    Venez découvrir nos installations lors de nos journées portes ouvertes
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                        Prendre rendez-vous
                    </button>
                    <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
                        Nous contacter
                    </button>
                </div>
            </section>
      </div>
    </div>
  )
}
