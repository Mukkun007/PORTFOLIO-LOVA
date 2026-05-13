import type { AbstractIntlMessages } from "next-intl";
import PageContent from "@/components/PageContent";

export default async function Page() {
  const messages = (
    await import("../../public/locales/en.json")
  ).default as AbstractIntlMessages;

  return <PageContent initialLocale="en" initialMessages={messages} />;
}
