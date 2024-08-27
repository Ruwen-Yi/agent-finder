'use client';

import { useState } from 'react';

export default function SearchForm() {
  const [state, setState] = useState<string>('');
  return (
    <form action={'/'}>
      <input
        type="search"
        name="search"
        id="search"
        onChange={(e) => setState(e.target.value)}
      />
    </form>
  );
}
