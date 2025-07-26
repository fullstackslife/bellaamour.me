import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, FileText, AlertTriangle, Scale, Shield, Mail } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
            Last updated: January 26, 2025
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            Please read these terms carefully before using BellaAmour.
          </p>
        </div>

        {/* Important Notice */}
        <Card className="mb-8 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
              <AlertTriangle className="w-5 h-5" />
              Important Notice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-orange-700 dark:text-orange-300">
              By using BellaAmour, you agree to these terms. If you don't agree with any part of these terms,
              you may not use our service. These terms include important information about your rights and obligations.
            </p>
          </CardContent>
        </Card>

        {/* Terms Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">

          <h2>1. Acceptance of Terms</h2>

          <p>These Terms of Service ("Terms") govern your use of BellaAmour ("we," "us," or "our"), a creator subscription platform. By accessing or using our service, you agree to be bound by these Terms and our Privacy Policy.</p>

          <h2>2. Description of Service</h2>

          <p>BellaAmour is a platform that connects content creators with their fans through subscription-based content sharing. Our service allows:</p>
          <ul>
            <li>Creators to upload and monetize their content</li>
            <li>Fans to discover and subscribe to creators</li>
            <li>Direct communication between creators and fans</li>
            <li>Secure payment processing for subscriptions</li>
          </ul>

          <h2>3. Eligibility</h2>

          <h3>Age Requirements</h3>
          <ul>
            <li>You must be at least 18 years old to use BellaAmour</li>
            <li>You must have the legal capacity to enter into contracts</li>
            <li>You must not be prohibited from using our service under applicable law</li>
          </ul>

          <h3>Account Requirements</h3>
          <ul>
            <li>You must provide accurate and complete information</li>
            <li>You are responsible for maintaining account security</li>
            <li>One person may not maintain multiple accounts</li>
            <li>You must verify your identity as required</li>
          </ul>

          <h2>4. User Accounts</h2>

          <h3>Account Creation</h3>
          <ul>
            <li>You must create an account to use most features</li>
            <li>Account information must be accurate and current</li>
            <li>You are responsible for all activity under your account</li>
            <li>You must notify us immediately of any unauthorized use</li>
          </ul>

          <h3>Account Types</h3>
          <ul>
            <li><strong>Creator Accounts:</strong> For content creators monetizing their work</li>
            <li><strong>Fan Accounts:</strong> For users consuming and supporting creator content</li>
          </ul>

          <h2>5. Content Guidelines</h2>

          <h3>Acceptable Content</h3>
          <ul>
            <li>Original content owned or licensed by you</li>
            <li>Educational, artistic, fitness, or entertainment content</li>
            <li>Content that complies with applicable laws</li>
            <li>Respectful and professional communications</li>
          </ul>

          <h3>Prohibited Content</h3>
          <ul>
            <li>Illegal, harmful, or dangerous activities</li>
            <li>Harassment, bullying, or hate speech</li>
            <li>Content that violates intellectual property rights</li>
            <li>Spam, fraud, or deceptive practices</li>
            <li>Content involving minors</li>
            <li>Non-consensual intimate imagery</li>
            <li>Content promoting violence or self-harm</li>
          </ul>

          <h2>6. Creator Responsibilities</h2>

          <h3>Content Creation</h3>
          <ul>
            <li>You retain ownership of your original content</li>
            <li>You grant us a license to host and distribute your content</li>
            <li>You are responsible for content quality and legality</li>
            <li>You must respect intellectual property rights</li>
          </ul>

          <h3>Fan Interactions</h3>
          <ul>
            <li>Maintain professional and respectful communications</li>
            <li>Respond to fan messages in a timely manner</li>
            <li>Honor subscription tier benefits as described</li>
            <li>Protect fan privacy and personal information</li>
          </ul>

          <h2>7. Fan Responsibilities</h2>

          <ul>
            <li>Respect creator intellectual property rights</li>
            <li>Do not share, redistribute, or resell creator content</li>
            <li>Maintain respectful communication with creators</li>
            <li>Report inappropriate content or behavior</li>
            <li>Honor payment obligations for subscriptions</li>
          </ul>

          <h2>8. Payment Terms</h2>

          <h3>Subscription Payments</h3>
          <ul>
            <li>Subscriptions are billed monthly in advance</li>
            <li>Payments are processed securely through Stripe</li>
            <li>You may cancel subscriptions at any time</li>
            <li>Refunds are generally not provided for partial months</li>
          </ul>

          <h3>Creator Payouts</h3>
          <ul>
            <li>Creators receive payouts minus platform fees</li>
            <li>Platform fees vary by creator plan tier</li>
            <li>Payouts are processed according to plan terms</li>
            <li>Tax reporting is the creator's responsibility</li>
          </ul>

          <h3>Platform Fees</h3>
          <ul>
            <li><strong>Starter Plan:</strong> 10% platform fee</li>
            <li><strong>Pro Plan:</strong> 5% platform fee</li>
            <li><strong>Enterprise Plan:</strong> 2% platform fee</li>
          </ul>

          <h2>9. Intellectual Property</h2>

          <h3>Your Content</h3>
          <ul>
            <li>You retain ownership of content you create</li>
            <li>You grant us a license to host, display, and distribute your content</li>
            <li>You are responsible for ensuring you have rights to all content</li>
            <li>We may remove content that violates intellectual property rights</li>
          </ul>

          <h3>Our Platform</h3>
          <ul>
            <li>BellaAmour and our technology are our intellectual property</li>
            <li>You may not copy, modify, or reverse engineer our platform</li>
            <li>Our trademarks and branding are protected</li>
          </ul>

          <h2>10. Privacy and Data Protection</h2>

          <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information. By using our service, you consent to our data practices as described in the Privacy Policy.</p>

          <h2>11. Prohibited Activities</h2>

          <ul>
            <li>Violating any applicable laws or regulations</li>
            <li>Harassing, abusing, or harming other users</li>
            <li>Impersonating others or providing false information</li>
            <li>Attempting to gain unauthorized access to our systems</li>
            <li>Interfering with the proper functioning of our service</li>
            <li>Creating multiple accounts to circumvent restrictions</li>
            <li>Using automated tools to access our service</li>
          </ul>

          <h2>12. Content Moderation</h2>

          <h3>Our Right to Moderate</h3>
          <ul>
            <li>We reserve the right to review and remove content</li>
            <li>We may suspend or terminate accounts for violations</li>
            <li>We use both automated and human moderation</li>
            <li>Content removal decisions are at our discretion</li>
          </ul>

          <h3>Reporting Process</h3>
          <ul>
            <li>Users can report inappropriate content or behavior</li>
            <li>We investigate reports in a timely manner</li>
            <li>We may request additional information from reporters</li>
            <li>We notify users of the outcome when appropriate</li>
          </ul>

          <h2>13. Account Termination</h2>

          <h3>Termination by You</h3>
          <ul>
            <li>You may delete your account at any time</li>
            <li>Downloaded content may be retained according to our data policy</li>
            <li>Active subscriptions will be canceled upon account deletion</li>
          </ul>

          <h3>Termination by Us</h3>
          <ul>
            <li>We may suspend or terminate accounts for Terms violations</li>
            <li>We may terminate accounts for illegal activities</li>
            <li>We provide notice when possible before termination</li>
            <li>Serious violations may result in immediate termination</li>
          </ul>

          <h2>14. Disclaimers and Limitations</h2>

          <h3>Service Availability</h3>
          <ul>
            <li>We strive for high availability but cannot guarantee uninterrupted service</li>
            <li>We may temporarily suspend service for maintenance</li>
            <li>We are not responsible for internet or device issues</li>
          </ul>

          <h3>Content Accuracy</h3>
          <ul>
            <li>We do not verify the accuracy of user-generated content</li>
            <li>Creators are responsible for the accuracy of their content</li>
            <li>We are not responsible for content quality or outcomes</li>
          </ul>

          <h2>15. Limitation of Liability</h2>

          <p>To the maximum extent permitted by law, BellaAmour shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill.</p>

          <h2>16. Indemnification</h2>

          <p>You agree to indemnify and hold harmless BellaAmour from any claims, damages, or expenses arising from your use of our service, your content, or your violation of these Terms.</p>

          <h2>17. Dispute Resolution</h2>

          <h3>Governing Law</h3>
          <p>These Terms are governed by the laws of the State of California, without regard to conflict of law principles.</p>

          <h3>Dispute Process</h3>
          <ul>
            <li>We encourage informal resolution of disputes</li>
            <li>Contact our support team with concerns</li>
            <li>If informal resolution fails, disputes may proceed to arbitration</li>
            <li>Class action lawsuits are waived except where prohibited by law</li>
          </ul>

          <h2>18. Changes to Terms</h2>

          <p>We may update these Terms periodically. We will notify users of material changes by:</p>
          <ul>
            <li>Email notification</li>
            <li>In-app notification</li>
            <li>Prominent notice on our website</li>
          </ul>

          <p>Continued use of our service after changes constitutes acceptance of the new Terms.</p>

          <h2>19. Severability</h2>

          <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>

          <h2>20. Contact Information</h2>

          <p>If you have questions about these Terms:</p>
          <ul>
            <li><strong>Email:</strong> legal@bellaamour.me</li>
            <li><strong>Support:</strong> Available through our contact form</li>
            <li><strong>Address:</strong> 123 Creator Street, Suite 100, San Francisco, CA 94105</li>
          </ul>

        </div>

        {/* Contact Card */}
        <Card className="mt-12 border-zinc-200 dark:border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-500" />
              Questions About These Terms?
            </CardTitle>
            <CardDescription>
              Our legal team is available to help clarify any questions about our Terms of Service
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" asChild>
                <Link href="/contact">Contact Legal Team</Link>
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
