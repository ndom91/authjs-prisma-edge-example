import CustomLink from "./custom-link"
import packageJSON from "../package.json"

export default function Footer() {
  return (
    <footer className="flex flex-col px-4 my-4 mx-0 space-y-1 w-full text-sm sm:px-6 md:flex-row md:items-center md:my-12 md:mx-auto md:space-y-0 md:space-x-4 md:max-w-3xl md:h-5">
      <CustomLink href="https://authjs.dev">Documentation</CustomLink>
      <CustomLink href="https://www.npmjs.com/package/next-auth">NPM</CustomLink>
      <CustomLink href="https://github.com/nextauthjs/next-auth/tree/main/apps/examples/nextjs">
        Source on GitHub
      </CustomLink>
      <CustomLink href="/policy">Policy</CustomLink>

      <p>
        <CustomLink href="https://authjs.dev">Auth.js</CustomLink>:{" "}
        <em>next-auth@{packageJSON.dependencies["next-auth"]}</em>
      </p>
    </footer>
  )
}
