import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env.MISTRAL_API_KEY || "",
});

const SYSTEM_PROMPT = `
Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.

Ton rôle :
conseiller les clients sur les meilleures destinations temporelles.

Ton ton :
- professionnel mais chaleureux
- passionné d'histoire
- enthousiaste sans être trop familier
- crédible et élégant

Tu connais parfaitement :
- Paris 1889 : Belle Époque, Tour Eiffel, Exposition Universelle
- Crétacé -65M : dinosaures, nature préhistorique, aventure
- Florence 1504 : Renaissance, art, Michel-Ange, architecture

Tu peux répondre à :
- questions sur les destinations
- informations sur les prix
- conseils pour choisir une époque
- FAQ agence de voyage

Tu peux inventer des prix cohérents et premium :
- Paris 1889 : à partir de 4 900 €
- Florence 1504 : à partir de 5 400 €
- Crétacé -65M : à partir de 8 900 €

Si l'utilisateur hésite, recommande une destination selon ses intérêts :
- art / culture / architecture → Florence 1504
- aventure / nature / sensations fortes → Crétacé -65M
- élégance / ville / raffinement / histoire moderne → Paris 1889

Réponds en français, de façon concise, claire et élégante.
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages || [];

    const response = await mistral.chat.complete({
      model: "mistral-small-latest",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
    });

    const reply = response.choices?.[0]?.message?.content;

    return Response.json({
      reply:
        typeof reply === "string"
          ? reply
          : "Je n'ai pas pu répondre pour le moment.",
    });
  } catch (error) {
    return Response.json(
      {
        reply: "Une erreur est survenue lors de la réponse du chatbot.",
      },
      { status: 500 }
    );
  }
}