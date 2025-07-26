import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Eye, Lock, Globe, Mail } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b bg-white dark:bg-zinc-900 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">BellaAmour</span>
          </Link>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" asChild>
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
            Last updated: January 26, 2025
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        {/* Quick Overview */}
        <Card className="mb-8 border-zinc-200 dark:border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-500" />
              Quick Overview
            </CardTitle>
            <CardDescription>
              Here's what you need to know about your privacy on BellaAmour
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Data Encryption</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">All your data is encrypted in transit and at rest</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-medium">GDPR Compliant</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Full compliance with European privacy regulations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-purple-500 mt-1" />
                <div>
                  <h3 className="font-medium">No Data Selling</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">We never sell your personal information to third parties</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <h3 className="font-medium">Full Control</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">You can access, modify, or delete your data anytime</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Policy Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">

          <h2>1. Information We Collect</h2>

          <h3>Information You Provide</h3>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, password, profile photo</li>
            <li><strong>Profile Information:</strong> Bio, social media links, creator categories</li>
            <li><strong>Payment Information:</strong> Billing address, payment methods (processed securely by Stripe)</li>
            <li><strong>Content:</strong> Videos, photos, articles, and other content you upload</li>
            <li><strong>Communications:</strong> Messages, comments, and support requests</li>
          </ul>

          <h3>Information We Collect Automatically</h3>
          <ul>
            <li><strong>Usage Data:</strong> How you interact with our platform, content views, time spent</li>
            <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
            <li><strong>Analytics:</strong> Page views, click patterns, feature usage</li>
            <li><strong>Location Data:</strong> General location based on IP address (not precise location)</li>
          </ul>

          <h2>2. How We Use Your Information</h2>

          <h3>Core Services</h3>
          <ul>
            <li>Provide and maintain our platform</li>
            <li>Process subscriptions and payments</li>
            <li>Enable content creation and sharing</li>
            <li>Facilitate communication between creators and fans</li>
            <li>Provide customer support</li>
          </ul>

          <h3>Improvements and Analytics</h3>
          <ul>
            <li>Analyze platform usage to improve features</li>
            <li>Personalize content recommendations</li>
            <li>Monitor platform performance and security</li>
            <li>Conduct research and development</li>
          </ul>

          <h3>Legal and Safety</h3>
          <ul>
            <li>Comply with legal obligations</li>
            <li>Enforce our Terms of Service</li>
            <li>Prevent fraud and abuse</li>
            <li>Protect user safety and security</li>
          </ul>

          <h2>3. Information Sharing</h2>

          <p>We do not sell your personal information. We may share information in these situations:</p>

          <h3>Service Providers</h3>
          <ul>
            <li><strong>Payment Processing:</strong> Stripe for secure payment processing</li>
            <li><strong>Cloud Storage:</strong> Supabase for data storage and management</li>
            <li><strong>Email Services:</strong> For transactional emails and notifications</li>
            <li><strong>Analytics:</strong> Privacy-focused analytics to improve our service</li>
          </ul>

          <h3>Legal Requirements</h3>
          <ul>
            <li>When required by law or legal process</li>
            <li>To protect rights, property, or safety</li>
            <li>In connection with legal proceedings</li>
            <li>To prevent fraud or illegal activities</li>
          </ul>

          <h3>Business Transfers</h3>
          <p>If BellaAmour is involved in a merger, acquisition, or sale, your information may be transferred as part of that transaction.</p>

          <h2>4. Data Security</h2>

          <h3>Technical Safeguards</h3>
          <ul>
            <li><strong>Encryption:</strong> AES-256 encryption for data at rest, TLS 1.3 for data in transit</li>
            <li><strong>Access Controls:</strong> Role-based access with principle of least privilege</li>
            <li><strong>Authentication:</strong> Multi-factor authentication support</li>
            <li><strong>Monitoring:</strong> 24/7 security monitoring and incident response</li>
          </ul>

          <h3>Organizational Safeguards</h3>
          <ul>
            <li>Regular security training for employees</li>
            <li>Background checks for personnel with data access</li>
            <li>Incident response procedures</li>
            <li>Regular security audits and assessments</li>
          </ul>

          <h2>5. Your Privacy Rights</h2>

          <h3>Access and Control</h3>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Update or correct inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Portability:</strong> Export your data in a structured format</li>
          </ul>

          <h3>Privacy Settings</h3>
          <ul>
            <li>Control who can see your profile and content</li>
            <li>Manage email and notification preferences</li>
            <li>Choose whether to appear in search results</li>
            <li>Control data collection for analytics</li>
          </ul>

          <h3>European Users (GDPR)</h3>
          <p>If you're in the European Union, you have additional rights under GDPR:</p>
          <ul>
            <li>Right to object to data processing</li>
            <li>Right to restrict processing</li>
            <li>Right to lodge a complaint with supervisory authorities</li>
            <li>Right to withdraw consent</li>
          </ul>

          <h2>6. Data Retention</h2>

          <ul>
            <li><strong>Account Data:</strong> Retained while your account is active</li>
            <li><strong>Content:</strong> Stored until you delete it or close your account</li>
            <li><strong>Payment Data:</strong> Retained as required for tax and legal purposes</li>
            <li><strong>Analytics Data:</strong> Anonymized and aggregated for up to 2 years</li>
            <li><strong>Support Communications:</strong> Retained for 3 years</li>
          </ul>

          <h2>7. Cookies and Tracking</h2>

          <h3>Essential Cookies</h3>
          <ul>
            <li>Authentication and session management</li>
            <li>Security and fraud prevention</li>
            <li>Basic functionality and preferences</li>
          </ul>

          <h3>Analytics Cookies</h3>
          <ul>
            <li>Usage statistics and performance monitoring</li>
            <li>Feature usage and improvement insights</li>
            <li>Error tracking and debugging</li>
          </ul>

          <p>You can control cookies through your browser settings.</p>

          <h2>8. International Transfers</h2>

          <p>BellaAmour operates globally. Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place:</p>
          <ul>
            <li>Standard Contractual Clauses for EU transfers</li>
            <li>Adequacy decisions where available</li>
            <li>Other legally approved transfer mechanisms</li>
          </ul>

          <h2>9. Children's Privacy</h2>

          <p>BellaAmour is not intended for users under 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected such information, we will take steps to delete it.</p>

          <h2>10. Changes to This Policy</h2>

          <p>We may update this Privacy Policy periodically. We will notify you of material changes by:</p>
          <ul>
            <li>Email notification</li>
            <li>In-app notification</li>
            <li>Prominent notice on our website</li>
          </ul>

          <h2>11. Contact Us</h2>

          <p>If you have questions about this Privacy Policy or want to exercise your privacy rights:</p>
          <ul>
            <li><strong>Email:</strong> privacy@bellaamour.me</li>
            <li><strong>Privacy Officer:</strong> Available through our contact form</li>
            <li><strong>Address:</strong> 123 Creator Street, Suite 100, San Francisco, CA 94105</li>
          </ul>

        </div>

        {/* Contact Card */}
        <Card className="mt-12 border-zinc-200 dark:border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-500" />
              Questions About Your Privacy?
            </CardTitle>
            <CardDescription>
              Our privacy team is here to help you understand and control your data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" asChild>
                <Link href="/contact">Contact Privacy Team</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/help">Visit Help Center</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
