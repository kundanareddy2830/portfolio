import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

// Email configuration using environment variables
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store contact in database
      const contact = await storage.createContact(validatedData);
      
      // Send email notification
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        try {
          const transporter = createTransporter();
          
          const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
            subject: `Portfolio Contact: ${validatedData.subject}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
              <p><strong>Message:</strong></p>
              <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
            `,
            replyTo: validatedData.email,
          };
          
          await transporter.sendMail(mailOptions);
        } catch (emailError) {
          console.error('Email sending failed:', emailError);
          // Continue even if email fails - we still want to store the contact
        }
      }
      
      res.json({ 
        success: true, 
        message: "Thank you! Your message has been sent successfully.",
        contactId: contact.id 
      });
      
    } catch (error) {
      console.error('Contact form error:', error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data.",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Sorry, there was an error sending your message. Please try again." 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      res.status(500).json({ message: "Error fetching contacts" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
