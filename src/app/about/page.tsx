import Link from "next/link";
export const metadata = {
  title: "About",
};
export default function About() {
  return (
    <div>
      <div>
      <h1>About me</h1></div>
      <div>
      <h2 className="text-red-500" data-test="h2-about">
        Testing Next.js Applications with Cypress
      </h2>
      </div>
      <div>
      <input type="email" />
      </div>
      <div>
      <Link href="/blog">Go to myblog</Link>
      </div>
    </div>
  );
}
