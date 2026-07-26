"use client"

// because this component is static so by default next used SSR but cant work with button as it works in browser so it must be CSR, so to do that we can write "use client" on the top to tell next to use CSR instead of SSR or we can simply crete a button component and make that component only "use client" leaving the whole page as it is which improves performance and let us use the funtionality of nextjs. 

export default function Button(){
    return(
        <button className="bg-amber-800 px-2 py-1 w-20  rounded-xl border-2 border-red-600" type="button"
            onClick={() => {
                alert("Button clicked")
            }}>
            click
        </button>
    )
}