import { Github } from "lucide-react";
import { Button } from "./components/ui/button";

export function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <Button variant={"outline"}>
          <Github className="w-4 h-4 mr-2" />
          Github
        </Button>
      </header>
    </div>
  )
}

