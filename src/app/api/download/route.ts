import { NextResponse } from "next/server";
import axios from "axios";

export const dynamic = "force-static";
export const revalidate = 60;

export async function GET(): Promise<NextResponse> {
  const fileUrl =
    "https://my-english-cv-bucket.s3.ap-northeast-1.amazonaws.com/Resume+-+Hayato+Yano.pdf";

  try {
    const response = await axios.get(fileUrl, {
      responseType: "stream"
    });

    const headers = new Headers();
    headers.append(
      "Content-Disposition",
      'attachment; filename="Resume_Hayato_Yano.pdf"'
    );
    headers.append("Content-Type", "application/pdf");

    return new NextResponse(response.data, { headers });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to download file" },
      { status: 500 }
    );
  }
}
