import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { formData } = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Read This <onboarding@resend.dev>",
      to: ["leemingchun419@gmail.com"],
      subject: "From personal website",
      text: `name : ${formData.name}\nemail : ${formData.email}\nmessage : ${formData.message}`,
    });
    console.log(formData);
    return NextResponse.json(formData);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
