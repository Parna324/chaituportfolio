"use client";

import React from "react";
import { Printer, ArrowLeft, Github, Linkedin, Mail, Phone, Globe, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ResumePage() {
  const resumePdfPath = "/resumes.pdf";

  const handlePrint = () => {
    window.print();
  };

  const handleOpenPdf = () => {
    window.open(resumePdfPath, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-primary/20">
      {/* Controls - Hidden on Print */}
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 print:hidden">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft size={16} /> Back to Portfolio
            </Button>
          </Link>
          <div className="flex gap-3">
            <Button onClick={handleOpenPdf} variant="outline" className="gap-2">
              <Download size={16} /> Open Original PDF
            </Button>
            <Button onClick={handlePrint} className="gap-2 bg-primary hover:bg-primary/90 text-white">
              <Printer size={16} /> Print / Save PDF
            </Button>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-20 print:pt-0">
        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-8 mb-10">
          <h1 className="text-4xl font-bold uppercase tracking-tighter mb-4">Punnam Lakshmi Naga Chaitanya Bhagyakiran</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              <span>punnamchaitanya92671@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              <span>+91-9346071153</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={14} className="text-primary" />
              <span>linkedin.com/in/chaithu2525</span>
            </div>
            <div className="flex items-center gap-2">
              <Github size={14} className="text-primary" />
              <span>github.com/chaithu255525</span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <Globe size={14} className="text-primary" />
              <span>Vijayawada, Andhra Pradesh, India</span>
            </div>
          </div>
        </header>

        <div className="space-y-10">
          {/* Summary */}
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest border-b border-slate-200 mb-4 pb-1">Professional Summary</h2>
            <p className="text-slate-700 leading-relaxed text-sm">
              Dedicated Computer Science Undergraduate at Lovely Professional University with a strong foundation in Cloud Computing, DevOps, and Full-Stack Development. Proven track record of building scalable serverless architectures and responsive web platforms. Expert in C++ and Python with a passion for solving complex computational problems and optimizing system performance.
            </p>
          </section>

          {/* Experience / Projects */}
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest border-b border-slate-200 mb-6 pb-1">Key Projects</h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-base">Scalable Event Management System</h3>
                  <span className="text-sm font-medium text-slate-500 italic">Feb’ 25</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-700">
                  <li>Designed a serverless backend using <span className="font-semibold text-slate-900">AWS Lambda + API Gateway</span>.</li>
                  <li>Stored event data in <span className="font-semibold text-slate-900">DynamoDB</span> with optimized read/write capacity.</li>
                  <li>Implemented <span className="font-semibold text-slate-900">Cognito</span> authentication for secure user login.</li>
                  <li>Deployed static frontend on <span className="font-semibold text-slate-900">AWS S3</span> with <span className="font-semibold text-slate-900">CloudFront CDN</span> for high-speed delivery.</li>
                  <li>Monitoring and logging configured via AWS CloudWatch with custom alarm metrics.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-base">Stay Scouter – Accommodation Discovery Platform</h3>
                  <span className="text-sm font-medium text-slate-500 italic">Jan’ 25</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-700">
                  <li>Developed a responsive platform using <span className="font-semibold text-slate-900">React + TypeScript</span> for a seamless UI/UX.</li>
                  <li>Built secure REST APIs with <span className="font-semibold text-slate-900">Node.js & Express.js</span>, enabling property filtering and auth.</li>
                  <li>Optimized search performance resulting in faster load times and smoother navigation.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest border-b border-slate-200 mb-6 pb-1">Education</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-base">Lovely Professional University</h3>
                  <span className="text-sm font-medium text-slate-500 italic">Aug’ 23 - Present</span>
                </div>
                <p className="text-slate-600 text-sm italic mb-2">Bachelor of Technology - Computer Science and Engineering</p>
                <p className="text-sm font-semibold">Current CGPA: 6.8</p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-sm">Sri Chaitanya Junior College</h3>
                  <p className="text-slate-600 text-xs italic">Intermediate Education | 2023</p>
                  <p className="text-sm font-bold text-primary mt-1">Result: 92%</p>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Sri Chaitanya High School</h3>
                  <p className="text-slate-600 text-xs italic">Matriculation | 2021</p>
                  <p className="text-sm font-bold text-primary mt-1">Result: 100%</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Grid */}
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest border-b border-slate-200 mb-6 pb-1">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm">
              <div>
                <h3 className="font-bold text-slate-900 mb-2 underline decoration-primary underline-offset-4">Languages</h3>
                <p className="text-slate-700">C++, JavaScript (ES6+), Python, C, SQL</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 underline decoration-primary underline-offset-4">Cloud & DevOps</h3>
                <p className="text-slate-700">AWS (Lambda, S3, Cognito), Docker, Kubernetes, Jenkins, CI/CD</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 underline decoration-primary underline-offset-4">Tools & systems</h3>
                <p className="text-slate-700">Linux, Shell Scripting, Git/GitHub, Postman, VS Code</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 underline decoration-primary underline-offset-4">Platforms</h3>
                <p className="text-slate-700">Node.js, Express, React, Vite, Next.js</p>
              </div>
            </div>
          </section>

          {/* Certificates & Achievements */}
          <section className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="text-lg font-bold uppercase tracking-widest border-b border-slate-200 mb-4 pb-1">Certificates</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Responsive Web Design | <span className="italic">FreeCodeCamp</span></li>
                <li>• Network Communication Fundamentals | <span className="italic">Coursera</span></li>
                <li>• Computer Networking: Bits & Bytes | <span className="italic">Coursera</span></li>
                <li>• Hack-lot Hackathon Participant | <span className="italic">2024</span></li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold uppercase tracking-widest border-b border-slate-200 mb-4 pb-1">Achievements</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Deployed Cloud apps using AWS & K8s</li>
                <li>• Solved 70+ LeetCode problems (DSA)</li>
                <li>• 100% Score in Matriculation Board</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
