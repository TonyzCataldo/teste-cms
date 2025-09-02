import { NextResponse } from "next/server";
import { deletePage } from "../../../lib/get-page";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  const slug = "/" + name;

  const ok = deletePage(slug);
  if (!ok) {
    return NextResponse.json(
      { error: "Página não encontrada" },
      { status: 404 }
    );
  }
  return NextResponse.json({ success: true });
}
