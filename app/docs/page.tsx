'use client';

import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { MobileMenuButton } from '../components/docs/MobileMenuButton';
import { DocSection } from '../components/docs/DocSection';

export default function DocsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black">
      <MobileMenuButton 
        isOpen={isSidebarOpen} 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl lg:ml-64">
        <h1 className="text-4xl font-bold mb-12 text-center text-white font-mono mt-16 lg:mt-0">
          GlotifyBOT Documentation
        </h1>
        
        <DocSection id="installation" title="Discord Bot Installation">
          <p className="mb-6 text-white/80">To add GlotifyBOT to your Discord server, follow these steps:</p>
          <p className="text-white/80">Soon</p>
        </DocSection>

        <DocSection id="commands" title="Bot Commands">
          <p className="mb-6 text-white/80">Available slash commands:</p>
          <ul className="grid grid-cols-1 gap-4">
          <p className="mb-6 text-white/80">Dota 2 commands:</p>
            <li className="flex items-center space-x-2 text-white">
              <code className="bg-black px-2 py-1 rounded text-sm border border-white/20 text-white/90">/whois</code>
              <span>To get the player's profile</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <code className="bg-black px-2 py-1 rounded text-sm border border-white/20 text-white/90">/match</code>
              <span>Get detailed information about a specific Dota 2 match</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <code className="bg-black px-2 py-1 rounded text-sm border border-white/20 text-white/90">/recentmatch</code>
              <span>Recent match from a user.</span>
            </li>
            </ul>
            <ul className="grid grid-cols-1 gap-4">
            <p className="mb-6 text-white/80">Other commands:</p>
            <li className="flex items-center space-x-2 text-white">
              <code className="bg-black px-2 py-1 rounded text-sm border border-white/20 text-white/90">/notes</code>
              <span>Access and manage your personal match notes</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <code className="bg-black px-2 py-1 rounded text-sm border border-white/20 text-white/90">/kataharini</code>
              <span>Kataharini quotes</span>
            </li>
          </ul>
        </DocSection>

        <DocSection id="permissions" title="Permissions">
          <ul className="grid grid-cols-1 gap-4">
            <li className="flex items-center space-x-2 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full"></span>
              <span>Create Invite</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full"></span>
              <span>Manage Webhooks</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full"></span>
              <span>View Audit Log</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full"></span>
              <span>View Channels</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full"></span>
              <span>View Server Insights</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full"></span>
              <span>Send Messages</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full"></span>
              <span>Create Public Threads</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full"></span>
              <span>Manage Threads</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full"></span>
              <span>Embed Links</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full"></span>
              <span>Read Message History</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full"></span>
              <span>Use Application Commands</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full"></span>
              <span>Connect</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full"></span>
              <span>Use Activities</span>
            </li>
          </ul>
        </DocSection>

        <DocSection id="troubleshooting" title="Troubleshooting">
          <p className="mb-6 text-white/80">Common issues and solutions:</p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full mt-2"></span>
              <span>Bot not responding to commands? Check if the bot has the correct permissions</span>
            </li>
            <li className="flex items-start space-x-3 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full mt-2"></span>
              <span>Commands not showing up? Wait a few minutes for Discord to sync the commands</span>
            </li>
            <li className="flex items-start space-x-3 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full mt-2"></span>
              <span>Bot disconnecting? Check your internet connection and bot token validity</span>
            </li>
          </ul>
        </DocSection>

        <DocSection id="support" title="Support">
          <p className="mb-6 text-white/80">Need help? Here's how to get support:</p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full"></span>
              <span className="line-through">Join our Discord support server</span>
            </li>
            <li className="flex items-center space-x-3 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full"></span>
              <span className="line-through">Create an issue on GitHub with detailed information</span>
            </li>
            <li className="flex items-center space-x-3 text-white">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full"></span>
              <span className="line-through">Check the FAQ section in our Discord server</span>
            </li>
          </ul>
        </DocSection>
      </main>
    </div>
  );
} 