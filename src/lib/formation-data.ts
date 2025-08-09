export interface Formation {
  id: number
  title: string
  description: string
  duree: string
  niveau: string
  participants: string
  image: string
  skills: string[]
  detailedDescription: string
  options: {
    name: string
    description: string
    duree: string
    certification: string
  }[]
  debouchesNational: string[]
  debouchesInternational: string[]
  prerequisites: string[]
  methodology: string
  certification: string
}

export const formationsData: Formation[] = [
  {
    slug: "informatique-bureautique",
    title: "Informatique et Bureautique",
    description: "Formation complète aux métiers de l'informatique et de la bureautique moderne",
    duree: "6-18 mois",
    niveau: "Débutant à Confirmé",
    participants: "15 max",
    image: "/computer-training-cfpm.jpg",
    skills: ["Maintenance réseaux", "Développement apps", "Webmaster", "Comptabilité", "Graphisme"],
    detailedDescription: "Le pôle Informatique et Bureautique du CFP-M forme des professionnels polyvalents capables de répondre aux besoins croissants du secteur numérique au Cameroun et en Afrique. Nos formations allient théorie et pratique selon notre approche 'Learning by Doing', avec des équipements modernes et des formateurs expérimentés.",
    options: [
      {
        name: "Maintenance des réseaux informatiques",
        description: "Formation aux techniques de maintenance, configuration et sécurisation des réseaux informatiques d'entreprise",
        duree: "12 mois",
        certification: "Certificat professionnel MINEFOP"
      },
      {
        name: "Maintenance Informatique",
        description: "Diagnostic, réparation et maintenance du matériel informatique (ordinateurs, serveurs, périphériques)",
        duree: "10 mois",
        certification: "Certificat professionnel MINEFOP"
      },
      {
        name: "Développement d'applications",
        description: "Conception et développement d'applications web et mobiles avec les technologies modernes",
        duree: "18 mois",
        certification: "Certificat professionnel MINEFOP"
      },
      {
        name: "Webmaster",
        description: "Création, gestion et maintenance de sites web, référencement et marketing digital",
        duree: "12 mois",
        certification: "Certificat professionnel MINEFOP"
      },
      {
        name: "Secrétariat (comptable, bureautique, bilingue, de direction)",
        description: "Formation complète aux métiers du secrétariat moderne avec spécialisations",
        duree: "8-12 mois",
        certification: "Certificat professionnel MINEFOP"
      },
      {
        name: "Comptabilité informatisée et gestion",
        description: "Maîtrise des logiciels comptables et techniques de gestion d'entreprise",
        duree: "12 mois",
        certification: "Certificat professionnel MINEFOP"
      },
      {
        name: "Graphisme",
        description: "Design graphique, création visuelle et communication digitale",
        duree: "10 mois",
        certification: "Certificat professionnel MINEFOP"
      },
      {
        name: "Montage Audiovisuel",
        description: "Techniques de montage vidéo, post-production et création de contenus multimédias",
        duree: "8 mois",
        certification: "Certificat professionnel MINEFOP"
      }
    ],
    debouchesNational: [
      "Technicien réseau dans les entreprises camerounaises",
      "Développeur dans les startups technologiques",
      "Webmaster pour les PME locales",
      "Secrétaire de direction dans les administrations publiques",
      "Comptable dans les cabinets comptables",
      "Graphiste freelance ou en agence de communication",
      "Technicien de maintenance informatique",
      "Entrepreneur dans le secteur numérique"
    ],
    debouchesInternational: [
      "Développeur dans les entreprises technologiques internationales",
      "Consultant IT pour les organisations internationales",
      "Freelancer sur les plateformes internationales (Upwork, Fiverr)",
      "Technicien réseau dans les multinationales",
      "Webmaster pour des clients internationaux",
      "Graphiste pour des agences internationales",
      "Spécialiste en cybersécurité",
      "Entrepreneur tech avec expansion régionale"
    ],
    prerequisites: [
      "Niveau BEPC minimum",
      "Notions de base en informatique",
      "Motivation et assiduité"
    ],
    methodology: "Learning by Doing avec projets pratiques, stages en entreprise et accompagnement personnalisé",
    certification: "Certificat de qualification professionnel (CQP) ou Diplome de qualification professionnel (DQP)"
  },
  {
    slug: "langues-etrangeres",
    title: "Langues Étrangères",
    description: "Formation multilingue axée sur la communication professionnelle internationale",
    duree: "6-12 mois",
    niveau: "Débutant à Avancé",
    participants: "20 max",
    image: "/languages-training-cfpm.jpg",
    skills: ["Anglais", "Français", "Espagnol", "Allemand", "Communication pro"],
    detailedDescription: "Dans un monde globalisé, la maîtrise des langues étrangères est un atout majeur pour l'employabilité. Notre pôle Langues forme des professionnels polyglottes capables de communiquer efficacement dans un environnement international, avec une approche pratique centrée sur la communication professionnelle.",
    options: [
      {
        name: "Anglais professionnel",
        description: "Maîtrise de l'anglais des affaires, communication écrite et orale en contexte professionnel",
        duree: "12 mois",
        certification: "Certificat de compétence linguistique"
      },
      {
        name: "Français professionnel",
        description: "Perfectionnement du français écrit et oral pour les contextes professionnels",
        duree: "10 mois",
        certification: "Certificat de compétence linguistique"
      },
      {
        name: "Espagnol des affaires",
        description: "Communication professionnelle en espagnol pour les marchés hispanophones",
        duree: "12 mois",
        certification: "Certificat de compétence linguistique"
      },
      {
        name: "Allemand professionnel",
        description: "Allemand technique et commercial pour les relations d'affaires",
        duree: "12 mois",
        certification: "Certificat de compétence linguistique"
      },
      {
        name: "Italien des affaires",
        description: "Communication professionnelle en italien pour les échanges commerciaux",
        duree: "10 mois",
        certification: "Certificat de compétence linguistique"
      },
      {
        name: "Yemba (langue locale)",
        description: "Valorisation de la langue locale yemba dans un contexte professionnel",
        duree: "6 mois",
        certification: "Certificat de compétence linguistique"
      }
    ],
    debouchesNational: [
      "Traducteur/Interprète dans les institutions camerounaises",
      "Guide touristique multilingue",
      "Secrétaire bilingue/trilingue",
      "Chargé de communication internationale",
      "Enseignant de langues",
      "Agent commercial export/import",
      "Réceptionniste dans les hôtels internationaux",
      "Assistant dans les ambassades et consulats"
    ],
    debouchesInternational: [
      "Traducteur freelance international",
      "Interprète pour les organisations internationales",
      "Guide touristique international",
      "Chargé de relations internationales",
      "Consultant linguistique",
      "Professeur de langues à l'étranger",
      "Agent de voyage international",
      "Coordinateur de projets internationaux"
    ],
    prerequisites: [
      "Niveau BEPC minimum",
      "Motivation pour l'apprentissage des langues",
      "Ouverture culturelle"
    ],
    methodology: "Méthode immersive avec pratique orale intensive, jeux de rôles professionnels et échanges culturels",
    certification: "Certificat de qualification professionnel (CQP) ou Diplome de qualification professionnel (DQP)"
  },
  {
    slug: "management-entrepreneuriat",
    title: "Management et Entrepreneuriat",
    description: "Formation aux métiers du management moderne et à l'entrepreneuriat innovant",
    duree: "8-12 mois",
    niveau: "Intermédiaire à Avancé",
    participants: "12 max",
    image: "/management-training-cfpm.jpg",
    skills: ["Marketing digital", "Gestion projets", "Communication", "Entrepreneuriat"],
    detailedDescription: "Le pôle Management et Entrepreneuriat forme les leaders de demain, capables de créer et gérer des entreprises innovantes. Nos formations allient management moderne, entrepreneuriat social et techniques digitales pour répondre aux défis économiques du Cameroun et de l'Afrique.",
    options: [
      {
        name: "Communication des organismes",
        description: "Stratégies de communication interne et externe, relations publiques et gestion de l'image",
        duree: "10 mois",
        certification: "Certificat en Communication Organisationnelle"
      },
      {
        name: "Marketing digital",
        description: "Stratégies marketing online, réseaux sociaux, e-commerce et publicité digitale",
        duree: "12 mois",
        certification: "Certificat en Marketing Digital"
      },
      {
        name: "Gestion, Suivi et évaluation de projets",
        description: "Méthodologies de gestion de projets, outils de suivi et techniques d'évaluation",
        duree: "12 mois",
        certification: "Certificat en Gestion de Projets"
      },
      {
        name: "Entrepreneuriat et gestion d'entreprise",
        description: "Création d'entreprise, business plan, gestion financière et développement commercial",
        duree: "12 mois",
        certification: "Certificat en Entrepreneuriat"
      }
    ],
    debouchesNational: [
      "Chef d'entreprise/Entrepreneur",
      "Responsable marketing dans les PME camerounaises",
      "Chargé de communication en entreprise",
      "Chef de projet dans les ONG locales",
      "Consultant en management",
      "Responsable commercial",
      "Community manager",
      "Formateur en entrepreneuriat"
    ],
    debouchesInternational: [
      "Entrepreneur avec expansion régionale",
      "Consultant international en management",
      "Chef de projet dans les organisations internationales",
      "Responsable marketing digital international",
      "Coordinateur de programmes de développement",
      "Consultant en stratégie d'entreprise",
      "Formateur international en entrepreneuriat",
      "Directeur de filiale à l'étranger"
    ],
    prerequisites: [
      "Niveau BAC minimum",
      "Esprit d'initiative et de leadership",
      "Intérêt pour l'économie et la gestion"
    ],
    methodology: "Pédagogie active avec études de cas réels, création d'entreprises fictives et accompagnement par des mentors",
    certification: "Certificat de qualification professionnel (CQP) ou Diplome de qualification professionnel (DQP)"
  },
  {
    slug: "agribusiness",
    title: "Agribusiness",
    description: "Formation à l'agriculture moderne et à l'entrepreneuriat agricole sur sites réels",
    duree: "12-18 mois",
    niveau: "Débutant à Confirmé",
    participants: "15 max",
    image: "/agribusiness-training-cfpm.jpg",
    skills: ["Production animale", "Production végétale", "Transformation", "Entrepreneuriat agricole"],
    detailedDescription: "Le pôle Agribusiness du CFP-M forme les acteurs de l'agriculture moderne camerounaise. Avec nos 4 sites d'exploitation agricole et d'élevage, les apprenants acquièrent une expérience pratique unique dans un secteur stratégique pour l'économie nationale et la sécurité alimentaire.",
    options: [
      {
        name: "Production animale",
        description: "Élevage moderne, nutrition animale, santé vétérinaire et gestion des exploitations",
        duree: "12 mois",
        certification: "Certificat en Production Animale"
      },
      {
        name: "Production végétale",
        description: "Techniques culturales modernes, protection des cultures et agriculture durable",
        duree: "12 mois",
        certification: "Certificat en Production Végétale"
      },
      {
        name: "Agent d'exploitation agricole",
        description: "Gestion globale d'une exploitation, mécanisation et techniques de production",
        duree: "15 mois",
        certification: "Certificat d'Agent d'Exploitation"
      },
      {
        name: "Entrepreneur agro-pastoral",
        description: "Création et gestion d'entreprises agricoles, business plan et commercialisation",
        duree: "18 mois",
        certification: "Certificat en Entrepreneuriat Agricole"
      },
      {
        name: "Techniques de transformation alimentaire",
        description: "Transformation des produits agricoles, conservation et valorisation",
        duree: "10 mois",
        certification: "Certificat en Transformation Alimentaire"
      }
    ],
    debouchesNational: [
      "Entrepreneur agricole",
      "Responsable d'exploitation agricole",
      "Conseiller agricole",
      "Technicien en production animale/végétale",
      "Responsable de coopérative agricole",
      "Transformateur de produits agricoles",
      "Inspecteur agricole",
      "Formateur en techniques agricoles"
    ],
    debouchesInternational: [
      "Consultant en développement agricole",
      "Expert en agribusiness pour les ONG internationales",
      "Responsable de projets agricoles internationaux",
      "Entrepreneur agricole avec export",
      "Formateur international en agriculture",
      "Conseiller technique dans les pays de la sous-région",
      "Responsable de programmes alimentaires",
      "Chercheur en agriculture tropicale"
    ],
    prerequisites: [
      "Niveau BEPC minimum",
      "Intérêt pour l'agriculture et l'élevage",
      "Capacité physique pour le travail de terrain"
    ],
    methodology: "Formation pratique sur nos 4 sites d'exploitation avec accompagnement technique et entrepreneurial",
    certification: "Certificat de qualification professionnel (CQP) ou Diplome de qualification professionnel (DQP)"
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
    detailedDescription: "Nouveau pôle 2025, le BTP répond à la forte demande du secteur de la construction au Cameroun. Nos formations pratiques préparent des artisans qualifiés et des entrepreneurs du bâtiment, avec un focus sur les techniques modernes et durables de construction.",
    options: [
      {
        name: "Maçonnerie",
        description: "Techniques de construction, gros œuvre, fondations et structures en béton",
        duree: "12 mois",
        certification: "Certificat de Maçon Qualifié"
      },
      {
        name: "Plomberie et installation sanitaire",
        description: "Installation et maintenance des systèmes de plomberie et sanitaires",
        duree: "10 mois",
        certification: "Certificat de Plombier Qualifié"
      },
      {
        name: "Électricité bâtiment",
        description: "Installation électrique résidentielle et commerciale, normes de sécurité",
        duree: "12 mois",
        certification: "Certificat d'Électricien Bâtiment"
      },
      {
        name: "Carrelage bâtiment",
        description: "Pose de carrelage, faïence et revêtements de sol et mur",
        duree: "8 mois",
        certification: "Certificat de Carreleur"
      },
      {
        name: "Peinture Bâtiment",
        description: "Techniques de peinture intérieure et extérieure, finitions décoratives",
        duree: "8 mois",
        certification: "Certificat de Peintre en Bâtiment"
      },
      {
        name: "Coffrage-ferraillage",
        description: "Techniques de coffrage et armature pour structures en béton armé",
        duree: "10 mois",
        certification: "Certificat de Coffreur-Ferrailleur"
      },
      {
        name: "Construction ouvrage métallique",
        description: "Soudure, assemblage et montage de structures métalliques",
        duree: "12 mois",
        certification: "Certificat en Construction Métallique"
      },
      {
        name: "Vitrerie",
        description: "Installation et réparation de vitres, miroirs et structures vitrées",
        duree: "8 mois",
        certification: "Certificat de Vitrier"
      },
      {
        name: "Décoration intérieure",
        description: "Aménagement et décoration d'espaces intérieurs, design d'intérieur",
        duree: "10 mois",
        certification: "Certificat en Décoration Intérieure"
      }
    ],
    debouchesNational: [
      "Artisan indépendant en bâtiment",
      "Ouvrier qualifié dans les entreprises de construction",
      "Chef d'équipe sur chantier",
      "Entrepreneur en BTP",
      "Contremaître de chantier",
      "Technicien de maintenance immobilière",
      "Formateur en métiers du bâtiment",
      "Inspecteur de travaux"
    ],
    debouchesInternational: [
      "Ouvrier qualifié dans les projets internationaux",
      "Entrepreneur BTP avec expansion régionale",
      "Superviseur de chantiers internationaux",
      "Consultant en construction",
      "Formateur international en BTP",
      "Expert en construction durable",
      "Responsable technique dans les multinationales",
      "Coordinateur de projets de construction"
    ],
    prerequisites: [
      "Niveau BEPC minimum",
      "Bonne condition physique",
      "Sens de la précision et de la sécurité"
    ],
    methodology: "Formation pratique sur chantiers réels avec maîtres artisans et respect des normes de sécurité",
    certification: "Certificat de qualification professionnel (CQP) ou Diplome de qualification professionnel (DQP)"
  },
  {
    slug: "esthetique-technique",
    title: "Esthétique et Technique",
    description: "Formation aux métiers de l'esthétique, de la beauté et de la maintenance technique",
    duree: "6-12 mois",
    niveau: "Débutant à Confirmé",
    participants: "12 max",
    image: "/beauty-tech-training-cfpm.jpg",
    skills: ["Esthétique", "Coiffure", "Stylisme", "Maintenance électronique", "Climatisation"],
    detailedDescription: "Le pôle Esthétique et Technique combine les métiers de la beauté en pleine expansion avec les métiers techniques spécialisés. Cette formation répond aux besoins croissants du secteur des services et de la maintenance technique au Cameroun.",
    options: [
      {
        name: "Esthétique et cosmétique",
        description: "Soins du visage et du corps, techniques esthétiques modernes et conseil beauté",
        duree: "10 mois",
        certification: "Certificat d'Esthéticienne Professionnelle"
      },
      {
        name: "Coiffure professionnelle",
        description: "Techniques de coupe, coiffage, coloration et soins capillaires",
        duree: "12 mois",
        certification: "Certificat de Coiffeur Professionnel"
      },
      {
        name: "Stylisme et modélisme",
        description: "Création de vêtements, patronage, couture et stylisme de mode",
        duree: "12 mois",
        certification: "Certificat en Stylisme-Modélisme"
      },
      {
        name: "Maintenance électronique",
        description: "Réparation d'appareils électroniques, diagnostic et maintenance préventive",
        duree: "10 mois",
        certification: "Certificat de Technicien Électronique"
      },
      {
        name: "Froid et climatisation",
        description: "Installation, maintenance et réparation des systèmes de climatisation",
        duree: "12 mois",
        certification: "Certificat de Technicien Frigoriste"
      }
    ],
    debouchesNational: [
      "Esthéticienne en institut de beauté",
      "Coiffeur/Coiffeuse indépendant(e)",
      "Styliste créateur",
      "Technicien de maintenance électronique",
      "Frigoriste/Climaticien",
      "Propriétaire de salon de beauté",
      "Formateur en esthétique",
      "Conseiller beauté"
    ],
    debouchesInternational: [
      "Esthéticienne dans les spas internationaux",
      "Coiffeur dans les salons haut de gamme",
      "Styliste pour marques internationales",
      "Technicien électronique spécialisé",
      "Expert en climatisation industrielle",
      "Consultant beauté international",
      "Formateur international en esthétique",
      "Entrepreneur beauté avec expansion régionale"
    ],
    prerequisites: [
      "Niveau BEPC minimum",
      "Sens artistique et créativité",
      "Habileté manuelle"
    ],
    methodology: "Formation pratique avec modèles réels, stages en salons partenaires et équipements professionnels",
    certification: "Certificat de qualification professionnel (CQP) ou Diplome de qualification professionnel (DQP)"
  }
]

export function getFormationBySlug(slug: string): Formation | undefined {
  return formationsData.find(formation => formation.slug === slug)
}
