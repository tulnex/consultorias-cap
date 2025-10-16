import type { APIRoute } from "astro"
import { Resend } from 'resend'

// Variables de entorno configuradas correctamente

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json()
        
        const { name, email, phone, message, subject } = body

        // Validar campos requeridos
        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ 
                    success: false, 
                    error: 'Faltan campos requeridos: nombre, email y mensaje' 
                }),
                { 
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            )
        }

        // Verificar que tenemos la API key
        if (!import.meta.env.RESEND_API_KEY) {
            return new Response(
                JSON.stringify({ 
                    success: false, 
                    error: 'Configuración de email no disponible' 
                }),
                { 
                    status: 500,
                    headers: { 'Content-Type': 'application/json' }
                }
            )
        }
        
        // Enviar email usando Resend
        const { data, error } = await resend.emails.send({
            from: import.meta.env.FROM_EMAIL || 'noreply@capitalconsultoria.com',
            to: [import.meta.env.TO_EMAIL || 'contacto@capitalconsultoria.com'],
            subject: subject || `Nuevo mensaje de contacto de ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2563eb;">Nuevo mensaje de contacto</h2>
                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Nombre:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
                        ${subject ? `<p><strong>Asunto:</strong> ${subject}</p>` : ''}
                    </div>
                    <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                        <h3 style="color: #374151; margin-top: 0;">Mensaje:</h3>
                        <p style="line-height: 1.6; color: #4b5563;">${message.replace(/\n/g, '<br>')}</p>
                    </div>
                    <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-radius: 8px;">
                        <p style="margin: 0; color: #0369a1; font-size: 14px;">
                            Este mensaje fue enviado desde el formulario de contacto de Capital Consultoría SAS
                        </p>
                    </div>
                </div>
            `,
            text: `
Nuevo mensaje de contacto

Nombre: ${name}
Email: ${email}
${phone ? `Teléfono: ${phone}` : ''}
${subject ? `Asunto: ${subject}` : ''}

Mensaje:
${message}

---
Este mensaje fue enviado desde el formulario de contacto de Capital Consultoría SAS
            `
        })

        if (error) {
            console.error('Error enviando email:', error)
            return new Response(
                JSON.stringify({ 
                    success: false, 
                    error: 'Error interno del servidor al enviar el email',
                    details: error.message || 'Error desconocido'
                }),
                { 
                    status: 500,
                    headers: { 'Content-Type': 'application/json' }
                }
            )
        }

        
        return new Response(
            JSON.stringify({ 
                success: true, 
                message: 'Email enviado correctamente',
                emailId: data?.id
            }),
            { 
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            }
        )

    } catch (error) {
        console.error('Error en el endpoint:', error)
        return new Response(
            JSON.stringify({ 
                success: false, 
                error: 'Error interno del servidor',
                details: error instanceof Error ? error.message : 'Error desconocido'
            }),
            { 
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        )
    }
}

export const GET: APIRoute = async () => {
    return new Response(
        JSON.stringify({ 
            message: 'Endpoint de envío de emails activo',
            method: 'POST',
            requiredFields: ['name', 'email', 'message'],
            optionalFields: ['phone', 'subject']
        }),
        { 
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        }
    )
}