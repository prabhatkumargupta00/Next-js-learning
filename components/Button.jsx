"use client"

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