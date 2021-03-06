# ref. https://qiita.com/Tak-Iwamoto/items/efce14f67eb572d8742e
module Resizing::Rails::WebpackBundleHelper
  class BundleNotFound < StandardError; end

  def asset_bundle_path(file)
    valid_file?(file)
    return "/assets" + manifest.fetch(file)
  end

  private

  def manifest
    return @manifest ||= JSON.parse(File.read("app/javascript/dist/manifest.json"))
  end

  def valid_file?(entry)
    return true if manifest.key?(entry)
    raise BundleNotFound, "Could not find bundle with name #{entry}"
  end

end
