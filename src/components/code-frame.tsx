import React from 'react';
import { toast } from 'sonner';

export default function CodeFrame({
  isInstallationCode,
  code,
}: {
  isInstallationCode: boolean;
  code: string;
}) {
  const [interpreter, setInterpreter] = React.useState<
    'npm install' | 'yarn add' | 'pnpm install'
  >('npm install');
  return (
    <div className="bg-gray-100 p-4 rounded-2xl">
      <div className="h-6 flex justify-between gap-4">
        <div className="flex gap-2 *:rounded-full *:bg-gray-300 *:size-4">
          <div />
          <div />
          <div />
        </div>
        {/* npm | yarn | pnpm buttons */}
        {isInstallationCode && (
          <div className="flex gap-1 *:text-xs *:px-2 *:h-6 *:inline-flex *:items-center *:justify-center *:rounded-full *:transition-colors ">
            <button
              onClick={() => {
                setInterpreter('npm install');
              }}
              className={` ${
                interpreter === 'npm install' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              npm
            </button>
            <button
              onClick={() => {
                setInterpreter('yarn add');
              }}
              className={` ${
                interpreter === 'yarn add' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              yarn
            </button>
            <button
              onClick={() => {
                setInterpreter('pnpm install');
              }}
              className={` ${
                interpreter === 'pnpm install' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              pnpm
            </button>
          </div>
        )}
        {/* Copy to clipboard button */}
        <button
          onClick={() => {
            navigator.clipboard.writeText(
              `${isInstallationCode ? interpreter : ''} ${code}`,
            );
            toast.success('Copied to clipboard');
          }}
          className="bg-gray-200 hover:bg-gray-300 z-10 hover:text-blue-600 transition-colors text-gray-800 size-12 inline-flex justify-center items-center rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-copy"
          >
            <rect
              width="14"
              height="14"
              x="8"
              y="8"
              rx="2"
              ry="2"
            />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        </button>
      </div>
      <div className="flex justify-between mt-2">
        {/* TODO : Improve the <pre> to display colors corresponding to typescript code */}
        <pre className="w-full overflow-y-auto">
          {isInstallationCode && <span className="text-blue-500">{interpreter} </span>}
          {code}
        </pre>
      </div>
    </div>
  );
}
