const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

// MySQL database connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "PortfolioApp",
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL Database:", err);
    return;
  }
  console.log("Connected to MySQL Database");
});

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service
  auth: {
    user: 'dhiraj2000hatwar@gmail.com', // Your email
    pass: 'exmi jwwd pqhp cuhn' // Your email password or app password
  }
});

// Endpoint to handle form submission
app.post('/api/contact', (req, res) => {
  const { firstname, lastname, email, message } = req.body;

  // SQL insert query
  const query = 'INSERT INTO portfolio (firstname, lastname, email, text) VALUES (?, ?, ?, ?)';
  db.query(query, [firstname, lastname, email, message], (err, results) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: 'Error inserting data' });
    }

    // Set up email data
    const mailOptions = {
      from: 'dhiraj2000hatwar@gmail.com', // sender address
      to: 'dhiraj2000hatwar@gmail.com', // list of receivers
      subject: 'New Contact Form Submission',
      text: `You have received a new message from your contact form:\n\nName: ${firstname} ${lastname}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: 'Error sending email' });
      }
      res.status(201).json({ message: 'Data inserted and email sent successfully', results });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});