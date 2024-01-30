import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs';

export async function GET(request: Request) { 

    //purgar base de datos
     await prisma.todo.deleteMany();
     await prisma.user.deleteMany();

     const user = await prisma.user.create({
      data:{
        email:"test1@mail.com",
        password: bcrypt.hashSync('123456'),
        roles: ["admin","client", "super-user"],
        todos :{
          create:[
            { description:"Piedra del alma", complete:true},
            { description:"Piedra del poder"},
            { description:"Piedra del tiempo"},
            { description:"Piedra del dragon"},
            { description:"Piedra del sol"}
          ]

        }
      }
     })
    // await prisma.todo.createMany({
    //     data:[
    //         { description:"Piedra del alma", complete:true},
    //         { description:"Piedra del poder"},
    //         { description:"Piedra del tiempo"},
    //         { description:"Piedra del dragon"},
    //         { description:"Piedra del sol"}
    //     ]
    // })

  return NextResponse.json({
    message:'Seed executed'
  })
}

