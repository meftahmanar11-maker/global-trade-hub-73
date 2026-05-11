import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LanguageProvider } from "@/i18n/LanguageProvider";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-bold text-brand-deep">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="mt-6 inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-brand/90">
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Gulf Joy — Premium Fresh Produce Importer" },
      { name: "description", content: "Gulf Joy imports premium fresh fruits and vegetables — bananas, onions, cantaloupes, peppers, grapes and watermelons." },
      { property: "og:title", content: "Gulf Joy — Premium Fresh Produce Importer" },
      { property: "og:description", content: "Gulf Joy imports premium fresh fruits and vegetables — bananas, onions, cantaloupes, peppers, grapes and watermelons." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gulf Joy — Premium Fresh Produce Importer" },
      { name: "twitter:description", content: "Gulf Joy imports premium fresh fruits and vegetables — bananas, onions, cantaloupes, peppers, grapes and watermelons." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d4993acf-89c5-4869-87b8-5df504b4fcd9/id-preview-7c7886b4--c18ef83b-302a-411f-a0d6-50ad0af12d7e.lovable.app-1778492581481.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d4993acf-89c5-4869-87b8-5df504b4fcd9/id-preview-7c7886b4--c18ef83b-302a-411f-a0d6-50ad0af12d7e.lovable.app-1778492581481.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-surface text-surface-foreground">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
