import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    //purgar base de datos
     await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data:[
            { description:"Piedra del alma", complete:true},
            { description:"Piedra del poder"},
            { description:"Piedra del tiempo"},
            { description:"Piedra del dragon"},
            { description:"Piedra del sol"}
        ]
    })
  return NextResponse.json({
    message:'Seed executed'
  })
}

