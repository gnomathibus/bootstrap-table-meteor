Package.describe({
  name: 'gnomathibus:bootstrap-table-meteor',
  summary: 'bootstrap-table packaged for meteor (http://bootstrap-table.wenzhixin.net.cn/)',
  version: '1.8.1',
  git: 'https://github.com/gnomathibus/bootstrap-table-meteor.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('bootstrap-table/dist/bootstrap-table.js', 'client', {bare: true});
});

