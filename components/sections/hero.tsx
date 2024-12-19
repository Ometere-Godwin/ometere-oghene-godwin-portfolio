"use client";

import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Hero Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Ometere Oghene-Godwin
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Software Engineer
          </h2>
          <div className="flex gap-4">
            <Button variant="outline" className="group">
              <Github className="mr-2 h-4 w-4 group-hover:text-blue-500" />
              GitHub
            </Button>
            <Button variant="outline" className="group">
              <Linkedin className="mr-2 h-4 w-4 group-hover:text-blue-500" />
              LinkedIn
            </Button>
            <Button variant="outline" className="group">
              <Mail className="mr-2 h-4 w-4 group-hover:text-blue-500" />
              Contact
            </Button>
            <Button variant="outline" className="group">
              <Mail className="mr-2 h-4 w-4 group-hover:text-blue-500" />
              Resume
            </Button>
          </div>
        </div>
        <div className="flex-1 relative w-full max-w-md aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
            alt="John Doe"
            fill
            className="rounded-full object-cover border-4 border-primary/20"
            priority
          />
        </div>
      </div>
    </section>
  );
}