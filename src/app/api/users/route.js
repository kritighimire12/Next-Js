import { NextResponse } from "next/server";
export function GET(request)
{
    const users=
    [{
        name:'kriti ',
        phone:6666,
        course:'java'
    },
    {
        name:'ritu ',
        phone:6666,
        course:'java'
    },
    {
        name:'aasha ',
        phone:6666,
        course:'java'
    }
];
return NextResponse.json(users)

}

export function POST()
{

}
export function Delete()
{

}