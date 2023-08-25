import Link from "next/link";

export default function () {
    return (
        <>
            <h1>Hi</h1>
            <h2>This is a user page</h2>
            <h4>Welcome</h4>
            <Link href="/"> Go back</Link>
            <Link href="/user/Abdul"> Go abdul.js</Link>
        </>
    );
}