import { NextResponse } from "next/server";

// Recebe o formulário de diagnóstico. Por enquanto só valida e registra nos logs do servidor
// (Vercel > Logs). Falta definir o destino real (WhatsApp, e-mail ou CRM).
export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const text = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, 200) : "");
  const list = (v: unknown) => (Array.isArray(v) ? v.map(text).filter(Boolean).slice(0, 12) : []);
  const lead = {
    nome: text(data.nome),
    whatsapp: text(data.whatsapp),
    corretora: text(data.corretora),
    sistemas: list(data.sistemas),
    equipe: text(data.equipe),
    renovacoes: text(data.renovacoes),
    processos: list(data.processos),
  };
  if (!lead.nome || !lead.whatsapp || !lead.corretora) {
    return NextResponse.json({ ok: false }, { status: 422 });
  }
  console.log("[intuseg-lead]", JSON.stringify(lead));
  return NextResponse.json({ ok: true });
}
