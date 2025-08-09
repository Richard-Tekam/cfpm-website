'use client'

import { useState } from "react"
import { Calendar, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from 'next/image'

export default function Actualites() {
  const actualites = [
    {
      id: 1,
      title: "Intégration du pôle BTP en 2025",
      description: "Le CFP-M élargit son offre de formation avec l'ajout du secteur Bâtiment et Travaux Publics pour mieux répondre aux besoins du marché camerounais.",
      content: "En 2025, le CFP-M franchit une nouvelle étape en intégrant le secteur du BTP à son offre de formation...",
      date: "15 Janvier 2025",
      category: "Formation",
      image: ""
    },
    {
      id: 2,
      title: "Partenariat stratégique avec le MINJEC",
      description: "Le 13 mai 2024, le CFP-M a conclu un partenariat avec le Ministère de la Jeunesse et de l'Éducation Civique dans le cadre du programme REAMORCE.",
      content: "Ce partenariat vise la formation des jeunes en sciences et techniques de l'informatique...",
      date: "13 Mai 2024",
      category: "Partenariat",
      image: ""
    },
    {
      id: 3,
      title: "Agrément officiel du MINEFOP",
      description: "Depuis le 18 juillet 2022, le CFP-M est officiellement agréé par le Ministère de l'Emploi et de la Formation Professionnelle.",
      content: "Cette reconnaissance institutionnelle confirme la légitimité du centre à délivrer des diplômes reconnus par l'État...",
      date: "18 Juillet 2022",
      category: "Reconnaissance",
      image: ""
    },
     {
      id: 4,
      title: "Taux de Réussite Exceptionnel : 95% pour la Promotion 2023",
      date: "1 Mars 2024",
      category: "Résultats",
      image: "",
      description:
        "Nos étudiants brillent aux examens avec un taux de réussite de 95%, confirmant la qualité de notre accompagnement pédagogique.",
      content:
        "La promotion 2023 du CFPM affiche des résultats exceptionnels avec 95% de réussite aux examens finaux. Ce succès témoigne de la qualité de notre encadrement pédagogique et de l'engagement de nos étudiants.",
    },
  ]

  const categories = ["Toutes", "Formation", "Événement", "Partenariat", "Résultats", "Équipement", "Reconnaissance"]

  // 🔹 State pour stocker la catégorie sélectionnée
  const [selectedCategory, setSelectedCategory] = useState("Toutes")

  // 🔹 Filtrage des actualités
  const filteredActualites = selectedCategory === "Toutes"
    ? actualites
    : actualites.filter(article => article.category === selectedCategory)

  return (
    <div className="py-16 ">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Actualités</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé de toutes les nouveautés du CFPM : nouvelles formations, événements, partenariats et réussites de nos apprenants
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="cursor-pointer hover:bg-blue-600 hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Articles filtrés */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActualites.length > 0 ? (
            filteredActualites.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                    width={400}
                    height={200}
                  />
                  <Badge className="absolute top-4 right-4 bg-blue-600">
                    {article.category}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <Link href={`/actualites/${article.id}`}>
                    Lire plus
                  </Link>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">Aucune actualité dans cette catégorie.</p>
          )}
        </div>

      </div>
    </div>
  )
}
