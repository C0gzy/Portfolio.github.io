import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link"
import { Github, Linkedin, LinkIcon } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-gray-900  text-white p-4 mt-20 text-center">
            <p>&copy; 2025 Tom Cogell Portfolio</p>
            <section className="flex mb:flex-row flex-col justify-center">
            <Card className="bg-gray-900 border-gray-900">
                <CardHeader>
                    <CardTitle className="text-white">Contact</CardTitle>
                    <CardDescription className="text-gray-400">
                        You can contact me at tomcogzell8@gmail.com
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card className="bg-gray-900 border-gray-900">
                <CardHeader>
                    <CardTitle className="text-white">Social</CardTitle>
                    <CardDescription className="text-gray-400">
                        You can find me on Github and LinkedIn
                    </CardDescription>
                    <CardContent className="flex justify-center gap-1"> 
                        <Button className="bg-blue-600 hover:bg-blue-800" asChild>
                        <Link href="https://github.com/C0gzy">
                            <Github /> 
                        </Link>
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-800" asChild>
                        <Link href="https://www.linkedin.com/in/tom-cogzell-1b8b931b2/">
                            <Linkedin />
                        </Link>
                        </Button>
                    </CardContent>
                </CardHeader>
            </Card>
            </section>
        </footer>  
    )
}