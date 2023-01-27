import { z } from 'zod';
import WebPush from 'web-push';
import { FastifyInstance } from "fastify";

const publicKey = 'BIrQYtlQnp_DPhV8Scv-kCtS15jqL4s3I1vPX4dBVp9eBx_KHJZFdGxpWSIoeWxSvWC0-3b4h1Q6CvYJzn3Ot2Q';
const privateKey = 'UsILvHOiOmmptqzMo2ogMWIkzjke-L7Ce1cVbV2x4KQ';

WebPush.setVapidDetails(
    'http://localhost:4000',
    publicKey,
    privateKey
)

export async function notificationRoutes(app: FastifyInstance) {
    app.get('/push/public_key', () =>{
        return {
            publicKey,
        }
    })

    app.post('/push/register', (request, reply) => {

        //Aqui anotar para cada usuário cada subscription

        console.log(request.body)

        return reply.status(201).send()
    })

    app.post('/push/send', async (request, reply)=>{
        const sendPushBody = z.object({
            subscription: z.object({
                endpoint: z.string(),
                keys: z.object({
                    p256dh: z.string(),
                    auth: z.string(),
                })
            })
        })

        const { subscription } = sendPushBody.parse(request.body)

        WebPush.sendNotification(subscription, 'oiee')

        return reply.status(201).send()
    })
}
