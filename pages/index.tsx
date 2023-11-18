
import Button, { ButtonType } from "../components/Button"
import { NavLinks } from "../components/Navbar"
import RootLayout from "../components/RootLayout"

export default function Home() {
  return (
      <RootLayout>
        <h1>Software Engineer at USAA</h1>
        <div className="flex flex-col gap-4 lg:gap-2">
          <h2 className="text-base md:text-xl">4 years industry experience</h2>
          <h2 className="text-base md:text-xl">Experience working in Native, Web, & Backend environments</h2>
          <h2 className="text-base md:text-xl">B.S. Computer Science at Trinity University</h2>
        </div>
        <div className="flex p-8 items-start self-stretch bg-gray-2 w-screen md:w-full ml-[calc(50%-50vw)] md:ml-0 md:rounded">
          <p>Hello, I&apos;m Gabriel Killy, a software engineer interested in creating impactful, useful, & detail-oriented products for the people that use them.</p>
        </div>
        <div className="flex flex-row gap-4">
          {/* <Button text="Projects" href="/projects" icon="arrow-right" /> */}
          <Button text="Resume" href={NavLinks.resume} icon="download" hrefTarget="_blank"/>
        </div>
      </RootLayout>
  )
}
