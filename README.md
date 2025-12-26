# ⭐ Earn Rewards App --- Authentication & Flow Guide

## System Diagram

``` mermaid
flowchart LR
    A[User Logs In] --> B[/Supabase Auth/]
    B --> C{Session Valid?}
    C -- No --> L[Redirect to Login]
    C -- Yes --> D[/auth/callback/]
    D --> E[Fetch Profile from Supabase]
    E --> F{Profile Exists?}
    F -- No --> G[Create Profile Row]
    G --> H[Onboarded = false]
    F -- Yes --> I{Onboarded?}
    I -- No --> J[Redirect to Onboarding]
    I -- Yes --> K[Redirect to Dashboard]
    K --> M[Access Earn-Rewards Page]
```

------------------------------------------------------------------------

## 🔐 Overview --- How Authentication Works

1.  User signs in using Supabase Auth.
2.  Supabase redirects to `/auth/callback`.
3.  We validate session and fetch profile.
4.  If onboarding is incomplete → redirect to onboarding.
5.  If onboarding is complete → redirect to dashboard.

------------------------------------------------------------------------

## 🗄️ Supabase Profile Table

``` sql
create table profiles (
  id uuid references auth.users not null primary key,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default now(),
  onboarded boolean default false
);
```

------------------------------------------------------------------------

## 🧭 Routing Summary

  Stage             Route
  ----------------- ------------------
  Login Completed   `/auth/callback`
  Not onboarded     `/onboarding`
  Onboarded         `/dashboard`
  Earn Rewards      `/dashboard/earn-rewards`

------------------------------------------------------------------------

## 🧑‍💻 Tech Stack

-   Next.js
-   TypeScript
-   Supabase Auth + DB
-   Tailwind CSS
-   Ant Design
-   React Context for auth state

------------------------------------------------------------------------

## ▶️ Development

``` bash
npm install
npm run dev
```

------------------------------------------------------------------------

## 🎁 Earn Rewards Feature

After authentication, users can: - View reward tasks - Complete
actions - Track progress

------------------------------------------------------------------------

## ✨ Summary

Secure authentication + onboarding ensures every user profile is
complete before accessing the dashboard or rewards.


Assumptions

Users complete onboarding before accessing the dashboard.

Supabase handles email delivery for verification and password reset.

A valid session cookie exists when /auth/callback runs.

Trade-offs

Chose Supabase Auth for speed of implementation instead of a custom auth system.

Stored auth state in React context for simplicity, which may require refresh in rare sync cases.

Redirect logic is handled client-side for UX smoothness, trading a bit of initial complexity.