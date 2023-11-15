export default function Navbar() {
    return (
      <nav className="w-full bg-orange-2 py-8 flex justify-center">
        <div className="max-w-xl flex justify-between">
            <a className="nav" href="/">gabriel.killy</a>

            <div className="flex">
                <a className="nav" href="/projects">projects</a>
                <a className="nav" href="/resume">resume</a>
            </div>
        </div>
      </nav>
    )
  }
  