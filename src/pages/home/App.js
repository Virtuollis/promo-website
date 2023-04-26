// Global Imports
import logo from './assets/logo.png';

// Import CSS
import './App.css';

// HTML/JSX
function App() {
  return (
    <div className="App">
      
      {/* Landing Page */}
      <section class="hero-image">

        {/* Hero */}
        <div class="box px-7 xl:px-[20rem] py-32 flex flex-row items-center justify-center text-center">
          {/* Text */}
          <div class="flex flex-col my-10 w-1/2 text gap-y-10">
            <div class="flex flex-col gap-y-5">
              <h1 class="text-4xl text-[#533FBA] font-bold">Want a Graphic Design that caught your eyes like this one?</h1>
              <p class="text-sm font-semibold text-[#533FBA]">Every idea need time to flourish, not wither away. Thats why we make your ideas into reality. A  design that grabs attention and leaves a lasting impression? Look no further! Our team of expert graphic designers can create stunning designs that will make your brand stand out from the crowd.</p>
            </div>
            <div class="flex flex-row gap-x-5 items-center justify-center text-center">
              <a href='https://discord.gg/CCH9rQjxcn' id="link" class="py-2 px-5 font-semibold rounded-md bg-[#533FBA]">Learn More</a>
            </div>
          </div>

        </div>

      </section>




    </div>
  );
}

export default App;
