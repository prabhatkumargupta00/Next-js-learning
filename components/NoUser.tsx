
type usernameType ={
    username : string;
}
export default function noUser({username }: usernameType){
    return (
        <div className="flex flex-col items-center justify-center min-h-80 p-6 text-center max-w-md my-8 bg-gray-900 border border-dashed border-zinc-800 rounded-xl">
            <h1 className="text-xl font-bold text-zinc-100 mb-2">
                No user found...
            </h1>
            <p className="text-sm text-zinc-400">
                User with &quot;
                <span className="font-medium text-zinc-200">{username}</span>
                &quot; username doesn&apos;t exist.

                <br />
            </p>
            
        </div>
    );
}