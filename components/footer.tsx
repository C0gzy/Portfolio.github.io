import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link"
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
    return (
        <footer id="contact" className="bg-background text-foreground py-10 mt-20 border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="bg-card/50 backdrop-blur-sm border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-accent" />
                                Contact
                            </CardTitle>
                            <CardDescription className="text-muted-foreground text-base">
                                Get in touch with me
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <a 
                                href="mailto:tomcogzell8@gmail.com" 
                                className="text-accent hover:underline font-medium"
                            >
                                tomcogzell8@gmail.com
                            </a>
                        </CardContent>
                    </Card>
                    
                    <Card className="bg-card/50 backdrop-blur-sm border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Github className="h-5 w-5 text-accent" />
                                Social
                            </CardTitle>
                            <CardDescription className="text-muted-foreground text-base">
                                Connect with me on social media
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2"> 
                            <Button size="smMaxRadius" variant="AccentGradient" asChild>
                                <Link href="https://github.com/C0gzy" target="_blank">
                                    <Github className="mr-2 h-4 w-4" /> 
                                    GitHub
                                </Link>
                            </Button>
                            <Button size="smMaxRadius" variant="AccentGradient" asChild>
                                <Link href="https://www.linkedin.com/in/tom-cogzell-878bb22b2/" target="_blank">
                                    <Linkedin className="mr-2 h-4 w-4" />
                                    LinkedIn
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            
            </div>
        </footer>  
    )
}
