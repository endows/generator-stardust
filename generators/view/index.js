var yeoman = require('yeoman-generator')

module.exports = yeoman.generators.NamedBase.extend({
  view: function() {
    var pathArray = this.name.split('/')
    var filename = pathArray.pop()
    var path = 'client/views/'+pathArray.join("/")

    this.mkdir(path)

    this.template('view.jade', 'client/views/'+this.name+'.jade')
    this.template('view.coffee', 'client/views/'+this.name+'.coffee')
  }
})
