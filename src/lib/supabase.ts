import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

// Types for our database
export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          full_name: string | null
          email: string
          role: 'creator' | 'fan'
          avatar_url: string | null
          bio: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          email: string
          role: 'creator' | 'fan'
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          email?: string
          role?: 'creator' | 'fan'
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      creators: {
        Row: {
          id: string
          user_id: string
          category_id: string | null
          display_name: string
          description: string | null
          pricing_tier: 'free' | 'basic' | 'premium' | 'vip'
          monthly_price: number | null
          subscriber_count: number
          rating: number
          verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          category_id?: string | null
          display_name: string
          description?: string | null
          pricing_tier: 'free' | 'basic' | 'premium' | 'vip'
          monthly_price?: number | null
          subscriber_count?: number
          rating?: number
          verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          category_id?: string | null
          display_name?: string
          description?: string | null
          pricing_tier?: 'free' | 'basic' | 'premium' | 'vip'
          monthly_price?: number | null
          subscriber_count?: number
          rating?: number
          verified?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          icon: string | null
          creator_count: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          icon?: string | null
          creator_count?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          icon?: string | null
          creator_count?: number
          created_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          fan_id: string
          creator_id: string
          status: 'active' | 'cancelled' | 'past_due' | 'incomplete'
          tier: 'basic' | 'premium' | 'vip'
          start_date: string
          end_date: string | null
          stripe_subscription_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          fan_id: string
          creator_id: string
          status: 'active' | 'cancelled' | 'past_due' | 'incomplete'
          tier: 'basic' | 'premium' | 'vip'
          start_date: string
          end_date?: string | null
          stripe_subscription_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          fan_id?: string
          creator_id?: string
          status?: 'active' | 'cancelled' | 'past_due' | 'incomplete'
          tier?: 'basic' | 'premium' | 'vip'
          start_date?: string
          end_date?: string | null
          stripe_subscription_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      content: {
        Row: {
          id: string
          creator_id: string
          title: string
          description: string | null
          content_type: 'video' | 'image' | 'audio' | 'text' | 'pdf' | 'live'
          media_url: string | null
          thumbnail_url: string | null
          duration: number | null
          tier_required: 'free' | 'basic' | 'premium' | 'vip'
          view_count: number
          like_count: number
          is_published: boolean
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          creator_id: string
          title: string
          description?: string | null
          content_type: 'video' | 'image' | 'audio' | 'text' | 'pdf' | 'live'
          media_url?: string | null
          thumbnail_url?: string | null
          duration?: number | null
          tier_required: 'free' | 'basic' | 'premium' | 'vip'
          view_count?: number
          like_count?: number
          is_published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          creator_id?: string
          title?: string
          description?: string | null
          content_type?: 'video' | 'image' | 'audio' | 'text' | 'pdf' | 'live'
          media_url?: string | null
          thumbnail_url?: string | null
          duration?: number | null
          tier_required?: 'free' | 'basic' | 'premium' | 'vip'
          view_count?: number
          like_count?: number
          is_published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Client-side Supabase client
export const createBrowserClient = () => createClientComponentClient<Database>()

// Server-side Supabase client
export const createServerClient = () => createServerComponentClient<Database>({ cookies })

// Admin client (for server-side operations)
export const createAdminClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

  return createClient<Database>(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}
