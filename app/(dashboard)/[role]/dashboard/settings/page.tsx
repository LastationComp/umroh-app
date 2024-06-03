import React from "react";
import { getSettings, saveSettings } from "./action";
import SettingPage from "./SettingPage";

export default async function Page() {
  const setting = await getSettings();
  return (
    <section className="flex flex-col gap-3 w-full">
      <SettingPage setting={setting} />
    </section>
  );
}
