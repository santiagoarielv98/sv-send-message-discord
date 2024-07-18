export async function POST(request: Request) {
  const body = await request.json();

  if (!validateBody(body)) {
    return new Response("Missing required fields", { status: 400 });
  }
  const { name, email, subject = "Sin Asunto", message } = body;

  const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

  try {
    await fetch(discordWebhookUrl!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        content: `**Asunto:** ${subject}\n**Email:** ${email}\n**Mensaje:**\n${message}`,
      }),
    });

    return new Response("Message sent", { status: 200 });
  } catch (error) {}
}

function validateBody(body: Record<string, unknown>) {
  const { name, email, message } = body;

  const isNameValid =
    typeof name === "string" && name.length > 3 && name.length < 50;
  const isEmailValid =
    typeof email === "string" && email.includes("@") && email.length < 100;
  const messageIsValid =
    typeof message === "string" && message.length > 5 && message.length < 1000;

  return isNameValid && isEmailValid && messageIsValid;
}
