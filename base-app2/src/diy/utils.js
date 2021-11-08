
/**
 * 获取静态资源
 * @param {string} url 静态资源地址
 */
export function fetchSource (url) {
	console.log('fetchSource param', url);
  return fetch(url).then((res) => {
		console.log('fetch', url);
    return res.text()
  })
}
