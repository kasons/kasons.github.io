import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "kasonkshiroma@gmail.com", // Your email where you'll receive emails
      from: "kasonkshiroma@gmail.com", // your website email address here
      subject: `Message from portfolio | From ${req.body.name}`,
      html: `
        <body>
            <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h3>${req.body.name}'s email is: ✉️${req.body.email} </h3>
                <div style="font-size: 16px;">
                    <p>${req.body.message}</p>
                    <br>
                </div>
                <div style="font-size: 16px;">${req.body.name}
                </div>
            </div>
        </body>
      </html>
`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(400).json(error);
  }

  return res.status(200).json({ error: "" });
}