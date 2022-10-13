import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["info"] });
import requestIp from "request-ip";


export default async function handler(req, res) {
  
  try {
    if (req.method !== "POST") {
      res.status(400).send({ message: "Only POST requests allowed" });
      return;
    } else {
      async function main() {
        const { name, url } = req.body;
        const key = process.env.ENV_KEY;

        // Id "url" is not correct, return and respond with failed
        if (!url || url.trim() === "" || !name) {
          return res
            .status(400)
            .send({ message: "failed", reason: "parameters" });
        }

        // Check "name"'s characters and create with a custom name
        if (name.length <= 20 && name.length >= 3) {
          try {
            await prisma.urls.create({
              data: {
                url,
                ip: requestIp.getClientIp(req),
                name: name,
              },
            });

            res.setHeader("Content-Type", "application/json");
            res.status(200).send({ message: "success", name });
          } catch (e) {
            if (e.code == "P2002") {
              res.setHeader("Content-Type", "application/json");
              res.status(400).send({
                message: "The Name Already Exists! Choose A Better Name!",
              });
            } else {
              res.setHeader("Content-Type", "application/json");
              res.status(400).send({ message: e.code });
            }
          }
        } else {
          res.setHeader("Content-Type", "application/json");
          res
            .status(400)
            .send({ message: "failed", reason: "parameters" });
        }

      }

      main()
        .catch((e) => {
          throw e;
        })
        .finally(async () => {
          await prisma.$disconnect();
        });
    }
  } catch {
    res.status(429).json({ message: "you can shorten only once a minute" });
  }

}
