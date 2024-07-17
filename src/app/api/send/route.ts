export async function POST(request: Request) {
  const { name, email, subject = "Sin Asunto", message } = await request.json();

  const isNameValid = typeof name === "string" && name.length > 3;
  const isEmailValid = typeof email === "string" && email.includes("@");
  const messageIsValid = typeof message === "string" && message.length < 1000;

  const isValid = isNameValid && isEmailValid && messageIsValid;

  if (!isValid) {
    return new Response("Missing required fields", { status: 400 });
  }

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
