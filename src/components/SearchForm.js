import React, { useState } from "react";

export default function SearchForm({ placeholder, handleChange }) {
  return (
      <section>
        <form>
          <input
            name="search"
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
          />
        </form>
      </section>
  );
}
