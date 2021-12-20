// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import formidable from "formidable";
import fs from "fs";
export const config = {
    api: {
      bodyParser: false
    }
};
const post = async (req, res) => {
    

    const form = new formidable.IncomingForm();

    form.parse(req, async function (err, fields, files) {
        console.log("vào 1");
        console.log(files);

        await saveFile(files.file);
        return res.status(201).send("");
    })
    console.log("stop upload file 1");

};

const saveFile = async (file) => {
    console.log(file.filepath)
    const data = fs.readFileSync(file.filepath);
    fs.writeFileSync(`./public/${file.originalFilename}`, data);
    console.log("savefile_success");
    await fs.unlinkSync(file.filepath);
    return;
};

export default (req, res) => {
    req.method === "POST"
        ? post(req, res)
        : req.method === "PUT"
            ? console.log("PUT")
            : req.method === "DELETE"
                ? console.log("DELETE")
                : req.method === "GET"
                    ? console.log("GET")
                    : res.status(404).send("");
};