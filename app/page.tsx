import Card from "@/components/card";

export default function Home() {
    return (
        <>
            <h1 className="mb-4 m-2 text-xl">Hello world from next js</h1>
            <Card title="first card" description="description of first card" />
            <Card title="second card" description="description of second card" />
            <Card title="third card" description="description of third card" />
            <Card title="final card" description="description of final card" />
        </>
    );
}
