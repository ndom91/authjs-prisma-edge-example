import CustomLink from "@/components/custom-link"
import packageJSON from "../package.json"

export default function Index() {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Auth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <CustomLink href="https://nextjs.authjs.dev">Auth.js</CustomLink> with Prisma's new
        Edge-compatible client and adapters.
      </p>
      <p>
        Current <CustomLink href="https://nextjs.authjs.dev">Auth.js</CustomLink> version:{" "}
        <em>next-auth@{packageJSON.dependencies["next-auth"]}</em>
      </p>
    </div>
  )
}
