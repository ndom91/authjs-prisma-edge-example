import CustomLink from "@/components/custom-link"
import { auth } from "auth"

export default async function Index() {
  const session = await auth()
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Auth.js Prisma Edge Example</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <CustomLink href="https://nextjs.authjs.dev">Auth.js</CustomLink> with Prisma's new
        Edge-compatible client and adapters.
      </p>
      <div className="rounded-md bg-neutral-100">
        <h3 className="p-4 rounded-t-md bg-neutral-200">Current Session</h3>
        <pre className="p-8">{JSON.stringify(session, null, 2)}</pre>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-2 justify-between items-center p-4">
          <h3 className="">Prisma Edge Early-Access</h3>
          <div className="flex gap-2 items-center">
            <CustomLink href="">Docs</CustomLink> |<CustomLink href="">Repo</CustomLink>
          </div>
        </div>
        <img
          alt="Prisma Edge Early-Access support platforms"
          src={`https://prismaio.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4835b259-702e-40fc-a59e-e46c06095210%2Fde79a93e-a5e4-4830-bc1e-70f48ead961a%2FUntitled.png?table=block&id=d73158aa-d941-4c96-a369-af833225a9e8&spaceId=4835b259-702e-40fc-a59e-e46c06095210&width=1940&userId=&cache=v2`}
        />
      </div>
    </div>
  )
}
