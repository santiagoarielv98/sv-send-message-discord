import * as Joi from "joi";

export const discordMessageSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().max(100).required(),
  subject: Joi.string().max(100),
  message: Joi.string().min(5).max(1000).required(),
});

export async function POST(request: Request) {
  const body = await request.json();

  const { error, value } = discordMessageSchema.validate(body);

  if (error) {
    return {
      status: 400,
      body: error,
    };
  }

  try {
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
    const { name, email, subject, message } = value;
    const response = await fetch(discordWebhookUrl!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        content: `**Asunto:** ${subject}\n**Email:** ${email}\n**Mensaje:**\n${message}`,
      }),
    });

    if (!response.ok) {
      throw new Error("Error al enviar el mensaje a Discord");
    }

    return {
      status: 200,
      body: "Mensaje enviado",
    };
  } catch (error) {
    return {
      status: 500,
      body: error,
    };
  }
}
