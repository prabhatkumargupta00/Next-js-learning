
// this will automatically be used as a loading screen for the details page but we have another loading used globally so we dont want to use this loading screen for this page as we want to use the global loading everywhere but to use that we have to delete this file or we can simply rename this file to Loading.tsx and then create a new file with the name loading.tsx which will be used globally for all the pages.

// component renamed from loading.tsx to Loading.tsx and a new file loading.tsx created for global loading screen.
export default function Loading(){
    return(
        <main>
            <h1>Loading</h1>
        </main>
    )
}
