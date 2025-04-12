export default function Today() {
  const todaysDate = new Date();
  const formattedDate = todaysDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="h-full ">
      <div className="h-full m-20 space-y-6 pl-12">
        <div className="">
          <h1 className="text-5xl ">{formattedDate.toString()}</h1>
        </div>
        <div className="h-full space-y-4">
          <h1 className="text-gray-600 text-3xl ">
            What's on your mind today?
          </h1>
          <div className="h-full">
            <div className="h-3/5">
              <textarea
                rows={5}
                className="border border-gray-300 rounded-sm w-3/5 p-3 resize-none h-full"
              />
            </div>
            <div className="mt-2 flex justify-end w-3/5">
              <button className="border border-gray-200 rounded-md w-20 h-12">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
