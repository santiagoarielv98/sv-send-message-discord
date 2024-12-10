import * as Joi from "joi";
import { NextResponse } from "next/server";

const discordMessageSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().max(100).required(),
  subject: Joi.string().max(100),
  message: Joi.string().min(5).max(1000).required(),
});

export async function POST(request: Request) {
  const body = await request.json();

  const { error, value } = discordMessageSchema.validate(body);

  if (error) {
    return NextResponse.json({ error: error.details }, { status: 400 });
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

    return NextResponse.json({ message: "Mensaje enviado" }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "Error al enviar el mensaje a Discord" },
      { status: 500 },
    );
  }
}
