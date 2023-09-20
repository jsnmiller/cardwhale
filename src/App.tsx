import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  return (
    <div className="container bg-muted">
      <div className="p-4 min-h-screen">
        <h1 className="text-3xl font-bold tracking-tight my-4">Card Whale</h1>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input placeholder="Search card" />
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
