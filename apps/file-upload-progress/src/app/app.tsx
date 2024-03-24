import { Progress, Button, Card, CardHeader, cn } from '@react-monorepo/shared';
import React, { useState } from 'react';
import axios from 'axios';

export function App() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const onSelectFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;
    console.log({ files });

    if (files?.length && files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
    } else {
      setFile(null);
    }

    /*
     * Reset the input value to clear the memory of component.
     * This allows re-selecting the same file.
     */
    e.target.value = '';
  };

  const onUploadClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', file as Blob);
    axios
      .post('https://httpbin.org/post', formData, {
        onUploadProgress: (progressEvent) => {
          //* `total` is available only if `lengthComputable` is `true`
          if (progressEvent.total) {
            const currenProgressInPercentage = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100,
            );
            setUploadProgress(currenProgressInPercentage);
          }
        },
      })
      .then(({ data, status }) => {
        console.log({ data, status });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setFile(null);
        setTimeout(() => {
          setIsLoading(false);
          setUploadProgress(0);
        }, 500);
      });
  };

  return (
    <div className="bg-primary-foreground flex h-screen w-full items-center justify-center font-mono">
      <Card className="w-fit px-6 pb-6">
        <CardHeader className="pb-8 text-center text-lg">
          File Upload Progress Demo
        </CardHeader>
        <div className="flex items-center justify-between gap-4 pb-8">
          <input
            type="file"
            id="file-select-btn"
            className="hidden"
            multiple
            accept="image/*"
            onChange={onSelectFile}
          />
          <Button asChild variant={'default'} disabled={true}>
            <label
              htmlFor="file-select-btn"
              className={cn(
                'cursor-pointer',
                isLoading && 'pointer-events-none opacity-50',
              )}
            >
              Select File
            </label>
          </Button>
          <div className="w-48 truncate" title={file ? file.name : ''}>
            {file ? file.name : 'Please select a file'}
          </div>
        </div>
        <div className="w-full pb-8">
          <Button
            className="w-full"
            variant={'outline'}
            onClick={onUploadClick}
            disabled={isLoading}
          >
            Upload
          </Button>
        </div>
        {isLoading && (
          <div className="w-full">{<Progress value={uploadProgress} />}</div>
        )}
      </Card>
    </div>
  );
}

export default App;
