

const Signup = () => {
  return (
    <div className="w-full font-serif mt-12">
    <div className="flex flex-col justify-center items-center mb-10">
      <h2 className=" font-semibold text-2xl">New to ImageMart ?</h2>
    </div>
    <form>
      <div className="flex flex-col items-center gap-4">
        <input className="w-[60%] focus:outline-none border border-slate-300 px-5 py-4" type="text" placeholder="Username" />
        <input className="w-[60%] focus:outline-none border border-slate-300 px-5 py-4" type="text" placeholder="email" />
        <input className="w-[60%] focus:outline-none border border-slate-300 px-5 py-4" type="text" placeholder="Password" />
        <input className="w-[60%] bg-purple-600 text-white px-5 py-4 rounded-lg" type="submit" />
      </div>
    </form>
  </div>
  )
}

export default Signup