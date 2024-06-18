import React from 'react';

export default function Footer() {
  return (
    <section className="bg-blue-dark flex justify-center text-white py-3">
      <span>
        Copyright &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME}
      </span>
    </section>
  );
}
