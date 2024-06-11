/**
 * 如果 url 里存在 theme:dark | light 参数，则将其替换为当前主题，否则添加当前主题参数
 * @param url
 * @param darkMode
 */
export const adjustURL = (url: string, darkMode: boolean) => {
  const theme = darkMode ? 'dark' : 'light';
  const urlObj = new URL(url);
  const searchParams = urlObj.searchParams;
  searchParams.set('theme', theme);
  return urlObj.toString();
};
