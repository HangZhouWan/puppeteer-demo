const firefoxpath = 'C:/Program Files/Mozilla Firefox/firefox.exe';

module.exports = {
  launch: {
    browser: 'firefox',
    // executablePath: firefoxpath,
    headless: false,
    protocol: 'webDriverBiDi',
    args: ['--no-remote'],  // Forces a new Firefox process
    // slowMo: 10
  },
};
