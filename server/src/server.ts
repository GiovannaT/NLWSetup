import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'


const app = Fastify()
const prisma = new PrismaClient();

app.get('/', async () => {

    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Be'
            }
        }
    })


    return habits
})

app.register(cors)

app.listen({
    port: 4000,
}).then(()=>{
   console.log("Server running on 4000")
})