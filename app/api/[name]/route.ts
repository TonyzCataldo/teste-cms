import { NextResponse } from "next/server";
import { deletePage } from "../../../lib/get-page";

export async function DELETE(
  _req: Request,
  { params }: { params: { name: string } }
) {
  const raw = params.name;
  const slug = "/" + raw;

  const ok = deletePage(slug);
  if (!ok) {
    return NextResponse.json(
      { error: "Página não encontrada" },
      { status: 404 }
    );
  }
  return NextResponse.json({ success: true });
}
