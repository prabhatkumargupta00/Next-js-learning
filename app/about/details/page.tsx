import FilterUser from "@/components/FilterUsers";

export default async function details() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json()
    // console.log(users)
    

    return (
        <>
            <h1>details page</h1>
            <p>This is details page</p>
            <hr />
            <FilterUser users={users}/>
        </>
    );
}
