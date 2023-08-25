import Link from "next/link";

export default function () {
    return (
        <>
            <h3>Hello </h3>
            <p>This is a abdul.js welcome</p>
            <Link href="/user">go back</Link>
            <Link href="/"> go main</Link>
        </>
    );
}