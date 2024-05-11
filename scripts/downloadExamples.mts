
import path from 'path';
import fs from 'fs/promises';
import getGithubFiles from './getGithubFiles.mjs';

const examples = {
  basic: ['src/modules/basic/BasicController.ts', 'src/app/basic/BasicExample.tsx'],
  'basic-with-service': [
    'src/modules/basic-with-service/BasicControllerWithService.ts', 
    'src/modules/basic-with-service/BasicService.ts', 
    'src/app/basic-with-service/BasicExampleWithService.tsx'
  ],
  form: [
    'src/modules/form/FormController.ts', 
    'src/app/form/FormExample.tsx', 
    'src/app/hook-form/HookFormExample.tsx',
    'src/zod.ts'
  ],
  stream: [
    'src/modules/stream/StreamController.ts', 
    'src/app/stream/StreamExample.tsx'
  ],
  'stream-response-object': [
    'src/modules/stream-response-object/StreamService.ts', 
    'src/modules/stream-response-object/StreamResponseObjectController.ts', 
    'src/app/stream-response-object/StreamExample.tsx',
  ],
  openai: [
    'src/modules/openai/OpenAiController.ts', 
    'src/app/openai/OpenAiExample.tsx'
  ],
  worker: [
    'src/modules/worker/HelloWorker.ts', 
    'src/app/worker/WorkerExample.tsx'
  ],
};

async function createFileWithDirectories(filePath: string, content: string) {
  try {
      const dirPath = path.dirname(filePath);

      try {
          await fs.access(dirPath);
      } catch (error) {
          await fs.mkdir(dirPath, { recursive: true });
      }

      await fs.writeFile(filePath, content, 'utf8');
  } catch (error) {
      console.error('Error writing file:', error);
  }
}

async function main() {
  const __dirname = import.meta.dirname;

  for (const [name, paths] of Object.entries(examples)) {
    const downloadedFiles = await getGithubFiles(paths);
    console.log(name, downloadedFiles);

    for(const { path: filePath, content } of downloadedFiles) {
      const fileName = path.basename(filePath);
      const parsedPath = path.parse(filePath);

      console.log(parsedPath.name);

      const newPath = path.join(__dirname, '../src/downloaded-examples', name, parsedPath.name + '.md');

      // await fs.mkdir(`$`, { recursive: true });

      console.log(newPath)

      await createFileWithDirectories(newPath, "```tsx\n" + content.trim() + "\n```");
    }

    
  }
}

main();
