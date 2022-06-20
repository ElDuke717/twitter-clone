Latest deployment error:
PrismaClientInitializationError: error: Environment variable not found: DATABASE_URL.
  -->  schema.prisma:10
   | 
 9 |   provider = "postgresql"
10 |   url      = env("DATABASE_URL")
   | 

[15:07:41.257] Cloning github.com/ElDuke717/twitter-clone (Branch: main, Commit: 0759af5)
[15:07:41.838] Cloning completed: 580.368ms
[15:07:42.106] Installing build runtime...
[15:07:44.284] Build runtime installed: 2.179s
[15:07:44.652] Looking up build cache...
[15:07:44.791] Build Cache not found
[15:07:45.065] Installing dependencies...
[15:08:10.083] 
[15:08:10.084] > twitter-clone@0.1.0 postinstall
[15:08:10.084] > prisma generate || true
[15:08:10.084] 
[15:08:11.651] Prisma schema loaded from prisma/schema.prisma
[15:08:13.219] 
[15:08:13.219] ✔ Generated Prisma Client (3.14.0 | library) to ./node_modules/@prisma/client in 131ms
[15:08:13.219] You can now start using Prisma Client in your code. Reference: https://pris.ly/d/client
[15:08:13.219] ```
[15:08:13.220] import { PrismaClient } from '@prisma/client'
[15:08:13.220] const prisma = new PrismaClient()
[15:08:13.220] ```
[15:08:13.306] 
[15:08:13.306] added 295 packages in 28s
[15:08:13.307] 
[15:08:13.307] 81 packages are looking for funding
[15:08:13.308]   run `npm fund` for details
[15:08:13.328] Detected Next.js version: 12.1.6
[15:08:13.334] Running "npm run build"
[15:08:13.707] 
[15:08:13.707] > twitter-clone@0.1.0 build
[15:08:13.707] > next build
[15:08:13.707] 
[15:08:14.489] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[15:08:14.490] This information is used to shape Next.js' roadmap and prioritize features.
[15:08:14.490] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[15:08:14.490] https://nextjs.org/telemetry
[15:08:14.491] 
[15:08:14.543] info  - Checking validity of types...
[15:08:17.085] info  - Creating an optimized production build...
[15:08:33.367] info  - Compiled successfully
[15:08:33.368] info  - Collecting page data...
[15:08:34.194] /vercel/path0/node_modules/@prisma/client/runtime/index.js:41175
[15:08:34.195]             throw new PrismaClientInitializationError(error2.message, this.config.clientVersion, error2.error_code);
[15:08:34.195]                   ^
[15:08:34.195] 
[15:08:34.195] PrismaClientInitializationError: error: Environment variable not found: DATABASE_URL.
[15:08:34.195]   -->  schema.prisma:10
[15:08:34.196]    | 
[15:08:34.197]  9 |   provider = "postgresql"
[15:08:34.197] 10 |   url      = env("DATABASE_URL")
[15:08:34.197]    | 
[15:08:34.197] 
[15:08:34.198] Validation Error Count: 1
[15:08:34.198]     at Object.loadEngine (/vercel/path0/node_modules/@prisma/client/runtime/index.js:41175:19)
[15:08:34.198]     at async Object.instantiateLibrary (/vercel/path0/node_modules/@prisma/client/runtime/index.js:41104:5) {
[15:08:34.198]   clientVersion: '3.14.0',
[15:08:34.199]   errorCode: 'P1012'
[15:08:34.199] }
[15:08:34.224] /vercel/path0/node_modules/@prisma/client/runtime/index.js:41175
[15:08:34.225]             throw new PrismaClientInitializationError(error2.message, this.config.clientVersion, error2.error_code);
[15:08:34.225]                   ^
[15:08:34.225] 
[15:08:34.226] PrismaClientInitializationError: error: Environment variable not found: DATABASE_URL.
[15:08:34.226]   -->  schema.prisma:10
[15:08:34.226]    | 
[15:08:34.226]  9 |   provider = "postgresql"
[15:08:34.226] 10 |   url      = env("DATABASE_URL")
[15:08:34.227]    | 
[15:08:34.227] 
[15:08:34.227] Validation Error Count: 1
[15:08:34.227]     at Object.loadEngine (/vercel/path0/node_modules/@prisma/client/runtime/index.js:41175:19)
[15:08:34.228]     at async Object.instantiateLibrary (/vercel/path0/node_modules/@prisma/client/runtime/index.js:41104:5) {
[15:08:34.228]   clientVersion: '3.14.0',
[15:08:34.228]   errorCode: 'P1012'
[15:08:34.228] }
[15:08:34.279] /vercel/path0/node_modules/@prisma/client/runtime/index.js:41175
[15:08:34.279]             throw new PrismaClientInitializationError(error2.message, this.config.clientVersion, error2.error_code);
[15:08:34.279]                   ^
[15:08:34.280] 
[15:08:34.281] PrismaClientInitializationError: error: Environment variable not found: DATABASE_URL.
[15:08:34.281]   -->  schema.prisma:10
[15:08:34.281]    | 
[15:08:34.282]  9 |   provider = "postgresql"
[15:08:34.282] 10 |   url      = env("DATABASE_URL")
[15:08:34.282]    | 
[15:08:34.282] 
[15:08:34.283] Validation Error Count: 1
[15:08:34.283]     at Object.loadEngine (/vercel/path0/node_modules/@prisma/client/runtime/index.js:41175:19)
[15:08:34.288]     at async Object.instantiateLibrary (/vercel/path0/node_modules/@prisma/client/runtime/index.js:41104:5) {
[15:08:34.288]   clientVersion: '3.14.0',
[15:08:34.288]   errorCode: 'P1012'
[15:08:34.289] }
[15:08:34.807] /vercel/path0/node_modules/@prisma/client/runtime/index.js:41175
[15:08:34.807]             throw new PrismaClientInitializationError(error2.message, this.config.clientVersion, error2.error_code);
[15:08:34.807]                   ^
[15:08:34.807] 
[15:08:34.808] PrismaClientInitializationError: error: Environment variable not found: DATABASE_URL.
[15:08:34.808]    | 
[15:08:34.808]  9 |   provider = "postgresql"
[15:08:34.808] 10 |   url      = env("DATABASE_URL")
[15:08:34.808]    | 
[15:08:34.808] 
[15:08:34.808] Validation Error Count: 1
[15:08:34.809]     at Object.loadEngine (/vercel/path0/node_modules/@prisma/client/runtime/index.js:41175:19)
[15:08:34.809]     at async Object.instantiateLibrary (/vercel/path0/node_modules/@prisma/client/runtime/index.js:41104:5) {
[15:08:34.809]   clientVersion: '3.14.0',
[15:08:34.809]   errorCode: 'P1012'
[15:08:34.809] }
[15:08:35.382] /vercel/path0/node_modules/@prisma/client/runtime/index.js:41175
[15:08:35.383]             throw new PrismaClientInitializationError(error2.message, this.config.clientVersion, error2.error_code);
[15:08:35.383]                   ^
[15:08:35.383] 
[15:08:35.383] PrismaClientInitializationError: error: Environment variable not found: DATABASE_URL.
[15:08:35.383]   -->  schema.prisma:10
[15:08:35.383]    | 
[15:08:35.383]  9 |   provider = "postgresql"
[15:08:35.383] 10 |   url      = env("DATABASE_URL")
[15:08:35.384]    | 
[15:08:35.384] 
[15:08:35.384] Validation Error Count: 1
[15:08:35.384]     at Object.loadEngine (/vercel/path0/node_modules/@prisma/client/runtime/index.js:41175:19)
[15:08:35.384]     at async Object.instantiateLibrary (/vercel/path0/node_modules/@prisma/client/runtime/index.js:41104:5) {
[15:08:35.384]   errorCode: 'P1012'
[15:08:35.384] }
[15:08:35.947] /vercel/path0/node_modules/@prisma/client/runtime/index.js:41175
[15:08:35.947]             throw new PrismaClientInitializationError(error2.message, this.config.clientVersion, error2.error_code);
[15:08:35.948]                   ^
[15:08:35.948] 
[15:08:35.948] PrismaClientInitializationError: error: Environment variable not found: DATABASE_URL.
[15:08:35.948]   -->  schema.prisma:10
[15:08:35.948]    | 
[15:08:35.948]  9 |   provider = "postgresql"
[15:08:35.949] 10 |   url      = env("DATABASE_URL")
[15:08:35.949]    | 
[15:08:35.949] 
[15:08:35.949] Validation Error Count: 1
[15:08:35.949]     at Object.loadEngine (/vercel/path0/node_modules/@prisma/client/runtime/index.js:41175:19)
[15:08:35.949]     at async Object.instantiateLibrary (/vercel/path0/node_modules/@prisma/client/runtime/index.js:41104:5) {
[15:08:35.949]   clientVersion: '3.14.0',
[15:08:35.949]   errorCode: 'P1012'
[15:08:35.950] }
[15:08:35.971] 
[15:08:35.971] > Build error occurred
[15:08:35.975] Error: Call retries were exceeded
[15:08:35.975]     at ChildProcessWorker.initialize (/vercel/path0/node_modules/next/dist/compiled/jest-worker/index.js:1:12037)
[15:08:35.976]     at ChildProcessWorker._onExit (/vercel/path0/node_modules/next/dist/compiled/jest-worker/index.js:1:12975)
[15:08:35.976]     at ChildProcess.emit (node:events:520:28)
[15:08:35.976]     at ChildProcess.emit (node:domain:475:12)
[15:08:35.976]     at Process.ChildProcess._handle.onexit (node:internal/child_process:291:12) {
[15:08:35.976]   type: 'WorkerError'
[15:08:35.976] }
[15:08:36.009] Error: Command "npm run build" exited with 1