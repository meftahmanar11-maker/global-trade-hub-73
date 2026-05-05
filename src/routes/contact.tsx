import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gulf Joy" },
      { name: "description", content: "Get in touch with Gulf Joy for produce quotes, availability and order inquiries." },
      { property: "og:title", content: "Contact — Gulf Joy" },
      { property: "og:description", content: "Reach our team — quotes within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-secondary font-semibold mb-3">{t.contact.eyebrow}</p>
          <h1 className="text-5xl font-display font-bold text-balance mb-5">{t.contact.title}</h1>
          <p className="text-lg text-primary-foreground/80">{t.contact.lede}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="space-y-8 lg:col-span-1">
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t.contact.hq}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{t.contact.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t.contact.emailLabel}</h3>
                <p className="text-sm text-muted-foreground" dir="ltr"><a href="mailto:golfjoy01@gmail.com" className="hover:text-brand">golfjoy01@gmail.com</a></p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t.contact.phoneLabel}</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:+21670287161" className="hover:text-brand" dir="ltr">+216 70 287 161</a>
                  <br />{t.contact.hours}
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert(t.contact.form.thanks); }}
            className="lg:col-span-2 bg-card border border-border rounded-2xl p-8 space-y-5 shadow-elegant"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">{t.contact.form.name}</Label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">{t.contact.form.company}</Label>
                <Input id="company" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="email">{t.contact.form.email}</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t.contact.form.phone}</Label>
                <Input id="phone" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{t.contact.form.message}</Label>
              <Textarea id="message" required rows={5} placeholder={t.contact.form.messagePlaceholder} />
            </div>
            <Button type="submit" variant="default" size="lg" className="w-full sm:w-auto">
              {t.contact.form.submit}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
