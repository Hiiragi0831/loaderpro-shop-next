import { Suspense } from 'react'
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Suspense fallback={<p>Loading page...</p>}>
                <h1>home</h1>
                <Link href="/">Main page</Link>
            </Suspense>
        </main>
    );
}
