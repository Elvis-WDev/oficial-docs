const iconKeys = [
    { name: 'android', iconName: 'android' },
    { name: 'angularsimple', iconName: 'angularsimple' },
    { name: 'appcelerator', iconName: 'appcelerator' },
    { name: 'apple', iconName: 'apple' },
    { name: 'appstore', iconName: 'appstore' },
    { name: 'aptana', iconName: 'aptana' },
    { name: 'asterisk', iconName: 'asterisk' },
    { name: 'atlassian', iconName: 'atlassian' },
    { name: 'atom', iconName: 'atom' },
    { name: 'aws', iconName: 'aws' },
    { name: 'backbone', iconName: 'backbone' },
    { name: 'bingsmall', iconName: 'bingsmall' },
    { name: 'bintray', iconName: 'bintray' },
    { name: 'bitbucket', iconName: 'bitbucket' },
    { name: 'blackberry', iconName: 'blackberry' },
    { name: 'bootstrap', iconName: 'bootstrap' },
    { name: 'bower', iconName: 'bower' },
    { name: 'brackets', iconName: 'brackets' },
    { name: 'bugsense', iconName: 'bugsense' },
    { name: 'celluloid', iconName: 'celluloid' },
    { name: 'chrome', iconName: 'chrome' },
    { name: 'cisco', iconName: 'cisco' },
    { name: 'clojurealt', iconName: 'clojurealt' },
    { name: 'clojure', iconName: 'clojure' },
    { name: 'cloud9', iconName: 'cloud9' },
    { name: 'coda', iconName: 'coda' },
    { name: 'codebadge', iconName: 'codebadge' },
    { name: 'code', iconName: 'code' },
    { name: 'codeigniter', iconName: 'codeigniter' },
    { name: 'codepen', iconName: 'codepen' },
    { name: 'codrops', iconName: 'codrops' },
    { name: 'coffeescript', iconName: 'coffeescript' },
    { name: 'compass', iconName: 'compass' },
    { name: 'composer', iconName: 'composer' },
    { name: 'creativecommonsbadge', iconName: 'creativecommonsbadge' },
    { name: 'creativecommons', iconName: 'creativecommons' },
    { name: 'csstricks', iconName: 'csstricks' },
    { name: 'css3full', iconName: 'css3full' },
    { name: 'css3', iconName: 'css3' },
    { name: 'cssdeck', iconName: 'cssdeck' },
    { name: 'dart', iconName: 'dart' },
    { name: 'database', iconName: 'database' },
    { name: 'debian', iconName: 'debian' },
    { name: 'digitalocean', iconName: 'digitalocean' },
    { name: 'django', iconName: 'django' },
    { name: 'dlang', iconName: 'dlang' },
    { name: 'docker', iconName: 'docker' },
    { name: 'doctrine', iconName: 'doctrine' },
    { name: 'dojo', iconName: 'dojo' },
    { name: 'dotnet', iconName: 'dotnet' },
    { name: 'dreamweaver', iconName: 'dreamweaver' },
    { name: 'dropbox', iconName: 'dropbox' },
    { name: 'drupal', iconName: 'drupal' },
    { name: 'eclipse', iconName: 'eclipse' },
    { name: 'ember', iconName: 'ember' },
    { name: 'envato', iconName: 'envato' },
    { name: 'erlang', iconName: 'erlang' },
    { name: 'extjs', iconName: 'extjs' },
    { name: 'firebase', iconName: 'firebase' },
    { name: 'firefox', iconName: 'firefox' },
    { name: 'fsharp', iconName: 'fsharp' },
    { name: 'ghostsmall', iconName: 'ghostsmall' },
    { name: 'ghost', iconName: 'ghost' },
    { name: 'gitbranch', iconName: 'gitbranch' },
    { name: 'gitcommit', iconName: 'gitcommit' },
    { name: 'gitcompare', iconName: 'gitcompare' },
    { name: 'gitmerge', iconName: 'gitmerge' },
    { name: 'gitpullrequest', iconName: 'gitpullrequest' },
    { name: 'git', iconName: 'git' },
    { name: 'githubalt', iconName: 'githubalt' },
    { name: 'githubbadge', iconName: 'githubbadge' },
    { name: 'githubfull', iconName: 'githubfull' },
    { name: 'github', iconName: 'github' },
    { name: 'gnu', iconName: 'gnu' },
    { name: 'go', iconName: 'go' },
    { name: 'googleanalytics', iconName: 'googleanalytics' },
    { name: 'googledrive', iconName: 'googledrive' },
    { name: 'googlecloudplatform', iconName: 'googlecloudplatform' },
    { name: 'grails', iconName: 'grails' },
    { name: 'groovy', iconName: 'groovy' },
    { name: 'grunt', iconName: 'grunt' },
    { name: 'gulp', iconName: 'gulp' },
    { name: 'hackernews', iconName: 'hackernews' },
    { name: 'haskell', iconName: 'haskell' },
    { name: 'heroku', iconName: 'heroku' },
    { name: 'html53deffects', iconName: 'html53deffects' },
    { name: 'html5connectivity', iconName: 'html5connectivity' },
    { name: 'html5deviceaccess', iconName: 'html5deviceaccess' },
    { name: 'html5multimedia', iconName: 'html5multimedia' },
    { name: 'html5', iconName: 'html5' },
    { name: 'ie', iconName: 'ie' },
    { name: 'illustrator', iconName: 'illustrator' },
    { name: 'intellij', iconName: 'intellij' },
    { name: 'ionic', iconName: 'ionic' },
    { name: 'java', iconName: 'java' },
    { name: 'javascript1', iconName: 'javascript1' },
    { name: 'javascript', iconName: 'javascript' },
    { name: 'jekyllsmall', iconName: 'jekyllsmall' },
    { name: 'jenkins', iconName: 'jenkins' },
    { name: 'jira', iconName: 'jira' },
    { name: 'joomla', iconName: 'joomla' },
    { name: 'jquerylogo', iconName: 'jquerylogo' },
    { name: 'jqueryuilogo', iconName: 'jqueryuilogo' },
    { name: 'jsbadge', iconName: 'jsbadge' },
    { name: 'komodo', iconName: 'komodo' },
    { name: 'krakenjsbadge', iconName: 'krakenjsbadge' },
    { name: 'krakenjs', iconName: 'krakenjs' },
    { name: 'laravel', iconName: 'laravel' },
    { name: 'less', iconName: 'less' },
    { name: 'linux', iconName: 'linux' },
    { name: 'magento', iconName: 'magento' },
    { name: 'mailchimp', iconName: 'mailchimp' },
    { name: 'markdown', iconName: 'markdown' },
    { name: 'materializecss', iconName: 'materializecss' },
    { name: 'meteor', iconName: 'meteor' },
    { name: 'meteorfull', iconName: 'meteorfull' },
    { name: 'mitlicence', iconName: 'mitlicence' },
    { name: 'modernizr', iconName: 'modernizr' },
    { name: 'mongodb', iconName: 'mongodb' },
    { name: 'mootoolsbadge', iconName: 'mootoolsbadge' },
    { name: 'mootools', iconName: 'mootools' },
    { name: 'mozilla', iconName: 'mozilla' },
    { name: 'msqlserver', iconName: 'msqlserver' },
    { name: 'mysql', iconName: 'mysql' },
    { name: 'nancy', iconName: 'nancy' },
    { name: 'netbeans', iconName: 'netbeans' },
    { name: 'netmagazine', iconName: 'netmagazine' },
    { name: 'nginx', iconName: 'nginx' },
    { name: 'nodejssmall', iconName: 'nodejssmall' },
    { name: 'nodejs', iconName: 'nodejs' },
    { name: 'npm', iconName: 'npm' },
    { name: 'onedrive', iconName: 'onedrive' },
    { name: 'openshift', iconName: 'openshift' },
    { name: 'opensource', iconName: 'opensource' },
    { name: 'opera', iconName: 'opera' },
    { name: 'perl', iconName: 'perl' },
    { name: 'phonegap', iconName: 'phonegap' },
    { name: 'photoshop', iconName: 'photoshop' },
    { name: 'php', iconName: 'php' },
    { name: 'postgresql', iconName: 'postgresql' },
    { name: 'prolog', iconName: 'prolog' },
    { name: 'python', iconName: 'python' },
    { name: 'rackspace', iconName: 'rackspace' },
    { name: 'raphael', iconName: 'raphael' },
    { name: 'raspberrypi', iconName: 'raspberrypi' },
    { name: 'react', iconName: 'react' },
    { name: 'redhat', iconName: 'redhat' },
    { name: 'redis', iconName: 'redis' },
    { name: 'requirejs', iconName: 'requirejs' },
    { name: 'responsive', iconName: 'responsive' },
    { name: 'ror', iconName: 'ror' },
    { name: 'rubyr', iconName: 'rubyr' },
    { name: 'ruby', iconName: 'ruby' },
    { name: 'rust', iconName: 'rust' },
    { name: 'safari', iconName: 'safari' },
    { name: 'sass', iconName: 'sass' },
    { name: 'scala', iconName: 'scala' },
    { name: 'scriptcs', iconName: 'scriptcs' },
    { name: 'scrum', iconName: 'scrum' },
    { name: 'senchatouch', iconName: 'senchatouch' },
    { name: 'sizzlejs', iconName: 'sizzlejs' },
    { name: 'smashingmagazine', iconName: 'smashingmagazine' },
    { name: 'snapsvg', iconName: 'snapsvg' },
    { name: 'spark', iconName: 'spark' },
    { name: 'sqllite', iconName: 'sqllite' },
    { name: 'stackoverflow', iconName: 'stackoverflow' },
    { name: 'streamline', iconName: 'streamline' },
    { name: 'stylus', iconName: 'stylus' },
    { name: 'sublime', iconName: 'sublime' },
    { name: 'swift', iconName: 'swift' },
    { name: 'symfonybadge', iconName: 'symfonybadge' },
    { name: 'symfony', iconName: 'symfony' },
    { name: 'techcrunch', iconName: 'techcrunch' },
    { name: 'terminalbadge', iconName: 'terminalbadge' },
    { name: 'terminal', iconName: 'terminal' },
    { name: 'travis', iconName: 'travis' },
    { name: 'trello', iconName: 'trello' },
    { name: 'typo3', iconName: 'typo3' },
    { name: 'ubuntu', iconName: 'ubuntu' },
    { name: 'uikit', iconName: 'uikit' },
    { name: 'unitysmall', iconName: 'unitysmall' },
    { name: 'vim', iconName: 'vim' },
    { name: 'visualstudio', iconName: 'visualstudio' },
    { name: 'w3c', iconName: 'w3c' },
    { name: 'webplatform', iconName: 'webplatform' },
    { name: 'windows', iconName: 'windows' },
    { name: 'wordpress', iconName: 'wordpress' },
    { name: 'yahoosmall', iconName: 'yahoosmall' },
    { name: 'yahoo', iconName: 'yahoo' },
    { name: 'yeoman', iconName: 'yeoman' },
    { name: 'yii', iconName: 'yii' },
    { name: 'zend', iconName: 'zend' }
];

export default iconKeys;