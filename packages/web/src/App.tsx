import { Experience, IconList, Intro, LanguageSwitcher, Technologies } from "./components";
import { useContent } from "./i18n";

function App() {
  const { headerTitle, experience, assetPrefix } = useContent();
  return (
    <>
      <div className="break-inside-avoid-page">
        <div className="flex justify-between">
          <div>
            <h1 className="mb-2">{headerTitle}</h1>
            <IconList />
          </div>
          <div className="flex flex-col items-end">
            <LanguageSwitcher className="mb-2 print:hidden" />
            <img
              src={`${assetPrefix}sascha-rose.png`}
              alt="Sascha Rose"
              className="h-48 w-auto object-contain mr-1"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <Intro className="w-full sm:w-3/4" />
          <Technologies className="w-full sm:w-1/4" />
        </div>
      </div>
      <div className="break-inside-avoid-page mt-4">
        <h2>{experience.heading}</h2>
        <Experience />
      </div>
    </>
  );
}

export default App;
