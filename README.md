# BellaAmour - Creator Subscription Platform

BellaAmour is a modern creator subscription platform built with Next.js, Supabase, and Stripe. It enables creators to monetize their content through subscription-based fan support, similar to platforms like OnlyFans but focused on legitimate creator content.

## 🚀 Features

### For Creators
- **Professional Dashboard** - Content management, analytics, subscriber overview
- **Multiple Revenue Streams** - Subscription tiers, pay-per-view, tips
- **Content Management** - Upload videos, images, articles, live streaming
- **Fan Engagement** - Direct messaging, community features
- **Analytics** - Detailed insights into subscribers and content performance

### For Fans
- **Content Discovery** - Browse creators by category with search and filters
- **Subscription Management** - Flexible subscription options with easy cancellation
- **Content Access** - Unlimited streaming, offline downloads, favorites
- **Creator Interaction** - Direct messaging, live chat, exclusive events

### Platform Features
- **Secure Payments** - Stripe integration with PCI compliance
- **Content Protection** - Digital watermarking, download prevention
- **Authentication** - Supabase Auth with 2FA support
- **Responsive Design** - Works perfectly on all devices
- **Real-time Features** - Live streaming, messaging, notifications

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Payments**: Stripe
- **Deployment**: Vercel/Netlify

## 📋 Prerequisites

- Node.js 18+ or Bun
- Supabase account
- Stripe account
- Git

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/fullstackslife/bellaamour.me.git
cd bellaamour.me
```

2. **Install dependencies**
```bash
bun install
# or
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Fill in your environment variables:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🗄️ Database Setup

### 1. Create Supabase Project

1. Go to [Supabase](https://supabase.com) and create a new project
2. Get your project URL and anon key from Settings > API
3. Get your service role key (keep this secret!)

### 2. Run Database Schema

1. Open the Supabase SQL Editor
2. Copy and paste the contents of `supabase/schema.sql`
3. Run the SQL to create all tables, policies, and sample data

### 3. Configure Row Level Security

The schema includes comprehensive RLS policies that:
- Allow users to read their own data
- Enable creators to manage their content
- Protect subscriber information
- Ensure content access based on subscription tiers

## 💳 Stripe Setup

### 1. Create Stripe Account

1. Sign up at [Stripe](https://stripe.com)
2. Get your publishable and secret keys from the dashboard
3. Set up webhooks for subscription management

### 2. Create Products and Prices

Create the following products in your Stripe dashboard:

**Creator Plans:**
- Starter: Free
- Pro: $29.00/month
- Enterprise: $99.00/month

**Subscription Tiers (examples):**
- Basic: $4.99/month
- Premium: $14.99/month
- VIP: $29.99/month

### 3. Configure Webhooks

Set up webhooks at: `your-domain.com/api/webhooks/stripe`

Required events:
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_succeeded`
- `invoice.payment_failed`

## 🚀 Development

Start the development server:

```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Creator and fan dashboards
│   ├── discover/          # Creator discovery
│   ├── pricing/           # Pricing information
│   ├── help/              # Help center
│   └── contact/           # Contact page
├── components/
│   └── ui/                # shadcn/ui components
├── lib/
│   ├── supabase.ts        # Supabase client configuration
│   ├── stripe.ts          # Stripe configuration
│   └── utils.ts           # Utility functions
└── supabase/
    └── schema.sql         # Database schema
```

## 🔐 Authentication Flow

1. **Sign Up**: Users choose creator or fan role
2. **Profile Creation**: Automatic profile creation via trigger
3. **Email Verification**: Required for account activation
4. **2FA Setup**: Optional but recommended
5. **Role-based Access**: Different dashboards for creators/fans

## 💰 Payment Flow

1. **Subscription Creation**: User selects creator and tier
2. **Stripe Checkout**: Secure payment processing
3. **Webhook Processing**: Subscription status updates
4. **Access Control**: Content access based on subscription
5. **Billing Management**: Automatic renewals and updates

## 🔒 Security Features

- **Data Encryption**: All data encrypted in transit and at rest
- **Row Level Security**: Database-level access controls
- **Content Protection**: Digital watermarking, download prevention
- **Payment Security**: PCI DSS compliant via Stripe
- **Authentication**: Multi-factor authentication support

## 📱 Responsive Design

The platform is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Progressive Web App (PWA) ready

## 🧪 Testing

```bash
# Run tests
bun test

# Run linting
bun run lint

# Format code
bun run format
```

## 🚢 Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify Deployment

1. Connect repository to Netlify
2. Configure build settings:
   - Build command: `bun run build`
   - Publish directory: `.next`
3. Add environment variables
4. Deploy

## 🔧 Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Yes |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | Yes |
| `STRIPE_SECRET_KEY` | Stripe secret key | Yes |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret | Yes |
| `NEXT_PUBLIC_APP_URL` | Application base URL | Yes |

## 📚 API Routes

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/signout` - User logout

### Subscriptions
- `POST /api/subscriptions/create` - Create subscription
- `GET /api/subscriptions` - Get user subscriptions
- `DELETE /api/subscriptions/[id]` - Cancel subscription

### Payments
- `POST /api/payments/create-checkout` - Create Stripe checkout
- `POST /api/webhooks/stripe` - Handle Stripe webhooks

### Content
- `GET /api/content` - Get content feed
- `POST /api/content` - Create content (creators only)
- `PUT /api/content/[id]` - Update content
- `DELETE /api/content/[id]` - Delete content

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Help Center](https://bellaamour.me/help)
- **Email**: support@bellaamour.me
- **GitHub Issues**: [Report a bug](https://github.com/fullstackslife/bellaamour.me/issues)

## 🗺️ Roadmap

### Phase 1 ✅
- [x] Basic platform setup
- [x] Authentication system
- [x] Creator and fan dashboards
- [x] Payment integration
- [x] Content management

### Phase 2 🚧
- [ ] Real-time messaging
- [ ] Live streaming
- [ ] Mobile apps
- [ ] Advanced analytics
- [ ] API for third-party integrations

### Phase 3 📋
- [ ] AI content recommendations
- [ ] Advanced creator tools
- [ ] Multi-language support
- [ ] Advanced security features
- [ ] Enterprise features

---

Built with ❤️ by the BellaAmour team
