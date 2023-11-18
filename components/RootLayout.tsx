import Navbar from "./Navbar"

interface RootLayoutProps {
    children: React.ReactNode, 
}
  
export default function RootLayout({ children } : RootLayoutProps) {
    return (
        <>
            <Navbar />
            <main>
                <div className="flex justify-center w-full">
                    <div className="flex flex-col max-w-screen-xl w-full mt-8 md:mt-16 gap-8 px-6 sm:px-8 2xl:px-0 pb-8">
                        {children}
                    </div>
                </div>
            </main>
        </>
    )
  }
  