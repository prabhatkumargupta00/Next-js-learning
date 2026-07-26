import NoUser from '@/components/NoUser'


type profilePageParams = {
    params: Promise<{ name: string }>;
    // here it is not neccessary to be name it will be the same as the file name. ex-  [name] then name
};

export default async function Profile({ params }: profilePageParams) {
    const users = [
        {
            id: 1,
            name: "Prabhat",
            email: "prabhat@gmail.com",
            bio: "I am a software engineer and I love to code.",
        },
        {
            id: 2,
            name: "Aarav",
            email: "aarav.sharma@gmail.com",
            bio: "Full-stack developer passionate about building scalable web applications.",
        },
        {
            id: 3,
            name: "Diya",
            email: "diya.verma@gmail.com",
            bio: "UI/UX designer who loves creating intuitive user experiences.",
        },
        {
            id: 4,
            name: "Vivaan",
            email: "vivaan.gupta@gmail.com",
            bio: "Data scientist exploring the endless possibilities of machine learning.",
        },
        {
            id: 5,
            name: "Ananya",
            email: "ananya.nair@gmail.com",
            bio: "Mobile app developer specializing in React Native and Flutter.",
        },
        {
            id: 6,
            name: "Arjun",
            email: "arjun.reddy@gmail.com",
            bio: "Cloud architect helping businesses migrate and scale securely.",
        },
        {
            id: 7,
            name: "Ira",
            email: "ira.patel@gmail.com",
            bio: "DevOps engineer automation enthusiast and open-source contributor.",
        },
        {
            id: 8,
            name: "Reyansh",
            email: "reyansh.joshi@gmail.com",
            bio: "Cybersecurity analyst dedicated to securing digital assets and networks.",
        },
        {
            id: 9,
            name: "Kavya",
            email: "kavya.rao@gmail.com",
            bio: "Product manager turning complex tech ideas into user-friendly products.",
        },
        {
            id: 10,
            name: "Sai",
            email: "sai.kiran@gmail.com",
            bio: "QA engineer focused on automated testing and continuous integration.",
        },
    ];


    const pageParam = await params;
    const username = pageParam.name;
    const user = users.find((user)=> user.name.toLocaleLowerCase() === username.toLocaleLowerCase())

    if(!user){
        return (
            // <div className="flex flex-col items-center justify-center min-h-80 p-6 text-center max-w-md my-8 bg-gray-900 border border-dashed border-zinc-800 rounded-xl">
            //     <h1 className="text-xl font-bold text-zinc-100 mb-2">
            //         No user found...
            //     </h1>
            //     <p className="text-sm text-zinc-400">
            //         User with &quot;
            //         <span className="font-medium text-zinc-200">
            //             {username}
            //         </span>
            //         &quot; username doesn&apos;t exist.
            //     </p>
            // </div>
            <NoUser username={username}/>
        );
    }

    return (
        <div className="max-w-md  my-8 p-6 bg-gray-900 rounded-xl shadow-md border border-gray-100">
            <h1 className="text-2xl font-bold text-white mb-4 border-b pb-2">
                This is{" "}
                <span className="text-blue-600">{user?.name}&apos;s</span>{" "}
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
            </div>
        </div>
    );
}
