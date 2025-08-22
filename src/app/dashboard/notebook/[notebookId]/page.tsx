import { BookOpen } from "lucide-react";

import NoteCard from "@/components/note/note-card";
import { getNotebookById } from "@/server/notebooks";
import { PageWrapper } from "@/components/page-wrapper";
import { CreateNoteButton } from "@/components/note/create-note-button";

type Params = Promise<{
  notebookId: string;
}>;

export default async function NotebookPage({ params }: { params: Params }) {
  const { notebookId } = await params;
  const { notebook } = await getNotebookById(notebookId);

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        {
          label: notebook?.name ?? "Notebook",
          href: `/dashboard/notebook/${notebookId}`,
        },
      ]}
    >
      <div className="flex flex-col justify-between gap-6 mb-8 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
            {notebook?.name ?? "Notebook"}
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-2">
            {notebook?.notes?.length ?? 0} notes
          </p>
        </div>
        <CreateNoteButton notebookId={notebookId} />
      </div>

      {notebook?.notes && notebook.notes.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {notebook.notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-4 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-600 bg-white dark:bg-sidebar">
          <BookOpen className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
            No notes yet
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Create your first note to get started
          </p>
          <CreateNoteButton notebookId={notebookId} />
        </div>
      )}
    </PageWrapper>
  );
}
