import { exec } from "child_process";

interface IExecCommand {
  stdout: string;
  stderr: string;
}

export const execCommand = (command: string): Promise<IExecCommand> => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) reject(error);

      resolve({
        stdout,
        stderr,
      });
    });
  });
};
