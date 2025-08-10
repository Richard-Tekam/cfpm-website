import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nom, prenom, email, telephone, formation, message } = body

    // Validation des champs obligatoires
    if (!nom || !prenom || !email || !message) {
      return NextResponse.json({ error: "Tous les champs obligatoires doivent être remplis" }, { status: 400 })
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Adresse email invalide" }, { status: 400 })
    }

    // Configuration du transporteur email (utilise les variables d'environnement)
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true pour 465, false pour les autres ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Contenu de l'email à envoyer au CFP-M
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || "contact@cfp-m.cm",
      subject: `Nouvelle demande de contact - ${formation || "Formation non spécifiée"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin: 0;">CFP-M</h1>
            <h2 style="color: #374151; margin: 10px 0;">Nouvelle demande de contact</h2>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1f2937; margin-top: 0;">Informations du contact</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 30%;">Nom :</td>
                <td style="padding: 8px 0; color: #6b7280;">${nom}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Prénom :</td>
                <td style="padding: 8px 0; color: #6b7280;">${prenom}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email :</td>
                <td style="padding: 8px 0; color: #2563eb;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Téléphone :</td>
                <td style="padding: 8px 0; color: #6b7280;">${telephone || "Non renseigné"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Formation d'intérêt :</td>
                <td style="padding: 8px 0; color: #6b7280;">${formation || "Non spécifiée"}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Message :</h3>
            <p style="color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Ce message a été envoyé depuis le site web du CFP-M<br>
              Date : ${new Date().toLocaleString("fr-FR", { timeZone: "Africa/Douala" })}
            </p>
          </div>
        </div>
      `,
    }

    // Email de confirmation pour l'étudiant
    const confirmationMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Confirmation de réception - CFP-M",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin: 0;">CFP-M</h1>
            <h2 style="color: #374151; margin: 10px 0;">Merci pour votre message !</h2>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2563eb;">
            <p style="color: #374151; margin: 0; line-height: 1.6;">
              Bonjour <strong>${prenom} ${nom}</strong>,<br><br>
              Nous avons bien reçu votre demande concernant ${formation ? `la formation en <strong>${formation}</strong>` : "nos formations"}.
              Notre équipe vous contactera dans les plus brefs délais pour répondre à vos questions.
            </p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1f2937; margin-top: 0;">Récapitulatif de votre demande :</h3>
            <p style="color: #6b7280; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h4 style="color: #92400e; margin: 0 0 10px 0;">En attendant notre réponse :</h4>
            <ul style="color: #92400e; margin: 0; padding-left: 20px;">
              <li>Consultez notre site web pour plus d'informations sur nos formations</li>
              <li>Suivez-nous sur nos réseaux sociaux</li>
              <li>N'hésitez pas à nous appeler au +237 656 311 785</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Centre de Formation Professionnelle aux Métiers<br>
              Dschang, Cameroun<br>
              Email: contact@cfp-m.cm | Tél: +237 656 311 785
            </p>
          </div>
        </div>
      `,
    }

    // Envoi des emails
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(confirmationMailOptions)

    return NextResponse.json(
      {
        success: true,
        message: "Votre message a été envoyé avec succès. Vous recevrez une confirmation par email.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message. Veuillez réessayer plus tard." },
      { status: 500 },
    )
  }
}
