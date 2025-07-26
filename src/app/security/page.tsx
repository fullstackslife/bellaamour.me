import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Shield,
  Lock,
  Eye,
  Server,
  Key,
  AlertTriangle,
  CheckCircle,
  Globe,
  CreditCard,
  UserCheck,
  FileCheck,
  Settings,
  Monitor,
  Smartphone,
  Database,
  Cloud,
  Zap
} from "lucide-react"
import Link from "next/link"

export default function SecurityPage() {
  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using AES-256 encryption",
      icon: Lock,
      details: [
        "256-bit SSL/TLS encryption for all connections",
        "Database encryption at rest",
        "Encrypted file storage",
        "Secure key management"
      ]
    },
    {
      title: "Content Protection",
      description: "Advanced measures to protect creator intellectual property",
      icon: Shield,
      details: [
        "Digital watermarking",
        "Download prevention",
        "Screenshot blocking",
        "Right-click protection",
        "DMCA takedown system"
      ]
    },
    {
      title: "Payment Security",
      description: "PCI DSS compliant payment processing with fraud detection",
      icon: CreditCard,
      details: [
        "PCI DSS Level 1 compliance",
        "Tokenized payment data",
        "Real-time fraud detection",
        "3D Secure authentication",
        "Secure payment gateways"
      ]
    },
    {
      title: "Identity Verification",
      description: "Multi-factor authentication and identity verification",
      icon: UserCheck,
      details: [
        "Two-factor authentication (2FA)",
        "SMS and email verification",
        "Biometric authentication support",
        "Identity document verification",
        "Regular security check-ups"
      ]
    },
    {
      title: "Infrastructure Security",
      description: "Enterprise-grade cloud infrastructure with 24/7 monitoring",
      icon: Server,
      details: [
        "99.9% uptime SLA",
        "DDoS protection",
        "Regular security audits",
        "Automated backups",
        "Disaster recovery"
      ]
    },
    {
      title: "Privacy Controls",
      description: "Comprehensive privacy settings and data protection",
      icon: Eye,
      details: [
        "GDPR compliance",
        "CCPA compliance",
        "Data portability",
        "Right to deletion",
        "Privacy-by-design architecture"
      ]
    }
  ]

  const complianceStandards = [
    {
      title: "GDPR",
      description: "European General Data Protection Regulation compliance",
      icon: Globe,
      badge: "Compliant"
    },
    {
      title: "CCPA",
      description: "California Consumer Privacy Act compliance",
      icon: FileCheck,
      badge: "Compliant"
    },
    {
      title: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      icon: CreditCard,
      badge: "Level 1"
    },
    {
      title: "SOC 2",
      description: "System and Organization Controls Type 2",
      icon: CheckCircle,
      badge: "Type II"
    },
    {
      title: "ISO 27001",
      description: "Information Security Management System",
      icon: Settings,
      badge: "Certified"
    },
    {
      title: "COPPA",
      description: "Children's Online Privacy Protection Act",
      icon: UserCheck,
      badge: "Compliant"
    }
  ]

  const securityMeasures = [
    {
      category: "Account Security",
      measures: [
        "Strong password requirements with complexity rules",
        "Account lockout after failed login attempts",
        "Session timeout and management",
        "Login anomaly detection",
        "Regular security notifications"
      ]
    },
    {
      category: "Data Protection",
      measures: [
        "Encrypted data storage and transmission",
        "Regular data backups with encryption",
        "Secure data deletion procedures",
        "Data minimization principles",
        "Pseudonymization where applicable"
      ]
    },
    {
      category: "Network Security",
      measures: [
        "Web Application Firewall (WAF)",
        "DDoS protection and mitigation",
        "Intrusion detection and prevention",
        "Network segmentation",
        "VPN access for administrators"
      ]
    },
    {
      category: "Monitoring & Response",
      measures: [
        "24/7 security monitoring",
        "Real-time threat detection",
        "Incident response procedures",
        "Security information and event management (SIEM)",
        "Regular penetration testing"
      ]
    }
  ]

  const userSecurity = [
    {
      title: "Enable Two-Factor Authentication",
      description: "Add an extra layer of security to your account",
      icon: Smartphone,
      action: "Enable 2FA"
    },
    {
      title: "Use Strong Passwords",
      description: "Create unique, complex passwords for your account",
      icon: Key,
      action: "Update Password"
    },
    {
      title: "Review Login Activity",
      description: "Monitor and review your account access history",
      icon: Monitor,
      action: "View Activity"
    },
    {
      title: "Keep Software Updated",
      description: "Ensure your browser and devices are up to date",
      icon: Settings,
      action: "Check Updates"
    }
  ]

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

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/discover" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              Discover
            </Link>
            <Link href="/pricing" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              Pricing
            </Link>
            <Link href="/how-it-works" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              How it Works
            </Link>
            <Link href="/features" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              Features
            </Link>
            <Link href="/security" className="text-purple-600 font-medium">
              Security
            </Link>
          </div>

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

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Security & Privacy
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto">
            Your security and privacy are our top priorities. We use enterprise-grade security measures
            to protect your data, content, and financial information.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge className="bg-green-500 text-white">SOC 2 Compliant</Badge>
            <Badge className="bg-blue-500 text-white">GDPR Compliant</Badge>
            <Badge className="bg-purple-500 text-white">99.9% Uptime</Badge>
          </div>
        </div>

        {/* Security Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Security Features
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Comprehensive security measures protecting creators and fans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-zinc-600 dark:text-zinc-400">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              We meet and exceed industry standards for security and privacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceStandards.map((standard, index) => {
              const IconComponent = standard.icon
              return (
                <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <CardTitle className="text-lg">{standard.title}</CardTitle>
                      <Badge className="bg-green-500 text-white">{standard.badge}</Badge>
                    </div>
                    <CardDescription>{standard.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Security Measures */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Security Measures
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Detailed overview of our security implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((category, index) => (
              <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Shield className="w-5 h-5 text-green-500 mr-2" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.measures.map((measure, measureIndex) => (
                      <li key={measureIndex} className="flex items-start text-zinc-600 dark:text-zinc-400">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span className="text-sm">{measure}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* User Security Tips */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Protect Your Account
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Best practices to keep your BellaAmour account secure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userSecurity.map((tip, index) => {
              const IconComponent = tip.icon
              return (
                <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                    <CardDescription className="text-sm">{tip.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button variant="outline" size="sm" className="w-full">
                      {tip.action}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Security Contact */}
        <div className="mb-20">
          <Card className="border-zinc-200 dark:border-zinc-800">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Report Security Issues</CardTitle>
              <CardDescription>
                If you discover a security vulnerability, please report it to us immediately
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6 mb-6">
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  We take security seriously and appreciate responsible disclosure of vulnerabilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-red-500 hover:bg-red-600">
                    Report Vulnerability
                  </Button>
                  <Button variant="outline">
                    Security Contact
                  </Button>
                </div>
              </div>
              <p className="text-sm text-zinc-500">
                Email: security@bellaamour.me | PGP Key Available
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Infrastructure Details */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Infrastructure Security
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Enterprise-grade infrastructure built for security and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardHeader className="text-center">
                <Cloud className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Cloud Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Multi-region deployment</li>
                  <li>• Auto-scaling infrastructure</li>
                  <li>• Load balancing and failover</li>
                  <li>• CDN with edge security</li>
                  <li>• Isolated network environments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardHeader className="text-center">
                <Database className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Encrypted databases</li>
                  <li>• Regular automated backups</li>
                  <li>• Point-in-time recovery</li>
                  <li>• Data anonymization</li>
                  <li>• Secure data disposal</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardHeader className="text-center">
                <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Performance & Uptime</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• 99.9% uptime SLA</li>
                  <li>• Real-time monitoring</li>
                  <li>• Automated incident response</li>
                  <li>• Performance optimization</li>
                  <li>• Global content delivery</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl">
          <Shield className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Your Security is Our Priority
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join BellaAmour with confidence, knowing your data and content are protected by
            enterprise-grade security measures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-zinc-100 px-8 py-4 text-lg" asChild>
              <Link href="/auth/signup">Get Started Securely</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg" asChild>
              <Link href="/contact">Contact Security Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
