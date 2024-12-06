import { error } from "console";

async function takeTime()
{
    await new Promise((resolve)=>
    {
        setTimeout(resolve,3000);
    });
}

export default async function About()
{
    
    await takeTime();
    throw new error("this is the manual error")
    return(

        <div>
            <h1>This is about page.</h1>
            
        </div>
    )
}