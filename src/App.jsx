import "./App.css";
import 'flowbite';
import { Card } from "flowbite-react";

function App() {
  return (
    <>
      <div>
        <div className="max-w-sm" style={{ padding: 10, margin:'0 auto', marginTop:100 }}>
          <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Holaaa
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
