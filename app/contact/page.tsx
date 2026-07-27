import {someAction} from "@/app/actions/something";


export default function contact() {
    return (
        <>
            <h1>contact page</h1>
            <p>This is contact page</p>
            <button className="bg-blue-500 w-40 cursor-pointer text-white p-2 rounded" onClick={someAction}>
                click me
            </button>
        </>
    );
}
