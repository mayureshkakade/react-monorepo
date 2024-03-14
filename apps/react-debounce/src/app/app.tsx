import { useState } from 'react';
import { fetchAnimeSearchResults } from './utils';
import { useDebounce } from './useDebounce';

export function App() {
  const [inputValue, setInputValue] = useState('');
  const result = useDebounce(inputValue, fetchAnimeSearchResults);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <div className="absolute h-full w-full bg-gradient-to-br from-fuchsia-100 to-fuchsia-300">
      <div className="mx-auto flex flex-col items-center">
        <div className="p-5 text-2xl font-bold">
          <h1>Debounce Example</h1>
        </div>
        <div className="mt-5 text-lg font-medium">
          <h2>Search</h2>
        </div>
        <div className="mt-5">
          <input
            onChange={handleOnChange}
            className="h-10 w-96 rounded-3xl border-2 border-fuchsia-300 bg-fuchsia-500 p-5 text-fuchsia-100 drop-shadow-xl placeholder:text-white focus:outline-none focus:ring focus:ring-fuchsia-600"
            type="text"
            placeholder="Which is your favourite anime?"
          />
        </div>
        {inputValue && (
          <div className="mt-5 w-96">
            <ul>
              {result?.map((item, idx) => (
                <li key={idx}>
                  {idx + 1}. {item.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
