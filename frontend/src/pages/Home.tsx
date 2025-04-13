export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-0">
      <div className="text-center space-y-6">
        {/* One-line on medium and up */}
        <h1 className="hidden sm:block text-8xl font-serif">Journal It</h1>

        {/* Two-line on small screens */}
        <h1 className="block sm:hidden text-6xl font-serif leading-tight">
          Journal <br /> It
        </h1>

        <div className="font-medium text-2xl">
          <div>Record your thoughts</div>
          <div>and experiences.</div>
        </div>

        <button className="border rounded-md p-1 font-semibold text-xl bg-blue-100 h-12 w-48">
          Get Started
        </button>
      </div>
    </div>
  );
}
