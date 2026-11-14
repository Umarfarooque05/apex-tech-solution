import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, businessName, email, phone, service, budget, details } = body;

    // 1. Basic server-side validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || !phone.trim()) {
      return NextResponse.json(
        { error: "Phone number is required." },
        { status: 400 }
      );
    }

    const leadData = {
      name: name.trim(),
      businessName: (businessName || "Not provided").trim(),
      email: email.trim(),
      phone: phone.trim(),
      service: service || "General Enquiry",
      budget: budget || "Not specified",
      details: (details || "No additional details provided.").trim(),
      submittedAt: new Date().toISOString(),
    };

    console.log("📥 [New Lead Received - Apex Tech Solution]:", leadData);

    // 2. Optional: Forward to Email Service (Resend / Webhook / SMTP) if API Key is present
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "info@apextechsolution.in";

    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Apex Tech Solution <onboarding@resend.dev>",
            to: [notificationEmail],
            subject: `🚀 New Lead: ${leadData.name} - ${leadData.service}`,
            html: `
              <h2>New Client Enquiry Received</h2>
              <p><strong>Name:</strong> ${leadData.name}</p>
              <p><strong>Company:</strong> ${leadData.businessName}</p>
              <p><strong>Email:</strong> ${leadData.email}</p>
              <p><strong>Phone:</strong> ${leadData.phone}</p>
              <p><strong>Service:</strong> ${leadData.service}</p>
              <p><strong>Budget:</strong> ${leadData.budget}</p>
              <p><strong>Details:</strong></p>
              <p>${leadData.details.replace(/\n/g, "<br>")}</p>
              <hr/>
              <p><small>Submitted at ${leadData.submittedAt}</small></p>
            `,
          }),
        });

        if (!resendRes.ok) {
          const errData = await resendRes.text();
          console.warn("Resend email dispatch warning:", errData);
        }
      } catch (emailErr) {
        console.warn("Failed sending notification email:", emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your enquiry has been received successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to process enquiry. Please try again or WhatsApp us directly." },
      { status: 500 }
    );
  }
}
