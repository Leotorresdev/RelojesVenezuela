import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

type Lead = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  message: string;
};

const leadsDirectory = path.join(process.cwd(), "data");
const leadsFile = path.join(leadsDirectory, "leads.json");

async function readLeads(): Promise<Lead[]> {
  try {
    const content = await readFile(leadsFile, "utf8");
    return JSON.parse(content) as Lead[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<Lead>;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const leads = await readLeads();
    const newLead: Lead = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      name,
      email,
      message,
    };

    await mkdir(leadsDirectory, { recursive: true });
    await writeFile(leadsFile, JSON.stringify([...leads, newLead], null, 2));

    return Response.json({
      ok: true,
      message: "Tus datos fueron guardados correctamente.",
    });
  } catch {
    return Response.json(
      { error: "No fue posible guardar los datos del cliente." },
      { status: 500 }
    );
  }
}
