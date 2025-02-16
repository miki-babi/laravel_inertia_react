import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <header className="bg-blue-500 text-white p-4">
                <nav className="flex justify-between items-center gap-4">
                    <Link className="text-white-500 text-2xl font-bold" href="/">
                        Home
                    </Link>
                    <Link className="text-white-500 text-2xl font-bold" href="/posts/create">
                        Create
                    </Link>
                </nav>




            </header>


            <main>
                {children}
            </main>
        </>

    )
}
