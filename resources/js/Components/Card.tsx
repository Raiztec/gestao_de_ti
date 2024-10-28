import { PropsWithChildren } from "react"

export default function Card({children, color}: PropsWithChildren<{color:string}>){
    return (
        <div className={color == 'main' ? 'bg-primary pattern text-white lg:w-1/3 w-full rounded-xl' : 'bg-secondary pattern text-white lg:w-1/3 w-full rounded-xl'}>
            <div className="lg:my-6 lg:mx-6 m-5  flex flex-col justify-center items-center gap-4 ">
                {children}
            </div>
        </div>
    )
}