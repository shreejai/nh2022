// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import axios from "axios";

export default function handler(req, res) {
  const res = await axios.get("https://nagpurhomes.com/api4414/get-properties.php")
  // res.status(200).json({ name: 'John Doe' })
  res.status(200).json({res})
}
