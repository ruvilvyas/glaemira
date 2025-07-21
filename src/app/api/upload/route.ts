import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = file.name.replaceAll(" ", "_");
    const uploadPath = path.join(process.cwd(), "public/uploads", filename);

    await fs.mkdir(path.dirname(uploadPath), { recursive: true });
    await fs.writeFile(uploadPath, buffer);

    const imageUrl = `/uploads/${filename}`;
    return NextResponse.json({ success: true, url: imageUrl });
  } catch (error) {
    console.error("File upload error:", error);
    return NextResponse.json({ success: false, message: "Server error during file upload." }, { status: 500 });
  }
}
