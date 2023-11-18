import Link from "next/link";

export enum NavLinks {
  projects = "/projects",
  resume = "https://mega.nz/folder/71M1lbJS#P7t2wf7ojBH1gG30Ym-mQg"
}


export default function Navbar() {
    return (
      <nav className="w-full bg-orange-2 py-2 flex justify-center">
        <div className="max-w-screen-xl w-10/12 flex justify-between">
            <Link className="nav" href="/">gabriel.killy</Link>

            <div className="flex gap-7">
                {/* <a className="nav" href={NavLinks.projects}>projects</a> */}
                {/* <a className="nav" href={NavLinks.resume} target="_blank">resume</a> */}
            </div>
        </div>
      </nav>
    )
  }
  