import { z } from "zod";
import dayjs from "dayjs";
import { prisma } from "./lib/prisma";
import { FastifyInstance } from "fastify";

export async function appRoutes(app: FastifyInstance){

    app.get('/day', async (request) => {
        const getDayParams = z.object({
            //converter o parametro que recebe em date e converter em data
            date: z.coerce.date()
        })

        const { date } = getDayParams.parse(request.query)

        const parsedDate = dayjs(date).startOf('day')
        const weekDay = parsedDate.get('day')

        const possibleHabits = await prisma.habit.findMany({
            where: {
                createdAt: {
                    lte: date, 
                },
                weekDays:{
                    some: {
                        week_day: weekDay
                    }
                }
            }
        })

        const day = await prisma.day.findUnique({
            where:{
                date: parsedDate.toDate()
            },
            include: {
                dayHabits: true
            }
        })
        
        const completedHabits = day?.dayHabits.map(dayHabit => {
            return dayHabit.habit_id
        })

        return {
            possibleHabits,
            completedHabits
        }
    })

    app.post('/habits', async (request) => {
        const createHabitBody = z.object({
          title: z.string(),
          weekDays: z.array(
            z.number().min(0).max(6)
          ),
        })
    
        const { title, weekDays } = createHabitBody.parse(request.body)
    
        const today = dayjs().startOf('day').toDate()
    
        await prisma.habit.create({
          data: {
            title,
            createdAt: today,
            weekDays: {
              create: weekDays.map((weekDay) => {
                return {
                  week_day: weekDay,
                }
              }),
            }
          }
        })
      })
}