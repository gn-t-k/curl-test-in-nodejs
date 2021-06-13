import { exec } from "child_process";

exec("curl https://api.github.com/users/defunkt", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error:\n${error.message}`);
    return;
  }
  console.log(`stdout:\n${stdout}`);
  console.error(`stderr:\n${stderr}`);
});
