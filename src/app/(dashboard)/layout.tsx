import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex" >
            <div className="w-[14%] lg:w-[16%] md:w-[8%] xl:w-[14] p-4">
                <Link 
                    href="/"
                    className="flex items-center justify-center gap-2"
                >
                    <Image src="/logo.png" alt="logo" width={32} height={32} />
                    <span className="hidden lg:block" >SchooLama</span>
                </Link>
                <Menu/>
            </div>
            <div className="w-[86%] lg:w-[84%] md:w-[92%] xl:w-[86]">
                <Navbar/>
                {children}
            </div>
        </div>
    );
}