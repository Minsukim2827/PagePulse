
### Website link

https://pagepulse.netlify.app


# PagePulse

PagePulse is a passion project aimed at creating the next-generation book platform where users can track, share, and discover their favorite books and book lists. It combines modern web technologies with a sleek and user-friendly interface to enhance the experience of book lovers and avid readers.

## Project Overview

The platform provides the following features:

- **Book Search:** Integrated with the Google Books API, users can search for books, explore their details, and add them to their personal lists.
- **Playlists & Lists:** Users can create, edit, and manage book playlists to organize their reading journeys.
- **User Profiles:** A personalized space for each user, where they can manage their account and view their playlists.
- **Dark/Light Mode Toggle:** Supports both dark and light themes for a customized user experience.
- **Authentication:** Powered by Clerk, users can sign up, sign in, and manage their account securely.

## Tech Stack

- **Next.js:** For server-side rendering and building the front-end of the application.
- **React & TSX:** React components written in TypeScript for a scalable, maintainable codebase.
- **Clerk Authentication:** To handle user authentication and profile management.
- **Google Books API:** Allows users to search for books and retrieve detailed book data.
- **Supabase:** Manages user data, book lists, and reviews.
- **Framer Motion:** Animates the dropdown menu for smooth transitions and interactions.
- **Lucide Icons:** Provides clean and modern icons to enhance the UI.



## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Minsukim2827/pagepulse.git

2. Install dependencies:

```npm install```

3. Set up environment variables, including:

```
SUPABASE_URL=
SUPABASE_ANON_KEY=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/redirect
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/redirect
NEXT_PUBLIC_API_BASE_URL=
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/redirect
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/redirect

NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY=
```

4.Run the development server:

```
npm run dev
```

### How to Use

Visit the home page to explore the features of the platform.
Sign up or sign in to unlock full access to personalized playlists, book searches, and user profiles.
Create, edit, and manage your book playlists.
Use the dark/light mode toggle for a comfortable reading experience.