"use server"
// use server directive is used to indicate that this code should be executed on the server side. It is often used in server-side rendering frameworks to ensure that certain actions or functions are only run on the server, rather than on the client side.

export async function someAction(){
    console.log('some action called from contact page.')
}