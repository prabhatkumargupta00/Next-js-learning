import NoUser from "@/components/NoUser";


type ageParams = {
    params: Promise<{name : string, age: number }>;
    // here it is not neccessary to be name it will be the same as the file name. ex-  [name] then name
};

export default async function agePage({params}: ageParams) {
    const users = [
        {
            id: 1,
            name: "Prabhat",
            email: "prabhat@gmail.com",
            age : 15,
            bio: "I am a software engineer and I love to code.",
        },
        {
            id: 2,
            name: "Aarav",
            email: "aarav.sharma@gmail.com",
            age : 20,
            bio: "Full-stack developer passionate about building scalable web applications.",
        },
        {
            id: 3,
            name: "Diya",
            email: "diya.verma@gmail.com",
            age : 25,
            bio: "UI/UX designer who loves creating intuitive user experiences.",
        },
        {
            id: 4,
            name: "Vivaan",
            email: "vivaan.gupta@gmail.com",
            age : 30,
            bio: "Data scientist exploring the endless possibilities of machine learning.",
        },
        {
            id: 1,
            name: "Prabhat",
            email: "prabhat@gmail.com",
            age: 18,
            bio: "I am a software engineer and I love to code.",
        },
        {
            id: 2,
            name: "Aarav",
            email: "aarav.sharma@gmail.com",
            age: 23,
            bio: "Full-stack developer passionate about building scalable web applications.",
        },
        {
            id: 3,
            name: "Diya",
            email: "diya.verma@gmail.com",
            age: 28,
            bio: "UI/UX designer who loves creating intuitive user experiences.",
        },
        {
            id: 4,
            name: "Vivaan",
            email: "vivaan.gupta@gmail.com",
            age: 33,
            bio: "Data scientist exploring the endless possibilities of machine learning.",
        },
    ];

    const pageParam = await params;
    const username = pageParam.name;
    const userAge = pageParam.age;


    const user = users.find((user) =>
        (user.name.toLocaleLowerCase() === username.toLocaleLowerCase() &&
        user.age === Number(userAge)),
    );


    if (!user) {
        return(
            <NoUser username={username}/>
        );
    }

    return (
        <div className="max-w-md  my-8 p-6 bg-gray-900 rounded-xl shadow-md border border-gray-100">
            <h1 className="text-2xl font-bold text-white mb-4 border-b pb-2">
                This is <span className="text-blue-600">{user?.name}&apos;s</span>{" "}
                profile.
            </h1>
            <div className="space-y-2 text-sm text-gray-400">
                <p>
                    <strong className="font-semibold text-gray-300">
                        Name :
                    </strong>{" "}
                    {user?.name}
                </p>
                <p>
                    <strong className="font-semibold text-gray-300">
                        Email :
                    </strong>{" "}
                    {user?.email}
                </p>
                <p>
                    <strong className="font-semibold text-gray-300">
                        Bio :
                    </strong>{" "}
                    {user?.bio}
                </p>
                <p>
                    <strong className="font-semibold text-gray-300">
                        Age :
                    </strong>{" "}
                    {user?.age}
                </p>
            </div>
        </div>
    );
}