import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Page non trouvée</h1>
        <p className="text-gray-600 mb-8">La page que vous recherchez n&apos;existe pas ou a été déplacée.</p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/formations">Voir nos formations</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
