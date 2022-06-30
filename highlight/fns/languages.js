const embedded_languages = [
    {attr:'js', name: 'js', language: 'javascript', identifiers: ['js', 'jsx', 'javascript', 'es6', 'mjs'], source: 'source.js', block_begin: '\/\/ js', block_end: '\/\/ !js' },
    {attr:'html', name: 'basic', language: 'html', identifiers: ['html', 'htm', 'shtml', 'xhtml', 'inc', 'tmpl', 'tpl'], source: 'text.html.basic', block_begin: '<!-- html -->', block_end: '<!-- !html -->' },
    {attr:'css', name: 'css', language: 'css', identifiers: ['css', 'css.erb'], source: 'source.css', block_begin: '/* css */', block_end: '/* !css */' },
    {attr:'sql', name: 'sql', language: 'sql', identifiers: ['sql', 'ddl', 'dml'], source: 'source.sql', block_begin: '-- beginsql', block_end: '-- endsql' },
    {attr:'hql', name: 'hive-sql', language: 'hive-sql', identifiers: ['sql', 'hql', 'hiveql'], source: 'source.hive-sql', block_begin: '-- hive', block_end: '-- !hive' },
    {attr:'yaml', name: 'yaml', language: 'yaml', identifiers: ['yaml'], source: 'source.yaml', block_begin: '--- #yaml', block_end: '#!yaml' }
]

exports.embedded_languages = embedded_languages;
