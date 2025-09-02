//"use client";

import AddModal from "../components/AddModal/AddModal";
import Header from "../components/Header/Header";
import PagesList from "../components/PagesList/PagesList";

import Paper from "../components/Paper/Paper";
import { getPagesInfo } from "../lib/get-page";

export const dynamic = "force-dynamic";

export default function Dashboard() {
  const { count, names } = getPagesInfo();

  return (
    <div>
      <Header />
      <div className="w-full h-0.5 bg-[var(--gray)] mb-20"></div>
      <main className="flex flex-col items-center px-4 md:px-6">
        {count > 0 ? (
          <section className="w-full flex flex-col items-center gap-12">
            <h1 className="text-3xl text-center font-semibold md:text-4xl xl:text-5xl">
              Suas páginas
            </h1>
            <Paper w="100%" maxw="1440px">
              <PagesList names={names} />
            </Paper>
          </section>
        ) : (
          <section className="w-full flex flex-col items-center max-w-[1440px] gap-12">
            <h1 className="text-3xl text-center font-semibold md:text-4xl xl:text-5xl">
              Crie sua primeira página com um click!
            </h1>

            <AddModal />
          </section>
        )}
      </main>
    </div>
  );
}
