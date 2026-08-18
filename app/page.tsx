export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
          JM TV Mounting
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Temporarily Closed
        </h1>

        <p className="text-lg md:text-xl text-white/70 leading-8">
          JM TV Mounting is temporarily unavailable and is not currently
          accepting new appointments.
        </p>

        <p className="mt-5 text-base md:text-lg text-white/55">
          We appreciate your patience and understanding.
        </p>

        <div className="mt-10 h-px w-24 mx-auto bg-blue-500" />

        <p className="mt-8 text-sm text-white/40">
          Please check back soon.
        </p>
      </div>
    </main>
  );
}
