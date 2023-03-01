function checkSpam(str) {
  return lowerStr.toLowerCase().includes('viagra') ||
		 lowerStr.toLowerCase().includes('xxx');
}

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );