"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Award, Calendar, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalFormations: 0,
    totalNews: 0,
    totalMessages: 0
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats')
        const data = await response.json()
        setStats(data)
      } catch (error) {
        console.error('Erreur lors du chargement des statistiques:', error)
      }
    }

    fetchStats()
  }, [])

  const formations = [
    {
      title: "Informatique et Bureautique",
      description: "Maintenance réseaux, développement d'applications, webmaster, comptabilité informatisée",
      duration: "6-12 mois",
      level: "Tous niveaux",
    },
    {
      title: "Langues Étrangères", 
      description: "Anglais, français, espagnol, allemand, italien, yemba - Communication professionnelle",
      duration: "3-6 mois",
      level: "Débutant à avancé",
    },
    {
      title: "Management et Entrepreneuriat",
      description: "Marketing digital, gestion de projets, entrepreneuriat et gestion d'entreprise",
      duration: "6-9 mois",
      level: "Intermédiaire",
    },
  ]

  const actualites = [
    {
      title: "Partenariat avec le MINJEC",
      date: "13 Mai 2024",
      description: "Signature d'un partenariat stratégique pour la formation des jeunes en informatique.",
    },
    {
      title: "Agrément MINEFOP Renouvelé",
      date: "18 Juillet 2022",
      description: "Le CFP-M obtient son agrément officiel du Ministère de l'Emploi.",
    },
    {
      title: "Extension au Secteur BTP",
      date: "Janvier 2025",
      description: "Le centre élargit son offre en intégrant le Bâtiment et Travaux Publics.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Centre de Formation Professionnelle aux Métiers</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Informatiques - Linguistiques - Management - Agribusiness - BTP
            </p>
            <p className="text-lg mb-8 text-blue-100">
              &quot;Learning by Doing&quot; - Apprendre en pratiquant pour une insertion professionnelle réussie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/formations">
                  Découvrir nos formations <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{stats.totalStudents || '100+'}</h3>
              <p className="text-gray-600">Étudiants formés</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{stats.totalFormations || '6+'}</h3>
              <p className="text-gray-600">Domaines de formation</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">95%</h3>
              <p className="text-gray-600">Taux d&apos;insertion</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">3+</h3>
              <p className="text-gray-600">Années d&apos;expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Domaines de Formation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Six pôles d&apos;excellence pour répondre aux besoins du marché camerounais
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {formations.map((formation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-600">{formation.title}</CardTitle>
                  <CardDescription className="text-black">{formation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Durée: {formation.duration}</span>
                    <span>Niveau: {formation.level}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/formations" className="text-blue-500">
                Voir toutes nos formations <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

       {/* Pourquoi nous choisir */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Pourquoi choisir notre centre ?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Formateurs experts</h3>
              <p className="text-gray-600">
                Nos formateurs sont des professionnels expérimentés du secteur
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Certifications reconnues</h3>
              <p className="text-gray-600">
                Obtenez des certifications reconnues par les professionnels
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Accompagnement personnalisé</h3>
              <p className="text-gray-600">
                Un suivi individualisé tout au long de votre parcours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Actualités Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Actualités du CFP-M</h2>
            <p className="text-xl text-gray-600">Suivez nos dernières nouvelles et partenariats</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {actualites.map((actualite, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-sm text-blue-600 font-medium">{actualite.date}</div>
                  <CardTitle className="text-lg text-gray-600">{actualite.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{actualite.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/actualites">
                Voir toutes les actualités <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à transformer votre avenir ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Rejoignez le CFP-M et bénéficiez d&apos;une formation pratique orientée vers l&apos;emploi
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/contact">
              Contactez-nous maintenant <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
