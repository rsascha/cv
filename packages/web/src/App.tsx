import { Experience, IconList, Intro, Technologies } from "./components";

function App() {
  return (
    <>
      <div className="break-inside-avoid-page">
        <div className="flex justify-between">
          <div>
            <h1 className="mb-2">Sascha Rose - Software Engineer</h1>
            <IconList />
          </div>
          <img src="sascha-rose.png" alt="Sascha Rose" className="h-48 w-auto object-contain mr-1" />
        </div>
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <Intro className="w-full sm:w-3/4" />
          <Technologies className="w-full sm:w-1/4" />
        </div>
      </div>
      <div className="break-inside-avoid-page mt-4">
        <h2>Where I Gained Experience</h2>
        <Experience />
      </div>
    </>
  );
}

export default App;
