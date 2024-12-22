import { Head, Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Welcome</title>
                <meta head-key='description' name="description" content="Welcome to Laravel development!" />
            </Head>
            <header>
                <nav>
                    <Link className="nav-link" href="/">
                        Home
                    </Link>
                    <Link className="nav-link" href="/posts/create">
                        Create
                    </Link>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}