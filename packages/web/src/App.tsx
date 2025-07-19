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
          <img src="sascha-rose.png" alt="Sascha Rose" height={200} />
        </div>
        <div className="flex gap-6 mt-4">
          <Technologies className="w-1/3" />
          <Intro className="w-2/3" />
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
