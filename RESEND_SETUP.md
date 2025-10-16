# Configuración de Resend para Capital Consultoría SAS

## Variables de Entorno Requeridas

Para que funcione correctamente el envío de emails, necesitas configurar las siguientes variables de entorno:

### Crear archivo `.env` en la raíz del proyecto:

```env
# Resend API Configuration
RESEND_API_KEY=tu_api_key_de_resend_aqui
FROM_EMAIL=noreply@tudominio.com
TO_EMAIL=contacto@tudominio.com

# Optional: Email template configuration
COMPANY_NAME=Capital Consultoría SAS
```

## Pasos para configurar Resend:

### 1. Crear cuenta en Resend
- Ve a [resend.com](https://resend.com)
- Crea una cuenta gratuita
- Verifica tu dominio o usa el dominio de prueba

### 2. Obtener API Key
- En el dashboard de Resend, ve a "API Keys"
- Crea una nueva API key
- Copia la key y pégala en `RESEND_API_KEY`

### 3. Configurar emails
- `FROM_EMAIL`: El email desde el cual se enviarán los mensajes (debe estar verificado en Resend)
- `TO_EMAIL`: El email donde recibirás los mensajes de contacto

### 4. Para producción (Vercel)
Si estás desplegando en Vercel, añade estas variables en:
- Dashboard de Vercel → Tu proyecto → Settings → Environment Variables

## Uso del endpoint

El endpoint `/api/send` acepta POST requests con el siguiente formato:

```json
{
  "name": "Nombre del usuario",
  "email": "usuario@email.com",
  "phone": "+57 300 123 4567", // opcional
  "subject": "Asunto del mensaje", // opcional
  "message": "Contenido del mensaje"
}
```

### Respuesta exitosa:
```json
{
  "success": true,
  "message": "Email enviado correctamente",
  "emailId": "id_del_email_en_resend"
}
```

### Respuesta de error:
```json
{
  "success": false,
  "error": "Descripción del error"
}
```

## Características implementadas:

- ✅ Validación de campos requeridos
- ✅ Templates HTML y texto plano
- ✅ Manejo de errores robusto
- ✅ Formulario de contacto completo
- ✅ Estados de carga y feedback visual
- ✅ Tipos TypeScript incluidos
- ✅ Compatible con Astro SSR

## Testing

Para probar el endpoint:

```bash
curl -X POST http://localhost:4321/api/send \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Este es un mensaje de prueba"
  }'
```
