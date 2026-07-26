

type cardProps = {
    title: string;
    description: string;
};

export default function card({ title, description }: cardProps) {
    return (
        <>
            <div className="p-4 m-2 border-2 border-red-400 rounded-2xl bg-gray-950">
                <h1 >{title}</h1>
                <p>{description}</p>
            </div>
        </>
    );
}