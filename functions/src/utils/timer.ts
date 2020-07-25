// TODO: root/src/util のリンボリックリンクにする
export const sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(() => resolve(), msec));
