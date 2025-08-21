import { BookOpen } from "lucide-react";

import { getNotebooks } from "@/server/notebooks";
import { PageWrapper } from "@/components/page-wrapper";
import NotebookCard from "@/components/notebook/notebook-card";
import { CreateNotebookButton } from "@/components/notebook/create-notebook-button";

export default async function Page() {
  const notebooks = await getNotebooks();

  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <div className="flex flex-col justify-between gap-6 mb-8 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
            My Notebooks
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-2">
            Organize your thoughts and ideas in one place
          </p>
        </div>
        <CreateNotebookButton />
      </div>

      {notebooks.success && notebooks.notebooks!.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {notebooks.notebooks?.map((notebook) => (
            <NotebookCard key={notebook.id} notebook={notebook} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-4 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-600 bg-white dark:bg-sidebar">
          <BookOpen className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
            No notebooks yet
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Create your first notebook to get started
          </p>
          <CreateNotebookButton />
        </div>
      )}
    </PageWrapper>
  );
}
