$:.push File.expand_path("lib", __dir__)

# Maintain your gem's version:
require "resizing/rails/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |spec|
  spec.name        = "resizing-rails"
  spec.version     = Resizing::Rails::VERSION
  spec.authors     = ["Junichiro Kasuya"]
  spec.email       = ["junichiro.kasuya@gmail.com"]
  spec.homepage    = "https://github.com/jksy/resizing-rails/"
  spec.summary     = "Resizing mountable module for Rails application."
  spec.description = "Resizing mountable module for Rails application."
  spec.license     = "MIT"

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"
  else
    raise "RubyGems 2.0 or newer is required to protect against " \
      "public gem pushes."
  end

  spec.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  spec.add_dependency "rails", "~> 5.2.4", ">= 5.2.4.4"
  spec.add_dependency "resizing", '~> 0.8.0.pre'
  spec.add_dependency "slim-rails"
  spec.add_dependency "kaminari"
  spec.add_dependency 'bootstrap', '~> 5.0.0.beta1'
  spec.add_dependency "sassc"

  spec.add_development_dependency "sqlite3"
  spec.add_development_dependency "github_changelog_generator"
end
