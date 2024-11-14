import React from "react";

export default function Error() {
  return (
    <section>
      <div className="min-h-screen flex flex-col justify-center items-center gap-2">
        <i class="fas fa-cloud-exclamation text-red-500 text-8xl"></i>

        <h1 className="font-bold">ERROR 404</h1>
        <p>Thi page is unreachable</p>
      </div>
    </section>
  );
}
