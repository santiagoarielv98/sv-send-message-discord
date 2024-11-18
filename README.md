# **Next.js Discord Webhook API**

Esta API, creada con Next.js, permite enviar mensajes a un canal de Discord utilizando un webhook. Es utilizada en el formulario de contacto de mi portafolio para notificar sobre nuevos mensajes de los usuarios.

---

## **Tabla de Contenidos**
1. [Características](#características)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Requisitos Previos](#requisitos-previos)
4. [Instalación](#instalación)
5. [Uso](#uso)
6. [Configuración](#configuración)
7. [Contribuciones](#contribuciones)
8. [Licencia](#licencia)
9. [Contacto](#contacto)

---

## **Características**
- 🚀 Enviar mensajes al canal de Discord mediante un webhook.
- 🔐 Configuración segura del webhook a través de variables de entorno.
- 🌐 Endpoint API listo para integrarse con aplicaciones frontend o sistemas de terceros.

---

## **Tecnologías Utilizadas**
- **Framework**: Next.js
- **Lenguaje**: TypeScript (opcional: JavaScript)
- **Integración**: Discord Webhooks

---

## **Requisitos Previos**
1. Node.js (v18 o superior).
2. Una URL de webhook generada en Discord:
   - En el servidor de Discord, ve a **Configuración del canal > Integraciones > Webhooks**.
   - Crea un nuevo webhook y copia la URL.

---

## **Instalación**
Clona este repositorio e instala las dependencias necesarias:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/santiagoarielv98/sv-send-message-discord.git
   cd sv-send-message-discord
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno.

---

## **Configuración**
Copiar el archivo `.env.example` y renombrarlo a `.env`. Luego, reemplazar el valor de `DISCORD_WEBHOOK_URL` con la URL de tu webhook de Discord.

```env
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/xxxxxxxx/yyyyyyyy

ALLOW_ORIGIN=https://example.com # Opcional: URL permitida para CORS
```

---

## **Uso**
1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
2. Realiza una solicitud POST al endpoint `/api/send` con el siguiente cuerpo JSON:

```json
{
    "name": "Nombre del Remitente",
    "email": "",
    "subject": "Asunto del Mensaje",
    "message": "¡Hola, Discord! 👋",
}
```

3. Si el webhook está configurado correctamente, recibirás el mensaje en tu canal de Discord.

---

## **Contribuciones**
Si deseas mejorar esta función o agregar nuevas características, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza los cambios y confirma los commits (`git commit -m 'Agregado soporte para...'`).
4. Haz push de los cambios a tu rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

---

## **Licencia**
Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## **Contacto**
👤 **[Santiago Villanueva](https://linkedin.com/in/santiagoarielv/)**  
📧 [santiagoarielv98@gmail.com](mailto:santiagoarielv98@gmail.com)  
🌐 [Portafolio](https://sv-dev.tech)
