"use client";
import Content from "@/components/content/main";
import Header from "@/components/header";
import Navigator from "@/components/navigator";
import { AppContextWrapper } from "@/context/appContext";

export default function Home() {
  return (
    <AppContextWrapper>
      <main className="desktop:h-screen w-full overflow-x-hidden overflow-y-auto flex flex-col items-center py-12 desktop:py-0 desktop:justify-center">
        <div className="flex w-full desktop:w-[81.94vw] desktop:h-[41.79vw] flex flex-col items-center justify-center desktop:justify-between">
          <Header />
          <Navigator />
          <Content />
        </div>
      </main>
    </AppContextWrapper>
  );
}
