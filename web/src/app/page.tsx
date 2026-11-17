type Course = {
  label: string;
  native: string;
  lang: string;
  description: string;
};

const courses: Course[] = [
  {
    label: "English",
    native: "English",
    lang: "en",
    description: "Vocabulary, grammar, reading, listening, speaking, and writing.",
  },
  {
    label: "Japanese",
    native: "日本語",
    lang: "ja",
    description: "Kana, kanji, grammar, and everyday conversation.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-12 px-4 py-16 sm:px-6">
        <header className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-wide text-muted">
            In development
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Zyan Lingua
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            A language-learning app for English and Japanese, with structured
            lessons and spaced repetition. Planned for Android and iOS.
          </p>
        </header>

        <ul className="grid gap-4 sm:grid-cols-2" aria-label="Courses">
          {courses.map((course) => (
            <li
              key={course.label}
              className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-6"
            >
              <span lang={course.lang} className="text-xl font-semibold">
                {course.native}
              </span>
              <span className="text-sm text-muted">{course.description}</span>
            </li>
          ))}
        </ul>

        <p className="text-sm text-muted">
          This website is under construction. Details will be added as the app
          approaches release.
        </p>
      </div>
    </main>
  );
}
