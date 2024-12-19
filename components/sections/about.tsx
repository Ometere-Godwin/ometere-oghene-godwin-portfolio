"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Brain, Rocket, Coffee } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Clean Code Advocate",
    description: "Writing maintainable, scalable, and efficient code is my passion."
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant solutions."
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Performance Optimizer",
    description: "Ensuring applications run at their peak efficiency."
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Team Player",
    description: "Collaborating effectively with cross-functional teams."
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
                alt="Working Environment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Passionate Software Engineer
            </h3>
            <p className="text-lg text-muted-foreground">
              With over 5 years of experience in full-stack development, I've had the privilege of working on diverse projects
              that have shaped my expertise in modern web technologies and cloud solutions.
            </p>
            <p className="text-lg text-muted-foreground">
              Currently leading development at TechCorp, where I architect and implement scalable solutions that serve
              millions of users globally.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 h-content">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <div className="mb-4 text-blue-500">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}