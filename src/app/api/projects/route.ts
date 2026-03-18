import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error("PROJECTS_GET_ERROR", error);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const project = await prisma.project.create({
      data: body,
    });
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("PROJECTS_POST_ERROR", error);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
