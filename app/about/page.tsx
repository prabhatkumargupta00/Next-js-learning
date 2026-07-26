// "use client"
// because this component is static so by default next used SSR but cant work with button as it works in browser so it must be CSR, so to do that we can write "use client" on the top to tell next to use CSR instead of SSR or we can simply crete a button component and make that component only "use client" leaving the whole page as it is which improves performance and let us use the funtionality of nextjs. 

import Button from "@/components/Button"

export default function about() {
    return (
        <>
            <h1>About page</h1>
            <p>This is about page</p>
            <Button></Button>
        </>
    );
}
