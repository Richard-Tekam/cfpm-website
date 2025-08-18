import { collection, addDoc } from "firebase/firestore"; 
import {db} from "@/app/config/firebase";


function genererEmailHtml(
  nom: string,
  prenom: string,
  email: string,
  telephone: string,
  formation: string | null | undefined,
  message: string
): string {
  const formationHtml = formation
    ? `
      <tr>
        <td style="padding: 8px;"><strong>Formation :</strong></td>
        <td style="padding: 8px;">${formation}</td>
      </tr>
    `
    : "";

  const htmlTemplate = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            padding: 20px;
            color: #333;
          }
          .email-container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: auto;
          }
          h2 {
            color: #2c3e50;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          td {
            vertical-align: top;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <h2>Nouvelle demande de contact</h2>
          <table>
            <tr>
              <td style="padding: 8px;"><strong>Nom :</strong></td>
              <td style="padding: 8px;">${nom}</td>
            </tr>
            <tr>
              <td style="padding: 8px;"><strong>Prénom :</strong></td>
              <td style="padding: 8px;">${prenom}</td>
            </tr>
            <tr>
              <td style="padding: 8px;"><strong>Email :</strong></td>
              <td style="padding: 8px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px;"><strong>Téléphone :</strong></td>
              <td style="padding: 8px;">${telephone}</td>
            </tr>
            ${formationHtml}
            <tr>
              <td style="padding: 8px; vertical-align: top;"><strong>Message :</strong></td>
              <td style="padding: 8px;">${message}</td>
            </tr>
          </table>
        </div>
      </body>
    </html>
  `;

  return htmlTemplate;
}




export async function createMessage(nom, prenom, email, telephone, formation, message){
    console.log(nom, prenom, email, telephone, formation, message);
    try {
        const messageDoc = await addDoc(collection(db, "message"), {
            to: ["rtekamwafo@gmail.com", "ericktsafack2017@gmail.com", "cfpmdschang54@gmail.com"],
            message: {
                subject: `message de ${nom} ${prenom}`,
                html: genererEmailHtml(nom, prenom, email, telephone, formation, message),
            }
            
        });
        const messageResponseDoc = await addDoc(collection(db, "message"), {
            to: [email],
            message: {
                subject: `reponse automatique: ne repondez pas.`,
                html: 'Bonjour monsieur, nous avons bien recu votre message. Nous vous repondrons dans les plus brefs delais <br><br> Cordialement',
            }
            
        });
        console.log("Document written with ID: ", messageDoc.id, messageResponseDoc.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}