
import Button, { ButtonType } from "../components/Button"
import { NavLinks } from "../components/Navbar"
import RootLayout from "../components/RootLayout"

export default function Home() {
  return (
      <RootLayout>
        <h1>Software Engineer at USAA</h1>
        <div className="flex flex-col gap-1">
          <h2>4 years industry experience</h2>
          <h2>Experience working in Native, Web, & Backend environments</h2>
          <h2>B.S. Computer Science at Trinity University</h2>
        </div>
        <div className="text-block">
          <p>Hello, I'm Gabriel Killy, a software engineer interested in creating impactful, useful, & detail-oriented products for the people that use them.</p>
        </div>
        <div className="flex flex-row gap-4">
          {/* <Button text="Projects" href="/projects" icon="arrow-right" /> */}
          <Button text="Resume" href={NavLinks.resume} icon="download" hrefTarget="_blank"/>
        </div>
      </RootLayout>
  )
}
