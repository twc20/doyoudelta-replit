import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getUncachableGitHubClient } from "./githubClient";

export async function registerRoutes(app: Express): Promise<Server> {
  // GitHub repository management routes
  app.get("/api/github/repo-info", async (req, res) => {
    try {
      const github = await getUncachableGitHubClient();
      const repoInfo = await github.rest.repos.get({
        owner: "twc20",
        repo: "LindyAI-Doyoudelta"
      });
      
      res.json({
        name: repoInfo.data.name,
        full_name: repoInfo.data.full_name,
        description: repoInfo.data.description,
        url: repoInfo.data.html_url,
        updated_at: repoInfo.data.updated_at
      });
    } catch (error) {
      console.error("Error fetching repository info:", error);
      res.status(500).json({ 
        message: "Failed to fetch repository information",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.get("/api/github/files", async (req, res) => {
    try {
      const github = await getUncachableGitHubClient();
      const contents = await github.rest.repos.getContent({
        owner: "twc20",
        repo: "LindyAI-Doyoudelta",
        path: ""
      });
      
      if (Array.isArray(contents.data)) {
        const files = contents.data.map(item => ({
          name: item.name,
          path: item.path,
          type: item.type,
          size: item.size,
          download_url: item.download_url
        }));
        res.json(files);
      } else {
        res.json([contents.data]);
      }
    } catch (error) {
      console.error("Error fetching files:", error);
      res.status(500).json({ 
        message: "Failed to fetch repository files",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.get("/api/github/file/:path(*)", async (req, res) => {
    try {
      const github = await getUncachableGitHubClient();
      const filePath = req.params.path;
      
      const fileContent = await github.rest.repos.getContent({
        owner: "twc20",
        repo: "LindyAI-Doyoudelta",
        path: filePath
      });
      
      if (!Array.isArray(fileContent.data) && 'content' in fileContent.data && fileContent.data.content) {
        const content = Buffer.from(fileContent.data.content, 'base64').toString('utf-8');
        res.json({
          path: fileContent.data.path,
          content: content,
          sha: fileContent.data.sha,
          size: fileContent.data.size
        });
      } else {
        res.status(404).json({ message: "File not found or is a directory" });
      }
    } catch (error) {
      console.error("Error fetching file:", error);
      res.status(500).json({ 
        message: "Failed to fetch file content",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.put("/api/github/file/:path(*)", async (req, res) => {
    try {
      const github = await getUncachableGitHubClient();
      const filePath = req.params.path;
      const { content, message, sha } = req.body;
      
      if (!content || !message) {
        return res.status(400).json({ message: "Content and commit message are required" });
      }
      
      const result = await github.rest.repos.createOrUpdateFileContents({
        owner: "twc20",
        repo: "LindyAI-Doyoudelta",
        path: filePath,
        message: message,
        content: Buffer.from(content).toString('base64'),
        sha: sha // Required for updates, optional for new files
      });
      
      res.json({
        message: "File updated successfully",
        sha: result.data.content?.sha,
        commit: result.data.commit
      });
    } catch (error) {
      console.error("Error updating file:", error);
      res.status(500).json({ 
        message: "Failed to update file",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.delete("/api/github/file/:path(*)", async (req, res) => {
    try {
      const github = await getUncachableGitHubClient();
      const filePath = req.params.path;
      const { message, sha } = req.body;
      
      if (!message || !sha) {
        return res.status(400).json({ message: "Commit message and file SHA are required" });
      }
      
      const result = await github.rest.repos.deleteFile({
        owner: "twc20",
        repo: "LindyAI-Doyoudelta",
        path: filePath,
        message: message,
        sha: sha
      });
      
      res.json({
        message: "File deleted successfully",
        commit: result.data.commit
      });
    } catch (error) {
      console.error("Error deleting file:", error);
      res.status(500).json({ 
        message: "Failed to delete file",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message, service } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Name, email, and message are required" });
      }
      
      // TODO: Implement email sending service (SendGrid, AWS SES, etc.)
      // For now, just log the contact submission
      console.log("Contact form submission:", {
        name,
        email,
        phone,
        message,
        service,
        timestamp: new Date().toISOString()
      });
      
      res.json({ message: "Contact form submitted successfully" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        message: "Failed to submit contact form",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Service appointment booking
  app.post("/api/appointment", async (req, res) => {
    try {
      const { 
        customerName, 
        email, 
        phone, 
        vehicleInfo, 
        serviceType, 
        preferredDate, 
        preferredTime, 
        location, 
        notes 
      } = req.body;
      
      if (!customerName || !email || !phone || !serviceType || !preferredDate) {
        return res.status(400).json({ 
          message: "Customer name, email, phone, service type, and preferred date are required" 
        });
      }
      
      // TODO: Implement appointment booking system
      console.log("Appointment booking:", {
        customerName,
        email,
        phone,
        vehicleInfo,
        serviceType,
        preferredDate,
        preferredTime,
        location,
        notes,
        timestamp: new Date().toISOString()
      });
      
      res.json({ 
        message: "Appointment request submitted successfully",
        confirmationNumber: `DT-${Date.now()}`
      });
    } catch (error) {
      console.error("Error processing appointment booking:", error);
      res.status(500).json({ 
        message: "Failed to book appointment",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
